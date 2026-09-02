import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] px-5 py-10 text-[#25364a]">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md flex-col justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-[#d66a43]">MIRAI PAPA</p>
          <div className="mt-12 border-y border-[#d9d4ca] py-10">
            <p className="text-sm font-bold text-[#6d7783]">父親になる前に、少しだけ。</p>
            <h1 className="mt-4 text-[2.45rem] font-black leading-[1.18] tracking-tight">
              10年後の家族を、<br />今から考える。
            </h1>
            <p className="mt-6 text-[15px] leading-8 text-[#5d6874]">
              いくつかの質問に答えながら、これからの暮らしを想像してみよう。
              正解を決めるための診断ではありません。
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            <Link href="/opening" className="flex min-h-14 items-center justify-center bg-[#25364a] px-6 text-base font-bold text-white transition hover:bg-[#334960]">
              はじめる
            </Link>
            <Link href="/resources" className="flex min-h-14 items-center justify-center border border-[#cfc9bf] bg-white px-6 text-sm font-bold text-[#25364a] transition hover:bg-[#f1eee8]">
              役立つ情報を見る
            </Link>
          </div>
        </div>
        <p className="pt-12 text-xs leading-6 text-[#8a929b]">※このサイトは将来の生活を考えるためのプロトタイプです。</p>
      </div>
    </main>
  );
}
