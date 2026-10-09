import { Flame, Play, Zap, Swords, FileCheck, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-6 pb-20 pt-4 animate-in fade-in duration-500 max-w-2xl mx-auto px-4 md:px-8">
      
      {/* Header Greeting */}
      <header className="mb-8 mt-2">
        <h1 className="text-3xl font-sans font-bold text-primary tracking-tight">শুভ সকাল, <span className="text-action">শিখার্থী!</span></h1>
        <p className="text-text-secondary mt-1 font-medium">আজকের পড়াশোনার লক্ষ্য কি?</p>
      </header>

      {/* Streak Dashboard Card */}
      <section className="bg-surface rounded-2xl p-6 shadow-subtle border border-border-light relative overflow-hidden group hover:border-action/30 transition-colors">
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-surface-muted rounded-xl flex items-center justify-center border border-border-light">
              <Flame className="w-6 h-6 text-accent-amber fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-1">আজকের স্ট্রিক</span>
              <h2 className="text-2xl font-bold text-primary leading-none">১০ দিন</h2>
            </div>
          </div>
          <div className="bg-surface-muted px-4 py-2 rounded-lg border border-border-light text-right">
            <span className="text-[11px] font-bold text-text-secondary block">আগামীকাল</span>
            <span className="text-sm font-bold text-action">১১ দিন হবে!</span>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="flex justify-between items-center bg-background p-3 rounded-xl border border-border-light">
          {['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'].map((day, i) => {
            const isCompleted = i < 5;
            const isToday = i === 5;
            
            return (
              <div key={day} className="flex flex-col items-center gap-2 flex-1">
                <div className={"w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 " + 
                  (isCompleted ? "bg-accent-amber/10 text-accent-amber" : 
                   isToday ? "bg-action text-white shadow-sm scale-110" : 
                   "bg-surface text-gray-300 border border-border-light")}
                >
                  <Flame className={"w-4 h-4 " + (isCompleted || isToday ? "fill-current" : "")} />
                </div>
                <span className={"text-[11px] font-semibold " + (isToday ? "text-action" : "text-text-secondary")}>{day}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resume Learning */}
      <button className="w-full bg-surface-muted border border-action/20 rounded-2xl p-5 flex items-center justify-between hover:bg-surface-muted/70 hover:border-action/40 transition-all group shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-action text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-primary text-[15px]">চালিয়ে যাও</span>
            <span className="font-medium text-text-secondary text-sm">মিশ্র সেশন (০/২০)</span>
          </div>
        </div>
        <div className="text-action group-hover:translate-x-1 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </button>

      {/* Courses Section */}
      <section className="bg-surface rounded-2xl p-6 shadow-subtle border border-border-light mt-8">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-6 bg-action rounded-full"></div>
          <h2 className="text-lg font-bold text-primary">আমাদের কোর্সসমূহ</h2>
        </div>
        
        <div className="space-y-3">
          {[
            { title: 'SSC Physics', desc: '৯ম-১০ম শ্রেণির সম্পূর্ণ সিলেবাস' },
            { title: 'HSC Physics', desc: 'একাদশ-দ্বাদশ শ্রেণির পূর্ণাঙ্গ প্রস্তুতি' },
            { title: 'Admission Physics', desc: 'Medical, Varsity, Engineering' }
          ].map((course, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-background border border-border-light flex items-center justify-between hover:border-action/30 transition-colors cursor-pointer group">
              <div>
                <h3 className="font-bold text-primary text-[15px] group-hover:text-action transition-colors">{course.title}</h3>
                <p className="text-[13px] font-medium text-text-secondary mt-1">{course.desc}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface border border-border-light flex items-center justify-center text-text-secondary group-hover:bg-action group-hover:text-white group-hover:border-action transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Grid */}
      <section className="bg-surface rounded-2xl p-6 shadow-subtle border border-border-light mt-8">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-6 bg-accent-amber rounded-full"></div>
          <h2 className="text-lg font-bold text-primary">দ্রুত শুরু</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          
          {[
            { icon: Zap, label: 'মাস্টারি চ্যালেঞ্জ', sub: 'নিজেকে যাচাই করো' },
            { icon: Swords, label: 'গেম', sub: 'সার্ভাইভাল ও ডুয়েল' },
            { icon: FileCheck, label: 'রিভিউ', sub: 'ভুল ও বুকমার্ক' },
            { icon: Trophy, label: 'লিডারবোর্ড', sub: 'র‍্যাংকিং দেখো' }
          ].map((item, idx) => (
            <button key={idx} className="flex flex-col items-start p-5 bg-background border border-border-light rounded-xl hover:border-action/30 transition-all group text-left">
              <div className="w-10 h-10 bg-surface shadow-sm border border-border-light text-primary rounded-lg flex items-center justify-center mb-3 group-hover:text-action transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-primary text-[14px]">{item.label}</span>
              <span className="text-[12px] font-medium text-text-secondary mt-1">{item.sub}</span>
            </button>
          ))}

        </div>
      </section>

    </div>
  );
}
