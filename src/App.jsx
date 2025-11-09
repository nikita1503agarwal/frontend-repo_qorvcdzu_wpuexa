import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Reviews from './components/Reviews';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600" />
            <span className="font-extrabold text-lg">MoveWell Physio</span>
          </div>
          <a href="#book" className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg">Book Free Assessment</a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Reviews />
        <CTA />
      </main>

      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MoveWell Physiotherapy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
