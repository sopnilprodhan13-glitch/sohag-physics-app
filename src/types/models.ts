// src/types/models.ts

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'expert';

export interface Subject {
  id: string; // e.g. "physics"
  name: string; // e.g. "Physics"
  nameBn: string; // "পদার্থবিজ্ঞান"
  isActive: boolean;
}

export interface Paper {
  id: string; // e.g. "physics-1st-paper"
  subjectId: string;
  name: string; // "1st Paper"
  nameBn: string; // "১ম পত্র"
  order: number;
}

export interface Chapter {
  id: string; 
  paperId: string;
  name: string;
  nameBn: string;
  order: number;
  isActive: boolean;
}

export interface Topic {
  id: string;
  chapterId: string;
  name: string;
  nameBn: string;
  order: number;
}

export interface QuestionOption {
  id: string; // typically A, B, C, D or 1, 2, 3, 4
  text: string; // Can be markdown/math
  isCorrect: boolean;
}

export interface Question {
  id: string;
  chapterId: string;
  topicId?: string;
  type: 'mcq' | 'numerical' | 'true_false' | 'assertion_reason';
  text: string; // The main question body (markdown/math)
  options?: QuestionOption[];
  numericalAnswer?: number;
  
  // Metadata
  difficulty: DifficultyLevel;
  estimatedTimeSeconds: number;
  conceptTags: string[];
  boardMetadata?: string[];
  admissionMetadata?: string[];
  year?: number;
  
  // Explanation & Feedback
  explanation?: string;
  commonMistakes?: string;
  
  // System fields
  createdAt: number;
  updatedAt: number;
  version: number;
  isActive: boolean;
}

export interface PracticeAttempt {
  id: string;
  userId: string;
  questionId: string;
  sessionId: string; // Grouping attempts into a practice session
  selectedOptionId?: string;
  numericalAnswer?: number;
  isCorrect: boolean;
  timeTakenSeconds: number;
  confidence?: 'not_sure' | 'maybe' | 'sure';
  timestamp: number;
}
