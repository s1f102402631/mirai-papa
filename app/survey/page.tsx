"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import AppShell from "../../components/AppShell";

const scaleQuestions = [
  { id: "q3", text: "【診断前】自分が将来（あるいは今）育児をすることについて、関心がある。" },
  { id: "q4", text: "【診断後】自分が将来（あるいは今）育児をすることについて、関心がある。" },
  { id: "q5", text: "【診断前】育児とは具体的にどのようなことをするのか、理解している。" },
  { id: "q6", text: "【診断後】育児とは具体的にどのようなことをするのか、理解している。" },
  { id: "q7", text: "【診断前】育児は「自分にも関係のあること」だと感じている。" },
  { id: "q8", text: "【診断後】育児は「自分にも関係のあること」だと感じている。" },
];

export default function Survey() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const answers = Object.fromEntries(data.entries());
    localStorage.setItem("mirai-papa-survey", JSON.stringify(answers));
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <AppShell>
        <div className="mx-auto max-w-2xl py-10 text-center sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-3xl">📝</div>
          <p className="mt-6 text-xs font-black tracking-[.2em] text-[#ef7548]">THANK YOU</p>
          <h1 className="mt-3 text-3xl font-black text-[#163b68]">アンケートへのご回答<br />ありがとうございました！</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">いただいた回答は、みらいパパの改善や研究の参考にさせていただきます。</p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl py-6 sm:py-12">
        <div className="text-center">
          <p className="text-xs font-black tracking-[.2em] text-[#ef7548]">SURVEY</p>
          <h1 className="mt-3 text-3xl font-black text-[#163b68] sm:text-4xl">📝 アンケート</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500">診断を体験していただき、ありがとうございます。今後の改善のため、アンケートにご協力ください。</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-black text-[#ef7548]">Q1</p>
            <h2 className="mt-3 text-xl font-black leading-relaxed text-[#163b68]">性別を教えてください。</h2>
            <div className="mt-6 grid gap-3">
              {["男性", "女性", "回答しない"].map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 font-bold text-slate-700 transition has-[:checked]:border-[#ef7548] has-[:checked]:bg-orange-50">
                  <input required type="radio" name="q1" value={option} className="h-4 w-4 accent-[#ef7548]" />
                  {option}
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-black text-[#ef7548]">Q2</p>
            <h2 className="mt-3 text-xl font-black leading-relaxed text-[#163b68]">現在のご自身に最も近いものを選択してください。</h2>
            <div className="mt-6 grid gap-3">
              {["パパ・ママ", "これからなる可能性が少しでもある", "その他"].map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-3 rounded-2xl border-2 border-slate-100 bg-slate-50 px-5 py-4 font-bold text-slate-700 transition has-[:checked]:border-[#ef7548] has-[:checked]:bg-orange-50">
                  <input required type="radio" name="q2" value={option} className="h-4 w-4 accent-[#ef7548]" />
                  {option}
                </label>
              ))}
            </div>
          </section>

          {scaleQuestions.map((question, index) => (
            <section key={question.id} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-black text-[#ef7548]">Q{index + 3}</p>
              <h2 className="mt-3 text-xl font-black leading-relaxed text-[#163b68]">{question.text}</h2>
              <div className="mt-7 flex items-center justify-between text-xs font-bold text-slate-400">
                <span>まったくそう思わない</span><span>とてもそう思う</span>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-10">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
                  <label key={value} className="flex cursor-pointer flex-col items-center gap-2">
                    <input required type="radio" name={question.id} value={value} className="h-5 w-5 accent-[#ef7548]" />
                    <span className="text-sm font-black text-slate-500">{value}</span>
                  </label>
                ))}
              </div>
            </section>
          ))}

          <button type="submit" className="w-full rounded-2xl bg-[#ef7548] px-6 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#df6237]">
            送信
          </button>
        </form>
      </div>
    </AppShell>
  );
}
