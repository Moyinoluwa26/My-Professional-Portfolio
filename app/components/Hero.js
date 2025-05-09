import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Moyin from './logos/Moyinn.png';


export default function Hero() {
    return (
        <div>
            <Head>
                <title>Oyejide Moyinoluwa | Web Developer Portfolio</title>
                <meta name="description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications. Always learning, always building." />
                <meta property="og:title" content="Oyejide Moyinoluwa | Web Developer Portfolio" />
                <meta property="og:description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications. Always learning, always building." />
                <meta property="og:image" content={Moyin} />
                <meta property="og:url" content="https://moyinoluwaresume.vercel.app/" />
                <meta name="twitter:title" content="Oyejide Moyinoluwa | Web Developer Portfolio" />
                <meta name="twitter:description" content="Hi, I'm Oyejide Moyinoluwa, a web developer specializing in modern, responsive web applications." />
                <meta name="twitter:image" content="/profile.png" />
                <meta name="twitter:card" content="summary_large_image" />

            </Head>

            <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-20 px-6 " id="home" >
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:w-3/5">

                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6 flex flex-col md:my-24 leading-none">

                        <h1 className="text-3xl md:text-4xl font-bold mb-[5] ">
                            Hi, I am <span className="text-blue-400">Oyejide </span> Moyinoluwa

                        </h1>

                        <h2 className='text-3xl '>
                            Web Developer
                        </h2>
                        <p className="text-gray-300 max-w-md text-primary">
                            I specialize in creating modern, responsive web applications. Always learning, always building.
                        </p>

                        <div className="flex items-center gap-4">
                            <a href='./Resume.pdf' className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 transition">My Resume</a>
                            <div className="flex gap-3">
                                <a href="https://linkedin.com/in/oyejide-moyinoluwa"><Linkedin className="hover:text-blue-400" /></a>
                                <a href="https://github.com/Moyinoluwa26"><Github className="hover:text-blue-400" /></a>
                                <a href="mailto:themoyinguy@gmail.com" aria-label="Send Email">
                                    <Mail className="hover:text-blue-400 transition-colors duration-200" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 my-15">
                        {/*<Image
                            src={Moyin}
                            alt="Profile"
                            className="w-full h-full mx-auto max-w-sm  object-cover {/*animate-ping"
                        />*/}
                        <div className=" flex justify-center items-center ">
                            <div className=" ">
                                <div className="flex w-[300px] h-[300px] justify-center items-center relative bg-black rounded-full ">
                                    <Image
                                        src={Moyin}
                                        alt="Profile"
                                        className=" h-full w-full object-cover rounded-full"
                                    />
                                    <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-[spin_3s_linear_infinite]  "></div>
                                    <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute rotate-90 animate-[spin_3s_linear_infinite] scale-x-[-1]  "></div>
                                    <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute rotate-180 "></div>
                                    <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-[ping_5s_linear_infinite]"></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}



/*\ "" shadow-lg ring-4 ring-blue-500/30"*/