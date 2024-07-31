import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// Middleware untuk melindungi halaman tertentu
export async function middleware(req: any) {
  const { pathname } = req.nextUrl;

  // Cek jika halaman yang diakses adalah /users/dashboard
  if (pathname.startsWith("/users/dashboard")) {
    // Ambil token JWT untuk autentikasi
    const token = await getToken({ req });

    // Jika token tidak ada, redirect ke halaman login
    if (!token) {
      const loginUrl = new URL("/api/auth/signin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Jika tidak terdaftar dalam halaman yang dilindungi, teruskan permintaan
  return NextResponse.next();
}

// Tentukan jalur di mana middleware ini berlaku
export const config = {
  matcher: ["/users/:path*"],
};
