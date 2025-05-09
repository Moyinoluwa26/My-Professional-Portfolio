import Hero from "./components/Hero";
import Services from "./components/Services";
import Resume from "./components/Resume";
/*import Portfolio from "./components/Portfolio";*/
import Contact from "./components/Contact";
import "./globals.css";



export default function Home() {
  return (
    <div className="max-w-screen overflow-x-hidden ">





      <div className="fixed md:top-120 bottom-60 left-10 md:text-[8rem] text-[4rem] font-bold text-white/5 select-none pointer-events-none ">
        <span className="animate-[ping_5s_linear_infinite] ">Moyinoluwa</span>
      </div>



      <Hero />

      <Services />

      <Resume />

      {/*<Portfolio />*/}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full "></div>
      <Contact />
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full "></div>

    </div>
  );
}
