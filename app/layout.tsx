import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "みらいパパ",
  description: "未来の自分と家族を体験し、育児について考えるWebアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
