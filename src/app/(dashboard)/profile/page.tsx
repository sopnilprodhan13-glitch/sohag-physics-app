"use client";

import { useAuth } from '@/lib/firebase/auth';
import { User, Mail, Phone, Shield, LogOut, Camera, Star, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto pb-24 md:pb-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-brand-dark mb-2">প্রোফাইল</h1>
          <p className="text-gray-500 font-medium">আপনার অ্যাকাউন্টের বিস্তারিত তথ্য (A to Z)</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 text-red-500 hover:bg-red-100 px-4 py-2.5 rounded-xl font-bold transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">লগ আউট</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column - Profile Picture & Basic Info */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-brand-light relative mb-4 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
              {user?.photoURL ? (
                <Image src={user.photoURL} alt="Profile" fill className="object-cover" />
              ) : (
                <User className="w-12 h-12 text-brand-secondary" />
              )}
              <button className="absolute bottom-0 w-full h-8 bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold text-brand-dark mb-1">
              {user?.displayName || "শিক্ষার্থী"}
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-mint/30 text-brand-secondary rounded-full font-bold text-sm mb-4">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Pro Member</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-default" />
              পরিসংখ্যান
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium text-sm">সম্পন্ন ক্লাস</span>
                <span className="font-bold text-brand-dark">১২ টি</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                <div className="bg-brand-default h-full rounded-full w-[40%]"></div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-500 font-medium text-sm">অনুশীলন স্কোর</span>
                <span className="font-bold text-brand-dark">৮৫%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                <div className="bg-brand-default h-full rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Info (A to Z) */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">
              ব্যক্তিগত তথ্য
            </h3>
            
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium mb-1">ইমেইল অ্যাড্রেস</p>
                  <p className="font-bold text-brand-dark">{user?.email || "দেওয়া হয়নি"}</p>
                </div>
                <button className="text-brand-default font-bold text-sm hover:underline self-start sm:self-center">পরিবর্তন</button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium mb-1">মোবাইল নম্বর</p>
                  <p className="font-bold text-brand-dark">{user?.phoneNumber || "+880 1XXX-XXXXXX"}</p>
                </div>
                <button className="text-brand-default font-bold text-sm hover:underline self-start sm:self-center">যুক্ত করুন</button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 font-medium mb-1">ইউজার আইডি (UID)</p>
                  <p className="font-mono text-sm font-bold text-brand-dark bg-gray-50 p-2 rounded-lg inline-block break-all">
                    {user?.uid || "N/A"}
                  </p>
                </div>
              </div>
              
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">
              ভর্তি হওয়া কোর্স
            </h3>
            
            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-brand-light text-brand-default rounded-xl flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-brand-dark">HSC Physics 1st Paper</h4>
                <p className="text-sm text-gray-500 font-medium">Batch 2026</p>
              </div>
              <button className="px-4 py-2 bg-white border border-gray-200 text-brand-dark font-bold rounded-xl shadow-sm text-sm">
                দেখুন
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
