'use client';

import { Code, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const projects = [
    
    {
      title: 'Food Ordering',
      description:
        'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/Projects/OrderFood.png',
      link: "",
      tech: ['React', 'Tailwind'],
    },
    {
      title: 'Rock Paper Scisscor',
      description:
        'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/Projects/RPS.png',
      link: "https://yatzuuvalz.github.io/R-P-S",
      tech: ['HTML', 'CSS',"JS"],
    },
    {
      title: 'Calculator',
      description:
        'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: '/Projects/Calculator.png',
      link: "https://yatzuuvalz.github.io/Calculator",
      tech: ['HTML', 'CSS',"JS"],
    },
  ];

  const techColors: Record<string, string> = {
    React: 'bg-blue-100 text-blue-700',
    'Node.js': 'bg-green-100 text-green-700',
    MongoDB: 'bg-purple-100 text-purple-700',
    'Vue.js': 'bg-green-100 text-green-700',
    Firebase: 'bg-yellow-100 text-yellow-700',
    Tailwind: 'bg-cyan-100 text-cyan-700',
    'React Native': 'bg-indigo-100 text-indigo-700',
    'API Integration': 'bg-emerald-100 text-emerald-700',
    'Charts.js': 'bg-orange-100 text-orange-700',
  };

  return (
    <section id='Projects' className="py-20 bg-slate-50 ">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Web Projects</h2>
        <p className="text-gray-600 mb-12">
          A showcase of my web development and programming projects
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image + Tag */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                
                {/* <span
                  className={`absolute top-4 right-4 text-xs font-semibold text-white px-3 py-1 rounded-full ${project.tag === 'Mobile App' ? 'bg-fuchsia-600' : 'bg-blue-600'
                    }`}
                >
                  {project.tag}
                </span> */}
              </div>

              {/* Text content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium px-3 py-1 rounded-md ${techColors[t] || 'bg-gray-100 text-gray-600'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 text-sm font-medium">
                  {/* <a
                    href="#"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <Code /> Code
                  </a> */}
                  <a
                    href="#"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <ExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
