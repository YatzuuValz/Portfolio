"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VideoShowcase() {
  const videos = [
    {
      img:"/videos/nuanu.png",
      link:"https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc"
    },
    {
      img:"/videos/nuanu.png",
      link:"https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc"
    },
    {
      img:"/videos/nuanu.png",
      link:"https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc"
    }
  ];

  const [playingIndex, setPlayingIndex] = useState<number>();


  return (
    <section id="VideoPortofolio" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-8">Featured Videos</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {videos.map((url, index) => {
          const isCenter = index === 1;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${isCenter ? "w-[260px] h-[460px]" : "w-[180px] h-[320px]"
                }`}
              onClick={() => window.open(videos[index].link, "_blank")}
            >
              <Image
                src={videos[index].img}
                alt={`TikTok video ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                ▶
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md"
      >
        More Video
      </motion.button>
    </section>
  );
}
