"use client";

import Link from "next/link";
import { Home, Sparkles, Heart, UserRound } from "lucide-react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const nav = [
    ["/opening", "ホーム", Home],
    ["/diagnosis", "診断", Sparkles],
    ["/future", "未来", Heart],
    ["/mypage", "マイページ", UserRound],
  ] as const;
  return <div className="min-h-screen pb-24"><header className="sticky top-0 z-30 border-b border-slate-200/70 bg-[#fffaf7]/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5"><Link href="/opening" className="font-black tracking-tight text-[#163b68]">みらい<span className="text-[#ef7548]">パパ</span></Link><span className="hidden text-xs font-bold text-slate-400 sm:block">未来の家族を、今から考える</span></div></header><main className="mx-auto max-w-5xl px-5 py-8">{children}</main><nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto grid max-w-2xl grid-cols-4">{nav.map(([href,label,Icon])=><Link key={href} href={href} className="flex flex-col items-center gap-1 py-3 text-xs font-bold text-slate-500 hover:text-[#1769c2]"><Icon size={19}/>{label}</Link>)}</div></nav></div>;
}
