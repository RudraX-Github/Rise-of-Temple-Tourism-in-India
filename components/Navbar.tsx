import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-100 px-6 py-4">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-amber-200">
            ॐ
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-gray-900 tracking-tighter italic">Sacred Almanac</span>
            <span className="text-[9px] font-black text-amber-600 uppercase tracking-[0.3em]">Comprehensive Edition V3.0</span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
          <a href="#policies" className="hover:text-amber-600 transition">Strategy Hub</a>
          <a href="#report" className="hover:text-amber-600 transition">Strategic Report</a>
          <a href="#atlas" className="hover:text-amber-600 transition">Master Atlas</a>
          <a href="#analytics" className="hover:text-amber-600 transition">Economics</a>
        </div>
        <a href="https://tourism.gov.in" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-900 text-white text-[10px] font-black rounded-lg shadow-xl shadow-gray-200 hover:bg-black transition uppercase tracking-widest">
          Official Portal ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
