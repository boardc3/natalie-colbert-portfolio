import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import TypographyShowcase from "../components/TypographyShowcase";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TypographyShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
