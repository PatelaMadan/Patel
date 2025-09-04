import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-[#1A0B2E] min-h-screen text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] via-[#1A0B2E] to-[#2A1B3D] pointer-events-none" />
      
      {/* Floating elements */}
      <FloatingElements />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <main className="space-y-32 py-16">
            <Hero />
            <Experience />
            {/* <Projects /> */}
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
