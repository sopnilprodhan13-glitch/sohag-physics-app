import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Flag, Bookmark } from 'lucide-react';
import type { QuestionOption } from '@/types/models';

interface QuestionCardProps {
  questionText: string;
  options: QuestionOption[];
  onAnswerSubmit: (optionId: string) => void;
  isAnswered?: boolean;
  selectedOptionId?: string;
  showExplanation?: boolean;
  explanation?: string;
}

export function QuestionCard({
  questionText,
  options,
  onAnswerSubmit,
  isAnswered = false,
  selectedOptionId,
  showExplanation,
  explanation
}: QuestionCardProps) {
  return (
    <div className="bg-surface-default border border-surface-muted rounded-3xl p-6 md:p-8 shadow-soft">
      {/* Header / Tools */}
      <div className="flex justify-between items-start mb-6">
        <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-lg text-sm font-bold">Q. 1</span>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-brand-dark transition-colors rounded-full hover:bg-surface-muted">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-surface-muted">
            <Flag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Question Text */}
      <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-8 leading-relaxed">
        {questionText}
      </h2>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {options.map((opt, idx) => {
          const isSelected = selectedOptionId === opt.id;
          const isCorrect = opt.isCorrect;
          
          let stateStyles = "border-surface-muted hover:border-brand-default text-gray-700";
          
          if (isAnswered) {
            if (isCorrect) {
              stateStyles = "border-brand-default bg-brand-light text-brand-dark font-bold";
            } else if (isSelected && !isCorrect) {
              stateStyles = "border-red-500 bg-red-50 text-red-700 font-bold";
            } else {
              stateStyles = "border-surface-muted opacity-50";
            }
          } else if (isSelected) {
            stateStyles = "border-brand-default bg-brand-light text-brand-dark font-bold";
          }

          return (
            <button
              key={opt.id}
              disabled={isAnswered}
              onClick={() => onAnswerSubmit(opt.id)}
              className={cn(
                "w-full flex items-center p-4 border-2 rounded-2xl transition-all duration-200 text-left text-lg",
                stateStyles
              )}
            >
              <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 mr-4 font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showExplanation && explanation && (
        <div className="mt-8 p-6 bg-surface-muted rounded-2xl animate-in fade-in slide-in-from-bottom-4">
          <h3 className="font-bold text-brand-dark mb-2">ব্যাখ্যা:</h3>
          <p className="text-gray-700 leading-relaxed">
            {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
