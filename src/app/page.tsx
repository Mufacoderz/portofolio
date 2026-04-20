import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}