import React, { useState, useEffect } from 'react';
import { DATABASE } from '../constants';
import { Circuit, Stop, Category } from '../types';

const AtlasSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(DATABASE[0].category);
  const [activeCircuitId, setActiveCircuitId] = useState<string>(DATABASE[0].circuits[0].id);
  const [activeStopIdx, setActiveStopIdx] = useState<number>(0);

  // Derived state
  const currentCategoryData = DATABASE.find(c => c.category === activeCategory) as Category;
  const currentCircuitData = currentCategoryData.circuits.find(c => c.id === activeCircuitId) || currentCategoryData.circuits[0];
  const currentStopData = currentCircuitData.stops[activeStopIdx] || currentCircuitData.stops[0];

  // Effect to reset circuit selection when category changes
  useEffect(() => {
    const newCategoryData = DATABASE.find(c => c.category === activeCategory);
    if (newCategoryData && newCategoryData.circuits.length > 0) {
        // If the current circuit is not in the new category, reset to the first one
        const isCurrentCircuitInNewCat = newCategoryData.circuits.some(c => c.id === activeCircuitId);
        if (!isCurrentCircuitInNewCat) {
            setActiveCircuitId(newCategoryData.circuits[0].id);
            setActiveStopIdx(0);
        }
    }
  }, [activeCategory, activeCircuitId]);

  // Effect to ensure stop index is valid when circuit changes
  useEffect(() => {
     setActiveStopIdx(0);
  }, [activeCircuitId]);


  return (
    <section id="atlas" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h2 className="text-5xl font-black mb-3">The Global Circuit Atlas</h2>
          <p className="text-gray-600">Explore the complete spiritual directory. Every destination listed for total visibility.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 rounded-full">
          {DATABASE.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat.category
                  ? 'bg-emerald-800 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 flex flex-col lg:flex-row h-[900px] overflow-hidden">
        {/* Pane 1: Circuits List */}
        <aside className="w-full lg:w-72 bg-gray-50/50 border-r border-gray-200 p-8 flex flex-col h-full">
          <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8">Select Circuit</h5>
          <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-2">
            {currentCategoryData.circuits.map((circuit) => (
              <button
                key={circuit.id}
                onClick={() => setActiveCircuitId(circuit.id)}
                className={`w-full text-left p-5 rounded-2xl border border-transparent transition-all group flex items-center ${
                  activeCircuitId === circuit.id
                    ? 'bg-amber-50 border-l-4 border-l-amber-600 text-amber-900 font-bold'
                    : 'text-gray-500 hover:bg-white'
                }`}
              >
                <span className="text-2xl mr-4 group-hover:scale-125 transition-transform">{circuit.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-tight">{circuit.name}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Pane 2: Destination Directory */}
        <aside className="w-full lg:w-80 bg-white border-r border-gray-200 p-8 flex flex-col h-full shadow-inner">
          <h5 className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-8">Destination List</h5>
          <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-2">
            {currentCircuitData.stops.map((stop, idx) => (
              <button
                key={stop.name}
                onClick={() => setActiveStopIdx(idx)}
                className={`w-full text-left p-5 rounded-xl border border-transparent text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-between ${
                  activeStopIdx === idx
                    ? 'bg-amber-600 text-white shadow-md transform translate-x-1'
                    : 'bg-white border-gray-100 text-gray-400 hover:border-amber-200'
                }`}
              >
                <span>{stop.name}</span>
                <span className={`text-[8px] font-black italic ${activeStopIdx === idx ? 'text-amber-200' : 'opacity-60'}`}>{stop.loc}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Pane 3: Deep-Dive View */}
        <div className="flex-1 bg-white p-8 md:p-14 overflow-y-auto custom-scrollbar h-full relative">
          <div key={`${currentCircuitData.id}-${activeStopIdx}`} className="animate-up">
            <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-10">
              <div className="max-w-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[9px] font-black rounded border border-amber-100 uppercase tracking-widest">
                    {currentCircuitData.name}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{currentStopData.loc} Hub</span>
                </div>
                <h3 className="text-6xl md:text-7xl font-black text-gray-900 leading-none mb-6 tracking-tighter">
                  {currentStopData.name}
                </h3>
                <p className="text-gray-500 font-serif text-2xl italic leading-relaxed">"{currentStopData.context}"</p>
              </div>
              <a
                href={currentStopData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-amber-600 text-white text-[11px] font-black rounded-2xl shadow-2xl shadow-amber-200 hover:bg-amber-700 transition flex items-center justify-center text-center uppercase tracking-widest"
              >
                Official Portal <span className="ml-2">↗</span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 underline decoration-amber-500 decoration-4 underline-offset-8">
                    Activities & Rituals
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentStopData.todo.map((activity) => (
                      <div key={activity} className="flex items-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm group hover:border-amber-300 transition-all">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-5 group-hover:scale-150 transition-transform"></div>
                        <span className="text-sm font-bold text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="bg-gray-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] mb-10 italic">Hub Strategy Integration</h4>
                  <div className="space-y-8">
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Main Scheme</span>
                      <span className="text-[10px] font-black text-amber-500 uppercase">PRASHAD Beneficiary</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Growth Tier</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">High Volume / Strategic</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-4">
                      <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Safety Rating</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">SAATHI Gold Certified</span>
                    </div>
                  </div>
                  <div className="mt-12 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-[10px] text-amber-200/80 leading-relaxed italic">
                      <strong>Logistical Advisory:</strong> Ensure biometric registration for Uttarakhand/J&K nodes. Verified guides available via official counters only.
                    </p>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                </div>

                <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 flex items-start shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mr-6 flex-shrink-0 font-black rounded-xl shadow-lg shadow-emerald-100 italic">
                    ✓
                  </div>
                  <div>
                    <h5 className="font-black text-emerald-800 text-sm uppercase tracking-widest">Swadesh Darshan SD 2.0</h5>
                    <p className="text-[11px] text-emerald-600 mt-3 leading-relaxed font-medium">
                      This hub receives priority funding for sustainable destination management, including local handicraft promotion and zero-waste logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtlasSection;
