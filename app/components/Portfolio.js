// src/components/Portfolio.js
import React from 'react';
import Image from 'next/image';
import Ara from './images/Aara.png'

const projects = [
    {
        title: 'Aaraa Website',
        image: Ara,
        link: 'https://aaraa.onrender.com/',
    },
    /*{
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
    },*/
]

export default function Portfolio() {
    return (
        <section className="bg-[#0f172a] py-16 px-6 text-white" id="portfolio">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-3xl font-bold mb-10">Portfolio Projects</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl shadow-lg group-hover:opacity-50 transition w-80 h-54 object-fit "
                            />
                            <div className=" w-80 h-54 absolute inset-0 bg-black bg-opacity-50 rounded-xl opacity-0 group-hover:opacity-80 transition flex items-center justify-center">
                                <p className="text-white font-semibold">{project.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
