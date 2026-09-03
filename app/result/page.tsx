"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppShell from "../../components/AppShell";
import { getScore, getDiagnosisType, type Answer, type DiagnosisType } from "../../data/content";
import { RotateCcw } from "lucide-react";

export default function Result() {
  const [score, setScore] = useState(50);
  const [type, setType] = useState<DiagnosisType | null>(null);

  useEffect(() => {
    try {
      const answers = JSON.parse(localStorage.getItem("mirai-papa-answers") || "[]") as Answer[];
      setScore(getScore(answers));
      setType(getDiagnosisType(answers));
    } catch {
      setType(getDiagnosisType([]));
    }
  }, []);

  if (!type) return null;

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl py-6 sm:py-14">
        <div className="text-center">
          <p className="text-sm font-black tracking-widest text-[#ef7548]">診断結果</p>
          <h1 className="mt-3 text-3xl font-black text-[#163b68] sm:text-4xl">あなたはこんなタイプ</h1>
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#163b68] p-7 text-center text-white shadow-xl sm:p-10">
          <p className="text-sm font-bold text-blue-200">あなたのタイプ</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">「{type.name}」</h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-blue-100">{type.description}</p>
        </div>

        <div className="mt-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className="font-black text-[#163b68]">あなたの傾向</p>
          <ul className="mt-4 space-y-3">
            {type.strengths.map((strength) => (
              <li key={strength} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <span className="h-2 w-2 rounded-full bg-[#ef7548]" />{strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 rounded-3xl bg-[#f4f1eb] p-6 text-center">
          <p className="text-xs font-bold text-slate-500">育児参加スコア</p>
          <p className="mt-1 text-4xl font-black text-[#163b68]">{score}<span className="text-sm"> / 100</span></p>
        </div>

        <Link href="/future" className="mt-6 flex items-center justify-center rounded-2xl bg-[#ef7548] px-6 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#df6237]">
          このタイプの未来を見る
        </Link>
        <Link href="/diagnosis" className="mt-4 block text-center text-sm font-bold text-slate-400">
          <RotateCcw size={14} className="mr-1 inline" />もう一度診断する
        </Link>
      </div>
    </AppShell>
  );
}
