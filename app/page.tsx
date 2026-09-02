import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#f7c8b5]/40 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-80 w-80 rounded-full bg-[#dce9f7] blur-3xl" />

        <div className="relative z-10 w-full max-w-md text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#ef7548] text-3xl shadow-lg">
            👨‍👧
          </div>

          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-[#ef7548]">
            MIRAI PAPA
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#163b68] sm:text-5xl">
            みらいパパ
          </h1>

          <div className="my-8 rounded-3xl border border-white/80 bg-white/80 p-7 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-bold leading-relaxed text-[#163b68]">
              あなたの選択が、
              <br />
              未来の家族をつくる。
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              未来の自分と家族の生活を体験して、
              <br />
              育児について考えてみよう。
            </p>
          </div>

          <Link
            href="/opening"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1769c2] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1259a5]"
          >
            はじめる
          </Link>
          <Link
            href="/opening"
            className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-6 py-3.5 font-bold text-[#163b68] transition hover:bg-slate-50"
          >
            ログイン
          </Link>

          <p className="mt-8 text-xs text-slate-400">
            プロトタイプ / みらいパパ
          </p>
        </div>
      </section>
    </main>
  );
}
