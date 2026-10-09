"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/lib/firebase/auth';
import { ArrowRight, Eye, EyeOff, Lock, User, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { user, signInWithGoogle, signInWithEmail } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      router.replace('/profile');
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/profile');
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setError('');
      await signInWithEmail(email, password);
      router.push('/profile');
    } catch (err: any) {
      setError('লগ ইন ব্যর্থ হয়েছে। দয়া করে সঠিক ইমেইল ও পাসওয়ার্ড দিন।');
      console.error("Email Login failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-end md:justify-center relative font-sans">
      
      <div className="w-full max-w-md flex flex-col h-screen md:h-auto md:min-h-[800px] md:rounded-[2rem] md:overflow-hidden md:shadow-2xl relative bg-primary">
        
        {/* Top Section - Brand & Tagline */}
        <div className="pt-10 px-8 pb-10 flex-shrink-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <Image src="/logo.jpg" alt="Sohag Physics" width={48} height={48} className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white tracking-wide leading-tight">SOHAG PHYSICS</h1>
              <span className="text-[10px] font-bold text-action tracking-[0.2em] uppercase">Premium Learning</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            শেখো. অনুশীলন করো.<br/>এগিয়ে যাও।
          </h2>
        </div>

        {/* Bottom Sheet Section - Login Form */}
        <div className="bg-background w-full flex-1 rounded-t-[2rem] md:rounded-t-none px-8 pt-6 pb-10 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.2)] relative z-10 animate-in slide-in-from-bottom-full duration-500">
          
          {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-border-light rounded-full mx-auto mb-8 md:hidden"></div>

        <h3 className="text-2xl font-bold text-primary mb-1">লগ ইন</h3>
        <p className="text-text-secondary font-medium mb-8 text-sm">চলুন পড়া চালিয়ে রাখি।</p>

        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={handleGoogleLogin}
            className="w-full h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center gap-3 hover:bg-surface-muted transition-colors font-semibold text-primary shadow-subtle"
          >
            <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} />
            Google দিয়ে লগ ইন
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-border-light"></div>
          <span className="text-text-secondary font-semibold text-xs">অথবা</span>
          <div className="flex-1 h-[1px] bg-border-light"></div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-3">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-text-secondary">
              <User className="w-5 h-5" />
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="মোবাইল নম্বর বা ইমেইল"
              autoComplete="off"
              className="w-full h-12 bg-surface border border-border-light rounded-xl pl-12 pr-4 text-primary font-medium focus:bg-surface focus:border-action focus:ring-4 focus:ring-action/10 outline-none transition-all placeholder:text-text-secondary"
            />
          </div>

          <div className="relative flex items-center">
            <div className="absolute left-4 text-text-secondary">
              <Lock className="w-5 h-5" />
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="পাসওয়ার্ড"
              autoComplete="new-password"
              className="w-full h-12 bg-surface border border-border-light rounded-xl pl-12 pr-12 text-primary font-medium focus:bg-surface focus:border-action focus:ring-4 focus:ring-action/10 outline-none transition-all placeholder:text-text-secondary"
            />
            <button 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-text-secondary hover:text-action transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm font-medium pl-1">{error}</p>}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-8">
          <button className="text-action font-semibold text-[13px] hover:text-primary transition-colors">
            পাসওয়ার্ড ভুলে গেছ?
          </button>
        </div>

        {/* Login Button */}
        <button 
          onClick={handleEmailLogin}
          className="w-full h-12 bg-action hover:bg-action/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-premium mb-8"
        >
          লগ ইন করো
          <ArrowRight className="w-4 h-4" />
        </button>
        {' '}
        {/* Footer */}
        <div className="text-center mt-auto">
          <span className="text-text-secondary font-medium text-[13px]">এখনও অ্যাকাউন্ট নেই? </span>
          <Link href="/onboarding" className="text-action font-bold text-[13px] hover:text-primary transition-colors">
            বিনামূল্যে যোগ দাও
          </Link>
        </div>

      </div>
      </div>
    </div>
  );
}
