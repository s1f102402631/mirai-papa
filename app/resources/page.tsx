"use client";

import AppShell from "../../components/AppShell";
import { useRef, useState } from "react";
import { Move, Plus, Minus, RotateCcw } from "lucide-react";

type ResourceType = "YouTube" | "X" | "サイト" | "アプリ";
type ResourceAuthority = "行政" | "それ以外";

const resources = [
  { title: "Zaim", category: "お金", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "家計簿・支出管理を知る", href: "https://play.google.com/store/apps/details?id=net.zaim.android" },
  { title: "マネーフォワード ME", category: "お金", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "家計管理・資産管理を知る", href: "https://moneyforward.com/me" },
  { title: "TimeTree", category: "時間・予定", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "家族の予定共有を知る", href: "https://timetreeapp.com/intl/ja/newsroom/2024-12-23/what-is-timetree" },
  { title: "MILIZE「ミルイゼ」", category: "お金・将来", type: "サイト" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "お金の将来設計を知る", href: "https://milize.co.jp/news/20230530_5469" },
  { title: "Famm", category: "家族・記録", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "子どもの写真・家族の記録を知る", href: "https://apps.apple.com/jp/app/famm-%E6%AF%8E%E6%9C%88%E5%B1%8A%E3%81%8F%E5%AD%90%E4%BE%9B%E3%81%AE%E3%83%95%E3%82%A9%E3%83%88%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/id872834141" },
  { title: "みてね", category: "家族・記録", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "家族で子どもの写真を共有する方法を知る", href: "https://play.google.com/store/apps/details?id=us.mitene" },
  { title: "BABY365", category: "家族・記録", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "子どもの成長記録を知る", href: "https://apps.apple.com/jp/app/%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93%E8%A8%98%E9%8C%B2-%E5%86%99%E7%9C%9F%E3%82%A2%E3%83%AB%E3%83%90%E3%83%A0%E4%BD%9C%E6%88%90-baby365-%E3%83%95%E3%82%A9%E3%83%88%E3%83%96%E3%83%83%E3%82%AF/id876394777" },
  { title: "トツキトオカ", category: "妊娠・夫婦", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "夫婦で妊娠期間を共有する方法を知る", href: "https://apps.apple.com/jp/app/%E3%83%88%E3%83%84%E3%82%AD%E3%83%88%E3%82%AA%E3%82%AB-%E5%A4%AB%E5%A9%A6%E3%81%A7%E5%85%B1%E6%9C%89%E3%81%A7%E3%81%8D%E3%82%8B-%E5%A6%8A%E5%A8%A0%E8%A8%98%E9%8C%B2-%E6%97%A5%E8%A8%98-%E3%82%A2%E3%83%97%E3%83%AA/id995864179" },
  { title: "ぴよログ", category: "育児・記録", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "子どもの生活記録を知る", href: "https://app-liv.jp/4494082/" },
  { title: "ママリ", category: "妊娠・育児", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "妊娠・子育ての体験や情報を知る", href: "https://promo-app.mamari.jp/" },
  { title: "ルナルナ", category: "妊娠・身体", type: "サイト" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "生理・妊娠などの情報を知る", href: "https://lnln.jp/" },
  { title: "厚生労働省｜共育（トモイク）プロジェクト", category: "制度・仕事", type: "サイト" as ResourceType, authority: "行政" as ResourceAuthority, description: "男性の育児参加や仕事との両立を知る", href: "https://tomoiku.mhlw.go.jp" },
  { title: "パパninaru 育休シミュレーター", category: "制度・仕事", type: "サイト" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "育休取得をシミュレーションする", href: "https://192abc.com/460703" },
  { title: "こども家庭庁｜公式YouTube", category: "行政・情報", type: "YouTube" as ResourceType, authority: "行政" as ResourceAuthority, description: "こども家庭庁の公式動画を見る", href: "https://www.youtube.com/@KodomoKatei" },
  { title: "こども家庭庁｜公式X", category: "行政・情報", type: "X" as ResourceType, authority: "行政" as ResourceAuthority, description: "こども家庭庁の公式発信を見る", href: "https://x.com/KodomoKatei" },
  { title: "こども家庭庁｜公式note", category: "行政・情報", type: "サイト" as ResourceType, authority: "行政" as ResourceAuthority, description: "こども家庭庁の公式記事を読む", href: "https://kodomo-gov.note.jp/" },
  { title: "こども家庭庁｜公式サイト", category: "行政・情報", type: "サイト" as ResourceType, authority: "行政" as ResourceAuthority, description: "こども家庭庁の制度・情報を見る", href: "https://www.cfa.go.jp/" },
  { title: "母子健康手帳情報支援サイト", category: "行政・情報", type: "サイト" as ResourceType, authority: "行政" as ResourceAuthority, description: "母子健康手帳に関する情報を知る", href: "https://mchbook.cfa.go.jp/" },
  { title: "子育てタウン", category: "育児・地域", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "地域の子育て情報を知る", href: "https://play.google.com/store/apps/details?id=jp.mamafre.mamafre&hl=ja&pli=1" },
  { title: "母子モ", category: "妊娠・育児", type: "アプリ" as ResourceType, authority: "それ以外" as ResourceAuthority, description: "妊娠・出産・子育てを記録する", href: "https://www.mchh.jp/login" },
];

