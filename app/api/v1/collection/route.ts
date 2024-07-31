import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  try {
    const { anime_mal_id, user_email } = await request.json();
    const data = { anime_mal_id, user_email };

    console.log("Data diterima:", data); // Log data yang diterima

    const createCollection = await prisma.collecttions.create({ data });

    if (!createCollection) {
      return NextResponse.json({ success: false }, { status: 500 });
    }

    console.log("Data diinsert:", createCollection); // Log data yang diinsert
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Kesalahan di server:", error); // Log kesalahan

    return NextResponse.json(
      { success: false, error: "error cokk" },
      { status: 500 }
    );
  }
}
