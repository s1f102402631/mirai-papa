"use client";

import AppShell from "../../components/AppShell";
import { useRef, useState } from "react";
import { ExternalLink, Move } from "lucide-react";

const resources = [
  { title: "Zaim", category: "お金", description: "家計簿・支出管理を知る", href: "https://play.google.com/store/apps/details?id=net.zaim.android" },
  { title: "マネーフォワード ME", category: "お金", description: "家計管理・資産管理を知る", href: "https://moneyforward.com/me" },
  { title: "TimeTree", category: "時間・予定", description: "家族の予定共有を知る", href: "https://timetreeapp.com/intl/ja/newsroom/2024-12-23/what-is-timetree" },
  { title: "MILIZE「ミルイゼ」", category: "お金・将来", description: "お金の将来設計を知る", href: "https://milize.co.jp/news/20230530_5469" },
  { title: "パパninaru", category: "妊娠・育児", description: "パパ向けの妊娠・育児情報を知る", href: "https://play.google.com/store/apps/details?id=jp.co.eversense.papaninaru" },
  { title: "Famm", category: "家族・記録", description: "子どもの写真・家族の記録を知る", href: "https://apps.apple.com/jp/app/famm-%E6%AF%8E%E6%9C%88%E5%B1%8A%E3%81%8F%E5%AD%90%E4%BE%9B%E3%81%AE%E3%83%95%E3%82%A9%E3%83%88%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id872834141" },
  { title: "みてね", category: "家族・記録", description: "家族で子どもの写真を共有する方法を知る", href: "https://play.google.com/store/apps/details?id=us.mitene" },
  { title: "BABY365", category: "家族・記録", description: "子どもの成長記録を知る", href: "https://apps.apple.com/jp/app/%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93%E8%A8%98%E9%8C%B2-%E5%86%99%E7%9C%9F%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0%E4%BD%9C%E6%88%90-baby365-%E3%83%95%E3%82%A9%E3%83%88%E3%83%96%E3%83%83%E3%82%AF/id876394777" },
  { title: "トツキトオカ", category: "妊娠・夫婦", description: "夫婦で妊娠期間を共有する方法を知る", href: "https://apps.apple.com/jp/app/%E3%83%88%E3%83%84%E3%82%AD%E3%83%88%E3%82%AA%E3%82%AB-%E5%A4%AB%E5%A9%A6%E3%81%A7%E5%85%B1%E6%9C%89%E3%81%A7%E3%81%8D%E3%82%8B-%E5%A6%8A%E5%A8%A0%E8%A8%98%E9%8C%84-%E6%97%A5%E8%A8%98-%E3%82%A2%E3%83%97%E3%83%AA/id995864179" },
  { title: "ぴよログ", category: "育児・記録", description: "子どもの生活記録を知る", href: "https://app-liv.jp/4494082/" },
  { title: "ママリ", category: "妊娠・育児", description: "妊娠・子育ての体験や情報を知る", href: "https://promo-app.mamari.jp/" },
  { title: "ルナルナ", category: "妊娠・身体", description: "生理・妊娠などの情報を知る", href: "https://lnln.jp/" },
  { title: "厚生労働省｜共育（トモイク）プロジェクト", category: "制度・仕事", description: "男性の育児参加や仕事との両立を知る", href: "https://tomoiku.mhlw.go.jp" },
  { title: "パパninaru 育休シミュレーター", category: "制度・仕事", description: "育休取得をシミュレーションする", href: "https://192abc.com/460703" },
];

const quadrants = [
  { title: "お金", subtitle: "家計・将来のお金", x: 0, y: 0, items: resources.filter((r) => r.category.includes("お金")) },
  { title: "時間・仕事", subtitle: "予定・育休・働き方", x: 1, y: 0, items: resources.filter((r) => r.category.includes("時間") || r.category.includes("制度")) },
  { title: "妊娠・育児", subtitle: "妊娠・子育ての情報", x: 0, y: 1, items: resources.filter((r) => r.category.includes("妊娠") || r.category.includes("育児")) },
  { title: "家族・記録", subtitle: "共有・思い出・成長記録", x: 1, y: 1, items: resources.filter((r) => r.category.includes("家族") || r.category.includes("記録")) },
];

