import { NextResponse } from "next/server";
import { supabase } from "@/app/utils/supabase";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const twitterHandle = searchParams.get("twitter_handle");
  const walletAddress = searchParams.get("wallet_address");

  if (!twitterHandle || !walletAddress) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 },
    );
  }

  let query = supabase.from("Users").select("*").limit(1);
  query = query.eq("twitter_handle", twitterHandle);
  query = query.eq("wallet_address", walletAddress);

  const { data, error } = await query.single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ user: data }, { status: 200 });
}
