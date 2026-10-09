import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "সোহাগ ফিজিক্স (Sohag Physics)",
  description: "Physics learning platform for Bangladeshi students",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#10B981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { AuthProvider } from "@/lib/firebase/auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={cn(inter.variable, hindSiliguri.variable, "antialiased")}>
      <body className="min-h-screen bg-[#EAF6F0] text-brand-dark flex flex-col font-bengali">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
