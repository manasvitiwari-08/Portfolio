import { Toaster } from "@/components/ui/sonner";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-body">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </div>
    </ThemeProvider>
  );
}
