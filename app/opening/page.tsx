import Link from "next/link";
import AppShell from "../../components/AppShell";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Opening() {
  return <AppShell><div className="mx-auto max-w-3xl py-8 sm:py-16"><div className="mb-10 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-[#ef7548]"><Sparkles size={15}/> FUTURE EXPERIENCE</div><h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#163b68] sm:text-6xl">これは、あなたが<br/><span className="text-[#ef7548]">「父親になった未来」</span>の物語。</h1><p className="mt-8 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">今のあなたの価値観から、未来の家族との暮らしを覗いてみましょう。正解を探すためではなく、自分ならどうしたいかを考えるための体験です。</p><div className="mt-10 rounded-3xl bg-[#163b68] p-7 text-white shadow-xl sm:p-9"><p className="text-sm font-bold text-orange-200">ABOUT 3 MINUTES</p><p className="mt-2 text-2xl font-black">12問の質問に答えて、10年後へ。</p><p className="mt-3 text-sm leading-7 text-blue-100">回答はプロトタイプ内だけで使われます。</p></div><Link href="/diagnosis" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef7548] px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#df6237] sm:w-auto">診断をはじめる <ArrowRight size={19}/></Link></div></AppShell>;
}
