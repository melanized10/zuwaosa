"use client";

import Link from "next/link";

export default function HomeDashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-6">
        💖 Welcome to Zuwa Central 💖
      </h1>
      <p className="mb-8 text-lg text-pink-500">Where every click brings you closer to Akon's heart.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
        <Link href="/love">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:bg-pink-200 cursor-pointer transition">
            <h2 className="text-2xl">💌 Love Letters</h2>
            <p className="text-sm mt-2 text-pink-600">Read Akon’s secret love notes</p>
          </div>
        </Link>

        <Link href="/gallery">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:bg-pink-200 cursor-pointer transition">
            <h2 className="text-2xl">📸 Gallery</h2>
            <p className="text-sm mt-2 text-pink-600">Scroll through memories</p>
          </div>
        </Link>

        <Link href="/quiz">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:bg-pink-200 cursor-pointer transition">
            <h2 className="text-2xl">🧠 Quiz Me</h2>
            <p className="text-sm mt-2 text-pink-600">Let’s test your Akon knowledge</p>
          </div>
        </Link>

        <Link href="/about">
          <div className="bg-pink-100 p-6 rounded-2xl shadow hover:bg-pink-200 cursor-pointer transition">
            <h2 className="text-2xl">👩‍❤️‍👨 About Us</h2>
            <p className="text-sm mt-2 text-pink-600">Our little love story</p>
          </div>
        </Link>
      </div>

      <p className="mt-10 text-sm text-pink-400">Made with endless love by Akon 💘</p>
    </div>
  );
}
