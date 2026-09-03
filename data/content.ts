export type Answer = 1 | 2 | 3;

export const questions = [
  "家事や育児の分担について、どう考えますか？",
  "子どもの送り迎えや習い事の付き添いは？",
  "休日の過ごし方は、どちらに近いですか？",
  "育児に関する知識や情報を学ぶことについて",
  "共働きについて、どう考えますか？",
  "子どもの夜泣きや夜間の対応について",
  "育児休業の取得について、どう思いますか？",
  "自分のキャリアと育児のバランスについて",
  "パートナーが悩みや不満を話してきたとき",
  "子どもの行事（運動会・発表会など）について",
  "子どもとの時間を確保するために",
  "将来、子どもにとってどんな存在でいたいですか？",
] as const;

export const questionCategories = [
  "妻との関係", "子どもとの関係", "家族時間", "育児への意識",
  "妻との関係", "子どもとの関係", "家族時間", "育児への意識",
  "妻との関係", "子どもとの関係", "家族時間", "育児への意識",
] as const;

export const options = [
  { label: "できる限り半分ずつ担いたい", value: 3 as Answer },
  { label: "状況に応じて柔軟に分担したい", value: 2 as Answer },
  { label: "得意な方が多く担当すればいい", value: 1 as Answer },
];

export const questionOptions = [
  ["できる限り半分ずつ担いたい", "状況に応じて柔軟に分担したい", "得意な方が多く担当すればいい"],
  ["自分も積極的に担当したい", "パートナーと交代でやりたい", "基本的にはパートナーに任せたい"],
  ["家族との時間を最優先にしたい", "家族と自分の時間を半々にしたい", "自分の時間も大切にしたい"],
  ["積極的に学びたい", "必要になったら学べばいい", "パートナーに任せておけば十分"],
  ["積極的にしたい", "どちらでもよい", "したくない"],
  ["自分も交代で対応したい", "余裕があるときは対応したい", "基本はパートナーに任せたい"],
  ["できるだけ長く取りたい", "短期間でも取りたい", "取らなくてもいいと思う"],
  ["育児のために働き方を見直したい", "状況によって調整したい", "キャリアを優先したい"],
  ["じっくり話を聞き、一緒に考えたい", "時間があれば聞きたい", "あまり深く関わりたくない"],
  ["必ず参加したい", "できる範囲で参加したい", "仕事が優先になると思う"],
  ["仕事を調整してでも時間を作りたい", "余った時間でなるべく作りたい", "特に意識していない"],
  ["何でも話せる、頼れる存在でいたい", "必要なときに頼れる存在でいい", "あまり意識していない"],
] as const;

export const futureScenarios = {
  current: {
    eyebrow: "今のままの未来",
    title: "今のままの未来",
    lead: "仕事や生活のペースを保ちながら、家族との時間を過ごしています。",
    points: ["仕事と家庭のバランスを考える機会が増える", "家族との時間の使い方が重要になる", "パートナーとの役割分担を話し合う場面が増える"],
    mood: "未来は今の選択から少しずつ変わっていきます。",
  },
  positive: {
    eyebrow: "家族との未来",
    title: "育児に積極的に関わる未来",
    lead: "子どもとの時間を大切にしながら、家族と一緒に日々を過ごしています。",
    points: ["子どもとの信頼関係が深まる", "家族との時間をつくりやすくなる", "パートナーと協力して家庭をつくれる"],
    mood: "小さな選択の積み重ねが、家族との未来につながります。",
  },
};

export const actions = [
  { icon: "📖", title: "家事・育児について知る", text: "育児に必要なことを少しずつ知って、未来の選択肢を増やす。" },
  { icon: "👨‍👩‍👧", title: "先輩パパの体験を知る", text: "実際の父親の経験から、仕事と家庭の両立について考える。" },
  { icon: "✍️", title: "今日からできるアクション", text: "家事を一つ引き受けるなど、身近な行動から始めてみる。" },
  { icon: "💬", title: "家族について話してみる", text: "将来どんな家庭をつくりたいか、自分の言葉にしてみる。" },
];

export const messages = [
  { from: "未来の子ども", text: "パパ、一緒に遊んでくれた時間がすごく嬉しかったよ。" },
  { from: "未来のパートナー", text: "一緒に悩んで、一緒に笑ってくれたことが心強かった。" },
];

export type DiagnosisType = {
  name: string;
  description: string;
  strengths: string[];
};

export const diagnosisTypes: DiagnosisType[] = [
  { name: "家族思いやり型", description: "家族との時間やパートナーとの関係を大切にするタイプです。", strengths: ["家族との時間を大切にできる", "相手の気持ちを考えられる"] },
  { name: "積極育児型", description: "育児に自分から関わり、子どもの成長を一緒に楽しみたいタイプです。", strengths: ["育児に積極的に関われる", "子どもとの時間をつくれる"] },
  { name: "バランス重視型", description: "仕事と家庭のどちらも大切にしながら、状況に合わせて考えるタイプです。", strengths: ["柔軟に役割を調整できる", "仕事と家庭の両方を考えられる"] },
  { name: "パートナー協力型", description: "一人で抱え込まず、パートナーと相談しながら家庭をつくるタイプです。", strengths: ["相談しながら決められる", "協力して家庭を運営できる"] },
  { name: "自分時間大切型", description: "家族を大切にしながら、自分自身の時間やキャリアも大切にするタイプです。", strengths: ["自分のペースを保てる", "長期的な働き方を考えられる"] },
  { name: "これから成長型", description: "まだ決めきっていないことも多く、これから自分なりの家族像を見つけていくタイプです。", strengths: ["これから考え方を広げられる", "状況に合わせて変化できる"] },
];

export function getScore(answers: Answer[]) {
  if (!answers.length) return 50;
  return Math.round((answers.reduce((sum, value) => sum + value, 0) / (answers.length * 3)) * 100);
}

export function getType(score: number) {
  const index = Math.min(5, Math.floor((100 - score) / 17));
  return diagnosisTypes[index].name;
}

export function getDiagnosisType(answers: Answer[]) {
  if (!answers.length) return diagnosisTypes[5];
  const categoryScores = [0, 0, 0, 0];
  answers.forEach((answer, index) => {
    categoryScores[index % 4] += answer;
  });
  const total = answers.reduce((sum, value) => sum + value, 0);
  if (total >= 32 && categoryScores[0] >= categoryScores[1]) return diagnosisTypes[0];
  if (categoryScores[1] >= 9 && categoryScores[1] >= categoryScores[3]) return diagnosisTypes[1];
  if (categoryScores[3] >= 9 && categoryScores[3] >= categoryScores[1]) return diagnosisTypes[3];
  if (categoryScores[2] >= 8 && total <= 29) return diagnosisTypes[4];
  if (total >= 28) return diagnosisTypes[2];
  return diagnosisTypes[5];
}