const quadrants = [
  { title: "お金", subtitle: "家計・将来のお金", x: 0, y: 0, items: resources.filter((r) => r.category.includes("お金")) },
  { title: "時間・仕事", subtitle: "予定・育休・働き方", x: 1, y: 0, items: resources.filter((r) => r.category.includes("時間") || r.category.includes("制度")) },
  { title: "妊娠・育児", subtitle: "妊娠・子育ての情報", x: 0, y: 1, items: resources.filter((r) => r.category.includes("妊娠") || r.category.includes("育児")) },
  { title: "家族・記録", subtitle: "共有・思い出・成長記録", x: 1, y: 1, items: resources.filter((r) => r.category.includes("家族") || r.category.includes("記録")) },
];

type Resource = (typeof resources)[number];

function SiteIcon({ resource }: { resource: Resource }) {
  const domain = new URL(resource.href).hostname;
  return <img src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`} alt="" className="h-8 w-8 shrink-0 rounded-lg" loading="lazy" />;
}

function ResourceCard({ resource, compact = false, onSelect }: { resource: Resource; compact?: boolean; onSelect: (resource: Resource) => void }) {
  return (
    <button type="button" onPointerDown={(e) => e.stopPropagation()} onClick={() => onSelect(resource)} className={`flex w-full items-center gap-3 rounded-xl border border-[#ded9d0] bg-white text-left transition hover:bg-[#fcfaf6] ${compact ? "px-3 py-2.5" : "p-4"}`}>
      <SiteIcon resource={resource} />
      <div className="min-w-0 flex-1">
        <p className={`truncate font-bold text-[#25364a] ${compact ? "text-xs" : "text-sm"}`}>{resource.title}</p>
        {!compact && <p className="mt-0.5 truncate text-[11px] text-[#8a929b]">{resource.description}</p>}
      </div>
    </button>
  );
}

const typeFilters: Array<ResourceType | "すべて"> = ["すべて", "YouTube", "X", "サイト", "アプリ"];
const authorityFilters: Array<ResourceAuthority | "すべて"> = ["すべて", "行政", "それ以外"];

