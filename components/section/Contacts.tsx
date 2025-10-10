import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="Contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold text-slate-900 mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just to
          say hello! I’m always excited to connect with fellow developers and
          creatives.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GitHub */}
          <motion.a
            href="https://github.com/YatzuuValz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <Github  size={28} />
            <span className="font-semibold text-slate-700">GitHub</span>
            <span className="text-sm text-slate-500">@YatzuuValz</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/yahya-muhandar-fathana-2084b92b2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <Linkedin size={28} />
            <span className="font-semibold text-slate-700">LinkedIn</span>
            <span className="text-sm text-slate-500">Yahya Muhandar Fathana</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:Yahya1muhandar@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <Mail size={28} />
            <span className="font-semibold text-slate-700">Email</span>
            <span className="text-sm text-slate-500">Yahya1muhandar@gmail.com</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+6287772743216"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <Phone  size={28} />
            <span className="font-semibold text-slate-700">Phone</span>
            <span className="text-sm text-slate-500">+62 877 7274 3216</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
