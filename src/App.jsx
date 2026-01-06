import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-bg-dark text-white selection:bg-primary/30 selection:text-white">
            {/* Global Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(168,85,247,0.05)_0%,transparent_50%)]" />
            </div>

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Services />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
