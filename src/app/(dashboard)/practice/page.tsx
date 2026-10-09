"use client";

import { Bell, Menu, ChevronRight, BookOpen, Atom } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PracticeSubjectsPage() {
  const paper1Chapters = [
    "Vector", "Newtonian Mechanics", "Work-Energy-Power", 
    "Gravitation", "Properties of Matter", "Waves", "Thermodynamics"
  ];

  const paper2Chapters = [
    "Electrostatics", "Current Electricity", "Magnetic Effects", 
    "Electromagnetic Induction", "Modern Physics", "Electronics", "Atomic Physics"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-24 pt-2 px-4 animate-in fade-in">
      
      {/* Main Content */}
      <div className="space-y-8 pt-4">
        
        {/* Banner Section */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Atom className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-black mb-3 leading-tight text-brand-mint">
              Sohag Physics Master Hub<br/>
              <span className="text-white text-lg md:text-xl opacity-90">HSC & Admission Exclusive Preparation</span>
            </h1>
            <p className="text-brand-light opacity-80 text-sm md:text-base leading-relaxed font-medium">
              Physics e dakhol anar jonno toiri hobe amader advanced problem-solving engine, step-by-step mathematical derivations ebong AI tutor-er sathe. Protiti adhyayer core formula, conceptual tricks ebong board/admission question bank ekhane paben.
            </p>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          
          {/* 1st Paper Card */}
          <div className="bg-white border border-brand-mint rounded-3xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light opacity-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-brand-light text-brand-default rounded-2xl flex items-center justify-center shadow-sm">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-brand-dark">Physics 1st Paper</h2>
                  <p className="text-xs font-semibold text-brand-secondary mt-0.5">Fundamentals & Mechanics</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {paper1Chapters.map((chap, i) => (
                  <span key={i} className="bg-surface-muted text-gray-600 text-[11px] font-bold px-2.5 py-1 rounded-md border border-gray-100">
                    {chap}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/practice/physics/paper-1" className="mt-auto relative z-10 w-full bg-brand-default hover:bg-brand-dark transition-all duration-300 text-white rounded-2xl py-3.5 px-5 flex items-center justify-between font-bold text-sm shadow-sm group-hover:-translate-y-1">
              অনুশীলন শুরু করো
              <ChevronRight className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 2nd Paper Card */}
          <div className="bg-white border border-brand-mint rounded-3xl p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light opacity-50 rounded-bl-full -z-0 transition-transform group-hover:scale-110"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-brand-light text-brand-default rounded-2xl flex items-center justify-center shadow-sm">
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-brand-dark">Physics 2nd Paper</h2>
                  <p className="text-xs font-semibold text-brand-secondary mt-0.5">Electricity & Modern Physics</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {paper2Chapters.map((chap, i) => (
                  <span key={i} className="bg-surface-muted text-gray-600 text-[11px] font-bold px-2.5 py-1 rounded-md border border-gray-100">
                    {chap}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/practice/physics/paper-2" className="mt-auto relative z-10 w-full bg-brand-default hover:bg-brand-dark transition-all duration-300 text-white rounded-2xl py-3.5 px-5 flex items-center justify-between font-bold text-sm shadow-sm group-hover:-translate-y-1">
              অনুশীলন শুরু করো
              <ChevronRight className="w-5 h-5 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
