import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins =
    process.env.NODE_ENV === "production"
        ? "https://wisdomacademy.com"
        : "http://localhost:3000";

export const middleware = (request: NextRequest) => {
    console.log("Middleware Called : ", request.url);
    return NextResponse.next();
};

export const config = {
    matcher: "/api/:path*",
};
