"use client";

import { useState } from "react";
import Link from "next/link";
import { quizData } from "@/lib/quiz-data";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(quizData.length).fill(false)
  );

  const handleAnswerSelect = (answerIndex: number) => {
    if (!answeredQuestions[currentQuestion]) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnsweredQuestions(new Array(quizData.length).fill(false));
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
            クイズ終了！
          </h1>
          <div className="text-center mb-8">
            <p className="text-2xl mb-4 text-gray-900 dark:text-gray-100">
              あなたのスコア: <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span> / {quizData.length}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {score === quizData.length
                ? "完璧です！全問正解です！"
                : score >= quizData.length * 0.7
                ? "素晴らしい！よくできました！"
                : score >= quizData.length * 0.5
                ? "まずまずです。もう一度挑戦してみましょう！"
                : "もう少し頑張りましょう！"}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={restartQuiz}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              もう一度挑戦する
            </button>
            <Link
              href="/"
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition duration-200"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              問題 {currentQuestion + 1} / {quizData.length}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              スコア: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {question.question}
        </h2>

        <div className="space-y-3 mb-6">
          {question.answers.map((answer, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrect = isAnswered && isCorrect;
            const showIncorrect = isAnswered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  isAnswered
                    ? showCorrect
                      ? "border-green-500 bg-green-50"
                      : showIncorrect
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                    : isSelected
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                } ${!isAnswered && "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <span className={
                    showCorrect
                      ? "text-green-700 dark:text-green-400 font-semibold"
                      : showIncorrect
                      ? "text-red-700 dark:text-red-400"
                      : "text-gray-900 dark:text-gray-100"
                  }>
                    {answer}
                  </span>
                  {showCorrect && (
                    <span className="text-green-600">✓</span>
                  )}
                  {showIncorrect && (
                    <span className="text-red-600">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null || isAnswered}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-200 ${
            selectedAnswer === null || isAnswered
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {currentQuestion === quizData.length - 1 ? "結果を見る" : "次の問題へ"}
        </button>
      </div>
    </div>
  );
}