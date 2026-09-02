"use client";

import Link from "next/link";
import { Home, ClipboardList, Heart, ExternalLink } from "lucide-react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const nav = [
    ["/opening", "ホーム", Home],
    ["/diagnosis", "診断", ClipboardList],
    ["/future", "未来", Heart],
    ["/resources", "情報", ExternalLink],
  ] as const;

  return (
    <div className="min-h-screen bg-[#f7f5f0] pb-20">
      <header className="sticky top-0 z-30 border-b border-[#ddd8cf] bg-[#f7f5f0]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-5">
          <Link href="/opening" className="font-black tracking-tight text-[#25364a]">
            みらい<span className="text-[#d66a43]">パパ</span>
          </Link>
          <Link href="/resources" className="text-xs font-bold text-[#68727d]">役立つ情報</Link>
        </div>
      </header>
      <main className="mx-auto max-w-2xl px-5 py-6">{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#ddd8cf] bg-[#fffdfa]/95 backdrop-blur">
        <div className="mx-auto grid max-w-2xl grid-cols-4">
          {nav.map(([href, label, Icon]) => (
            <Link key={href} href={href} className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-bold text-[#68727d] hover:text-[#25364a]">
              <Icon size={18} strokeWidth={2} />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
