import React from 'react';

const PolicySection: React.FC = () => {
  return (
    <section id="policies" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black mb-4 tracking-tight">The Policy Command Center</h2>
          <p className="text-gray-600 text-lg">Detailed analysis of the government's strategic schemes revitalizing the spiritual landscape.</p>
        </div>
        <div className="flex items-center space-x-6 bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 shadow-sm">
          <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-100">
            🏛️
          </div>
          <div>
            <div className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-1">Fiscal Allocation</div>
            <div className="text-2xl font-black text-emerald-900">₹3,500 Cr+ Outlay</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* PRASHAD Card */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all">P</div>
          <h3 className="text-2xl font-bold mb-4">PRASHAD</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-10">Pilgrimage Rejuvenation and Spiritual Augmentation Drive. Focuses on beautification and infrastructure.</p>
          <ul className="text-[10px] font-bold text-gray-400 space-y-2 uppercase tracking-widest mb-10">
            <li>• 54+ Projects Sanctioned</li>
            <li>• ₹1,726 Cr Approved Cost</li>
            <li>• 100% Central Funding</li>
          </ul>
          <a href="#" className="text-xs font-black text-amber-600 border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">SCHEME STATUS ↗</a>
        </div>

        {/* Swadesh Darshan Card */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all">S</div>
          <h3 className="text-2xl font-bold mb-4">Swadesh Darshan</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-10">Integrated theme-based circuits. SD 2.0 pivots to sustainable and responsible destination management.</p>
          <ul className="text-[10px] font-bold text-gray-400 space-y-2 uppercase tracking-widest mb-10">
            <li>• 52 New Dest. Selections</li>
            <li>• Experiential Tourism Focus</li>
            <li>• Destination-Centric Approach</li>
          </ul>
          <a href="#" className="text-xs font-black text-emerald-600 border-b-2 border-emerald-100 hover:border-emerald-600 transition pb-1">SD 2.0 DATA ↗</a>
        </div>

        {/* CBSP Card */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">C</div>
          <h3 className="text-2xl font-bold mb-4">CBSP</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-10">Capacity Building for Service Providers. Training local youth as certified guides and hospitality staff.</p>
          <ul className="text-[10px] font-bold text-gray-400 space-y-2 uppercase tracking-widest mb-10">
            <li>• Multi-lingual Training</li>
            <li>• Storytelling Certs</li>
            <li>• Local Employment Anchor</li>
          </ul>
          <a href="#" className="text-xs font-black text-blue-600 border-b-2 border-blue-100 hover:border-blue-600 transition pb-1">GUIDE PORTAL ↗</a>
        </div>

        {/* Digital Infrastructure Card */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">D</div>
          <h3 className="text-2xl font-bold mb-4">NIDHI + SAATHI</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-10">Digitizing the hospitality backbone. Ensuring standard hygiene and safety through AI-enabled surveillance.</p>
          <ul className="text-[10px] font-bold text-gray-400 space-y-2 uppercase tracking-widest mb-10">
            <li>• Verified Unit Registry</li>
            <li>• AI Crowd Monitoring</li>
            <li>• Cashless Ecosystems</li>
          </ul>
          <a href="#" className="text-xs font-black text-purple-600 border-b-2 border-purple-100 hover:border-purple-600 transition pb-1">NIDHI REGISTRY ↗</a>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
