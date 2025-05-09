'use client';


import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Resume', href: '#resume' },
    /*{ label: 'Portfolio', href: '#portfolio' },*/
    { label: 'Contact', href: '#contact' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-50 bg-[#0f172a] shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-400">Moyin</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-white hover:text-blue-400 transition"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-4 bg-[#0f172a]">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white hover:text-blue-400 transition "
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
