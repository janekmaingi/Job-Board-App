import { S3Client } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as File;
  const s3Client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });
}
