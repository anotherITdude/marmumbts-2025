import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getFileExtension, getErrorMessage } from "@/lib/utils";
import { CampaignEntry } from "@/lib/database.types";
import { createAWSUrl } from "@/lib/s3";
import { randomUUID } from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, mobile, email, emirate, eid, receiptName, lan, contentType } =
      body;

    // Validate required fields
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!mobile) {
      return new NextResponse("Mobile is required", { status: 400 });
    }
    if (!email) {
      return new NextResponse("Email is required", { status: 400 });
    }
    if (!emirate) {
      return new NextResponse("Emirate is required", { status: 400 });
    }
    // if (!eid) {
    //   return new NextResponse("Emirates ID is required", { status: 400 });
    // }
    if (!receiptName) {
      return new NextResponse("Receipt is required", { status: 400 });
    }

    // Generate unique filename for AWS S3 storage
    const stringName = receiptName.toString();
    const extension = getFileExtension(stringName!);
    const Key = `${randomUUID()}.${extension}`;

    console.log("Creating S3 URL for:", { Key, contentType, receiptName });

    const { url, fields } = await createAWSUrl(Key, contentType);

    console.log("S3 URL created:", { url, fields });

    // Construct the full S3 URL for the receipt
    const publicUrl = `${url}${Key}`;

    // Create database entry
    const entryData: Omit<CampaignEntry, "id" | "created_at" | "updated_at"> = {
      name,
      mobile,
      email,
      emirate,
      eid,
      receipt: publicUrl, // Store the S3 URL of the uploaded file
      lan: lan || "en",
      selected: false,
      info: "",
    };

    const { data: entry, error: dbError } = await supabase
      .from("campaign_entries")
      .insert(entryData)
      .select()
      .single();

    if (dbError) {
      console.error("[SUPABASE_DB_ERROR]", dbError);
      return new NextResponse("Error saving entry", { status: 500 });
    }

    // Return success response with S3 upload URL and fields
    return NextResponse.json({
      success: true,
      entryId: entry.id,
      message: "Registration entry created, please upload your receipt",
      url: url,
      fields: fields,
      publicUrl: publicUrl,
    });
  } catch (error) {
    console.error("[ENTRY_POST_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
