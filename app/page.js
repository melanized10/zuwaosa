"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loveMessages = [
        "Hey Zuwa 💌 You're the peanut butter to my jelly.",
        "Every moment with you is a spark in my heart 🔥",
        "Your smile is brighter than my whole day ☀️",
        "If kisses were stars, I'd give you the entire galaxy 🌌",
        "Zuwa, you're my safe place and my biggest adventure 💖",
        "I cherish every laugh, every word, every second with you 💬🕒",
        "You’re not just my love, you’re my best friend too 🤝💘",
        "Life’s better with you. No debates 😎",
        "I'd still choose you in every lifetime 🌍",
        "Surprise! 😍 Akon loves you endlessly 💘. HAPPY INTERNATIONAL LOVERS DAY DARLING. YOU, ZUWA, ARE MY WHY!"
      ];

      loveMessages.forEach((msg, index) => {
        const key = `zuwa-msg-${index + 1}`;
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, msg);
        }
      });

      setTimeout(() => {
        router.push("/love/game");
      }, 1000); // Slight delay for a better experience
    }
  }, [router]);

  return (
    <div className="text-center mt-5">
      <h3>💞 Loading love notes for Zuwa... 💌</h3>
      <p>Hold on... Akon is hiding the kisses behind numbers 😘</p>
    </div>
  );
}
