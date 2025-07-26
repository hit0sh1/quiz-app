export interface QuizData {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
}

export const quizData: QuizData[] = [
  {
    id: 1,
    question: "日本の首都はどこですか？",
    answers: ["大阪", "東京", "京都", "横浜"],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "富士山の高さは約何メートルですか？",
    answers: ["2,776メートル", "3,776メートル", "4,776メートル", "5,776メートル"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "日本の国花は何ですか？",
    answers: ["梅", "桜", "菊", "椿"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "源氏物語の作者は誰ですか？",
    answers: ["清少納言", "紫式部", "和泉式部", "赤染衛門"],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "日本で一番長い川は？",
    answers: ["利根川", "石狩川", "信濃川", "淀川"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "明治維新が起きたのは何年ですか？",
    answers: ["1858年", "1868年", "1878年", "1888年"],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "日本の通貨単位は？",
    answers: ["ウォン", "元", "円", "ドル"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "日本で最も人口が多い都道府県は？",
    answers: ["大阪府", "神奈川県", "東京都", "愛知県"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "日本の国技は何ですか？",
    answers: ["柔道", "相撲", "剣道", "空手"],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "平安京は現在のどの都市にありましたか？",
    answers: ["奈良", "鎌倉", "京都", "大阪"],
    correctAnswer: 2,
  },
];