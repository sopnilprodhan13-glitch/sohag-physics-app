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
    <div className="min-h-screen bg-gradient-to-b from-[#10B981] to-[#064E3B] flex flex-col items-center justify-end md:justify-center relative font-bengali">
      
      <div className="w-full max-w-md flex flex-col h-screen md:h-auto md:min-h-[800px] md:rounded-[2.5rem] md:overflow-hidden md:shadow-2xl relative bg-gradient-to-b from-transparent to-[#064E3B]/20">
        
        {/* Top Section - Brand & Tagline */}
        <div className="pt-10 px-8 pb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-white/30 overflow-hidden shadow-sm shrink-0">
              <Image src="/logo.jpg" alt="Sohag Physics" width={56} height={56} className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-white tracking-wide">SOHAG PHYSICS</h1>
              <span className="text-[10px] font-bold text-white/70 tracking-[0.2em]">LEARN AND MASTER</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white leading-snug">
            শেখো. অনুশীলন করো. এগিয়ে যাও।
          </h2>
        </div>

        {/* Bottom Sheet Section - Login Form */}
        <div className="bg-white w-full flex-1 rounded-t-[2.5rem] px-8 pt-6 pb-10 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative z-10 animate-in slide-in-from-bottom-full duration-500">
          
          {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>

        <h3 className="text-3xl font-black text-[#086B45] mb-2">লগ ইন</h3>
        <p className="text-gray-500 font-medium mb-8 text-base">চলুন পড়া চালিয়ে রাখি।</p>

        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button 
            onClick={handleGoogleLogin}
            className="w-full h-14 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-gray-700 text-lg shadow-sm"
          >
            <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={24} height={24} />
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>
          <span className="text-gray-400 font-medium">অথবা</span>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 mb-3">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#16A765]">
              <User className="w-5 h-5 fill-current" />
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="মোবাইল নম্বর বা ইমেইল"
              autoComplete="off"
              className="w-full h-14 bg-[#F0F5F9] border border-transparent rounded-2xl pl-12 pr-4 text-brand-dark font-semibold focus:bg-white focus:border-[#16A765] focus:ring-4 focus:ring-[#16A765]/10 outline-none transition-all placeholder:text-gray-400 placeholder:font-medium"
            />
          </div>

          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#16A765]">
              <Lock className="w-5 h-5 fill-current" />
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="পাসওয়ার্ড"
              autoComplete="new-password"
              className="w-full h-14 bg-[#F0F5F9] border border-transparent rounded-2xl pl-12 pr-12 text-brand-dark font-semibold focus:bg-white focus:border-[#16A765] focus:ring-4 focus:ring-[#16A765]/10 outline-none transition-all placeholder:text-gray-400 placeholder:font-medium"
            />
            <button 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 text-[#16A765] hover:text-[#086B45] transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-8">
          <button className="text-[#16A765] font-bold text-sm hover:text-[#086B45] transition-colors">
            পাসওয়ার্ড ভুলে গেছ?
          </button>
        </div>

        {/* Login Button */}
        <button 
          onClick={handleEmailLogin}
          className="w-full h-14 bg-[#16A765] hover:bg-[#086B45] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_8px_20px_rgba(22,167,101,0.3)] mb-8"
        >
          লগ ইন করো
          <ArrowRight className="w-5 h-5" />
        </button>
        {' '}
        {/* Footer */}
        <div className="text-center">
          <span className="text-gray-500 font-medium">এখনও অ্যাকাউন্ট নেই? </span>
          <Link href="/onboarding" className="text-[#16A765] font-bold hover:text-[#086B45] transition-colors">
            বিনামূল্যে যোগ দাও
          </Link>
        </div>

      </div>
      </div>
    </div>
  );
}
