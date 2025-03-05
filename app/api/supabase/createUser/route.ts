import { NextResponse } from "next/server";
import { supabase } from "@/app/utils/supabase";

export async function POST(req: Request) {
  try {
    const { twitter_handle, wallet_address, invite_codes } = await req.json();

    if (!twitter_handle || !wallet_address) {
      return NextResponse.json(
        { error: "twitter_handle and wallet_address are required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          twitter_handle,
          wallet_address,
          ...(invite_codes && { invite_codes }),
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ user: data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request: " + (error as Error).message },
      { status: 400 },
    );
  }
}
