'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Download, Code, Plus, Video } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  projects: number;
  edited: number;
};

export default function HomePage({ projects, edited }: Props) {
  return (
    <main
      id="Home"
      className="relative z-10 max-w-7xl mx-auto px-8 py-16 mt-16"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Yahya
              </span>{' '}
              Muhandar Fathana
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-purple-200 max-w-lg leading-relaxed"
            >
              Crafting digital experiences through{' '}
              <span className="text-cyan-400">innovative code</span> and{' '}
              <span className="text-cyan-400">visual storytelling</span>
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a href="#AboutMe" whileHover={{ scale: 1.05 }}>
              <button className="flex cursor-pointer items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl gap-x-3 shadow-md hover:shadow-blue-600/20 transition-all">
                <Play />
                View Portfolio
              </button>
            </motion.a>

            <motion.a
              href="https://docs.google.com/document/d/1Xf2Gsvsh5WjDx1jSO6-N3nXYYJb9DT_A/edit?usp=sharing"
              whileHover={{ scale: 1.05 }}
            >
              <button className="flex items-center cursor-pointer justify-center border-2 border-purple-400/50 text-white hover:bg-purple-700/30 px-8 py-6 text-lg rounded-xl backdrop-blur-sm gap-x-3 transition-all">
                <Download />
                Download CV
              </button>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center space-x-12 pt-8"
          >
            <div className="group">
              <div className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {projects}+
              </div>
              <div className="text-purple-300 text-sm">Web Projects</div>
            </div>

            <div className="group">
              <div className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {edited}+
              </div>
              <div className="text-purple-300 text-sm">Videos Edited</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section — Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="w-full h-full rounded-full bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden border-8 border-purple-400/30 shadow-2xl"
            >
              <Image
                src="/Yahya.jpg"
                alt="Developer"
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              whileHover={{ rotate: 20, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Code />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-1/2 -right-8 w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Plus />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: -15 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute bottom-12 -left-8 w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Video />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-col items-center mt-20 space-y-4"
      >
        <p className="text-purple-300 text-sm">Explore My Work</p>
        <div className="w-8 h-12 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-1 h-3 bg-purple-400 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </main>
  );
}
