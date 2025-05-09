

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css';




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oyejide Moyinoluwa – Web Developer Portfolio",
  description:
    "Explore the professional portfolio of Oyejide Moyinoluwa – A Software Developer specializing in Web3 Websites and FinTech Apps",
  keywords: [
    "Oyejide Moyinoluwa",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Development",
    "Responsive Design",
    "JavaScript Developer"
  ],
  authors: [{ name: "Oyejide Moyinoluwa" }],
  creator: "Oyejide Moyinoluwa",
  metadataBase: new URL("https://moyinoluwaresume.vercel.app/"),
  openGraph: {
    title: "Oyejide Moyinoluwa – Web Developer Portfolio",
    description:
      "Showcasing clean UI, responsive design, and fast web apps using React and Next.js.",
    url: "https://moyinoluwaresume.vercel.app/",
    siteName: "Oyejide Moyinoluwa Portfolio",
    images: [
      {
        url: 'https://moyinoluwaresume.vercel.app/components/logos/Mosco.jpg',
        width: 1200,
        height: 630,
        alt: "Preview of Oyejide Moyinoluwa's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oyejide Moyinoluwa – Frontend Developer Portfolio",
    description:
      "Browse the portfolio of a frontend developer skilled in React, Next.js, and React-Nativey.",
    images: "https://moyinoluwaresume.vercel.app/components/logos/Mosco.jpg",
    creator: "@Moyinol89289566",
  },
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen" /*px-4 md:px-10 lg:px-24*/>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
