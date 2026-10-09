"use client";

import { useState } from 'react';
import { Search, Calculator, Zap, ArrowRight, Activity, CircleDashed } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FormulaVaultPage() {
  const [v, setV] = useState('');
  const [u, setU] = useState('');
  const [a, setA] = useState('');
  const [t, setT] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculateVelocity = () => {
    if (u && a && t) {
      const res = parseFloat(u) + parseFloat(a) * parseFloat(t);
      setResult(`v = ${res} m/s`);
    } else {
      setResult('দয়া করে u, a, এবং t এর মান দিন।');
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-24 pt-4 px-4 animate-in fade-in">
      
      {/* Header with Neon/Glassmorphism hint */}
      <div className="bg-brand-dark rounded-3xl p-8 mb-8 relative overflow-hidden shadow-[0_8px_30px_rgba(16,185,129,0.2)]">
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-default blur-3xl opacity-30 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-warning blur-3xl opacity-20 rounded-full"></div>
        
        <div className="relative z-10 flex items-start gap-5">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Calculator className="w-7 h-7 text-brand-mint" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-white mb-2">Interactive Formula Vault</h1>
            <p className="text-brand-light/80 text-sm md:text-base">
              যেকোনো ফর্মুলায় ভ্যালু বসিয়ে সাথে সাথে উত্তর মিলিয়ে নাও।
            </p>
          </div>
        </div>
      </div>

      {/* Formula Calculator Section */}
      <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-sm mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-brand-default fill-current" />
          <h2 className="text-xl font-bold text-brand-dark">গতির সমীকরণ: v = u + at</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1.5 block">আদিবেগ (u) m/s</label>
            <input 
              type="number" 
              value={u} 
              onChange={e => setU(e.target.value)} 
              className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 text-brand-dark font-mono focus:border-brand-default focus:ring-2 focus:ring-brand-light outline-none transition-all"
              placeholder="e.g. 0"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1.5 block">ত্বরণ (a) m/s²</label>
            <input 
              type="number" 
              value={a} 
              onChange={e => setA(e.target.value)} 
              className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 text-brand-dark font-mono focus:border-brand-default focus:ring-2 focus:ring-brand-light outline-none transition-all"
              placeholder="e.g. 9.8"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-500 mb-1.5 block">সময় (t) s</label>
            <input 
              type="number" 
              value={t} 
              onChange={e => setT(e.target.value)} 
              className="w-full bg-surface-muted border border-gray-200 rounded-xl px-4 py-3 text-brand-dark font-mono focus:border-brand-default focus:ring-2 focus:ring-brand-light outline-none transition-all"
              placeholder="e.g. 5"
            />
          </div>
          <div className="flex items-end">
            <button 
              onClick={calculateVelocity}
              className="w-full bg-brand-default text-white font-bold h-12 rounded-xl hover:bg-brand-dark hover:shadow-lg hover:shadow-brand-default/30 transition-all active:scale-95"
            >
              হিসাব করো
            </button>
          </div>
        </div>

        {/* Result Box */}
        {result && (
          <div className="bg-[#EAF6F0] border border-[#a7d7c1] rounded-2xl p-4 flex items-center justify-between animate-in slide-in-from-bottom-2">
            <div>
              <span className="text-xs font-bold text-brand-dark block mb-1">চূড়ান্ত বেগ (v)</span>
              <span className="text-xl font-black text-brand-default font-mono">{result}</span>
            </div>
          </div>
        )}
      </div>

      {/* Other Formulas List */}
      <div className="grid md:grid-cols-2 gap-4">
        {['F = ma (নিউটনের ২য় সূত্র)', 'W = Fs cosθ (কাজ)', 'E = mc² (ভর-শক্তি)', 'T = 2π√(L/g) (দোলক)'].map((formula, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:border-brand-default/50 hover:shadow-md transition-all cursor-pointer group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-brand-default group-hover:bg-brand-light transition-colors">
                <CircleDashed className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700 group-hover:text-brand-dark">{formula}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-default group-hover:translate-x-1 transition-transform" />
          </div>
        ))}
      </div>

    </div>
  );
}