export default function Resources() {
  const INITIAL_SCALE = 0.35;
  const MIN_SCALE = 0.25;
  const MAX_SCALE = 1.25;
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: INITIAL_SCALE });
  const [dragging, setDragging] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [typeFilter, setTypeFilter] = useState<ResourceType | "すべて">("すべて");
  const [authorityFilter, setAuthorityFilter] = useState<ResourceAuthority | "すべて">("すべて");
  const mapRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef(transform);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const start = useRef({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
  const pinch = useRef({ distance: 0, scale: INITIAL_SCALE });
  const raf = useRef<number | null>(null);
  const clampScale = (scale: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));

  const renderTransform = (next: { x: number; y: number; scale: number }) => {
    transformRef.current = next;
    if (raf.current !== null) return;
    raf.current = requestAnimationFrame(() => {
      if (mapRef.current) {
        mapRef.current.style.transform = `translate3d(calc(-50% + ${transformRef.current.x}px), calc(-50% + ${transformRef.current.y}px), 0) scale(${transformRef.current.scale})`;
      }
      raf.current = null;
    });
  };

  const beginPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    e.currentTarget.setPointerCapture(e.pointerId);
    const current = transformRef.current;
    if (pointers.current.size === 1) {
      start.current = { x: e.clientX, y: e.clientY, offsetX: current.x, offsetY: current.y };
      setDragging(true);
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), scale: current.scale };
      setDragging(false);
    }
  };

  const movePointer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const current = transformRef.current;
    if (pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch.current.distance > 0) {
        renderTransform({ ...current, scale: clampScale(pinch.current.scale * (distance / pinch.current.distance)) });
      }
      return;
    }
    if (dragging) {
      renderTransform({ ...current, x: start.current.offsetX + e.clientX - start.current.x, y: start.current.offsetY + e.clientY - start.current.y });
    }
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(e.pointerId);
    setTransform(transformRef.current);
    if (pointers.current.size === 0) setDragging(false);
    if (pointers.current.size < 2) pinch.current.distance = 0;
  };

  const zoom = (amount: number) => {
    const next = { ...transformRef.current, scale: clampScale(transformRef.current.scale + amount) };
    renderTransform(next);
    setTransform(next);
  };

  const reset = () => {
    const next = { x: 0, y: 0, scale: INITIAL_SCALE };
    renderTransform(next);
    setTransform(next);
  };

  const selectResource = (resource: Resource) => setSelectedResource(resource);

  const filteredResources = resources.filter((resource) =>
    (typeFilter === "すべて" || resource.type === typeFilter) &&
    (authorityFilter === "すべて" || resource.authority === authorityFilter)
  );

  return (
    <AppShell>
      <div className="py-4">
        <h1 className="text-3xl font-black tracking-tight text-[#25364a]">子育てに役立つ情報</h1>

        <section className="mt-8 overflow-hidden rounded-3xl border border-[#d9d4ca] bg-[#eeeae2]">
          <div className="flex items-center justify-between border-b border-[#d9d4ca] bg-[#f8f5ef] px-4 py-3">
            <div><p className="text-xs font-black text-[#25364a]">情報マップ</p><p className="mt-0.5 text-[10px] text-[#8a929b]">指で移動・ピンチで拡大縮小</p></div>
            <Move size={16} className="text-[#8a929b]" />
          </div>

          <div className="relative h-[540px] touch-none select-none overflow-hidden cursor-grab active:cursor-grabbing" onPointerDown={beginPointer} onPointerMove={movePointer} onPointerUp={endPointer} onPointerCancel={endPointer}>
            <div ref={mapRef} className="absolute left-1/2 top-1/2 h-[850px] w-[850px] will-change-transform" style={{ transform: `translate3d(calc(-50% + ${transform.x}px), calc(-50% + ${transform.y}px), 0) scale(${transform.scale})`, transformOrigin: "center" }}>
              <div className="absolute left-1/2 top-1/2 h-px w-[760px] -translate-x-1/2 bg-[#cfc9bf]" />
              <div className="absolute left-1/2 top-1/2 h-[760px] w-px -translate-y-1/2 bg-[#cfc9bf]" />
              {quadrants.map((quadrant) => (
                <div key={quadrant.title} className="absolute w-[320px] rounded-3xl border border-[#d9d4ca] bg-[#fffdfa]/95 p-5 shadow-sm" style={{ left: quadrant.x === 0 ? 35 : 495, top: quadrant.y === 0 ? 35 : 495 }}>
                  <h2 className="text-xl font-black text-[#25364a]">{quadrant.title}</h2>
                  <p className="mt-1 text-xs text-[#69737e]">{quadrant.subtitle}</p>
                  <div className="mt-4 space-y-2">{quadrant.items.map((resource) => <ResourceCard key={resource.href} resource={resource} compact onSelect={selectResource} />)}</div>
                </div>
              ))}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fffdfa] bg-[#25364a] text-center text-xs font-black leading-5 text-white shadow-lg">子育て情報</div>
            </div>

            <div className="absolute bottom-3 right-3 z-20 flex overflow-hidden rounded-xl border border-[#d9d4ca] bg-white/95 shadow-sm">
              <button aria-label="拡大" onPointerDown={(e) => e.stopPropagation()} onClick={() => zoom(0.15)} className="flex h-10 w-10 items-center justify-center text-[#25364a] hover:bg-[#f8f5ef]"><Plus size={16} /></button>
              <button aria-label="縮小" onPointerDown={(e) => e.stopPropagation()} onClick={() => zoom(-0.15)} className="flex h-10 w-10 items-center justify-center border-l border-[#d9d4ca] text-[#25364a] hover:bg-[#f8f5ef]"><Minus size={16} /></button>
              <button aria-label="リセット" onPointerDown={(e) => e.stopPropagation()} onClick={reset} className="flex h-10 w-10 items-center justify-center border-l border-[#d9d4ca] text-[#25364a] hover:bg-[#f8f5ef]"><RotateCcw size={14} /></button>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-black text-[#25364a]">すべての情報</h2>
          <p className="mt-2 text-xs leading-6 text-[#8a929b]">サービスや公的情報を一覧で確認できます。</p>

          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {typeFilters.map((filter) => (
                <button key={filter} type="button" onClick={() => setTypeFilter(filter)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${typeFilter === filter ? "border-[#25364a] bg-[#25364a] text-white" : "border-[#d9d4ca] bg-white text-[#69737e] hover:bg-[#f8f5ef]"}`}>{filter}</button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {authorityFilters.map((filter) => (
                <button key={filter} type="button" onClick={() => setAuthorityFilter(filter)} className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${authorityFilter === filter ? "border-[#d66a43] bg-[#d66a43] text-white" : "border-[#d9d4ca] bg-white text-[#69737e] hover:bg-[#f8f5ef]"}`}>{filter}</button>
              ))}
            </div>
          </div>

          <p className="mt-3 text-[11px] text-[#8a929b]">{filteredResources.length}件表示</p>
          <div className="mt-3 space-y-3">
            {filteredResources.map((resource) => <ResourceCard key={resource.href} resource={resource} onSelect={selectResource} />)}
          </div>
          <p className="mt-6 text-[11px] leading-5 text-[#8a929b]">※各サービス・サイトの内容は変更される場合があります。最終更新日：2026年9月3日</p>
        </section>

        {selectedResource && (
          <div className="fixed inset-x-4 bottom-5 z-50 mx-auto max-w-md rounded-2xl border border-[#d9d4ca] bg-white p-3 shadow-xl">
            <div className="flex items-center gap-3">
              <SiteIcon resource={selectedResource} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-black text-[#25364a]">{selectedResource.title}</p>
                <p className="mt-0.5 truncate text-[10px] text-[#8a929b]">サイトを開きますか？</p>
              </div>
              <button type="button" onClick={() => setSelectedResource(null)} className="rounded-lg px-2 py-1.5 text-[11px] text-[#69737e]">閉じる</button>
              <a href={selectedResource.href} target="_blank" rel="noreferrer" onClick={() => setSelectedResource(null)} className="rounded-lg bg-[#25364a] px-3 py-1.5 text-[11px] font-bold text-white">開く</a>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}