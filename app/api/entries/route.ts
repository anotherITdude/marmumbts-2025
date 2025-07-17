import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { generateUniqueFileName, getErrorMessage } from "@/lib/utils";
import { CampaignEntry } from "@/lib/database.types";

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
    if (!eid) {
      return new NextResponse("Emirates ID is required", { status: 400 });
    }
    if (!receiptName) {
      return new NextResponse("Receipt is required", { status: 400 });
    }

    // Generate unique filename for Supabase storage
    const uniqueFileName = generateUniqueFileName(receiptName);

    // Create signed URL for file upload to Supabase Storage
    const { data: signedUrlData, error: signedUrlError } =
      await supabase.storage
        .from("receipts")
        .createSignedUploadUrl(uniqueFileName);

    if (signedUrlError) {
      console.error("[SUPABASE_SIGNED_URL_ERROR]", signedUrlError);
      return new NextResponse("Error creating upload URL", { status: 500 });
    }

    // Construct the public URL for the receipt
    const {
      data: { publicUrl },
    } = supabase.storage.from("receipts").getPublicUrl(uniqueFileName);

    // Create database entry
    const entryData: Omit<CampaignEntry, "id" | "created_at" | "updated_at"> = {
      name,
      mobile,
      email,
      emirate,
      eid,
      receipt: publicUrl,
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

    // Return the signed upload URL and token for frontend to upload file
    return NextResponse.json({
      uploadUrl: signedUrlData.signedUrl,
      token: signedUrlData.token,
      entryId: entry.id,
      publicUrl: publicUrl,
    });
  } catch (error) {
    console.error("[ENTRY_POST_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
