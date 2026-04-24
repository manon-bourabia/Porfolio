import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";
import GradientBlobs from "./components/GradientBlobs";

function App() {
  return (
    <div className="relative min-h-screen text-foreground">
      <GradientBlobs />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="relative border-t border-white/5 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            (c) {new Date().getFullYear()} Manon El Mokhtari - Tous droits reserves
          </p>
          <p className="font-mono text-xs">
            Concu et code a Bordeaux
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
