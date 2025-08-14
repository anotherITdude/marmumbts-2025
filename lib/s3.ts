import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { S3Client } from "@aws-sdk/client-s3";

//AWS S3 BUCKET
const region = process.env.REGION as string;
const bucketName = process.env.S3_BUCKET_NAME as string;
const accessKeyId = process.env.ACCESS_KEY_ID as string;
const secretAccessKey = process.env.SECRET_ACCESS_KEY as string;

export const createAWSUrl = async (
  Key: string,
  contentType: string | string[] | undefined,
) => {
  try {
    const client = new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    // Ensure contentType is a string and default to image/* if not provided
    const contentTypeString = contentType?.toString() || "image/*";

    console.log("S3 Config:", {
      region,
      bucketName,
      Key,
      contentType: contentTypeString,
    });

    const { url, fields } = await createPresignedPost(client, {
      Bucket: bucketName,
      Key,
      Conditions: [
        ["starts-with", "$Content-Type", "image/"], // Allow any image type
        ["content-length-range", 0, 3000000], // Max 3MB
      ],
      Fields: {
        "Content-Type": contentTypeString,
      },
      Expires: 600,
    });

    console.log("Presigned POST created successfully:", {
      url,
      fieldsKeys: Object.keys(fields),
    });

    return { url, fields };
  } catch (error) {
    console.error("Error creating S3 presigned URL:", error);
    throw error;
  }
};
//AWS S3 BUCKET