function ResourceCard({ resource }: { resource: (typeof resources)[number] }) {
  return (
    <a href={resource.href} target="_blank" rel="noreferrer" className="block rounded-2xl border border-[#ded9d0] bg-white p-4 transition hover:-translate-y-0.5 hover:bg-[#fcfaf6]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold tracking-wide text-[#d66a43]">{resource.category}</p>
          <h3 className="mt-1 text-sm font-black text-[#25364a]">{resource.title}</h3>
          <p className="mt-1 text-xs leading-5 text-[#69737e]">{resource.description}</p>
        </div>
        <ExternalLink size={15} className="mt-0.5 shrink-0 text-[#d66a43]" />
      </div>
    </a>
  );
}

export default function Resources() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const start = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });

  const beginDrag = (clientX: number, clientY: number) => {
    start.current = { x: clientX, y: clientY, offsetX: offset.x, offsetY: offset.y };
    setDragging(true);
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!dragging) return;
    setOffset({
      x: start.current.offsetX + clientX - start.current.x,
      y: start.current.offsetY + clientY - start.current.y,
    });
  };

  const endDrag = () => setDragging(false);

  return (
    <AppShell>
      <div className="py-4">
        <p className="text-sm font-bold text-[#d66a43]">INFORMATION</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#25364a]">子育てに役立つ情報</h1>
        <p className="mt-4 text-sm leading-7 text-[#69737e]">気になることから探せるように、関連するサービスや情報をマップにまとめました。まずは中央から、気になる方向へスワイプしてみてください。</p>

        <section className="mt-8 overflow-hidden rounded-3xl border border-[#d9d4ca] bg-[#eeeae2]">
          <div className="flex items-center justify-between border-b border-[#d9d4ca] bg-[#f8f5ef] px-4 py-3">
            <div>
              <p className="text-xs font-black text-[#25364a]">不安・関心マップ</p>
              <p className="mt-0.5 text-[10px] text-[#8a929b]">中央からスワイプ / ドラッグ</p>
            </div>
            <Move size={16} className="text-[#8a929b]" />
          </div>

          <div
            className="relative h-[540px] touch-none select-none overflow-hidden cursor-grab active:cursor-grabbing"
            onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); beginDrag(e.clientX, e.clientY); }}
            onPointerMove={(e) => moveDrag(e.clientX, e.clientY)}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={(e) => { if (e.currentTarget.hasPointerCapture(e.pointerId)) endDrag(); }}
          >
            <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px]" style={{ transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))` }}>
              <div className="absolute left-1/2 top-1/2 h-px w-[760px] -translate-x-1/2 bg-[#cfc9bf]" />
              <div className="absolute left-1/2 top-1/2 h-[760px] w-px -translate-y-1/2 bg-[#cfc9bf]" />
              <p className="absolute left-1/2 top-10 -translate-x-1/2 text-[11px] font-bold text-[#8a929b]">まずは将来のことから</p>
              <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[#8a929b]">日々の暮らしから考える</p>
              <p className="absolute left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-bold text-[#8a929b]">自分の不安</p>
              <p className="absolute right-10 top-1/2 -translate-y-1/2 rotate-90 text-[11px] font-bold text-[#8a929b]">家族のこと</p>

              {quadrants.map((quadrant) => (
                <div key={quadrant.title} className="absolute w-[320px] rounded-3xl border border-[#d9d4ca] bg-[#fffdfa]/95 p-5 shadow-sm" style={{ left: quadrant.x === 0 ? 35 : 495, top: quadrant.y === 0 ? 35 : 495 }}>
                  <h2 className="text-xl font-black text-[#25364a]">{quadrant.title}</h2>
                  <p className="mt-1 text-xs text-[#69737e]">{quadrant.subtitle}</p>
                  <div className="mt-4 space-y-2">
                    {quadrant.items.map((resource) => <ResourceCard key={resource.href} resource={resource} />)}
                  </div>
                </div>
              ))}

              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fffdfa] bg-[#25364a] text-center text-xs font-black leading-5 text-white shadow-lg">
                気になることを
                <br />探してみる
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-black text-[#25364a]">すべての情報</h2>
          <p className="mt-2 text-xs leading-6 text-[#8a929b]">サービスや公的情報を一覧でも確認できます。</p>
          <div className="mt-4 space-y-3">
            {resources.map((resource) => <ResourceCard key={resource.href} resource={resource} />)}
          </div>
          <p className="mt-6 text-[11px] leading-5 text-[#8a929b]">※各サービス・サイトの内容は変更される場合があります。閲覧日：2026年7月7日</p>
        </section>
      </div>
    </AppShell>
  );
}
