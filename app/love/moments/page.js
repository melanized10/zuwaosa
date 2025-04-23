"use client";

import { useState } from "react";
import Image from "next/image";

const moments = [
  {
    src: "/images/girlfriend.jpg",
    caption: "First 'I love you'",
  },
  {
    src: "/images/fav.jpg",
    caption: "My favorite picture of you",
  },
  {
    src: "/images/proposal.jpg",
    caption: "My 'will you be my girlfriend' moment",
  },
  {
    src: "/images/theone.jpg",
    caption: "When I knew you were the one for me",
  },
  {
    src: "/images/damn.jpg",
    caption: "He had never seemed hotter 😍",
  },
  {
    src: "/images/video.mp4",
    caption: "Days I wanted to lock him in the house for myself",
    isVideo: true,
  },
];

export default function MomentsPage() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const toggleVisibility = (idx) => {
    if (visibleIndexes.includes(idx)) {
      setVisibleIndexes(visibleIndexes.filter((i) => i !== idx));
    } else {
      setVisibleIndexes([...visibleIndexes, idx]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50"> {/* Soft pink background for app */}
      <div className="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center mb-4 text-3xl font-bold text-pink-700">
          ❤️ Moments That Made Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Click on each caption to unlock a memory 💖
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {moments.map((moment, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div
                className="p-4 cursor-pointer text-pink-800 font-semibold hover:underline"
                onClick={() => toggleVisibility(idx)}
              >
                {moment.caption}
              </div>

              {visibleIndexes.includes(idx) && (
                <div>
                  {moment.isVideo ? (
                    <video
                      src={moment.src}
                      controls
                      className="w-full object-cover h-48"
                    />
                  ) : (
                    <Image
                      src={moment.src}
                      alt={moment.caption}
                      width={500}
                      height={300}
                      className="w-full object-cover h-48"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
