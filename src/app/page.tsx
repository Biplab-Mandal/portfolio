import BackgroundGrid from "@/components/background/background-grid";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 w-full">
        {/* Hero */}
        <Hero />

        {/* About */}
        {/* <About /> */}

        {/* Skills */}
        <Skills />


        {/* Experience */}
        <Experience />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <Contact />

        {/* Projects */}
        {/* <Projects /> */}
      </main>

      <Footer />
    </>
  );
}