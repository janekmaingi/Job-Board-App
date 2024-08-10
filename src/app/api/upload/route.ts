import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file");
  return Response.json(file);
}
