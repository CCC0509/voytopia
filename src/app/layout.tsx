import "./globals.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voytopia - 旅遊計畫共享平台",
  description: "與朋友共同編輯與分享你的旅行計畫",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body
        className={cn("min-h-screen bg-background font-sans", inter.className)}
      >
        {children}
      </body>
    </html>
  );
}
