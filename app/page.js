"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // ensures client-only rendering
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
      router.push("/home");
    }, 1000);
  }, [router]);

  if (!hasMounted) return null; // don't render anything on server

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center">
      <div className="p-5 bg-white shadow rounded">
        <h3 className="text-danger mb-3">💞 Loading love notes for Zuwa... 💌</h3>
        <p className="text-muted fs-5">
          Hold on... Akon is hiding the kisses behind numbers 😘
        </p>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
