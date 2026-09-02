import AppShell from "../../components/AppShell";

const resources = [
  { title: "こども家庭庁", description: "妊娠・出産・子育てに関する国の情報", href: "https://www.cfa.go.jp/" },
  { title: "政府広報オンライン｜子育て", description: "子育て支援や制度をわかりやすく確認", href: "https://www.gov-online.go.jp/useful/" },
  { title: "厚生労働省｜育児休業", description: "育児休業・出生時育児休業などの制度", href: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000130583.html" },
  { title: "内閣府｜少子化対策", description: "子育て支援や少子化に関する政策情報", href: "https://www8.cao.go.jp/shoushi/" },
];

export default function Resources() {
  return (
    <AppShell>
      <div className="py-4">
        <p className="text-sm font-bold text-[#d66a43]">INFORMATION</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-[#25364a]">子育てに役立つ情報</h1>
        <p className="mt-4 text-sm leading-7 text-[#69737e]">診断だけで終わらず、制度や支援について調べたいときに。信頼できる公的な情報源へすぐ移動できます。</p>

        <div className="mt-8 space-y-3">
          {resources.map((resource) => (
            <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="block border border-[#d9d4ca] bg-white p-5 transition hover:-translate-y-0.5 hover:bg-[#fcfaf6]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-black text-[#25364a]">{resource.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#69737e]">{resource.description}</p>
                </div>
                <span className="shrink-0 text-xs font-bold text-[#d66a43]">外部サイト ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
