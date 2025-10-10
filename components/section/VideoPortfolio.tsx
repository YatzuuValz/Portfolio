"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type VideoItem = { img: string; link: string; title?: string; source?: string };

export default function VideoShowcaseStyled() {
  const videos: VideoItem[] = [
    { img: "/videos/nuanu.png", link: "https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc", title: "Coinfest Asia", source: "TikTok" },
    { img: "/videos/iphone.jpg", link: "https://www.tiktok.com/@tokocrypto/video/7554057203863326008?is_from_webapp=1&sender_device=pc", title: "Iphone 17 vs Bitcoin", source: "TikTok" },
    { img: "/videos/komisi.png", link: "https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc", title: "tokocrypto 50% commission", source: "TikTok" },
    { img: "/videos/bangkitlahlek.jpg", link: "https://www.tiktok.com/@raidagil/video/7545861328532016440?is_from_webapp=1&sender_device=pc", title: "Indonesia Masih Punya Harapan", source: "TikTok" },
    { img: "/videos/nuanu.png", link: "https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc", title: "Quick tip", source: "TikTok" },
    { img: "/videos/nuanu.png", link: "https://www.tiktok.com/@tokocrypto/video/7538071358534683910?is_from_webapp=1&sender_device=pc", title: "Quick tip", source: "TikTok" },
  ];

  return (
    <section id="VideoPortofolio" className="relative overflow-hidden py-20">
      {/* decorative blurred circles */}
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-24 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl mix-blend-screen" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-0 w-72 h-72 rounded-full bg-cyan-400 opacity-18 blur-2xl mix-blend-screen" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 -bottom-40 w-[420px] h-[420px] -translate-x-1/2 rounded-full bg-amber-300 opacity-8 blur-4xl mix-blend-screen" />

      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.5 }}
        className="text-center flex flex-col items-center mb-10 justify-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300">Featured Reels & Shorts</h2>
        <p className="mt-3 text-white max-w-2xl text-center">
          Short-form videos from my personal portfolio, showcasing some of my best edited works.
        </p>
      </motion.header>
      <div className="relative w-full grid grid-row-2 gap-10 justify-around md:grid-cols-[3fr_2fr]">
        <div>
          <motion.div
            id="Featurevideo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="flex flex-row items-center justify-center gap-6"
          >
            {videos.slice(0, 3).map((v, i) => {
              const isCenter = i === 1;
              return (
                <motion.a
                  key={i}
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group block rounded-2xl transform transition-shadow duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-300
                  ${isCenter ? "w-[260px]" : "w-[180px]"} `}
                  aria-label={`Open ${v.title ?? "video"} in new tab`}
                >
                  <div className={`relative ${isCenter ? "h-[460px]" : "h-[320px]"} rounded-2xl overflow-hidden shadow-lg`}>
                    <Image src={v.img} alt={v.title ?? `video ${i + 1}`} fill className="object-cover" />

                    {/* dark gradient bottom for caption */}
                    <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />

                    {/* play button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="rounded-full bg-white/90 p-3 opacity-95 drop-shadow-md">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                          <path d="M5 3v18l15-9L5 3z" fill="#0f172a" />
                        </svg>
                      </div>
                    </div>

                    {/* small corner badge */}
                    <div className="absolute top-3 left-3 bg-white/90 text-xs text-slate-800 px-2 py-1 rounded-full font-medium">
                      {v.source ?? "Clip"}
                    </div>
                  </div>

                  {/* caption block */}
                  <div className={`mt-3 text-center`}>
                    <h3 className={`text-sm md:text-base font-semibold text-slate-50 ${isCenter ? "md:text-lg" : ""}`}>
                      {v.title}
                    </h3>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        <motion.div id="morevideo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/6 ring-1 ring-white/8 backdrop-blur-md w-8/10 p-4 md:p-6 mx-auto  rounded-2xl shadow-lg"
        >
          <h4 className="text-sm font-semibold text-white mb-3">Other Videos</h4>
          <ul className="flex flex-col gap-3">
            {videos.map((v, i) => {
              if (i < 3) { return null; }
              return (
                <motion.li
                  key={`list-${i}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center justify-between gap-3"
                >
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-200 hover:underline"
                  >
                    <div className="w-12 h-8 relative rounded-md overflow-hidden bg-slate-700">
                      <Image src={v.img} alt={v.title ?? `thumb ${i + 1}`} fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-slate-50 text-sm">{v.title}</div>
                      <div className="text-xs text-slate-300">{v.source}</div>
                    </div>
                  </a>

                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white"
                    aria-label={`open-${i}`}
                  >
                    Open →
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

      </div>
    </section >
  );
}
