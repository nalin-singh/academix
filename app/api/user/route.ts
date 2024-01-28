import { dbConnect } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    const database = dbConnect();
    console.log(database);
    return NextResponse.json({ Message: "DB Connection Live" });
};
