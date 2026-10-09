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
    <div className="max-w-3xl mx-auto pb-24 pt-4 px-4 md:px-8 animate-in fade-in">
      
      {/* Main Content */}
      <div className="space-y-8 pt-2">
        
        {/* Banner Section */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-10 shadow-premium relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-action/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute -right-8 -top-8 opacity-5">
            <Atom className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-lg">
            <h1 className="text-2xl md:text-3xl font-sans font-bold mb-2 leading-tight">
              Sohag Physics <span className="text-accent-amber">Master Hub</span>
            </h1>
            <p className="text-action text-sm font-semibold tracking-wide uppercase mb-4">HSC & Admission Exclusive</p>
            <p className="text-white/80 text-sm leading-relaxed font-medium">
              Physics এ দখল আনার জন্য তৈরি হবে আমাদের advanced problem-solving engine, step-by-step mathematical derivations এবং AI tutor-এর সাথে। প্রতিটি অধ্যায়ের core formula, conceptual tricks এবং admission question bank এখানে পাবেন।
            </p>
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* 1st Paper Card */}
          <div className="bg-surface border border-border-light rounded-3xl p-6 shadow-subtle flex flex-col h-full hover:border-action/40 transition-colors group relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-surface-muted text-action rounded-xl flex items-center justify-center border border-border-light group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-primary">Physics 1st Paper</h2>
                  <p className="text-[12px] font-semibold text-text-secondary mt-0.5 uppercase tracking-wider">Fundamentals</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {paper1Chapters.map((chap, i) => (
                  <span key={i} className="bg-background text-text-secondary text-[11px] font-semibold px-2.5 py-1 rounded-md border border-border-light">
                    {chap}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/practice/physics/paper-1" className="mt-auto relative z-10 w-full bg-surface-muted hover:bg-action hover:text-white transition-all duration-300 text-primary border border-border-light hover:border-action rounded-xl py-3.5 px-5 flex items-center justify-between font-bold text-[14px]">
              অনুশীলন শুরু করো
              <ChevronRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 2nd Paper Card */}
          <div className="bg-surface border border-border-light rounded-3xl p-6 shadow-subtle flex flex-col h-full hover:border-action/40 transition-colors group relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-surface-muted text-action rounded-xl flex items-center justify-center border border-border-light group-hover:scale-105 transition-transform">
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-primary">Physics 2nd Paper</h2>
                  <p className="text-[12px] font-semibold text-text-secondary mt-0.5 uppercase tracking-wider">Electricity & Modern</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {paper2Chapters.map((chap, i) => (
                  <span key={i} className="bg-background text-text-secondary text-[11px] font-semibold px-2.5 py-1 rounded-md border border-border-light">
                    {chap}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/practice/physics/paper-2" className="mt-auto relative z-10 w-full bg-surface-muted hover:bg-action hover:text-white transition-all duration-300 text-primary border border-border-light hover:border-action rounded-xl py-3.5 px-5 flex items-center justify-between font-bold text-[14px]">
              অনুশীলন শুরু করো
              <ChevronRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
