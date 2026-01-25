import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="bg-white pt-20 pb-32 border-b border-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full mb-8 border border-amber-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest">Updated: 2.5 Billion Domestic Visits Recorded</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter">
          Divine <span className="text-amber-600 italic">Growth</span>.
        </h1>
        <p className="text-xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Synthesizing the structural transformation of Indian tourism. A comprehensive analysis of the <span className="text-gray-900 font-bold underline decoration-amber-500">Sacred Economy</span> and the multi-billion dollar engine reshaping Bharat.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#report" className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-200 hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
            Read Strategic Report
          </a>
          <a href="#atlas" className="bg-white text-emerald-800 border border-emerald-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition">
            Explore Atlas
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none text-[450px] font-black tracking-tighter">
        BHARAT
      </div>
    </header>
  );
};

export default Hero;
