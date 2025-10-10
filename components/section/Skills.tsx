'use client';
import { Code, Video } from 'lucide-react';
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id='Skills' className=" w-full py-24 bg-white text-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Skills & Expertise</h2>
        <p className="text-gray-600 mt-2">
          Combining technical programming skills with creative video editing expertise
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-8/10 mx-auto">
        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-indigo-50 rounded-2xl p-6 shadow-sm">
          <div className='flex items-center mb-5 gap-5'>
            <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Code />
            </div>
            <h3 className="text-xl font-extrabold flex items-center">
              Frontend Development
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'HTML5', color: '#E44D26' },
              { name: 'CSS', color: '#1572B6' },
              { name: 'JavaScript', color: '#F7DF1E' },
              { name: 'React', color: '#61DAFB' },
              { name: 'Next.js', color: '#68A063' },
              { name: 'Tailwind', color: '#3776AB' },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(99,102,241,0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformOrigin: "center" }}
                className="bg-white rounded-lg px-5 py-6 text-sm font-bold flex items-center justify-center shadow-sm border border-gray-100 cursor-default"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Editing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-purple-50 rounded-2xl p-6 shadow-sm">
          <div className='flex items-center mb-5 gap-5'>
            <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Video />
            </div>
            <h3 className="text-xl font-extrabold flex items-center">
              Video Editing
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Premiere Pro', color: '#9999FF' },
              { name: 'After Effects', color: '#EA4C89' },
              { name: 'DaVinci Resolve', color: '#5865F2' },
              { name: 'Motion Graphics', color: '#F87171' },
              { name: 'Audio Editing', color: '#22C55E' },
              { name: 'Color Grading', color: '#3B82F6' },
            ].map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(99,102,241,0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                style={{ transformOrigin: "center" }}
                className="bg-white rounded-lg px-5 py-6 text-sm font-bold flex items-center justify-center shadow-sm border border-gray-100 cursor-default"
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
