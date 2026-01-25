import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

const growthData = [
  { year: '2020', index: 35 },
  { year: '2021', index: 55 },
  { year: '2022', index: 140 },
  { year: '2023', index: 210 },
  { year: '2024', index: 260 },
];

const spendData = [
  { name: 'Hospitality', value: 42, color: '#D97706' },
  { name: 'Transport', value: 28, color: '#059669' },
  { name: 'Handicrafts', value: 18, color: '#3B82F6' },
  { name: 'Food', value: 12, color: '#8B5CF6' },
];

const AnalyticsSection: React.FC = () => {
  return (
    <section id="analytics" className="scroll-mt-24 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div>
            <h2 className="text-5xl font-black mb-8 italic tracking-tight">Macro Impact Dashboard</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Spiritual tourism accounts for over 60% of domestic tourism in India. The structural multiplier of temple clusters creates decentralized economic prosperity.
            </p>
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
          <div className="h-[300px] w-full">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-12 text-center">Post-PRASHAD Visitor Volume Growth</h4>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <XAxis dataKey="year" hide />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: '#D97706', fontWeight: 'bold' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="index" 
                  stroke="#D97706" 
                  strokeWidth={6} 
                  dot={false}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="h-[300px] w-full">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 text-center">Expenditure Multiplier by Sector</h4>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {spendData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-2">{value}</span>}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
