import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          クイズアプリへようこそ！
        </h1>
        <p className="text-gray-600 text-center mb-8">
          知識を試してみましょう。準備はできましたか？
        </p>
        <Link
          href="/quiz"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-200"
        >
          クイズを始める
        </Link>
      </div>
    </div>
  );
}
