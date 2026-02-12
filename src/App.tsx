import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SystemOverview from './components/SystemOverview';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import LiveSystems from './components/LiveSystems';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <Navigation />

      <main>
        <Hero />
        <SystemOverview />
        <Projects />
        <Capabilities />
        <LiveSystems />
        <Philosophy />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-500 text-sm border-t border-white/10">
        <p>Engineered Systems by Jeeva M. I</p>
      </footer>
    </div>
  );
}

export default App;
