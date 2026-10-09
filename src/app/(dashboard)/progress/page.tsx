"use client";

import { Activity, Target, ShieldAlert, Award } from 'lucide-react';
import Image from 'next/image';

export default function ProgressPage() {
  return (
    <div className="max-w-4xl mx-auto pb-24 pt-4 px-4 animate-in fade-in">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-brand-dark mb-2">AI Performance Radar</h1>
        <p className="text-gray-500 font-medium">তোমার সব প্র্যাকটিসের উপর ভিত্তি করে AI এনালাইসিস</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Left Column - Radar & Stats */}
        <div className="space-y-6">
          {/* Mock Radar Chart Area (Glassmorphism) */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-default/10 rounded-full blur-3xl group-hover:bg-brand-default/20 transition-all duration-700"></div>
            
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-[10px] absolute top-6 left-6">Weakness Radar</h3>
            
            {/* SVG Radar Mock */}
            <svg viewBox="0 0 100 100" className="w-48 h-48 relative z-10 drop-shadow-md">
              <polygon points="50,10 90,40 75,90 25,90 10,40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              <polygon points="50,40 60,50 55,60 45,60 40,50" fill="none" stroke="#E2E8F0" strokeWidth="1" />
              
              {/* Actual Data Polygon (Glowing Green) */}
              <polygon points="50,20 80,45 60,80 30,70 15,45" fill="rgba(22, 167, 101, 0.2)" stroke="#16A765" strokeWidth="2" className="animate-pulse" />
              
              <circle cx="50" cy="20" r="3" fill="#16A765" />
              <circle cx="80" cy="45" r="3" fill="#16A765" />
              <circle cx="60" cy="80" r="3" fill="#16A765" />
              <circle cx="30" cy="70" r="3" fill="#16A765" />
              <circle cx="15" cy="45" r="3" fill="#16A765" />
              
              <text x="50" y="5" fontSize="6" textAnchor="middle" fill="#64748b" fontWeight="bold">Mechanics</text>
              <text x="95" y="45" fontSize="6" fill="#64748b" fontWeight="bold">Thermo</text>
              <text x="80" y="98" fontSize="6" textAnchor="middle" fill="#64748b" fontWeight="bold">Modern</text>
              <text x="20" y="98" fontSize="6" textAnchor="middle" fill="#64748b" fontWeight="bold">Waves</text>
              <text x="0" y="45" fontSize="6" fill="#64748b" fontWeight="bold">Electro</text>
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <Target className="w-6 h-6 text-brand-default mb-3" />
              <h4 className="text-2xl font-black text-brand-dark mb-1">৬৮%</h4>
              <p className="text-xs font-bold text-gray-400">গড় সঠিক উত্তর (Accuracy)</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <Award className="w-6 h-6 text-accent-warning mb-3" />
              <h4 className="text-2xl font-black text-brand-dark mb-1">Expert</h4>
              <p className="text-xs font-bold text-gray-400">Current Mastery Level</p>
            </div>
          </div>
        </div>

        {/* Right Column - Recommendations */}
        <div className="space-y-4">
          <div className="bg-surface-dark text-white rounded-3xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-accent-warning" />
              <h2 className="text-lg font-bold">AI Recommendation</h2>
            </div>
            <p className="text-brand-light/80 text-sm leading-relaxed mb-6">
              তোমার রাডার চার্ট এনালাইসিস করে দেখা যাচ্ছে তুমি <strong>Thermodynamics (তাপগতিবিদ্যা)</strong> এবং <strong>Waves (তরঙ্গ)</strong> এ একটু পিছিয়ে আছো। 
            </p>
            <button className="w-full bg-brand-default hover:bg-brand-default/90 text-white font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-[0_4px_14px_rgba(22,167,101,0.4)]">
              কাস্টম প্র্যাকটিস শুরু করো
            </button>
          </div>

          <h3 className="font-extrabold text-brand-dark text-lg mt-8 mb-4">Weakest Chapters</h3>
          {[
            { name: "তাপগতিবিদ্যা", score: "42%", trend: "down" },
            { name: "তরঙ্গ", score: "55%", trend: "down" },
            { name: "স্থির তড়িৎ", score: "61%", trend: "up" },
          ].map((chap, i) => (
            <div key={i} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between hover:border-brand-mint transition-colors cursor-pointer">
              <span className="font-bold text-brand-dark">{chap.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-gray-500">{chap.score}</span>
                <div className={`w-2 h-2 rounded-full ${chap.trend === 'down' ? 'bg-red-500' : 'bg-brand-default'}`}></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
