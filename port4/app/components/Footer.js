// src/components/Footer.js
import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-gray-400 py-10 flex px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Oyejide Moyinoluwa </h3>

                <div className="flex justify-center gap-6 mb-6">
                    <a href="https://github.com/Moyinoluwa26" target="_blank" rel="noreferrer">
                        <Github className="hover:text-white transition" />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                        <Linkedin className="hover:text-white transition" />
                    </a>
                    <a href="mailto:youremail@example.com">
                        <Mail className="hover:text-white transition" />
                    </a>
                </div>

                <p className="text-sm">&copy; {new Date().getFullYear()} Oyejide Moyinoluwa . All rights reserved.</p>
            </div>
        </footer>
    )
}
