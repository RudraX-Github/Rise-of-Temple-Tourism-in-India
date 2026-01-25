import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PolicySection from './components/PolicySection';
import ReportSection from './components/ReportSection';
import AtlasSection from './components/AtlasSection';
import AnalyticsSection from './components/AnalyticsSection';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-amber-100 min-h-screen relative">
      <div className="fixed inset-0 z-0 bg-texture opacity-40 pointer-events-none mix-blend-multiply"></div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-20 space-y-32">
          <PolicySection />
          <ReportSection />
          <AtlasSection />
          <AnalyticsSection />
        </main>
        <footer className="bg-white border-t border-gray-100 py-32 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-4xl font-black text-amber-700 mb-10 italic font-serif">Faith at the Core, Growth in the Branches.</h3>
            <p className="text-gray-400 text-[11px] mb-14 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">
              Synthesized from Ministry of Tourism Data, State Tourism Portals, and Temple Trust Archives. This Almanac is for informational purposes only. Travel responsibly and follow local advisories.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
              <span>Ministry of Tourism</span>
              <span>•</span>
              <span>Incredible India</span>
              <span>•</span>
              <span>PRASHAD Scheme</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;