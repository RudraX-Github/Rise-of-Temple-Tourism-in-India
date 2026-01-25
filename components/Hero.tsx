import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header className="bg-white pt-20 pb-32 border-b border-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full mb-8 border border-amber-100"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest">Updated: 2.5 Billion Domestic Visits Recorded</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-9xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter"
        >
          Divine <span className="text-amber-600 italic font-serif">Growth</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-500 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Synthesizing the structural transformation of Indian tourism. A comprehensive analysis of the <span className="text-gray-900 font-bold underline decoration-amber-500 decoration-2 underline-offset-4">Sacred Economy</span> and the multi-billion dollar engine reshaping Bharat.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="#report" className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-200 hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">
            Read Strategic Report
          </a>
          <a href="#atlas" className="bg-white text-emerald-800 border border-emerald-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300">
            Explore Atlas
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[20vw] font-black tracking-tighter text-gray-900 whitespace-nowrap"
      >
        BHARAT
      </motion.div>
    </header>
  );
};

export default Hero;