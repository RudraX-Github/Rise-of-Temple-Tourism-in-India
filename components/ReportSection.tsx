import React from 'react';

const ReportSection: React.FC = () => {
  return (
    <section id="report" className="scroll-mt-24 py-20 bg-white rounded-[4rem] border border-amber-50 shadow-2xl overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-8 md:px-16">
        {/* Report Header */}
        <div className="border-b-4 border-amber-600 pb-12 mb-16">
          <h5 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Whitepaper | Strategic Analysis</h5>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-8">The Sacred Economy</h2>
          <p className="text-2xl font-serif text-gray-500 italic">A Comprehensive Analysis of the Rise, Economic Impact, and Future of Temple Tourism in India (2024-2047)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
          {/* Table of Contents / Key Metrics */}
          <aside className="space-y-12">
            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100">
              <h6 className="text-[10px] font-black text-amber-800 uppercase tracking-widest mb-6">Executive Summary Focus</h6>
              <p className="text-xs text-amber-900 font-medium leading-relaxed">Structural transformation of Tirtha Yatra into a multi-billion dollar economic engine reshaping urban planning and foreign policy.</p>
            </div>
            
            <div className="space-y-4">
              <h6 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Analysis Chapters</h6>
              <nav className="flex flex-col space-y-2 text-xs font-bold text-gray-600">
                <a href="#ch1" className="hover:text-amber-600">1. Paradigm Shift</a>
                <a href="#ch2" className="hover:text-amber-600">2. Spiritual Urbanism</a>
                <a href="#ch3" className="hover:text-amber-600">3. State Performance</a>
                <a href="#ch4" className="hover:text-amber-600">4. Economic Multipliers</a>
                <a href="#ch5" className="hover:text-amber-600">5. Soft Power Geometry</a>
              </nav>
            </div>

            <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white">
              <h6 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">The Paradox</h6>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">"Success of mass mobilization threatens the ecological and structural integrity of fragile terrains like Joshimath."</p>
            </div>
          </aside>

          {/* Main Report Content */}
          <article className="prose prose-slate max-w-none space-y-16 text-gray-800 leading-relaxed">
            
            <div id="ch1">
              <h3 className="text-3xl font-black text-gray-900 mb-6 italic underline decoration-amber-500 decoration-8 underline-offset-4">1. The Paradigm Shift</h3>
              <p className="text-lg mb-6">India’s identity has been inextricably linked to its sacred geography for millennia. However, the last decade (2014–2024) has marked a definitive shift: the transition of the Indian pilgrim from a purely spiritual seeker to a <strong>"religious tourist"</strong> who demands connectivity, hygiene, safety, and digital access.</p>
              <p className="text-lg">This "assetization" of cultural heritage through schemes like PRASHAD has transitioned the sector from "monument conservation" to <strong>"area-based urban renewal."</strong></p>
            </div>

            <div id="ch2">
              <h3 className="text-3xl font-black text-gray-900 mb-6 italic">2. Renaissance of "Spiritual Urbanism"</h3>
              <p className="text-lg mb-8">The operationalization of mega-corridors—most notably the Kashi Vishwanath Corridor in Varanasi and the Ram Mandir complex in Ayodhya—has demonstrated a replicable model. These represent a new architectural language blending traditional aesthetics with modern urban planning: wide pedestrian zones, underground utilities, and integrated command centers.</p>
              <blockquote className="bg-gray-50 p-10 rounded-3xl border-l-8 border-amber-600 font-serif text-xl italic my-10">
                "Spiritual augmentation leads to immediate economic multipliers. Kashi Vishwanath alone injected ₹1.25 lakh crore into the UP economy since 2021."
              </blockquote>
            </div>

            <div id="ch3">
              <h3 className="text-3xl font-black text-gray-900 mb-8 italic">3. State Performance Data (2023)</h3>
              <div className="overflow-x-auto bg-gray-50 rounded-3xl border border-gray-100">
                <table className="min-w-full text-left">
                  <thead className="bg-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <tr>
                      <th className="px-6 py-4">State</th>
                      <th className="px-6 py-4">DTVs (Millions)</th>
                      <th className="px-6 py-4">Primary Anchors</th>
                      <th className="px-6 py-4">Key Trend</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-bold divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Uttar Pradesh</td>
                      <td className="px-6 py-4 text-amber-600">478.5</td>
                      <td className="px-6 py-4">Ayodhya, Kashi, Mathura</td>
                      <td className="px-6 py-4">Mega-Corridor "Double Engine"</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Tamil Nadu</td>
                      <td className="px-6 py-4 text-amber-600">286.0</td>
                      <td className="px-6 py-4">Madurai, Rameswaram</td>
                      <td className="px-6 py-4">High Density Decentralized</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Andhra Pradesh</td>
                      <td className="px-6 py-4 text-amber-600">254.7</td>
                      <td className="px-6 py-4">Tirupati, Srisailam</td>
                      <td className="px-6 py-4">High Revenue-per-Pilgrim</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Karnataka</td>
                      <td className="px-6 py-4 text-amber-600">284.1</td>
                      <td className="px-6 py-4">Hampi, Udupi</td>
                      <td className="px-6 py-4">Heritage-Worship Mix</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="ch4">
              <h3 className="text-3xl font-black text-gray-900 mb-6 italic">4. The Economic Engine of Faith</h3>
              <p className="text-lg mb-6">The economic footprint extends far beyond the donation box (Hundi). In 2024, the TTD sold 12.14 crore Laddus, creating a supply chain supporting the agricultural hinterland. Ayodhya has triggered a "land rush," with major hotel chains acquiring properties for a projected 5-crore annual visitor base.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                  <h5 className="text-emerald-800 font-black text-sm uppercase mb-2"> GDP Projections</h5>
                  <p className="text-emerald-900 text-sm font-medium leading-relaxed">Tourism is projected to reach $400B by 2031. Given 70% is religious, the "Temple Economy" is a cornerstone of the service sector.</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                  <h5 className="text-blue-800 font-black text-sm uppercase mb-2"> Artisan Safety Net</h5>
                  <p className="text-blue-900 text-sm font-medium leading-relaxed">Pilgrim footfall acts as a crucial safety net for Banarasi Silk and Madurai Meenakari artisans amidst fluctuating global trade.</p>
                </div>
              </div>
            </div>

            <div id="ch5">
              <h3 className="text-3xl font-black text-gray-900 mb-6 italic underline decoration-amber-500 decoration-8 underline-offset-4">5. Soft Power & Future Outlook</h3>
              <p className="text-lg mb-8">Religious tourism has emerged as a key pillar of India’s <strong>"Neighborhood First"</strong> and <strong>"Act East"</strong> policies. The Buddhist and Ramayan Circuits are critical instruments of soft power, counter-balancing regional competitors by knitting civilizational bonds with Nepal, Sri Lanka, and SE Asia.</p>
              
              <div className="bg-gray-900 text-white p-12 rounded-[3.5rem] shadow-xl">
                <h4 className="text-2xl font-bold mb-8 text-amber-500 italic">Vision 2047: Strategic Recommendations</h4>
                <ul className="space-y-6 text-sm font-medium">
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-amber-500 mr-4 mt-2"></span> Pivot from "Volume" to "Value" via Wellness integration (Yoga/Ayurveda).</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-amber-500 mr-4 mt-2"></span> Implementation of "Green Pilgrimage" protocols to resolve plastic footprints.</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-amber-500 mr-4 mt-2"></span> Mandatory scientific carrying capacity audits for Himalayan shrines.</li>
                  <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-amber-500 mr-4 mt-2"></span> Institutionalization of TTD-style autonomous management models.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;
