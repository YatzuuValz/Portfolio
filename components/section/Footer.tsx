import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand + Description */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Yahya</h2>
          <p className="text-sm text-gray-400 mb-6">
            Combining code and creativity to build exceptional digital experiences.
          </p>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-md hover:bg-gray-700"
            >
              <Youtube size={18} />
            </motion.a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>Video Editing</li>
            <li>Motion Graphics</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">Projects</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Yahya. All rights reserved.
      </div>
    </footer>
  );
}
