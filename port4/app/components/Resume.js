// src/components/Resume.js
'use client';
import React, { useState } from 'react';
import ReadMoreText from './ReadMore';

const tabs = ['Biography', 'Skills', 'Education', 'Experience'];



const content = {
    Biography: (
        <div>
            <h2 className="text-gray-300 leading-relaxed">
                <ReadMoreText text="I’m a full-stack developer focused on building modern, efficient, and scalable web and mobile applications. My main stack includes Next.js, Node.js, Express, and MongoDB, and I also work with React Native to create sleek cross-platform mobile experiences. I take pride in writing clean, maintainable code and building features that prioritize both performance and user experience—like secure authentication systems with session tracking and multi-device management.

Alongside my development work, I’m pursuing a BSc in Accounting at Obafemi Awolowo University (OAU). My academic journey fuels my interest in fintech and data-driven solutions. Through my ongoing research on “The Triple Helix of Fintech Performance,” I explore how financial metrics like cash flow uncertainty, leverage, and profitability can shape innovation in tech.

I’m driven by a passion for learning and a mindset geared toward solving real-world problems. Whether it’s through code, research, or collaboration, I’m always building with purpose.
                "/>
            </h2>
        </div>
    ),
    Skills: (
        <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li>JavaScript (ES6+)</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
        </ul>
    ),
    Education: (
        <div>
            <p className="text-blue-400 font-semibold">Obafemi Awolowo University</p>
            <p className="text-gray-300 text-sm">B.Sc in Accounting (In Progress)</p>
        </div>
    ),
    Experience: (
        <div>
            <p className="text-blue-400 font-semibold">Freelance Web Developer</p>
            <p className="text-gray-300 text-sm">2022 – Present</p>
            <ul className="list-disc ml-5 mt-2 text-gray-300 text-sm">
                <li>Built full-stack web apps with MERN stack</li>
                <li>Collaborated with clients to turn ideas into products</li>
            </ul>
        </div>
    ),
}

export default function Resume() {
    const [activeTab, setActiveTab] = useState('Biography')

    return (
        <section className="bg-[#1e293b] py-16 px-6 text-white">
            <div className="container mx-auto md:w-3/5">
                <h2 className="text-3xl font-bold mb-8 text-center">My Resume</h2>
                <div className="flex justify-center mb-6 gap-4 flex-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-md transition ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="bg-[#0f172a] p-6 rounded-xl shadow">{content[activeTab]}</div>
            </div>
        </section>
    )
}
