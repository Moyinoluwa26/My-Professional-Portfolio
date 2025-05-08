// src/components/Resume.js
'use client';
import React, { useState } from 'react';
import Image from "next/image";
import ReadMoreText from './ReadMore';
import Html from './logos/html.logo.png';
import Css from './logos/css-logo.png';
import Java from './logos/JavaScript-logo.png';
import Node from './logos/Node.js.png';
import ReactIm from './logos/React.png';
import Expr from './logos/Express.png';
import Nextt from './logos/Nextt.png';
import Tailwind from './logos/Tailwind.png'
import Mongo from './logos/Mogodb.png';
/*import Native from './logos/Native.png';
import Nextt from './logos/Nextt.png';
import Tailwind from './logos/Tailwind.png';*/

const tabs = ['Biography', 'Tools', 'Education'];

const Exp = [
    { id: 1, src: Html, style: "shadow-orange-500", title: "HTML" },
    { id: 2, src: Css, style: "shadow-blue-500", title: "CSS" },
    { id: 3, src: Java, style: "shadow-yellow-500", title: "Javascript (ES6+)" },
    { id: 4, src: Node, style: "shadow-green-400", title: "Node.js" },
    { id: 5, src: ReactIm, style: "shadow-sky-600", title: "React" },
    { id: 6, src: Expr, style: "shadow-purple-500", title: "Express.js" },
    { id: 7, src: Nextt, style: "shadow-black", title: "Next.js" },
    { id: 8, src: Mongo, style: "shadow-green-600", title: "MongoDB" },
    { id: 9, src: Tailwind, style: "shadow-sky-600", title: "Express.js" }

    /* { id: 7, src: Native, style: "shadow-purple-500", title: "Express.js" },
     { id: 8, src: Nextt, style: "shadow-black", title: "Next.js" },
     { id: 9, src: Tailwind, style: "shadow-purple-500", title: "Express.js" },
 */

]

const content = {
    Biography: (
        <div>
            <h2 className="text-gray-300 leading-relaxed">
                <ReadMoreText text={`I’m a full-stack developer focused on building modern, efficient, and scalable web and mobile applications. My main stack includes Next.js, Node.js, Express, and MongoDB, and I also work with React Native to create sleek cross-platform mobile experiences. I take pride in writing clean, maintainable code and building features that prioritize both performance and user experience—like secure authentication systems with session tracking and multi-device management.

Alongside my development work, I’m pursuing a BSc in Accounting at Obafemi Awolowo University (OAU). My academic journey fuels my interest in fintech and data-driven solutions. Through my ongoing research on “The Triple Helix of Fintech Performance,” I explore how financial metrics like cash flow uncertainty, leverage, and profitability can shape innovation in tech.

I’m driven by a passion for learning and a mindset geared toward solving real-world problems. Whether it’s through code, research, or collaboration, I’m always building with purpose.
                `}
                />
            </h2>
        </div>
    ),
    Tools: (
        <div className='w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-8  text-center py-8 md:px-12 sm:px-0 '>

            {Exp.map(({ id, src, style, title }) => {
                return (
                    <div key={id} className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg ${style} object-contain`}>
                        {/*{id == 1 && <>This</>}*/}
                        <Image src={src} alt={title} className={`mt-3 w-20 mx-auto object-contain`} />
                        <p className='mt-4 font-bold text-white'>{title}</p>
                    </div>)
            })}
        </div>
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
        <section className="bg-[#1e293b] py-16 px-6 text-white" id="resume">
            <div className="container mx-auto md:w-3/5">
                <h2 className="text-3xl font-bold mb-8 text-center">My Resume</h2>
                <div className="flex justify-center md:-mb-9 mb-6  rounded-xl  md:p-3 md:max-w-lg  mx-auto gap-4 flex-wrap">
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
                <div className="bg-[#0f172a]  pt-12 px-6 pb-6 rounded-xl shadow">{content[activeTab]}</div>
            </div>
        </section>
    )
}
