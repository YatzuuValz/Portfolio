import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, GraduationCap } from 'lucide-react'
type Props={
  projects: number;
  edited:number;
}

export default function AboutSection({projects,edited}:Props) {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault()
    const el = document.getElementById('Contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      el.focus({ preventScroll: true })
    } else {
      window.location.hash = '#Contact'
    }
  }

  return (
    <section id='AboutMe' className="py-16 bg-slate-100 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-slate-900 mb-6"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-slate-600 leading-relaxed mb-6"
            >
              Information Systems student at Universitas Indonesia with a strong interest in web development and video editing. Skilled in managing both development and editing processes from planning to final output with high attention to detail and creativity. Experienced in working collaboratively and independently to achieve the best results. Highly motivated to keep learning and improving, especially in the fields of technology and the digital creative industry.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-indigo-600">{projects}+</div>
                <div className="text-sm text-slate-500">Web Projects</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-extrabold text-pink-600">{edited}+</div>
                <div className="text-sm text-slate-500">Videos Edited</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Primary button: scrolls to #contact */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg shadow-md text-white bg-gradient-to-r from-blue-500 to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Get my contacts"
              >
                <Mail size={18} />
                <span className="font-medium">Get My Contacts</span>
              </motion.button>

              {/* Secondary small tag (like the card on the image) */}
              {/* <div className="hidden sm:flex items-center gap-3 bg-white border rounded-full px-4 py-2 shadow">
                <div className="rounded-full bg-indigo-50 p-2">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Computer Science</div>
                  <div className="text-xs text-slate-500">Student & Developer</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md rounded-2xl shadow-2xl relative"
            >
              <div className="relative h-96 w-full">
                {/* Use Next/Image for optimization; pass a suitable image path via imageSrc prop or put your image in /public/images */}
                <Image
                  src="/Yahya.jpg"
                  alt="Working at desk"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
              </div>

              {/* bottom-right floating card */}
              <div className="absolute -right-4 -bottom-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 w-56">
                <div className="rounded-full bg-indigo-50 p-2">
                  <Image src="/fasilkom.png" alt='fasilkom' width={20} height={20}></Image>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">Computer Science</div>
                  <div className="text-xs text-slate-500">Student & Developer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
