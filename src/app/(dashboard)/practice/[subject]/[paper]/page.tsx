import Link from 'next/link';
import { ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';

export function generateStaticParams() {
  return [
    { subject: 'physics', paper: 'paper-1' },
    { subject: 'physics', paper: 'paper-2' },
  ];
}

export default async function PaperChaptersPage({
  params,
}: {
  params: Promise<{ subject: string; paper: string }>;
}) {
  const { subject, paper } = await params;
  
  const chapters = [
    { id: "chapter-1", title: "ভৌত জগত ও পরিমাপ", count: 120 },
    { id: "chapter-2", title: "ভেক্টর", count: 350 },
    { id: "chapter-3", title: "গতিবিদ্যা", count: 420 },
    { id: "chapter-4", title: "নিউটনীয় বলবিদ্যা", count: 280 },
    { id: "chapter-5", title: "কাজ, শক্তি ও ক্ষমতা", count: 310 },
    { id: "chapter-6", title: "মহাকর্ষ ও অভিকর্ষ", count: 215 },
  ];

  return (
    <div className="max-w-lg mx-auto pb-24 pt-4 px-4 animate-in fade-in">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/practice" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-xl font-black text-brand-dark capitalize">{subject} {paper === 'paper-1' ? '১ম পত্র' : '২য় পত্র'}</h1>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">অধ্যায় নির্বাচন করুন</p>
        </div>
      </div>

      {/* Chapter List */}
      <div className="space-y-3">
        {chapters.map((ch, idx) => (
          <Link 
            key={ch.id}
            href={`/practice/${subject}/${paper}/${ch.id}`}
            className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:border-brand-default transition-all shadow-sm group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-light text-brand-default rounded-xl flex items-center justify-center font-black text-lg">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-extrabold text-brand-dark text-base">{ch.title}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-[11px] font-bold text-gray-400">{ch.count} টি প্রশ্ন</span>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-brand-default group-hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
