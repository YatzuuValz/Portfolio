import React from 'react'
import Image from 'next/image'
import { Play, Download, Code, Plus, Video } from 'lucide-react';

type Props={
  projects: number;
  edited:number;
}

export default function HomePage({projects,edited}:Props) {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-8 py-16 mt-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* <div className="inline-flex items-center space-x-2 bg-purple-800/50 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-white text-sm">Available for Projects</span>
            </div> */}

          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Yahya
              </span>
              Muhandar Fathana<br />
            </h1>

            <p className="text-xl text-purple-200 max-w-lg leading-relaxed">
              Crafting digital experiences through<br />
              <span className="text-cyan-400">innovative code</span> and <span className="text-cyan-400">visual storytelling</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#AboutMe">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl gap-x-3">
                <Play />
                View Portfolio
              </button>

            </a>
            <a href="https://docs.google.com/document/d/1Xf2Gsvsh5WjDx1jSO6-N3nXYYJb9DT_A/edit?usp=sharing&ouid=102757586712190308866&rtpof=true&sd=true">
              <button className="flex items-center cursor-pointer justify-center border-2 border-purple-400/50 text-white hover:bg-purple-700/30 px-8 py-6 text-lg rounded-xl backdrop-blur-sm gap-x-3">
                <Download />
                Download CV
              </button>
            </a>
          </div>

          <div className="flex items-center space-x-12 pt-8">
            <div>
              <div className="text-4xl font-bold text-white">{projects}+</div>
              <div className="text-purple-300 text-sm">Web Projects</div>
            </div>

            <div>
              <div className="text-4xl font-bold text-white">{edited}+</div>
              <div className="text-purple-300 text-sm">Videos Edited</div>
            </div>

            {/* <div>
                <div className="text-4xl font-bold text-white">3+</div>
                <div className="text-purple-300 text-sm">Years Experience</div>
              </div> */}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden border-8 border-purple-400/30 shadow-2xl">
              <Image
                src="/Yahya.jpg"
                alt="Developer"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
              <Code />
            </div>

            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
              <Plus />
            </div>

            <div className="absolute bottom-12 -left-8 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Video />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-20 space-y-4">
        <p className="text-purple-300 text-sm">Explore My Work</p>
        <div className="w-8 h-12 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </main>
  )
}
