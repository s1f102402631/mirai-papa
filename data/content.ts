export type Answer = 1 | 2 | 3 | 4;

export const questions = [
  "将来、子どもができたら育児に積極的に参加したいと思いますか？",
  "子どもと過ごす時間をどのくらい大切にしたいですか？",
  "仕事と育児を両立するために工夫したいと思いますか？",
  "家事はパートナーと分担したいと思いますか？",
  "子どもの成長や学校行事に積極的に関わりたいですか？",
  "忙しい日でも家族との時間をつくりたいと思いますか？",
  "育児について今から知識を身につけておきたいですか？",
  "パートナーと育児について話し合いたいと思いますか？",
  "子どもの気持ちを理解する時間を大切にしたいですか？",
  "家族のために働き方を見直すことも考えられますか？",
  "自分から家事や育児を見つけて動ける父親になりたいですか？",
  "10年後の家族との時間を今から大切にしたいと思いますか？",
] as const;

export const options = [
  { label: "とてもそう思う", value: 4 as Answer },
  { label: "そう思う", value: 3 as Answer },
  { label: "どちらともいえない", value: 2 as Answer },
  { label: "あまり思わない", value: 1 as Answer },
];

export const futureScenarios = {
  current: {
    eyebrow: "IF YOU KEEP GOING AS YOU ARE",
    title: "今のままの未来",
    lead: "仕事は順調。でも、家族との時間は少しずつ減っていました。",
    points: ["子どもとの会話が少なくなる", "家族イベントへの参加機会が減る", "パートナーとの家事負担に差が生まれる"],
    mood: "これは決まった未来ではありません。今から変えられる未来です。",
  },
  positive: {
    eyebrow: "IF YOU CHOOSE TO PARTICIPATE",
    title: "育児に積極的に参加した未来",
    lead: "子どもとの時間を大切にしながら、家族と一緒に成長していました。",
    points: ["子どもとの信頼関係が深まる", "家族との時間が充実する", "パートナーと協力して家庭をつくれる"],
    mood: "大きなことを一度にする必要はありません。小さな選択の積み重ねが未来をつくります。",
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

export function getScore(answers: Answer[]) {
  if (!answers.length) return 78;
  return Math.round((answers.reduce((sum, value) => sum + value, 0) / (answers.length * 4)) * 100);
}

export function getType(score: number) {
  if (score >= 85) return "家族との時間を大切にするタイプ";
  if (score >= 65) return "仕事も家庭も大切にしたいタイプ";
  if (score >= 45) return "これから考えていきたいタイプ";
  return "自分のペースで未来を考えるタイプ";
}
