import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import Head from 'next/head';

export default function Hero() {
    return (
        <div>
            <Head>
                <title>Oyejide Moyinoluwa | Web Developer Portfolio</title>
                <meta name="description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications. Always learning, always building." />
                <meta property="og:title" content="Oyejide Moyinoluwa | Web Developer Portfolio" />
                <meta property="og:description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications. Always learning, always building." />
                <meta property="og:image" content="/profile.png" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta name="twitter:title" content="Oyejide Moyinoluwa | Web Developer Portfolio" />
                <meta name="twitter:description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications." />
                <meta name="twitter:image" content="/profile.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6">
                        <p className="text-blue-400 uppercase text-sm">Welcome To My Portfolio</p>
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Hi, I am <span className="text-blue-500">Oyejide Moyinoluwa</span><br />
                            Web Developer
                        </h1>
                        <p className="text-gray-300 max-w-md">
                            I specialize in creating modern, responsive web applications. Always learning, always building.
                        </p>

                        <div className="flex items-center gap-4">
                            <a href="#" className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 transition">More About Me</a>
                            <div className="flex gap-3">
                                <a href="#"><Linkedin className="hover:text-blue-400" /></a>
                                <a href="#"><Github className="hover:text-blue-400" /></a>
                                <a href="#"><Mail className="hover:text-blue-400" /></a>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2">
                        <img
                            src="/profile.png"
                            alt="Profile"
                            className="w-full max-w-sm rounded-xl shadow-lg ring-4 ring-blue-500/30"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
