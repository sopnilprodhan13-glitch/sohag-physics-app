import Link from 'next/link';
import { ArrowLeft, ChevronRight, Hash } from 'lucide-react';

export function generateStaticParams() {
  return [
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-1' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-2' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-3' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-4' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-5' },
    { subject: 'physics', paper: 'paper-1', chapter: 'chapter-6' },
  ];
}

export default async function ChapterTopicsPage({
  params,
}: {
  params: Promise<{ subject: string; paper: string; chapter: string }>;
}) {
  const { subject, paper, chapter } = await params;
  
  const topics = [
    { id: "topic-1", title: "স্কেলার ও ভেক্টর রাশি", progress: 80 },
    { id: "topic-2", title: "ভেক্টরের যোগ ও বিয়োগ", progress: 45 },
    { id: "topic-3", title: "ভেক্টরের গুণন (ডট ও ক্রস)", progress: 10 },
    { id: "topic-4", title: "ভেক্টর ক্যালকুলাস", progress: 0 },
  ];

  return (
    <div className="max-w-lg mx-auto pb-24 pt-4 px-4 animate-in fade-in">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href={`/practice/${subject}/${paper}`} className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-xl font-black text-brand-dark capitalize">ভেক্টর</h1>
          <p className="text-xs font-semibold text-gray-500 mt-0.5">টপিক নির্বাচন করুন</p>
        </div>
      </div>

      {/* Topic List */}
      <div className="space-y-3">
        {topics.map((topic, idx) => (
          <Link 
            key={topic.id}
            href={`/practice/${subject}/${paper}/${chapter}/${topic.id}`}
            className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between hover:border-brand-default transition-all shadow-sm group relative overflow-hidden"
          >
            {/* Progress bg */}
            <div 
              className="absolute left-0 bottom-0 top-0 bg-[#EAF6F0] z-0 opacity-50 transition-all" 
              style={{ width: `${topic.progress}%` }} 
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border border-gray-100 text-gray-400 rounded-xl flex items-center justify-center font-black">
                  <Hash className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-brand-dark text-base">{topic.title}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-bold text-gray-500">{topic.progress}% সম্পন্ন</span>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-brand-default shadow-sm group-hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
