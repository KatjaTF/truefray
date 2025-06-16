"use client";

import { useState } from "react";

export default function BetaMVP() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");

  const password = "0sklajf394783414"; // Change this to your own

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white text-center px-4">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Enter Access Code</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="border p-2 rounded mb-4 w-full max-w-xs"
          />
          <br />
          <button
            onClick={() => setUnlocked(input === password)}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Enter
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">TrueFray</h1>
        <p className="text-lg text-gray-600">
          Find better fashion, faster — filtered by fabric, not fast trends.
        </p>
      </header>

      <section className="mb-8">
        <input
          type="text"
          placeholder="I'm looking for a linen summer dress..."
          className="w-full max-w-xl mx-auto block p-3 border rounded-xl shadow-sm"
        />
      </section>

      <section className="mb-4 text-center">
        <div className="inline-flex gap-2 flex-wrap justify-center">
          <button className="rounded-full px-4 py-2 border bg-gray-100 hover:bg-gray-200">Women</button>
          <button className="rounded-full px-4 py-2 border bg-gray-100 hover:bg-gray-200">Men</button>
          <button className="rounded-full px-4 py-2 border bg-gray-100 hover:bg-gray-200">Kids</button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="h-56 bg-gray-100"></div>
            <div className="p-4">
              <h3 className="font-semibold">100% Linen Midi Dress</h3>
              <p className="text-sm text-gray-500">COS · €89.00 · Sizes S–L</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-gray-400">
        © 2025 TrueFray · All rights reserved
      </footer>
    </main>
  );
}

