"use client";

import { Search, Filter, Play, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuestionBankPage() {
  const categories = [
    { name: "Medical", count: 450, color: "text-red-500", bg: "bg-red-50" },
    { name: "Engineering", count: 820, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Dhaka University", count: 320, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "HSC Board", count: 1200, color: "text-brand-default", bg: "bg-brand-light" },
  ];

  return (
    <div className="max-w-lg mx-auto pb-24 px-4 pt-4 animate-in fade-in">
      
      {/* Header Info */}
      <div className="mb-6">
        <h1 className="text-2xl font-black text-brand-dark">প্রশ্নব্যাংক</h1>
        <p className="text-sm text-gray-500 font-semibold mt-1">বিগত বছরের প্রশ্ন ও সমাধান</p>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <div className="flex-1 flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-4 shadow-sm focus-within:border-brand-default focus-within:ring-2 focus-within:ring-brand-light transition-all">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="অধ্যায় বা টপিক খুঁজুন..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-base py-3 text-gray-700 placeholder:text-gray-400"
          />
        </div>
        <button className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-gray-500 hover:text-brand-default hover:border-brand-default transition-all shadow-sm">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col items-start hover:border-brand-default transition-colors cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${cat.bg} ${cat.color}`}>
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-brand-dark leading-tight">{cat.name}</h3>
            <span className="text-[11px] font-bold text-gray-400 mt-1">{cat.count} টি প্রশ্ন</span>
          </div>
        ))}
      </div>

      {/* Recent Practice */}
      <div>
        <h2 className="text-lg font-bold text-brand-dark mb-4">রিসেন্ট প্র্যাকটিস</h2>
        <div className="space-y-3">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark">DU Admission 2022</h3>
                <p className="text-xs text-gray-500 font-medium">Physics 1st Paper • 15/25 완료</p>
              </div>
            </div>
            <button className="w-10 h-10 bg-[#EAF6F0] rounded-full flex items-center justify-center text-brand-default hover:bg-[#d1ecd8] transition-colors">
              <Play className="w-4 h-4 fill-current ml-1" />
            </button>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-dark">Medical 2021</h3>
                <p className="text-xs text-gray-500 font-medium">Physics 2nd Paper • 4/20 완료</p>
              </div>
            </div>
            <button className="w-10 h-10 bg-[#EAF6F0] rounded-full flex items-center justify-center text-brand-default hover:bg-[#d1ecd8] transition-colors">
              <Play className="w-4 h-4 fill-current ml-1" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
