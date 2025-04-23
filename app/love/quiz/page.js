"use client";

import { useState } from "react";

const questions = [
  {
    q: "What is Akon's favorite thing about Zuwa?",
    options: ["His voice", "His laugh", "His hugs", "His energy"],
    correct: "His laugh",
  },
  {
    q: "What’s our favorite thing to do together?",
    options: ["Netflix", "Talking", "Dancing", "Cooking"],
    correct: "Talking",
  },
  {
    q: "Which pet is Teddy?",
    options: ["Kitten", "Parrot", "Puppy", "Hamster"],
    correct: "Puppy",
  },
  {
    q: "What is Akon's favorite flower?",
    options: ["Roses", "Lily", "Sunflower", "Tulip"],
    correct: "Sunflower and Roses",
  },
  {
    q: "What is Akon's favorite color?",
    options: ["Red", "sky blue", "Black", "White"],
    correct: "Sky blue",
  },
  {
    q: "What is Akon's love language?",
    options: ["Words of Affirmation", "Acts of Service", "Physical Touch", "Quality Time"],
    correct: "Words of Affirmation and Acts of Service",
  },
  {
    q: "Which song reminds Akon of Zuwa the most?",
    options: [
      "All of Me – John Legend",
      "Perfect – Ed Sheeran",
      "Until I Found You – Stephen Sanchez",
      "Just The Way You Are – Bruno Mars",
    ],
    correct: "Until I Found You – Stephen Sanchez",
  },
  {
    q: "What is Akon's favorite food?",
    options: ["Pasta", "Pizza", "Anjera", "Fried Chicken"],
    correct: "Anjera",
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (opt) => {
    if (opt === questions[step].correct) setScore(score + 1);
    if (step + 1 < questions.length) setStep(step + 1);
    else setFinished(true);
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">🧠 How Well Does Zuwa Know Akon?</h1>
      {!finished ? (
        <>
          <h2 className="mt-6 font-semibold text-lg">{questions[step].q}</h2>
          <div className="flex flex-col gap-2 items-center mt-4">
            {questions[step].options.map((opt, i) => (
              <button
                key={i}
                className="bg-pink-200 px-4 py-2 rounded hover:bg-pink-300 transition"
                onClick={() => handleAnswer(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">🎉 Quiz Complete!</h2>
          <p className="mt-2 text-lg">
            Score: {score}/{questions.length} 💘
          </p>
          <p className="mt-2 text-pink-600">
            {score === questions.length
              ? "You NAILED it, Zuwa! You know me too well 😍"
              : "Sweetheart effort! 🥹 You still know me better than anyone ❤️"}
          </p>
        </div>
      )}
    </div>
  );
}
