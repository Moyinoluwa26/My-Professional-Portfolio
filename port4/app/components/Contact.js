'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [status, setStatus] = useState('');
    const [done, setDone] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const toggleForm = () => {
        setDisable(!disable);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // 🔁 Replace this with your actual Formspree endpoint:
        const formEndpoint = 'https://formspree.io/f/xkgjkkrk'

        try {
            const res = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await res.json()

            if (res.ok) {
                setStatus('Message sent successfully...')
                setDone(!done)
                setFormData({ name: '', email: '', message: '' })
                toggleForm();
            } else {
                setStatus(result.error || 'Something went wrong ❌');
                setDone(done)
            }
        } catch (error) {
            setStatus('Something went wrong ❌')
            setDone(done)
        }
    }

    return (
        <section
            id="contact"
            className="bg-[#1e293b] text-white py-16 px-6 w-full"
            data-aos="slide-up"
        >
            <div className="container mx-auto md:w-3/5">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 flex flex-col my-3 rounded-md"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${disable && 'opacity-50 cursor-not-allowed'}`}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${disable && 'opacity-50 cursor-not-allowed'}`}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className={`w-full p-3 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500${disable && 'opacity-50 cursor-not-allowed'}`}
                            required
                        />
                        {!done ?
                            <button
                                type="submit"
                                className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition mx-auto mt-5 md:ml-0"
                            >
                                Send Message
                            </button> :

                            <p className=" bg-blue-600 py-2 text-2xl text-center mt-3  text-white rounded-xl">
                                {status}
                            </p>




                        }

                        {/*{status && (
                            <p className="text-2xl text-center mt-3  text-green-400">
                                {status}
                            </p>
                        )}*/}
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-6 flex flex-col justify-center mx-auto">
                        <div className="flex items-center gap-4">
                            <Mail className="text-blue-400" />
                            <span>themoyinguy@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-blue-400" />
                            <span>+234 906 592 4671</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="text-blue-400" />
                            <span>Ile-Ife, Osun State, Nigeria</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
