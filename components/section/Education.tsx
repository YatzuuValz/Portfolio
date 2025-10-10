"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
    const education = [
        {
            school: "University of Indonesia",
            degree: "Bachelor of System Information",
            period: "2024 — Present",
            gpa: "3.4 / 4.00",
            image: "/Education/Fasilkom.png", // 🧠 your university logo
            description:
                "Currently pursuing a degree in Computer Science. Focused on software engineering, algorithms, and web technologies.",
        },
        {
            school: "MA Al-Muddatsiriyah",
            degree: "High School Diploma — Science Major",
            period: "2021 — 2024",
            image: "/Education/SMA.png", // 🏫 your high school logo
            description:
                "Graduated with a science concentration. Actively participated in programming competitions and tech communities.",
        },
    ];
    
    return (
        <section id="Education" className="py-20 bg-slate-50 ">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                    <GraduationCap /> Education
                </h2>
                <p className="text-gray-600 mb-12">
                    My academic background and achievements
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-center text-left overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative md:w-1/3 h-full">
                                <Image
                                    src={edu.image}
                                    alt={edu.school}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text content */}
                            <div className="flex flex-col justify-between p-6 w-full md:w-2/3">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {edu.school}
                                    </h3>
                                    <p className="text-blue-600 text-sm font-medium mb-2">
                                        {edu.degree}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4">{edu.period}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {edu.description}
                                    </p>
                                </div>

                                {/* GPA — only for university */}
                                {edu.gpa && (
                                    <div className="mt-4 bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full self-start">
                                        Current GPA: {edu.gpa}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
