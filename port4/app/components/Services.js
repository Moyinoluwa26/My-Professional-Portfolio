// src/components/Services.js
import React from 'react'
import {
    Monitor,
    Code2,
    Smartphone,
    Layers
} from 'lucide-react'

const services = [
    {
        icon: <Layers size={28} />,
        title: 'Creative Design',
        desc: 'I bring unique concepts to life with modern, clean aesthetics.',
    },
    {
        icon: <Monitor size={28} />,
        title: 'Web Design',
        desc: 'I design responsive, cross-browser compatible websites.',
    },
    {
        icon: <Code2 size={28} />,
        title: 'Branding',
        desc: 'Crafting a strong, consistent identity for your business.',
    },

    {
        icon: <Smartphone size={28} />,
        title: 'Mobile App',
        desc: 'Designing and building intuitive mobile experiences.',
    },
]

export default function Services() {
    return (
        <section className="bg-[#0f172a] text-white py-16 px-6  ">
            <div className="container mx-auto text-center md:w-3/5">
                <h2 className="text-3xl font-bold mb-10">What I Do</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] p-6 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <div className="text-blue-400 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-300 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
