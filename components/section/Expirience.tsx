"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Experience = {
    org: string;
    role: string;
    period: string;
    location: string;
    img: string;
    details: string[];
    OorE: string
};

export default function OrganizationalExperience() {
    const experiences: Experience[] = [
        {
            org: "OSIS - MA Al-Muddatsiriyah",
            role: "Information Section",
            period: "Jul 2022 – Jul 2023",
            location: "Jakarta",
            img: "/Education/SMA.png", // event photo
            details: ["Published school activities and events."],
            OorE: "Organization"

        },
        {
            org: "FUKI - Universitas Indonesia",
            role: "Staff",
            period: "Jul 2025 – Present",
            location: "Depok",
            img: "/Organization/Fuki.jpg",
            details: [
                "Responsible for the front-end development of two website projects: Munam and LIMA JAYA MOTOR.",
                "Served as the Person In Charge (PIC) for the Internal Class work program, coordinating its planning and execution with team members.",
            ],
            OorE: "Organization"
        },
        {
            org: "Sekolah Magang BEM - Universitas Indonesia",
            role: "Events Section (Pacilthon)",
            period: "Sep 2024 – Des 2024",
            location: "Depok",
            img: "/org/pacilthon-event.jpg",
            details: [
                "Served as a member of the Events Section for the Pacilthon event, coordinating the event flow and ensuring each session followed the schedule.",
                "Contributed to planning the event concept and inter-divisional communication to ensure smooth event execution.",
            ],
            OorE: "Event"
        },
    ];

    return (
        <section id="OrganizationalExperience" className="relative overflow-hidden py-20">
            {/* Decorative gradients */}
            <div aria-hidden className="pointer-events-none absolute -left-32 top-0 w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl mix-blend-screen" />
            <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 w-72 h-72 rounded-full bg-cyan-400 opacity-10 blur-2xl mix-blend-screen" />

            <motion.header
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-purple-300">Organizational Experience</h2>
                <p className="mt-3 text-white max-w-2xl mx-auto">
                    A collection of my organizational journeys, showcasing teamwork, leadership, and event management experiences.
                </p>
            </motion.header>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 justify-items-center">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl w-full max-w-sm"
                    >
                        <div className="relative h-44 w-full">
                            <Image src={exp.img} alt={exp.org} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute top-3 left-3 flex items-center gap-2">
                                <div className="flex gap-2">
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-md ${exp.OorE == "Event" ? "bg-green-200" : "bg-blue-200"} ${exp.OorE == "Event" ? "text-green-700" : "text-blue-700"}`}>
                                        {exp.OorE}
                                    </span>
                                </div>
                                <div className="text-xs font-medium bg-white/80 text-slate-800 px-2 py-0.5 rounded-full">
                                    {exp.period}
                                </div>
                            </div>
                        </div>

                        <div className="p-5 text-white">
                            <h3 className="text-lg font-semibold">{exp.org}</h3>
                            <p className="text-sm text-purple-300">{exp.role} • {exp.location}</p>
                            <ul className="list-disc list-inside text-sm mt-3 space-y-1 text-slate-200">
                                {exp.details.map((d, j) => (
                                    <li key={j}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
