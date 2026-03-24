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

// --- DEDICATED REPORT PAGE COMPONENT ---
function ReportPage({ isChartLoaded, onBack }) {
  const [openSections, setOpenSections] = useState({ north: false, west: false, east: false, south: false });
  
  const marketChartRef = useRef(null);
  const spendChartRef = useRef(null);
  const kashiChartRef = useRef(null);
  const ayodhyaChartRef = useRef(null);
  const mahakalChartRef = useRef(null);
  const puriChartRef = useRef(null);
  const chartInstances = useRef({});

  const toggleAccordion = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (isChartLoaded && window.Chart) {
      // Destroy existing chart instances to prevent re-render duplication
      Object.values(chartInstances.current).forEach(c => c?.destroy());

      // 1. Market Growth Chart
      if (marketChartRef.current) {
        chartInstances.current.market = new window.Chart(marketChartRef.current.getContext('2d'), {
          type: 'bar',
          data: {
            labels: ['Core 2024', 'Core 2030 (Est)', 'Broader 2024', 'Broader 2032 (Est)'],
            datasets: [{
              label: 'Market Size (USD Billion)',
              data: [10.8, 28.9, 202.85, 441.19],
              backgroundColor: ['#fed7aa', '#f97316', '#fdba74', '#9a3412'],
              barPercentage: 0.6
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: '#f3f4f6' } },
              x: { grid: { display: false } }
            }
          }
        });
      }

      // 2. Expenditure Chart
      if (spendChartRef.current) {
        chartInstances.current.spend = new window.Chart(spendChartRef.current.getContext('2d'), {
          type: 'bar',
          indexAxis: 'y',
          data: {
            labels: ['Religious Trip', 'Business Trip'],
            datasets: [{
              label: 'Avg Daily Spend (INR)',
              data: [2717, 4455],
              backgroundColor: ['#ea580c', '#d6d3d1'],
              barPercentage: 0.5
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { x: { beginAtZero: true }, y: { grid: { display: false } } }
          }
        });
      }

      // 3. Kashi Specific Chart
      if (kashiChartRef.current) {
        chartInstances.current.kashi = new window.Chart(kashiChartRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['2015', '2017', '2019', '2021', '2022', '2023', '2024', '2025', '2026 (Projected)'],
            datasets: [{
              label: 'Annual Footfall (Crores)',
              data: [0.55, 0.62, 0.68, 0.35, 7.12, 8.55, 10.20, 11.50, 12.80],
              borderColor: '#ea580c',
              backgroundColor: 'rgba(234, 88, 12, 0.1)',
              fill: true, tension: 0.4, borderWidth: 2, pointRadius: 4, pointBackgroundColor: '#fff'
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, title: { display: true, text: 'Kashi Footfall Trend (2015-2026)', color: '#a8a29e' } },
            scales: {
              x: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e', font: { weight: 'bold', size: 10 } } },
              y: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e' }, title: { display: true, text: 'Visitors (in Crores)', color: '#a8a29e', font: { size: 12, weight: 'bold' } } }
            }
          }
        });
      }

      // 4. Ayodhya Trend Chart
      if (ayodhyaChartRef.current) {
        chartInstances.current.ayodhya = new window.Chart(ayodhyaChartRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['2000', '2010', '2017', '2019', '2022', '2023', '2024', '2025', '2026 (Projected)'],
            datasets: [{
              label: 'Annual Footfall (Crores)',
              data: [0.85, 1.25, 1.78, 2.04, 2.39, 5.76, 11.21, 5.80, 6.50],
              borderColor: '#ea580c',
              backgroundColor: 'rgba(234, 88, 12, 0.2)',
              fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: '#fff'
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, title: { display: true, text: 'Ayodhya Footfall Trend (2000-2026)', color: '#a8a29e' } },
            scales: {
              y: { beginAtZero: true, grid: { color: '#44403c' }, ticks: { color: '#a8a29e' }, title: { display: true, text: 'Visitors (in Crores)', color: '#a8a29e', font: { size: 12, weight: 'bold' } } },
              x: { grid: { color: '#44403c' }, ticks: { color: '#fff', font: { weight: 'bold', size: 10 } } }
            }
          }
        });
      }

      // 5. Mahakal (Ujjain) Trend Chart
      if (mahakalChartRef.current) {
        chartInstances.current.mahakal = new window.Chart(mahakalChartRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['2015', '2020', '2022 (Phase 1)', '2023', '2024', '2025', '2026 (Projected)'],
            datasets: [{
              label: 'Annual Footfall (Crores)',
              data: [1.5, 1.5, 3.0, 5.28, 6.0, 6.5, 7.0],
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              fill: true, tension: 0.4, borderWidth: 2, pointRadius: 4, pointBackgroundColor: '#fff'
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, title: { display: true, text: 'Ujjain Footfall Surge (2015-2026)', color: '#a8a29e' } },
            scales: {
              x: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e', font: { weight: 'bold', size: 10 } } },
              y: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e' }, title: { display: true, text: 'Visitors (in Crores)', color: '#a8a29e' } }
            }
          }
        });
      }

      // 6. Puri Trend Chart
      if (puriChartRef.current) {
        chartInstances.current.puri = new window.Chart(puriChartRef.current.getContext('2d'), {
          type: 'line',
          data: {
            labels: ['2018', '2020', '2022', '2023', '2024 (Inauguration)', '2025', '2026 (Projected)'],
            datasets: [{
              label: 'Annual Footfall (Crores)',
              data: [1.2, 0.8, 1.4, 1.5, 2.5, 2.8, 3.2],
              borderColor: '#fbbf24',
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
              fill: true, tension: 0.4, borderWidth: 2, pointRadius: 4, pointBackgroundColor: '#fff'
            }]
          },
          options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { display: false }, title: { display: true, text: 'Puri Visitor Trend (2018-2026)', color: '#a8a29e' } },
            scales: {
              x: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e', font: { weight: 'bold', size: 10 } } },
              y: { grid: { color: '#44403c' }, ticks: { color: '#a8a29e' }, title: { display: true, text: 'Visitors (in Crores)', color: '#a8a29e' } }
            }
          }
        });
      }
    }

    return () => {
      Object.values(chartInstances.current).forEach(c => c?.destroy());
    };
  }, [isChartLoaded]);

  return (
    <div className="bg-[var(--report-bg)] text-[var(--report-text)] font-sans antialiased min-h-screen pb-16">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--report-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center gap-4">
                      <button onClick={onBack} className="text-sm font-bold text-gray-400 hover:text-[var(--report-accent)] transition-colors flex items-center">
                         <span className="mr-2">←</span> Back
                      </button>
                      <span className="text-2xl text-[var(--report-accent)]">☸</span>
                      <span className="text-xl font-serif font-bold tracking-tight">The Sacred Economy</span>
                  </div>
                  <div className="hidden lg:flex space-x-8 text-sm font-medium text-[var(--report-subtext)]">
                      <a href="#introduction" className="hover:text-[var(--report-accent)] transition-colors">Overview</a>
                      <a href="#economics" className="hover:text-[var(--report-accent)] transition-colors">Market Data</a>
                      <a href="#corridors" className="hover:text-[var(--report-accent)] transition-colors">Corridors</a>
                      <a href="#regions" className="hover:text-[var(--report-accent)] transition-colors">Regional Analysis</a>
                      <a href="#infrastructure" className="hover:text-[var(--report-accent)] transition-colors">Infrastructure</a>
                      <a href="#case-studies" className="text-[var(--report-accent)] font-bold">Case Studies</a>
                  </div>
              </div>
          </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
          {/* SECTION 1: INTRODUCTION & PARADIGM SHIFT */}
          <section id="introduction" className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                  <span className="bg-[var(--report-accent-dim)] text-[var(--report-accent)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-100">Assessment Report 2024–2032</span>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mt-6 mb-6 leading-tight text-gray-900">The Renaissance of <br />Temple Tourism in India</h1>
                  <p className="text-xl text-[var(--report-subtext)] leading-relaxed">
                      A comprehensive analysis of the structural transformation from "Passive Pilgrimage" to "Active Spiritual Tourism."
                  </p>
              </div>

              <div className="prose prose-lg mx-auto text-gray-700">
                  <p className="drop-cap">
                      The Indian tourism landscape is undergoing a structural transformation of unprecedented magnitude. Historically, pilgrimage—<em>Tirtha Yatra</em>—was characterized by austerity and unorganized logistics. Today, we are witnessing the crystallization of a <strong>"Temple Economy,"</strong> a sophisticated ecosystem where ancient faith intersects with modern infrastructure and digital integration.
                  </p>
                  <p className="mt-4">
                      Driven by policy interventions like <strong>PRASHAD</strong> and <strong>Swadesh Darshan</strong>, this shift is moving the devotee from a passive pilgrim to a consumer of heritage, culture, and premium hospitality. This report details the macro-economic implications, the "Corridor Model," and the critical challenges accompanying this explosive growth.
                  </p>
              </div>
          </section>

          {/* SECTION 2: MACRO-ECONOMICS */}
          <section id="economics" className="bg-white rounded-2xl shadow-sm border border-[var(--report-border)] p-8">
              <div className="border-b border-[var(--report-border)] pb-6 mb-8">
                  <h2 className="text-3xl font-serif font-bold">1. Market Sizing & The Multiplier Effect</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-lg font-bold mb-4 text-[var(--report-gold)]">Market Valuation (USD Billions)</h3>
                      <p className="text-sm text-gray-600 mb-6">
                          The dedicated religious tourism market is set to triple by 2030 (CAGR 18.2%), while the broader ecosystem impact could reach $441 Billion by 2032.
                      </p>
                      <div className="chart-container-lg">
                          <canvas ref={marketChartRef}></canvas>
                      </div>
                  </div>

                  <div className="space-y-8">
                      <div>
                          <h3 className="text-lg font-bold mb-4 text-[var(--report-gold)]">Daily Expenditure Analysis</h3>
                          <p className="text-sm text-gray-600 mb-4">
                              While per-capita daily spend is lower than business travel, the aggregate volume creates a massive "trickle-down" economy.
                          </p>
                          <div className="chart-container-sm">
                              <canvas ref={spendChartRef}></canvas>
                          </div>
                      </div>

                      <div className="bg-[var(--report-accent-dim)] rounded-xl p-6 border border-orange-100">
                          <h4 className="font-bold text-[var(--report-accent)] uppercase text-sm mb-4">Case Study: Uttar Pradesh</h4>
                          <div className="grid grid-cols-2 gap-4">
                              <div>
                                  <div className="text-3xl font-serif font-bold text-gray-900">₹4 Lakh Cr</div>
                                  <div className="text-xs text-gray-600 mt-1">Projected Economic Boost</div>
                              </div>
                              <div>
                                  <div className="text-3xl font-serif font-bold text-gray-900">₹5,000 Cr</div>
                                  <div className="text-xs text-gray-600 mt-1">Addtl. Tax Revenue (FY25)</div>
                              </div>
                              <div className="col-span-2 pt-4 border-t border-orange-200 mt-2">
                                  <p className="text-sm font-medium text-gray-800">The Ecosystem Impact:</p>
                                  <p className="text-xs text-gray-600 mt-1">Revenue trickles down to auto-rickshaws, boatmen, flower sellers, weavers (Banarasi sarees), and sculptors. Supporting 40-46 million jobs nationally.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECTION 3: THE TEMPLE CORRIDORS (SUMMARY CARDS) */}
          <section id="corridors">
              <h2 className="text-3xl font-serif font-bold mb-8">2. The Era of Temple Corridors</h2>
              <p className="max-w-3xl text-gray-600 mb-10">
                  A defining feature of the current phase is the shift to "Temple Corridors"—mega-projects clearing congestion to create heritage zones. This "Kashi Model" is the new blueprint.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {/* Kashi Card */}
                  <div className="bg-white p-8 rounded-xl border border-[var(--report-border)] shadow-sm group hover:border-[var(--report-accent)] transition-colors relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                          <span className="text-6xl">☸</span>
                      </div>
                      <div className="flex justify-between items-start mb-4 relative">
                          <h3 className="text-2xl font-serif font-bold">Kashi Vishwanath</h3>
                          <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Completed</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">Inaugurated Dec 2021. Transformed narrow lanes into a majestic link between Ganga Ghats and the Sanctum.</p>
                      <div className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-500">Total Footfall (2021-25)</span>
                              <span className="font-bold">25.28 Crore</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-500">Visitor Spending</span>
                              <span className="font-bold">₹4k - ₹5k per capita</span>
                          </div>
                      </div>
                      <a href="#kashi-deep-dive" className="inline-block mt-6 text-sm font-bold text-[var(--report-accent)] hover:text-[var(--report-gold)] transition-colors">Read Full Case Study ↓</a>
                  </div>

                  {/* Ayodhya Card */}
                  <div className="bg-white p-8 rounded-xl border border-[var(--report-border)] shadow-sm group hover:border-[var(--report-accent)] transition-colors">
                      <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-serif font-bold">Ayodhya Ram Mandir</h3>
                          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Global Hub</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-6">Established as a global spiritual capital comparable to Vatican City.</p>
                      <div className="space-y-3 text-sm">
                          <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-500">2024 Footfall</span>
                              <span className="font-bold">11.2 Crores</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-100">
                              <span className="text-gray-500">Infra Makeover</span>
                              <span className="font-bold">USD 10 Billion</span>
                          </div>
                          <div className="mt-4 bg-gray-50 p-3 rounded text-xs text-gray-700">
                              <strong>Challenge:</strong> Daily footfall of 2-3 Lakhs overwhelmed initial infra. Trust considering pass-based entry.
                          </div>
                      </div>
                       <a href="#ayodhya-deep-dive" className="inline-block mt-6 text-sm font-bold text-[var(--report-accent)] hover:text-[var(--report-gold)] transition-colors">Read Full Case Study ↓</a>
                  </div>

                  {/* Ujjain Card */}
                  <div className="bg-white p-6 rounded-xl border border-[var(--report-border)] shadow-sm group hover:border-[var(--report-accent)] transition-colors">
                      <h3 className="text-xl font-serif font-bold mb-2">Mahakal Lok (Ujjain)</h3>
                      <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Decongestion Model</p>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                          <div className="bg-[var(--report-bg)] p-2 rounded">
                              <span className="block text-gray-500 text-xs">Pre-Corridor</span>
                              <span className="font-bold">1.5 Cr/yr</span>
                          </div>
                          <div className="bg-[var(--report-bg)] p-2 rounded">
                              <span className="block text-gray-500 text-xs">Post-Corridor</span>
                              <span className="font-bold">5.28 Cr/yr</span>
                          </div>
                      </div>
                      <a href="#ujjain-deep-dive" className="text-xs font-bold text-[var(--report-accent)] hover:text-[var(--report-gold)] transition-colors">Read Full Case Study ↓</a>
                  </div>

                  {/* Puri Card */}
                  <div className="bg-white p-6 rounded-xl border border-[var(--report-border)] shadow-sm group hover:border-[var(--report-accent)] transition-colors">
                      <h3 className="text-xl font-serif font-bold mb-2">Jagannath Heritage</h3>
                      <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide">Coastal Heritage</p>
                      <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
                          <li>Cost: ₹943 Cr.</li>
                          <li>75-meter unobstructed heritage zone.</li>
                          <li>Green buffer zones for Rath Yatra safety.</li>
                      </ul>
                       <a href="#puri-deep-dive" className="text-xs font-bold text-[var(--report-accent)] hover:text-[var(--report-gold)] transition-colors">Read Full Case Study ↓</a>
                  </div>
              </div>
          </section>

          {/* SECTION 4: REGIONAL ATLAS (ACCORDION) */}
          <section id="regions">
              <h2 className="text-3xl font-serif font-bold mb-4">3. Regional Deep Dive: All Places</h2>
              <p className="text-gray-600 mb-8">Detailed assessment of spiritual tourism growth across North, West, East, and South India.</p>

              <div className="space-y-4">
                  {/* NORTH INDIA */}
                  <div className="border border-[var(--report-border)] rounded-xl overflow-hidden bg-white">
                      <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('north')}>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">North India</h3>
                              <p className="text-sm text-gray-500">UP, Uttarakhand, J&K, Himachal Pradesh</p>
                          </div>
                          <span className={`text-2xl text-[var(--report-accent)] transform transition-transform ${openSections.north ? 'rotate-45' : ''}`}>{openSections.north ? '×' : '+'}</span>
                      </button>
                      <div className={`accordion-content border-t border-[var(--report-border)] bg-[var(--report-bg)] ${openSections.north ? 'open' : ''}`}>
                          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Uttar Pradesh: The Heartland</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Growth:</strong> Footfall +361% in 8 years (23.75 Cr in 2017 → 109.65 Cr in Q1 2025).</li>
                                      <li><strong>Prayagraj:</strong> Hosted the historic <strong>Maha Kumbh 2025</strong>, setting new global records for congregation.</li>
                                      <li><strong>Holy Trinity:</strong> Kashi, Prayagraj, and Ayodhya driving domestic dominance.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Uttarakhand: Char Dham Economics</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Yatra 2024:</strong> 3.8M visitors, ₹2,400 Cr direct revenue (Est. total ₹7,500 Cr).</li>
                                      <li><strong>Heli-Tourism:</strong> Kedarnath operators earned ₹60 Cr in 48 days.</li>
                                      <li><strong>Infra:</strong> All-Weather Road nearing completion. Ropeways approved.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Jammu & Kashmir</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Vaishno Devi:</strong> 80 Lakh annual visitors. ₹500 Cr revenue.</li>
                                      <li><strong>Amarnath:</strong> Parvatmala scheme exploring ropeways for high-altitude access.</li>
                                      <li><strong>Srinagar:</strong> Shankaracharya Temple slated for ropeway connectivity.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Himachal Pradesh</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Shakti Circuit:</strong> Connecting Jwala Devi, Chintpurni, Chamunda Devi.</li>
                                      <li><strong>Offbeat:</strong> Promoting Chamba and Kinnaur to disperse crowds.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* WEST INDIA */}
                  <div className="border border-[var(--report-border)] rounded-xl overflow-hidden bg-white">
                      <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('west')}>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">West India</h3>
                              <p className="text-sm text-gray-500">Gujarat, Maharashtra</p>
                          </div>
                          <span className={`text-2xl text-[var(--report-accent)] transform transition-transform ${openSections.west ? 'rotate-45' : ''}`}>{openSections.west ? '×' : '+'}</span>
                      </button>
                      <div className={`accordion-content border-t border-[var(--report-border)] bg-[var(--report-bg)] ${openSections.west ? 'open' : ''}`}>
                          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Gujarat: Coastal Divinities</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Somnath:</strong> 97.93 Lakh visitors (23-24). Promenade developed.</li>
                                      <li><strong>Dwarka:</strong> 83.54 Lakh visitors. New Expressway connectivity.</li>
                                      <li><strong>Ambaji:</strong> Most visited (1.65 Cr/yr). PRASHAD scheme upgrading amenities.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Maharashtra: Trade & Faith</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Shirdi:</strong> Revenue ₹320-900 Cr. ₹16 Cr donation in 10 days of 2023.</li>
                                      <li><strong>Ashtavinayak:</strong> Tourism sanctioned projects for the 8-Ganesha circuit.</li>
                                      <li><strong>Ropeways:</strong> Approved for Ekvira Devi and Saptashrungi.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* EAST & NE */}
                  <div className="border border-[var(--report-border)] rounded-xl overflow-hidden bg-white">
                      <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('east')}>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">East & North East</h3>
                              <p className="text-sm text-gray-500">Odisha, Bihar, Assam</p>
                          </div>
                          <span className={`text-2xl text-[var(--report-accent)] transform transition-transform ${openSections.east ? 'rotate-45' : ''}`}>{openSections.east ? '×' : '+'}</span>
                      </button>
                      <div className={`accordion-content border-t border-[var(--report-border)] bg-[var(--report-bg)] ${openSections.east ? 'open' : ''}`}>
                          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Odisha: Soul of the East</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Puri:</strong> Rath Yatra is the main economic event.</li>
                                      <li><strong>Bhubaneswar:</strong> "Ekamra Kshetra" project developing Lingaraj Temple area.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Bihar: Land of Enlightenment</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Bodh Gaya:</strong> High international footfall. Convention centers funded by PRASHAD.</li>
                                      <li><strong>Gaya:</strong> Vishnupad temple upgrading for Pind Daan rituals.</li>
                                  </ul>
                              </div>
                              <div className="md:col-span-2">
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Assam & NE: The Mystic Hills</h4>
                                  <p className="mb-2"><strong>Kamakhya:</strong> Focal point. Ambubachi Mela celebrates goddess fertility.</p>
                                  <p><strong>Tribal Circuits:</strong> Nagaland & Chhattisgarh developing circuits focusing on nature worship.</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* SOUTH INDIA */}
                  <div className="border border-[var(--report-border)] rounded-xl overflow-hidden bg-white">
                      <button className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => toggleAccordion('south')}>
                          <div>
                              <h3 className="text-xl font-bold text-gray-900">South India</h3>
                              <p className="text-sm text-gray-500">Andhra, TN, Kerala, Karnataka</p>
                          </div>
                          <span className={`text-2xl text-[var(--report-accent)] transform transition-transform ${openSections.south ? 'rotate-45' : ''}`}>{openSections.south ? '×' : '+'}</span>
                      </button>
                      <div className={`accordion-content border-t border-[var(--report-border)] bg-[var(--report-bg)] ${openSections.south ? 'open' : ''}`}>
                          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Andhra Pradesh</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Tirupati (TTD):</strong> Net worth ₹3 Trillion ($35B). 11 tonnes gold.</li>
                                      <li><strong>Srivani Trust:</strong> Collected ₹650 Cr in 3 years to renovate dilapidated temples.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Tamil Nadu</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Madurai:</strong> Pudu Mandapam renovation for 2026 Kumbhabhishekam.</li>
                                      <li><strong>Rameswaram:</strong> Shoreline dev under PRASHAD.</li>
                                      <li><strong>Thanjavur:</strong> Visitor surge post-"Ponniyin Selvan" movies.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Kerala</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Sabarimala:</strong> Record revenue ₹332 Cr (2024-25).</li>
                                      <li><strong>Guruvayur:</strong> "Dwarka of South". ₹45 Cr amenities sanctioned.</li>
                                  </ul>
                              </div>
                              <div>
                                  <h4 className="font-bold text-[var(--report-gold)] text-base mb-2">Karnataka</h4>
                                  <ul className="list-disc pl-5 space-y-2">
                                      <li><strong>Hampi & Murdeshwar:</strong> Promoting "Shiva Circuit".</li>
                                      <li><strong>Hoysala:</strong> UNESCO sites Belur/Halebeedu blending heritage.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECTION 5: INFRASTRUCTURE & ENABLERS */}
          <section id="infrastructure">
              <h2 className="text-3xl font-serif font-bold mb-8">4. Infrastructure Ecosystem</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                      <h3 className="text-lg font-bold mb-4 text-[var(--report-gold)]">Railways: The Vande Bharat Network</h3>
                      <div className="overflow-x-auto bg-white rounded-lg border border-[var(--report-border)] mb-8">
                          <table className="w-full data-table">
                              <thead>
                                  <tr>
                                      <th>Route</th>
                                      <th>Sites Connected</th>
                                      <th>Impact</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr><td className="font-medium">Banaras – Khajuraho</td><td>Varanasi, Prayagraj, Chitrakoot</td><td>Connects Shiva-Ram circuit. Saves 2.5 hrs.</td></tr>
                                  <tr><td className="font-medium">Katra – Amritsar</td><td>Vaishno Devi, Golden Temple</td><td>Links Hindu & Sikh shrines.</td></tr>
                                  <tr><td className="font-medium">Ayodhya – Anand Vihar</td><td>Ram Mandir</td><td>Direct link from National Capital.</td></tr>
                                  <tr><td className="font-medium">Chennai – Madurai</td><td>Meenakshi Temple</td><td>High-speed Southern link.</td></tr>
                                  <tr><td className="font-medium">Mumbai – Shirdi</td><td>Sai Baba Temple</td><td>Drastically cuts travel time.</td></tr>
                              </tbody>
                          </table>
                      </div>

                      <h3 className="text-lg font-bold mb-4 text-[var(--report-gold)]">Ropeways: Parvatmala Pariyojana</h3>
                      <div className="overflow-x-auto bg-white rounded-lg border border-[var(--report-border)]">
                          <table className="w-full data-table">
                              <thead>
                                  <tr>
                                      <th>Project</th>
                                      <th>Length</th>
                                      <th>Impact</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr><td className="font-medium">Kedarnath</td><td>12.9 km</td><td>Sonprayag to Shrine. 8hr trek → 36 mins. Cost ₹4,081 Cr.</td></tr>
                                  <tr><td className="font-medium">Hemkund Sahib</td><td>12.4 km</td><td>Govindghat to Shrine.</td></tr>
                                  <tr><td className="font-medium">Varanasi Urban</td><td>N/A</td><td>Mass transit to decongest city (Station to Temple).</td></tr>
                              </tbody>
                          </table>
                      </div>
                  </div>

                  <div className="space-y-8">
                      <div className="bg-[var(--report-accent-dim)] p-6 rounded-xl border border-orange-100">
                          <h3 className="font-bold text-[var(--report-accent)] uppercase text-sm mb-4">Policy Interventions</h3>
                          <div className="space-y-4 text-sm text-gray-700">
                              <div><strong className="block text-gray-900">PRASHAD Scheme</strong>47 projects sanctioned. Outlay ₹1,594 Cr. Focus on "Hard" infra.</div>
                              <div><strong className="block text-gray-900">Swadesh Darshan 2.0</strong>Shift to "Destination-based" holistic development.</div>
                              <div><strong className="block text-gray-900">River Cruise Tourism</strong>"Cruise Bharat Mission". Ganga Vilas (Varanasi-Dibrugarh). Goal: 1.5M passengers by 2029.</div>
                          </div>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-[var(--report-border)]">
                          <h3 className="text-lg font-bold mb-4 text-[var(--report-gold)]">Hospitality & The Digital Shift</h3>
                          <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                              <li><strong>Premiumisation:</strong> Demand for rooms &gt;₹7,000 up 20%. IHCL expanding.</li>
                              <li><strong>Homestays:</strong> Ayodhya listings doubled in 1 year. NITI Aayog formalizing.</li>
                              <li><strong>Budget Segment:</strong> OYO adding 500 hotels in religious towns in 2025.</li>
                              <li><strong>Tech:</strong> "Temple 360" for online Darshan. AI crowd management. UPI donations.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECTION 6: CASE STUDIES */}
          <section id="case-studies" className="space-y-16">
              <h2 className="text-3xl font-serif font-bold mb-8">5. In-Depth Case Studies</h2>

              {/* KASHI DEEP DIVE */}
              <div id="kashi-deep-dive" className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-[var(--report-accent)] p-8 md:p-12 text-center">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study</span>
                      <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">Kashi Vishwanath Corridor</h2>
                      <p className="text-lg md:text-xl mt-4 opacity-90 max-w-2xl mx-auto">"Bridging Tradition and Modernity: Restoring the ritual axis between the Ganga and the Sanctum."</p>
                  </div>
                  <div className="p-8 md:p-12 space-y-16">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div>
                              <h3 className="text-2xl font-serif font-bold text-[var(--report-accent)] mb-6">The Sugam Darshan Effect</h3>
                              <p className="text-stone-300 mb-8 text-sm leading-relaxed">The project cleared 300 properties to expand the precinct from a congested 3,000 sq. ft. to 5 hectares. This decongestion unlocked massive capacity and economic velocity.</p>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Daily Capacity</div><div className="text-2xl font-bold text-white mt-1">75,000</div><div className="text-xs text-green-400 mt-1">↑ vs congested alleys</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Visitor Surge</div><div className="text-2xl font-bold text-white mt-1">100 Mn+</div><div className="text-xs text-green-400 mt-1">Post-Inauguration</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Project Cost</div><div className="text-2xl font-bold text-white mt-1">₹900 Cr</div><div className="text-xs text-stone-400 mt-1">Including Rehab</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Economic Impact</div><div className="text-2xl font-bold text-white mt-1">₹1.25 L Cr</div><div className="text-xs text-stone-400 mt-1">UP Multiplier Effect</div></div>
                              </div>
                          </div>
                          <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 h-80">
                              <canvas ref={kashiChartRef}></canvas>
                          </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-800 pt-12">
                          <div>
                              <h3 className="text-xl font-bold text-[var(--report-accent)] mb-6">Development Timeline</h3>
                              <div className="space-y-0">
                                  <div className="timeline-item"><div className="timeline-dot"></div><span className="text-xs text-stone-400 block mb-1">March 8, 2019</span><h4 className="text-sm font-bold text-white">Foundation Stone</h4><p className="text-xs text-stone-400 mt-1">Laid by PM Narendra Modi.</p></div>
                                  <div className="timeline-item border-transparent pb-0"><div className="timeline-dot" style={{ background: '#22c55e' }}></div><span className="text-xs text-stone-400 block mb-1">Dec 13, 2021</span><h4 className="text-sm font-bold text-white">Inauguration</h4><p className="text-xs text-stone-400 mt-1">Opened to the world. A 400m pathway connecting Lalita Ghat to Mandir Chowk.</p></div>
                              </div>
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-[var(--report-accent)] mb-6">Architectural Features</h3>
                              <p className="text-xs text-stone-400 mb-6">Built using Chunar red sandstone and Makrana marble in the Nagara style.</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-stone-800 p-3 rounded border-l-2 border-[var(--report-accent)]"><h5 className="text-sm font-bold text-white">Mandir Chowk</h5><p className="text-xs text-stone-400">Massive open courtyard.</p></div>
                                  <div className="bg-stone-800 p-3 rounded border-l-2 border-[var(--report-accent)]"><h5 className="text-sm font-bold text-white">Ganga View</h5><p className="text-xs text-stone-400">Panoramic riverfront views.</p></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* AYODHYA DEEP DIVE */}
              <div id="ayodhya-deep-dive" className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-[var(--report-accent)] p-8 md:p-12 text-center relative overflow-hidden">
                      <div className="relative z-10">
                          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study</span>
                          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-4">Ayodhya Ram Mandir</h2>
                          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-2xl mx-auto">"The Rashtra Mandir: Reclaiming cultural heritage and establishing a Global Spiritual Capital."</p>
                      </div>
                  </div>
                  <div className="p-8 md:p-12 space-y-16">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div>
                              <h3 className="text-2xl font-serif font-bold text-[var(--report-accent)] mb-6">Scale of the "Rashtra Mandir"</h3>
                              <p className="text-stone-300 mb-8 text-sm leading-relaxed">The Ayodhya project is the linchpin of India's "Temple Economy." With a 1,000-year structural lifespan (Iron-Free) and a Surya Tilak mechanism, it blends ancient science with modern engineering.</p>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Footfall 2024</div><div className="text-2xl font-bold text-white mt-1">11.2 Cr</div><div className="text-xs text-green-400 mt-1">Source: UP Tourism</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Footfall 2025</div><div className="text-2xl font-bold text-white mt-1">5.8 Cr</div><div className="text-xs text-stone-400 mt-1">Sustained Volume</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Total Investment</div><div className="text-2xl font-bold text-white mt-1">₹32,000 Cr</div><div className="text-xs text-stone-400 mt-1">Temple + City Infra</div></div>
                                  <div className="bg-stone-800 p-4 rounded-lg border border-stone-700"><div className="text-xs text-stone-400 uppercase tracking-wide">Crowdfunding</div><div className="text-2xl font-bold text-white mt-1">₹3,500 Cr</div><div className="text-xs text-green-400 mt-1">100% Public Funded</div></div>
                              </div>
                          </div>
                          <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 h-80">
                              <canvas ref={ayodhyaChartRef}></canvas>
                          </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-stone-800 pt-12">
                          <div>
                              <h3 className="text-xl font-bold text-[var(--report-accent)] mb-6">Development Timeline</h3>
                              <div className="space-y-0">
                                  <div className="timeline-item"><div className="timeline-dot"></div><span className="text-xs text-stone-400 block mb-1">Nov 9, 2019</span><h4 className="text-sm font-bold text-white">The Verdict</h4><p className="text-xs text-stone-400 mt-1">Supreme Court hands over land.</p></div>
                                  <div className="timeline-item"><div className="timeline-dot"></div><span className="text-xs text-stone-400 block mb-1">Jan 22, 2024</span><h4 className="text-sm font-bold text-white">Pran Pratishtha</h4><p className="text-xs text-stone-400 mt-1">Consecration Ceremony. 20M visitors followed.</p></div>
                                  <div className="timeline-item border-transparent pb-0"><div className="timeline-dot" style={{ background: '#22c55e' }}></div><span className="text-xs text-stone-400 block mb-1">June 2025</span><h4 className="text-sm font-bold text-white">Project Completion</h4><p className="text-xs text-stone-400 mt-1">Main Shikhar (161ft) fully consecrated.</p></div>
                              </div>
                          </div>
                          <div>
                              <h3 className="text-xl font-bold text-[var(--report-accent)] mb-6">Architectural Marvels</h3>
                              <p className="text-xs text-stone-400 mb-6">Designed by the Sompura family in the Nagara style.</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-stone-800 p-3 rounded border-l-2 border-[var(--report-accent)]"><h5 className="text-sm font-bold text-white">Iron-Free</h5><p className="text-xs text-stone-400">Est. lifespan: 1,000 years.</p></div>
                                  <div className="bg-stone-800 p-3 rounded border-l-2 border-[var(--report-accent)]"><h5 className="text-sm font-bold text-white">Surya Tilak</h5><p className="text-xs text-stone-400">Optomechanics sunlight system.</p></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* UJJAIN & PURI DEEP DIVE CONDENSED FOR BREVITY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* MAHAKAL LOK */}
                <div id="ujjain-deep-dive" className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                    <div className="bg-[var(--report-accent)] p-8 text-center">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study</span>
                        <h2 className="text-3xl font-serif font-bold mt-4">Mahakal Lok</h2>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-300 mb-6 text-sm">Developed under Smart Cities Mission, it expanded the temple area by 7x (to 47 Ha) restoring Rudrasagar Lake.</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-stone-800 p-3 rounded-lg border border-stone-700"><div className="text-xs text-stone-400">Cost</div><div className="text-xl font-bold text-white mt-1">₹856 Cr</div></div>
                            <div className="bg-stone-800 p-3 rounded-lg border border-stone-700"><div className="text-xs text-stone-400">Capacity</div><div className="text-xl font-bold text-white mt-1">1 Lakh+</div></div>
                        </div>
                        <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 h-64 mt-auto">
                            <canvas ref={mahakalChartRef}></canvas>
                        </div>
                    </div>
                </div>

                {/* PURI */}
                <div id="puri-deep-dive" className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                    <div className="bg-[var(--report-accent)] p-8 text-center">
                        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Case Study</span>
                        <h2 className="text-3xl font-serif font-bold mt-4">Jagannath Heritage</h2>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                        <p className="text-stone-300 mb-6 text-sm">Created a secure 75-meter buffer zone clearing the 12th-century shrine's periphery, funded by ABADHA scheme.</p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-stone-800 p-3 rounded-lg border border-stone-700"><div className="text-xs text-stone-400">Cost</div><div className="text-xl font-bold text-white mt-1">₹943 Cr</div></div>
                            <div className="bg-stone-800 p-3 rounded-lg border border-stone-700"><div className="text-xs text-stone-400">Buffer</div><div className="text-xl font-bold text-white mt-1">75 Meters</div></div>
                        </div>
                        <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 h-64 mt-auto">
                            <canvas ref={puriChartRef}></canvas>
                        </div>
                    </div>
                </div>
              </div>

          </section>

          {/* SECTION 7: CRITICAL CHALLENGES */}
          <section id="challenges" className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h2 className="text-3xl font-serif font-bold mb-6 text-red-900">6. Critical Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700 leading-relaxed">
                  <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">The Himalayan Crisis</h3>
                      <p className="mb-3">Carrying capacity is being tested to the breaking point.</p>
                      <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Joshimath Sinking (2023):</strong> Land subsidence due to fragile geology and unchecked construction.</li>
                          <li><strong>Kedarnath Waste:</strong> 26 tonnes generated in 2024 season; 17 tonnes remained unprocessed.</li>
                          <li><strong>Road Widening:</strong> 889 km Char Dham project linked to landslides.</li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Urban & Social Friction</h3>
                      <p className="mb-3">Scale of 100M+ visitors strains municipal limits.</p>
                      <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Overcrowding:</strong> Ayodhya Trust issued advisories asking locals to delay visits. Sewage/Water stressed.</li>
                          <li><strong>Disneyfication:</strong> Risk of diluting sanctity. Transformation into "Tourism Products" may alienate traditional pilgrims.</li>
                      </ul>
                  </div>
              </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-[var(--report-border)] pt-12 pb-8 text-center">
              <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-serif font-bold mb-4">Vision 2030</h3>
                  <p className="text-gray-600 mb-8 italic">
                      "If the government succeeds in its destination development strategy... India could position itself as the Spiritual Capital of the World. The challenge lies in managing this growth so that the pilgrim's progress does not become the environment's regress."
                  </p>
                  <div className="text-xs text-gray-400">
                      <p>Report prepared by: Centre for Tourism Economics & Heritage Management</p>
                      <p>Date: February 2026</p>
                  </div>
              </div>
          </footer>
      </div>
    </div>
  );
}

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'report'
  const [activeCategory, setActiveCategory] = useState(DATABASE[0].category);
  const [activeCircuitId, setActiveCircuitId] = useState(DATABASE[0].circuits[0].id);
  const [activeStopIdx, setActiveStopIdx] = useState(0);
  const [isChartLoaded, setIsChartLoaded] = useState(false);
  
  const growthChartRef = useRef(null);
  const spendChartRef = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  const currentCategoryObj = DATABASE.find(c => c.category === activeCategory) || DATABASE[0];
  const currentCircuit = currentCategoryObj.circuits.find(c => c.id === activeCircuitId) || currentCategoryObj.circuits[0];
  const currentStop = currentCircuit.stops[activeStopIdx] || currentCircuit.stops[0];

  const handleViewChange = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0); // Reset scroll on view change
  };

  const handleCategoryChange = (cat) => {
    const newCatObj = DATABASE.find(c => c.category === cat);
    setActiveCategory(cat);
    setActiveCircuitId(newCatObj.circuits[0].id);
    setActiveStopIdx(0);
  };

  const handleCircuitChange = (id) => {
    setActiveCircuitId(id);
    setActiveStopIdx(0);
  };

  // 1. Load Chart.js dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    script.onload = () => setIsChartLoaded(true);
    document.body.appendChild(script);

    return () => { document.body.removeChild(script); };
  }, []);

  // 2. Initialize Home Dashboard Charts
  useEffect(() => {
    if (isChartLoaded && window.Chart && currentView === 'home') {
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
              borderColor: '#D97706', backgroundColor: 'rgba(217, 119, 6, 0.05)',
              fill: true, tension: 0.4, borderWidth: 6, pointRadius: 0
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
              backgroundColor: ['#D97706', '#059669', '#3B82F6', '#8B5CF6'], borderWidth: 0
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
    
    return () => {
      if (chartInstance1.current) chartInstance1.current.destroy();
      if (chartInstance2.current) chartInstance2.current.destroy();
    };
  }, [isChartLoaded, currentView]);

  return (
    <div className="antialiased selection:bg-amber-100 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        :root {
          /* App Variables */
          --sacred-saffron: #D97706;
          --policy-emerald: #065F46;
          --spiritual-navy: #0F172A;
          --stone-bg: #F8F6F2;
          
          /* Dedicated Report Variables */
          --report-bg: #fdfbf7;
          --report-surface: #ffffff;
          --report-text: #1c1917;
          --report-subtext: #57534e;
          --report-accent: #ea580c;
          --report-accent-dim: #fff7ed;
          --report-gold: #b45309;
          --report-border: #e7e5e4;
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
        
        .animate-up { animation: slideUp 0.5s ease-out forwards; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        /* Report Specific Styles */
        .drop-cap:first-letter { float: left; font-size: 3.5rem; line-height: 0.8; font-weight: 700; padding-right: 0.5rem; color: var(--report-accent); }
        .chart-container-lg { position: relative; height: 400px; width: 100%; }
        .chart-container-sm { position: relative; height: 250px; width: 100%; }
        .accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.5s ease-out; }
        .accordion-content.open { max-height: 2000px; transition: max-height 0.7s ease-in; }
        .data-table th { background-color: var(--report-accent-dim); color: var(--report-gold); font-weight: 600; text-transform: uppercase; font-size: 0.75rem; padding: 12px; text-align: left; }
        .data-table td { padding: 12px; border-bottom: 1px solid var(--report-border); font-size: 0.875rem; }
        .data-table tr:last-child td { border-bottom: none; }
        .timeline-item { position: relative; padding-left: 2rem; border-left: 2px solid var(--report-border); padding-bottom: 2rem; }
        .timeline-item:last-child { border-left: 2px solid transparent; }
        .timeline-dot { position: absolute; left: -0.4rem; top: 0; width: 0.8rem; height: 0.8rem; background: var(--report-accent); border-radius: 50%; border: 2px solid white; }
      `}</style>

      {currentView === 'report' ? (
        <ReportPage isChartLoaded={isChartLoaded} onBack={() => handleViewChange('home')} />
      ) : (
        <>
          {/* Main Dashboard Navigation */}
          <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-amber-100 px-6 py-4">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-amber-200">ॐ</div>
                <div className="flex flex-col">
                  <span className="text-xl font-black text-gray-900 tracking-tighter italic">Sacred Almanac</span>
                  <span className="text-[9px] font-black text-amber-600 uppercase tracking-[0.3em]">Comprehensive Edition V3.0</span>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                <a href="#policies" className="hover:text-amber-600 transition">Strategy Hub</a>
                <button onClick={() => handleViewChange('report')} className="hover:text-amber-600 transition uppercase tracking-[0.2em] font-black">Strategic Report</button>
                <a href="#atlas" className="hover:text-amber-600 transition">Master Atlas</a>
                <a href="#analytics" className="hover:text-amber-600 transition">Economics</a>
              </div>
              <button onClick={() => handleViewChange('report')} className="px-5 py-2.5 bg-gray-900 text-white text-[10px] font-black rounded-lg shadow-xl shadow-gray-200 hover:bg-black transition uppercase tracking-widest">
                Full Report ↗
              </button>
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
                <button onClick={() => handleViewChange('report')} className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-200 hover:bg-amber-700 hover:-translate-y-1 transition-all duration-300">Read Strategic Report</button>
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

            {/* Strategic Report Section SUMMARY */}
            <section id="report" className="scroll-mt-24 py-20 bg-white rounded-[4rem] border border-amber-50 shadow-2xl overflow-hidden relative">
              <div className="max-w-6xl mx-auto px-8 md:px-16 text-center">
                  <div className="mb-8">
                      <h5 className="text-amber-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Whitepaper | Executive Summary</h5>
                      <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-none mb-6">The Sacred Economy</h2>
                      <p className="text-2xl font-serif text-gray-500 italic max-w-3xl mx-auto">A Comprehensive Analysis of the Rise, Economic Impact, and Future of Temple Tourism in India (2024-2047)</p>
                  </div>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                      The Indian tourism landscape is undergoing a structural transformation of unprecedented magnitude. This shift is moving the devotee from a passive pilgrim to a consumer of heritage, culture, and premium hospitality. 
                  </p>
                  <button onClick={() => handleViewChange('report')} className="bg-amber-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-amber-200 hover:bg-amber-700 transition-all duration-300 inline-flex items-center">
                      Deep Dive <ArrowRight className="ml-3 w-5 h-5" />
                  </button>
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
                        Official Portal <ExternalLink className="ml-2 w-4 h-4" />
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
                      <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div><p className="text-slate-300 text-sm font-medium">100% Digital Queueing for Top 50 Hubs</p></div>
                      <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div><p className="text-slate-300 text-sm font-medium">Sustainable Transport: Zero-Emission Temple Zones</p></div>
                      <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-4 mt-2"></div><p className="text-slate-300 text-sm font-medium">AR/VR Corridors for Historical Storytelling</p></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-14 rounded-[4rem] border border-gray-100 shadow-xl space-y-16">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-12 text-center">Post-PRASHAD Visitor Volume Growth</h4>
                    <div className="h-[250px] w-full"><canvas ref={growthChartRef}></canvas></div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Expenditure Multiplier by Sector</h4>
                    <div className="h-[250px] w-full"><canvas ref={spendChartRef}></canvas></div>
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
                <span>Ministry of Tourism</span><span>•</span><span>Incredible India</span><span>•</span><span>PRASHAD Scheme</span>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}