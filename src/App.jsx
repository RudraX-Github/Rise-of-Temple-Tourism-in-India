import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, Menu, X } from 'lucide-react';

// --- DATA CORE (Synthesized from the HTML Source) ---
const DATABASE = [
  {
    category: 'Sacred Pillars',
    circuits: [
      {
        id: 'jyotir',
        name: 'The 12 Jyotirlingas',
        icon: '🔱',
        desc: 'The Radiant Sign of Shiva. The complete set of 12 sacred shrines.',
        stops: [
          { name: 'Somnath', loc: 'Gujarat', context: 'The First Jyotirlinga. Symbol of resilience and eternal survival.', todo: ['Morning Shore Aarti', 'Triveni Sangam Bath', 'Light & Sound Show'], link: 'https://www.somnath.org/' },
          { name: 'Mallikarjuna', loc: 'Andhra Pradesh', context: 'Situated on Srisailam Mountain. Unique Shakti Peeth & Jyotirlinga.', todo: ['Ropeway to Patal Ganga', 'Temple Darshan', 'Safari'], link: 'https://www.srisailadevasthanam.org/' },
          { name: 'Mahakaleshwar', loc: 'Madhya Pradesh', context: 'Only South-facing Jyotirlinga. Famous for Bhasma Aarti.', todo: ['Bhasma Aarti', 'Mahakal Corridor Walk', 'Shipra River Dip'], link: 'https://shreemahakaleshwar.com/' },
          { name: 'Omkareshwar', loc: 'Madhya Pradesh', context: 'Island in Narmada shaped as "OM".', todo: ['Parikrama', 'Mamleshwar Temple', 'Evening Boat Aarti'], link: 'https://shreeomkareshwar.org/' },
          { name: 'Kedarnath', loc: 'Uttarakhand', context: 'Highest Jyotirlinga. Shiva\'s Himalayan abode.', todo: ['Gaurikund Trek', 'Temple Aarti', 'Shankaracharya Samadhi'], link: 'https://badrinath-kedarnath.gov.in/' },
          { name: 'Bhimashankar', loc: 'Maharashtra', context: 'Origin of Bhima river in Sahyadri ranges.', todo: ['Nature trail', 'Gupt Bhimashankar', 'Sanctuary visit'], link: 'https://bhimashankar.in/' },
          { name: 'Kashi Vishwanath', loc: 'Uttar Pradesh', context: 'The heart of Varanasi. Renovated Grand Corridor.', todo: ['Ganga Aarti', 'Heritage Corridor Walk', 'Sunrise Boat Ride'], link: 'https://shreekashivishwanath.org/' },
          { name: 'Trimbakeshwar', loc: 'Maharashtra', context: 'Three-faced linga (Trinity). Origin of Godavari.', todo: ['Kushavarta Dip', 'Brahmagiri Hike', 'Panchavati Tour'], link: 'https://www.trimbakeshwar.org/' },
          { name: 'Vaidyanath', loc: 'Jharkhand', context: 'The Divine Healer. Famous for Sawan Mela.', todo: ['Kanwar Yatra', 'Basukinath temple', 'Mela participation'], link: 'http://baba-baidyanath.com/' },
          { name: 'Nageshwar', loc: 'Gujarat', context: 'Located near Dwarka. First Jyotirlinga on Earth.', todo: ['Bet Dwarka Boat Trip', 'Dwarka City', 'Gopi Talav'], link: 'https://www.gujarattourism.com/' },
          { name: 'Rameshwaram', loc: 'Tamil Nadu', context: 'Southernmost link established by Lord Rama.', todo: ['22 Well Holy Bath', 'Adam\'s Bridge View', 'Dhanushkodi Drive'], link: 'https://rameswaramtemple.tnhce.gov.in/' },
          { name: 'Grishneshwar', loc: 'Maharashtra', context: 'Final Jyotirlinga, near UNESCO Ellora Caves.', todo: ['Ellora Caves Tour', 'Temple Pooja', 'Daulatabad Fort'], link: 'https://grishneshwarjyotirlinga.org/' }
        ]
      },
      {
        id: 'chardham',
        name: 'High Char Dham',
        icon: '🏔️',
        desc: 'The sacred Himalayan quartet required for spiritual completion.',
        stops: [
          { name: 'Yamunotri', loc: 'Uttarakhand', context: 'Source of River Yamuna.', todo: ['Surya Kund', 'Divya Shila Pooja', 'Kharsali Village'], link: 'https://uttarakhandtourism.gov.in/' },
          { name: 'Gangotri', loc: 'Uttarakhand', context: 'Where Mother Ganga touched the earth.', todo: ['Holy dip', 'Submerged Shivling', 'Harsil'], link: 'https://uttarakhandtourism.gov.in/' },
          { name: 'Kedarnath', loc: 'Uttarakhand', context: 'Primary Shiva shrine in the Mandakini valley.', todo: ['Helicopter/Trek', 'Aarti', 'Ghandi Sarovar'], link: 'https://badrinath-kedarnath.gov.in/' },
          { name: 'Badrinath', loc: 'Uttarakhand', context: 'The primary seat of Lord Vishnu.', todo: ['Tapt Kund bath', 'Mana Village', 'Vyas Gufa'], link: 'https://badrinath-kedarnath.gov.in/' }
        ]
      }
    ]
  },
  {
    category: 'Thematic Paths',
    circuits: [
      {
        id: 'ramayan',
        name: 'Ramayan Circuit',
        icon: '🏹',
        desc: 'Following the life path of Shri Rama.',
        stops: [
          { name: 'Ayodhya', loc: 'Uttar Pradesh', context: 'The Eternal Birthplace.', todo: ['Ram Mandir Darshan', 'Saryu Aarti', 'Hanuman Garhi'], link: 'https://srjbtkshetra.org/' },
          { name: 'Chitrakoot', loc: 'U.P./M.P.', context: 'Forest exile residence.', todo: ['Gupt Godavari', 'Ram Ghat', 'Bharat Milap'], link: 'https://uptourism.gov.in/' },
          { name: 'Hampi', loc: 'Karnataka', context: 'Ancient Kishkindha Kingdom.', todo: ['Virupaksha Temple', 'Vitthala Chariot', 'Coracle Ride'], link: 'https://hampi.nic.in/' }
        ]
      },
      {
        id: 'buddhist',
        name: 'Buddhist Circuit',
        icon: '☸️',
        desc: 'Tracing the path from birth to Nirvana.',
        stops: [
          { name: 'Lumbini', loc: 'Nepal Border', context: 'The Birthplace.', todo: ['Maya Devi Temple', 'Ashokan Pillar'], link: 'https://lumbinidevtrust.gov.np/' },
          { name: 'Bodh Gaya', loc: 'Bihar', context: 'The Enlightenment site.', todo: ['Mahabodhi Temple', 'Bodhi Tree', '80ft Buddha'], link: 'https://tourism.bihar.gov.in/' },
          { name: 'Sarnath', loc: 'Uttar Pradesh', context: 'Site of the First Sermon.', todo: ['Dhamek Stupa', 'Museum', 'Deer Park'], link: 'https://uptourism.gov.in/' }
        ]
      }
    ]
  },
  {
    category: 'Heritage Legacy',
    circuits: [
      {
        id: 'shakti',
        name: 'Shakti Peeths',
        icon: '🌺',
        desc: 'Power centers of the Cosmic Goddess.',
        stops: [
          { name: 'Kamakhya', loc: 'Assam', context: 'Center of Tantra and Desire.', todo: ['Temple Pooja', 'Brahmaputra Cruise'], link: 'https://kamakhyatemple.org/' },
          { name: 'Vaishno Devi', loc: 'J&K', context: 'The Mountain Mother.', todo: ['Katra Trek', 'Ardhkuwari Cave'], link: 'https://www.maavaishnodevi.org/' }
        ]
      },
      {
        id: 'jain',
        name: 'Jain Tirths',
        icon: '💎',
        desc: 'Path of non-violence and Tirthankaras.',
        stops: [
          { name: 'Palitana', loc: 'Gujarat', context: '800+ Temples on one mountain.', todo: ['Shatrunjaya Trek', 'Temple Complex'], link: 'https://www.gujarattourism.com/' },
          { name: 'Shikharji', loc: 'Jharkhand', context: 'Salvation of 20 Tirthankaras.', todo: ['Mountain Parikrama', 'Pooja'], link: 'https://tourism.jharkhand.gov.in/' }
        ]
      }
    ]
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(DATABASE[0].category);
  const [activeCircuitId, setActiveCircuitId] = useState(DATABASE[0].circuits[0].id);
  const [activeStopIdx, setActiveStopIdx] = useState(0);
  const [isChartLoaded, setIsChartLoaded] = useState(false);
  const growthChartRef = useRef(null);
  const spendChartRef = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  // --- DERIVED STATE ---
  const currentCategoryObj = DATABASE.find(c => c.category === activeCategory) || DATABASE[0];
  // Ensure active circuit belongs to category, else fallback
  const currentCircuit = currentCategoryObj.circuits.find(c => c.id === activeCircuitId) || currentCategoryObj.circuits[0];
  const currentStop = currentCircuit.stops[activeStopIdx] || currentCircuit.stops[0];

  // --- HANDLERS ---
  const handleCategoryChange = (cat) => {
    const newCatObj = DATABASE.find(c => c.category === cat);
    setActiveCategory(cat);
    // Reset to first circuit of new category
    setActiveCircuitId(newCatObj.circuits[0].id);
    setActiveStopIdx(0);
  };

  const handleCircuitChange = (id) => {
    setActiveCircuitId(id);
    setActiveStopIdx(0);
  };

  // --- EFFECTS ---

  // 1. Load Chart.js dynamically to replicate the HTML behavior without npm deps
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    script.onload = () => setIsChartLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 2. Initialize Charts once script is loaded
  useEffect(() => {
    if (isChartLoaded && window.Chart) {
      // Destroy previous instances if they exist (React strict mode safety)
      if (chartInstance1.current) chartInstance1.current.destroy();
      if (chartInstance2.current) chartInstance2.current.destroy();

      const ctx1 = growthChartRef.current?.getContext('2d');
      if (ctx1) {
        chartInstance1.current = new window.Chart(ctx1, {
          type: 'line',
          data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
              label: 'Tourism Volume Index',
              data: [35, 55, 140, 210, 260],
              borderColor: '#D97706',
              backgroundColor: 'rgba(217, 119, 6, 0.05)',
              fill: true,
              tension: 0.4,
              borderWidth: 6,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { display: false }, x: { grid: { display: false } } }
          }
        });
      }

      const ctx2 = spendChartRef.current?.getContext('2d');
      if (ctx2) {
        chartInstance2.current = new window.Chart(ctx2, {
          type: 'doughnut',
          data: {
            labels: ['Hospitality', 'Transport', 'Handicrafts', 'Food'],
            datasets: [{
              data: [42, 28, 18, 12],
              backgroundColor: ['#D97706', '#059669', '#3B82F6', '#8B5CF6'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            cutout: '75%',
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10, weight: 'bold' } } } }
          }
        });
      }
    }
    
    // Cleanup on unmount
    return () => {
      if (chartInstance1.current) chartInstance1.current.destroy();
      if (chartInstance2.current) chartInstance2.current.destroy();
    };
  }, [isChartLoaded]);


  return (
    <div className="antialiased selection:bg-amber-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          --sacred-saffron: #D97706;
          --policy-emerald: #065F46;
          --spiritual-navy: #0F172A;
          --stone-bg: #F8F6F2;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--stone-bg);
          color: #1F2937;
          scroll-behavior: smooth;
        }

        h1, h2, h3, h4, h5 { font-family: 'Playfair Display', serif; }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: var(--sacred-saffron); }
        
        /* Animation classes */
        .animate-up { animation: slideUp 0.5s ease-out forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-100 px-6 py-4">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-amber-200">ॐ</div>
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
          <a href="https://tourism.gov.in" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-gray-900 text-white text-[10px] font-black rounded-lg shadow-xl shadow-gray-200 hover:bg-black transition uppercase tracking-widest">
            Official Portal ↗
          </a>
        </div>
      </nav>

      {/* Hero Section */}
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
            <a href="#report" className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-200 hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">Read Strategic Report</a>
            <a href="#atlas" className="bg-white text-emerald-800 border border-emerald-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition">Explore Atlas</a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none text-[450px] font-black tracking-tighter">BHARAT</div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-20 space-y-32">
        {/* Policy Command Center */}
        <section id="policies" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-black mb-4 tracking-tight">The Policy Command Center</h2>
              <p className="text-gray-600 text-lg">Detailed analysis of the government's strategic schemes revitalizing the spiritual landscape.</p>
            </div>
            <div className="flex items-center space-x-6 bg-emerald-50 p-6 rounded-[2rem] border border-emerald-100 shadow-sm">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-emerald-100">🏛️</div>
              <div>
                <div className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.2em] mb-1">Fiscal Allocation</div>
                <div className="text-2xl font-black text-emerald-900">₹3,500 Cr+ Outlay</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { letter: 'P', title: 'PRASHAD', desc: 'Pilgrimage Rejuvenation and Spiritual Augmentation Drive. Focuses on beautification and infrastructure.', points: ['54+ Projects Sanctioned', '₹1,726 Cr Approved Cost', '100% Central Funding'], color: 'amber' },
              { letter: 'S', title: 'Swadesh Darshan', desc: 'Integrated theme-based circuits. SD 2.0 pivots to sustainable and responsible destination management.', points: ['52 New Dest. Selections', 'Experiential Tourism Focus', 'Destination-Centric Approach'], color: 'emerald' },
              { letter: 'C', title: 'CBSP', desc: 'Capacity Building for Service Providers. Training local youth as certified guides and hospitality staff.', points: ['Multi-lingual Training', 'Storytelling Certs', 'Local Employment Anchor'], color: 'blue' },
              { letter: 'D', title: 'NIDHI + SAATHI', desc: 'Digitizing the hospitality backbone. Ensuring standard hygiene and safety through AI-enabled surveillance.', points: ['Verified Unit Registry', 'AI Crowd Monitoring', 'Cashless Ecosystems'], color: 'purple' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className={`w-16 h-16 bg-${item.color}-50 text-${item.color}-600 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 group-hover:bg-${item.color}-600 group-hover:text-white transition-all`}>
                  {item.letter}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-10">{item.desc}</p>
                <ul className="text-[10px] font-bold text-gray-400 space-y-2 uppercase tracking-widest mb-10">
                  {item.points.map((p, idx) => <li key={idx}>• {p}</li>)}
                </ul>
                <a href="#" className={`text-xs font-black text-${item.color}-600 border-b-2 border-${item.color}-100 hover:border-${item.color}-600 transition pb-1`}>DETAILS ↗</a>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Report Section */}
        <section id="report" className="scroll-mt-24 py-20 bg-white rounded-[4rem] border border-amber-50 shadow-2xl overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <div className="border-b-4 border-amber-600 pb-12 mb-16">
              <h5 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Whitepaper | Strategic Analysis</h5>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-8">The Sacred Economy</h2>
              <p className="text-2xl font-serif text-gray-500 italic">A Comprehensive Analysis of the Rise, Economic Impact, and Future of Temple Tourism in India (2024-2047)</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12">
              {/* Table of Contents */}
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

        {/* Master Global Atlas Explorer */}
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
                  onClick={() => handleCategoryChange(cat.category)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat.category ? 'bg-emerald-800 text-white shadow-lg' : 'text-gray-400 hover:text-gray-900'}`}
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
                {currentCategoryObj.circuits.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCircuitChange(c.id)}
                    className={`w-full text-left p-5 rounded-2xl border border-transparent transition-all group flex items-center ${activeCircuitId === c.id ? 'bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-bold' : 'text-gray-500 hover:bg-white'}`}
                  >
                    <span className="text-2xl mr-4 group-hover:scale-125 transition-transform">{c.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-tight">{c.name}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Pane 2: Destination Directory */}
            <aside className="w-full lg:w-80 bg-white border-r border-gray-200 p-8 flex flex-col h-full shadow-inner">
              <h5 className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-8">Destination List</h5>
              <div className="space-y-3 overflow-y-auto custom-scrollbar flex-1 pr-2">
                {currentCircuit.stops.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStopIdx(idx)}
                    className={`w-full text-left p-5 rounded-xl border border-transparent text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-between ${activeStopIdx === idx ? 'bg-amber-600 text-white shadow-md transform translate-x-1' : 'bg-white border-gray-100 text-gray-400 hover:border-amber-200'}`}
                  >
                    <span>{s.name}</span>
                    <span className={`text-[8px] font-black italic ${activeStopIdx === idx ? 'text-amber-200' : 'opacity-60'}`}>{s.loc}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Pane 3: Deep-Dive View */}
            <div className="flex-1 bg-white p-8 md:p-14 overflow-y-auto custom-scrollbar h-full relative" key={currentStop.name}>
              <div className="animate-up">
                <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-10">
                  <div className="max-w-xl">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-2 py-0.5 bg-amber-50 text-amber-800 text-[9px] font-black rounded border border-amber-100 uppercase tracking-widest">{currentCircuit.name}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{currentStop.loc} Hub</span>
                    </div>
                    <h3 className="text-6xl md:text-7xl font-black text-gray-900 leading-none mb-6 tracking-tighter">{currentStop.name}</h3>
                    <p className="text-gray-500 font-serif text-2xl italic leading-relaxed">"{currentStop.context}"</p>
                  </div>
                  <a href={currentStop.link} target="_blank" rel="noreferrer" className="px-8 py-5 bg-amber-600 text-white text-[11px] font-black rounded-2xl shadow-2xl shadow-amber-200 hover:bg-amber-700 transition flex items-center justify-center text-center uppercase tracking-widest">
                    Official Portal <span className="ml-2">↗</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 underline decoration-amber-500 decoration-4 underline-offset-8">Activities & Rituals</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {currentStop.todo.map((a, i) => (
                          <div key={i} className="flex items-center p-6 bg-white border border-gray-100 rounded-3xl shadow-sm group hover:border-amber-300 transition-all">
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-5 group-hover:scale-150 transition-transform"></div>
                            <span className="text-sm font-bold text-gray-700">{a}</span>
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
                      <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center mr-6 flex-shrink-0 font-black rounded-xl shadow-lg shadow-emerald-100 italic">✓</div>
                      <div>
                        <h5 className="font-black text-emerald-800 text-sm uppercase tracking-widest">Swadesh Darshan SD 2.0</h5>
                        <p className="text-[11px] text-emerald-600 mt-3 leading-relaxed font-medium">This hub receives priority funding for sustainable destination management, including local handicraft promotion and zero-waste logistics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Economics & Analytics */}
        <section id="analytics" className="scroll-mt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-black mb-8 italic tracking-tight">Macro Impact Dashboard</h2>
                <p className="text-gray-600 text-lg leading-relaxed">Spiritual tourism accounts for over 60% of domestic tourism in India. The structural multiplier of temple clusters creates decentralized economic prosperity.</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <div className="text-5xl font-black text-amber-600 mb-3 tracking-tighter">₹2.3L Cr</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Projected Annual <br />Revenue (2025)</div>
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                  <div className="text-5xl font-black text-emerald-600 mb-3 tracking-tighter">15.4M</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Direct Jobs in <br />Spiritual Clusters</div>
                </div>
              </div>

              <div className="bg-gray-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                <h4 className="text-2xl font-bold mb-6 text-amber-500 italic">Vision 2030 Roadmap</h4>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div>
                    <p className="text-slate-300 text-sm font-medium">100% Digital Queueing for Top 50 Hubs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div>
                    <p className="text-slate-300 text-sm font-medium">Sustainable Transport: Zero-Emission Temple Zones</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div>
                    <p className="text-slate-300 text-sm font-medium">AR/VR Corridors for Historical Storytelling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-14 rounded-[4rem] border border-gray-100 shadow-xl space-y-16">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-12 text-center">Post-PRASHAD Visitor Volume Growth</h4>
                <div className="h-[250px] w-full">
                  <canvas ref={growthChartRef}></canvas>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Expenditure Multiplier by Sector</h4>
                <div className="h-[250px] w-full">
                  <canvas ref={spendChartRef}></canvas>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black text-amber-700 mb-10 italic">Faith at the Core, Growth in the Branches.</h3>
          <p className="text-gray-400 text-[11px] mb-14 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest">Synthesized from Ministry of Tourism Data, State Tourism Portals, and Temple Trust Archives. This Almanac is for informational purposes only. Travel responsibly and follow local advisories.</p>
          <div className="flex justify-center space-x-12 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
            <span>Ministry of Tourism</span>
            <span>•</span>
            <span>Incredible India</span>
            <span>•</span>
            <span>PRASHAD Scheme</span>
          </div>
        </div>
      </footer>
    </div>
  );
}