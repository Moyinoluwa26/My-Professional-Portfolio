// src/components/Portfolio.js
import React from 'react'

const projects = [
    {
        title: 'Fintech Dashboard',
        image: '/projects/project1.png',
        link: 'https://example.com/fintech-dashboard',
    },
    {
        title: 'Crypto Tracker',
        image: '/projects/project2.png',
        link: 'https://example.com/crypto-tracker',
    },
    {
        title: 'Personal Budget App',
        image: '/projects/project3.png',
        link: 'https://example.com/budget-app',
    },
    {
        title: 'OAU Students Connect',
        image: '/projects/project4.png',
        link: 'https://example.com/student-connect',
    },
]

export default function Portfolio() {
    return (
        <section className="bg-[#0f172a] py-16 px-6 text-white" id="portfolio">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl font-bold mb-10">Portfolio</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl shadow-lg group-hover:opacity-80 transition"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <p className="text-white font-semibold">{project.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
