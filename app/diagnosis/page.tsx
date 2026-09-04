"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "../../components/AppShell";
import { questions, questionCategories, questionOptions, type Answer } from "../../data/content";

export default function Diagnosis() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<Answer | null>(null);
  const q = questions[index];
  const choices = questionOptions[index];

  const selectAnswer = (value: Answer) => {
    const nextAnswers = [...answers];
    nextAnswers[index] = value;
    setSelected(value);

    if (index === questions.length - 1) {
      localStorage.setItem("mirai-papa-answers", JSON.stringify(nextAnswers));
      router.push("/result");
      return;
    }

    setAnswers(nextAnswers);
    setIndex(index + 1);
    setSelected(null);
  };

  return (
    <AppShell>
      <div className="mx-auto max-w-2xl py-3 sm:py-12">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black text-[#ef7548]">{questionCategories[index]}</p>
            <p className="mt-1 text-sm font-bold text-slate-500">診断</p>
          </div>
          <span className="text-sm font-black text-slate-400">{index + 1} / {questions.length}</span>
        </div>
        <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-[#ef7548] transition-all duration-500" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>

        <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-black tracking-wide text-slate-400">{String(index + 1).padStart(2, "0")} / 12</p>
          <h1 className="mt-4 text-2xl font-black leading-relaxed text-[#163b68] sm:text-3xl">{q}</h1>
          <div className="mt-8 grid gap-3">
            {choices.map((label, choiceIndex) => {
              const value = (3 - choiceIndex) as Answer;
              return (
                <button
                  key={label}
                  onClick={() => selectAnswer(value)}
                  className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-bold transition ${selected === value ? "border-[#ef7548] bg-orange-50 text-[#163b68]" : "border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white"}`}
                >
                  <span>{label}</span>
                  <span className={`ml-4 shrink-0 text-lg ${selected === value ? "text-[#ef7548]" : "text-slate-300"}`}>{selected === value ? "✓" : "○"}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
