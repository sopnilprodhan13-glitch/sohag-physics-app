"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { QuestionCard } from '@/components/features/practice/QuestionCard';



export default function TopicPracticePage() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [isAnswered, setIsAnswered] = useState(false);

  // Mock Question Data
  const question = {
    text: "দুটি ভেক্টর রাশির ডট গুণন শূন্য হলে, তাদের মধ্যবর্তী কোণ কত?",
    options: [
      { id: "A", text: "0°", isCorrect: false },
      { id: "B", text: "45°", isCorrect: false },
      { id: "C", text: "90°", isCorrect: true },
      { id: "D", text: "180°", isCorrect: false },
    ],
    explanation: "দুটি ভেক্টরের ডট গুণন A · B = AB cosθ। যদি ডট গুণন 0 হয়, তবে AB cosθ = 0। যেহেতু ভেক্টরগুলোর মান 0 নয়, তাই cosθ = 0। আমরা জানি cos 90° = 0, তাই θ = 90°। অর্থাৎ ভেক্টর দুটি পরস্পর লম্ব।"
  };

  const handleAnswer = (optionId: string) => {
    setSelectedOption(optionId);
    setIsAnswered(true);
  };

  return (
    <div className="max-w-3xl mx-auto pb-24 pt-4 px-4 animate-in fade-in">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Link href="/practice/physics/paper-1/chapter-2" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-xl font-black text-brand-dark">ভেক্টরের গুণন</h1>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">প্রশ্ন ১ / ২০</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-8">
        <div className="bg-brand-default h-1.5 rounded-full w-[5%] transition-all"></div>
      </div>

      {/* Question Engine */}
      <QuestionCard 
        questionText={question.text}
        options={question.options}
        onAnswerSubmit={handleAnswer}
        isAnswered={isAnswered}
        selectedOptionId={selectedOption}
        showExplanation={isAnswered}
        explanation={question.explanation}
      />

      {isAnswered && (
        <div className="mt-6 flex justify-end animate-in fade-in">
          <button className="bg-brand-default text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-colors shadow-md">
            পরবর্তী প্রশ্ন
          </button>
        </div>
      )}

    </div>
  );
}
