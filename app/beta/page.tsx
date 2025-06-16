"use client";

import { useState } from "react";

export default function BetaPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");

  const password = "truefray123"; // Change to your password

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
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🎉 Welcome to the Beta!</h1>
      <p className="text-center text-gray-600 mb-4">This is your private MVP workspace.</p>
      {/* Insert your MVP layout here */}
    </main>
  );
}
