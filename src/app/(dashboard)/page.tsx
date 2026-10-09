import { Flame, Play, Zap, Swords, FileCheck, Trophy } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-6 pb-20 pt-2 animate-in fade-in duration-500 max-w-lg mx-auto">
      
      {/* Streak Dashboard Card */}
      <section className="bg-white rounded-3xl p-5 shadow-sm border border-brand-mint/60 relative overflow-hidden group hover:shadow-md transition-shadow">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light opacity-50 rounded-bl-full -z-0"></div>

        <div className="relative z-10 flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-50">
              <Flame className="w-6 h-6 text-accent-warning fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">আজকের স্ট্রিক</span>
              <h2 className="text-2xl font-black text-brand-dark leading-none">১০ দিন</h2>
            </div>
          </div>
          <div className="bg-brand-light/50 px-3 py-1.5 rounded-xl border border-brand-mint/50 text-right">
            <span className="text-[10px] font-bold text-brand-dark block">আগামীকাল</span>
            <span className="text-xs font-black text-brand-default">১১ দিন হবে!</span>
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="flex justify-between items-center bg-surface-muted/50 p-2.5 rounded-2xl border border-gray-100">
          {['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'].map((day, i) => {
            const isCompleted = i < 5;
            const isToday = i === 5;
            const isFuture = i > 5;
            
            return (
              <div key={day} className="flex flex-col items-center gap-1.5 flex-1">
                <div className={"w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 " + 
                  (isCompleted ? "bg-[#fff6ed] text-[#ff8c00]" : 
                   isToday ? "bg-brand-default text-white shadow-md shadow-brand-default/20 scale-110" : 
                   "bg-white text-gray-300 border border-gray-100")}
                >
                  <Flame className={"w-4 h-4 " + (isCompleted || isToday ? "fill-current" : "")} />
                </div>
                <span className={"text-[9px] font-extrabold " + (isToday ? "text-brand-default" : "text-gray-400")}>{day}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resume Learning */}
      <button className="w-full bg-[#EAF6F0] border border-brand-default rounded-3xl p-5 flex items-center justify-between hover:bg-[#d9f0e3] transition-colors group">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-default text-white flex items-center justify-center">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <span className="font-extrabold text-brand-dark text-lg">চালিয়ে যাও · মিশ্র সেশন (০/২০)</span>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-brand-default group-hover:translate-x-1 transition-transform">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </div>
      </button>

      {/* Courses Section */}
      <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          </div>
          <h2 className="text-base font-extrabold text-brand-dark">আমাদের কোর্সসমূহ</h2>
        </div>
        
        <div className="space-y-3">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
            <div>
              <h3 className="font-bold text-brand-dark">SSC Physics</h3>
              <p className="text-xs text-gray-500 mt-1">৯ম-১০ম শ্রেণির সম্পূর্ণ সিলেবাস</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
            <div>
              <h3 className="font-bold text-brand-dark">HSC Physics</h3>
              <p className="text-xs text-gray-500 mt-1">একাদশ-দ্বাদশ শ্রেণির পূর্ণাঙ্গ প্রস্তুতি</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-100 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
            <div>
              <h3 className="font-bold text-brand-dark">Admission Physics</h3>
              <p className="text-xs text-gray-500 mt-1">Medical, Varsity, Engineering</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Grid */}
      <section className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-4 px-1">
          <Zap className="w-5 h-5 text-brand-default fill-current" />
          <h2 className="text-base font-extrabold text-brand-dark">দ্রুত শুরু</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          
          <button className="flex flex-col items-center justify-center p-5 bg-[#F8FAF9] border border-gray-100 rounded-2xl hover:border-brand-default hover:shadow-sm transition-all group">
            <div className="w-12 h-12 bg-white shadow-sm text-[#10B981] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="font-extrabold text-brand-dark text-[13px]">মাস্টারি চ্যালেঞ্জ</span>
            <span className="text-[10px] font-semibold text-gray-400 mt-1">নিজেকে যাচাই করো</span>
          </button>

          <button className="flex flex-col items-center justify-center p-5 bg-[#F8FAF9] border border-gray-100 rounded-2xl hover:border-[#ff4d6d] hover:shadow-sm transition-all group">
            <div className="w-12 h-12 bg-white shadow-sm text-[#ff4d6d] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Swords className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-brand-dark text-[13px]">গেম</span>
            <span className="text-[10px] font-semibold text-gray-400 mt-1">সার্ভাইভাল ও ডুয়েল</span>
          </button>

          <button className="flex flex-col items-center justify-center p-5 bg-[#F8FAF9] border border-gray-100 rounded-2xl hover:border-[#0ea5e9] hover:shadow-sm transition-all group">
            <div className="w-12 h-12 bg-white shadow-sm text-[#0ea5e9] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-brand-dark text-[13px]">রিভিউ</span>
            <span className="text-[10px] font-semibold text-gray-400 mt-1">ভুল ও বুকমার্ক</span>
          </button>

          <button className="flex flex-col items-center justify-center p-5 bg-[#F8FAF9] border border-gray-100 rounded-2xl hover:border-[#f59e0b] hover:shadow-sm transition-all group">
            <div className="w-12 h-12 bg-white shadow-sm text-[#f59e0b] rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-brand-dark text-[13px]">লিডারবোর্ড</span>
            <span className="text-[10px] font-semibold text-gray-400 mt-1">র‍্যাংকিং দেখো</span>
          </button>

        </div>
      </section>

    </div>
  );
}
