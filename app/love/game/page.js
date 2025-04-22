"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoveGame() {
  const [selected, setSelected] = useState(null);
  const [uhOh, setUhOh] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(0);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showMessage = (num) => {
    // Allow showing final message regardless of sequence
    if (num === lastCorrect + 1 || num === 10) {
      let msg = localStorage.getItem(`zuwa-msg-${num}`);

      // Special puppy surprise message
      if (num === 10) {
        msg = "Surprise! 😍 Akon loves you endlessly 💘. HAPPY INTERNATIONAL LOVERS DAY DARLING. YOU, ZUWA, ARE MY WHY! 🐶";
      }

      setSelected(msg);
      setUhOh(false);
      if (num !== 10) setLastCorrect(num); // don't overwrite if jumped to 10
      setSkipped(false);

      if (typeof confetti === "function") {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          emojis: ["💖", "💘", "🥰", "💕", "🐶"]
        });
      }
    } else {
      // Skipped a number
      setSelected(null);
      setUhOh(true);
      setSkipped(true);
    }
  };

  const handleSkip = () => {
    setSelected(null);
    setUhOh(true);
    setSkipped(true);
  };

  return (
    <div className="container text-center mt-5">
      <Head>
        <title>Akon & Zuwa 💕</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/heart.ico" />
      </Head>

      <audio autoPlay loop>
        <source src="/love-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <h1 className="mb-4">🎯 Akon’s Love Challenge for You, Zuwa 💕</h1>
      <p className="lead">Click a number from 1 to 10 and unlock a surprise 💌</p>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            onClick={() => showMessage(i + 1)}
            className="btn btn-danger rounded-circle px-4 py-2"
          >
            ❤️ {i + 1}
          </button>
        ))}
      </div>

      <div className="alert alert-light border border-danger shadow-sm w-75 mx-auto">
        {selected && <h4 className="text-danger">{selected}</h4>}

        {uhOh && skipped && (
          <h5 className="text-warning">
            😅 Uh-oh! Akon wants you to view the other love notes too. Remember you last clicked number {lastCorrect} 💖
          </h5>
        )}
      </div>

      <button onClick={handleSkip} className="btn btn-warning mt-3">
        Skip
      </button>

      <footer className="mt-5 text-muted">
        <small>akonlovesyou(zuwa)@thebelladonnanun</small>
      </footer>
    </div>
  );
}
