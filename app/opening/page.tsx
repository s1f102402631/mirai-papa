import Link from "next/link";
import AppShell from "../../components/AppShell";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Opening() {
  return (
    <AppShell>
      <div className="mx-auto max-w-2xl py-8 sm:py-14">
        <section className="rounded-[2rem] bg-white px-6 py-9 shadow-sm ring-1 ring-slate-100 sm:px-10 sm:py-12">
          <p className="text-sm font-bold text-[#ef7548]">みらいパパ</p>
          <h1 className="mt-4 text-3xl font-black leading-[1.45] tracking-tight text-[#163b68] sm:text-5xl">
            未来の家族のこと、
            <br />
            今から考えてみよう。
          </h1>
          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
            いくつかの質問に答えるだけで、あなたの考え方に合わせた
            <br className="hidden sm:block" />
            家族との未来を見つけるきっかけをつくります。
          </p>

          <Link
            href="/diagnosis"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ef7548] px-6 py-4 font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#df6237]"
          >
            診断をはじめる
            <ArrowRight size={19} />
          </Link>
        </section>

        <section className="mt-5 rounded-2xl bg-[#f4f1eb] px-5 py-5 sm:px-6">
          <p className="text-xs font-black text-[#163b68]">こんなことが分かります</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              "育児についての考え方",
              "家族との過ごし方",
              "これから考えたいこと",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                <CheckCircle2 size={16} className="shrink-0 text-[#ef7548]" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
          所要時間：約3分 ・ 12問
        </p>
      </div>
    </AppShell>
  );
}
