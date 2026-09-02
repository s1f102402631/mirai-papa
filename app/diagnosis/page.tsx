"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppShell from "../../components/AppShell";
import { questions, options, type Answer } from "../../data/content";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Diagnosis() {
 const router=useRouter(); const [index,setIndex]=useState(0); const [answers,setAnswers]=useState<Answer[]>([]); const [selected,setSelected]=useState<Answer|null>(null); const q=questions[index];
 const next=()=>{if(!selected)return; const nextAnswers=[...answers]; nextAnswers[index]=selected; if(index===questions.length-1){localStorage.setItem("mirai-papa-answers",JSON.stringify(nextAnswers)); router.push("/result");}else{setAnswers(nextAnswers);setIndex(index+1);setSelected(null)}};
 const back=()=>{if(index===0){router.push("/opening");return}setIndex(index-1);setSelected(answers[index-1]??null)};
 return <AppShell><div className="mx-auto max-w-2xl py-3 sm:py-12"><div className="mb-7 flex items-center justify-between text-xs font-black text-slate-400"><span>育児参加意識診断</span><span>{index+1} / {questions.length}</span></div><div className="mb-10 h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-[#ef7548] transition-all duration-500" style={{width:`${((index+1)/questions.length)*100}%`}}/></div><div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl sm:p-10"><p className="text-sm font-bold text-[#ef7548]">QUESTION {String(index+1).padStart(2,"0")}</p><h1 className="mt-4 text-2xl font-black leading-relaxed text-[#163b68] sm:text-3xl">{q}</h1><div className="mt-8 grid gap-3">{options.map(o=><button key={o.value} onClick={()=>setSelected(o.value)} className={`rounded-2xl border-2 px-5 py-4 text-left font-bold transition ${selected===o.value?"border-[#ef7548] bg-orange-50 text-[#163b68]":"border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-white"}`}>{o.label}<span className="float-right text-slate-300">{selected===o.value?"✓":"○"}</span></button>)}</div></div><div className="mt-6 flex gap-3"><button onClick={back} className="flex-1 rounded-2xl border-2 border-slate-200 bg-white px-4 py-4 font-bold text-slate-600"><ArrowLeft className="mr-1 inline" size={17}/>戻る</button><button onClick={next} disabled={!selected} className="flex-[2] rounded-2xl bg-[#1769c2] px-4 py-4 font-black text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40">{index===questions.length-1?"結果を見る":"次の質問へ"}<ArrowRight className="ml-1 inline" size={17}/></button></div></div></AppShell>
}
