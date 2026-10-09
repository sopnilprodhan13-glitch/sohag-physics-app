"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 9;

  // Form State
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    level: "",
    stream: "",
    institution: "",
    referral: "",
    dailyGoal: "",
    email: "",
    password: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up Firebase Auth here
    window.location.href = "/";
  };

  const updateData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="text-center mb-8">
        <Image 
          src="/logo.jpg" 
          alt="Sohag Physics Logo" 
          width={80} 
          height={80} 
          className="mx-auto rounded-2xl mb-4 shadow-sm object-contain bg-white"
        />
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-dark font-sans uppercase">
          একাউন্ট সেটআপ ({step}/{totalSteps})
        </h1>
        <div className="w-full bg-surface-muted rounded-full h-2 mt-4">
          <div 
            className="bg-brand-default h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-surface-default p-8 rounded-3xl shadow-soft border border-surface-muted min-h-[400px] flex flex-col justify-between">
        
        {/* STEP 1: Intro / Email */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">আপনার ইমেইল দিন</h2>
            <Input 
              type="email" 
              placeholder="example@gmail.com" 
              value={formData.email}
              onChange={(e) => updateData("email", e.target.value)}
              className="h-14 text-lg rounded-2xl"
            />
            <Button size="lg" className="w-full font-bold text-xl" onClick={nextStep} disabled={!formData.email}>
              পরবর্তী ধাপ
            </Button>
            <p className="text-center text-gray-500 mt-4">
              আগে থেকেই একাউন্ট আছে? <Link href="/login" className="text-brand-default font-bold hover:underline">লগইন করুন</Link>
            </p>
          </div>
        )}

        {/* STEP 2: DOB */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">জন্ম তারিখ</h2>
            <p className="text-sm text-gray-500">আপনার বয়স অনুযায়ী সঠিক কনটেন্ট দেখাতে এটি সাহায্য করবে।</p>
            <Input 
              type="date" 
              value={formData.dob}
              onChange={(e) => updateData("dob", e.target.value)}
              className="h-14 text-lg rounded-2xl"
            />
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep} disabled={!formData.dob}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 3: Gender */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">লিঙ্গ (ঐচ্ছিক)</h2>
            <div className="grid grid-cols-2 gap-4">
              {["Male", "Female"].map(g => (
                <button 
                  key={g}
                  onClick={() => updateData("gender", g)}
                  className={cn(
                    "h-14 rounded-2xl font-bold border-2 transition-colors",
                    formData.gender === g ? "border-brand-default bg-brand-light text-brand-dark" : "border-surface-muted text-gray-500 hover:border-gray-300"
                  )}
                >
                  {g === "Male" ? "ছাত্র" : "ছাত্রী"}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 4: Level */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">আপনার ক্লাস/লেভেল</h2>
            <div className="flex flex-col gap-3">
              {["Admission", "HSC", "SSC"].map(lvl => (
                <button 
                  key={lvl}
                  onClick={() => updateData("level", lvl)}
                  className={cn(
                    "h-14 rounded-2xl font-bold border-2 transition-colors",
                    formData.level === lvl ? "border-brand-default bg-brand-light text-brand-dark" : "border-surface-muted text-gray-500 hover:border-gray-300"
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep} disabled={!formData.level}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 5: Stream */}
        {step === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">বিভাগ</h2>
            <div className="flex flex-col gap-3">
              {["Science", "Arts", "Commerce"].map(s => (
                <button 
                  key={s}
                  onClick={() => updateData("stream", s)}
                  className={cn(
                    "h-14 rounded-2xl font-bold border-2 transition-colors",
                    formData.stream === s ? "border-brand-default bg-brand-light text-brand-dark" : "border-surface-muted text-gray-500 hover:border-gray-300"
                  )}
                >
                  {s === "Science" ? "বিজ্ঞান (Science)" : s === "Arts" ? "মানবিক (Arts)" : "বাণিজ্য (Commerce)"}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep} disabled={!formData.stream}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 6: Institution */}
        {step === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">স্কুল বা কলেজের নাম</h2>
            <Input 
              type="text" 
              placeholder="আপনার প্রতিষ্ঠানের নাম লিখুন" 
              value={formData.institution}
              onChange={(e) => updateData("institution", e.target.value)}
              className="h-14 text-lg rounded-2xl"
            />
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep} disabled={!formData.institution}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 7: Referral */}
        {step === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">রেফারেল বা কুপন কোড (যদি থাকে)</h2>
            <Input 
              type="text" 
              placeholder="SOHAG-XXXX" 
              value={formData.referral}
              onChange={(e) => updateData("referral", e.target.value)}
              className="h-14 text-lg rounded-2xl uppercase"
            />
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep}>পরবর্তী (স্কিপ)</Button>
            </div>
          </div>
        )}

        {/* STEP 8: Daily Goal */}
        {step === 8 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">দৈনিক লক্ষ্য (Daily Goal)</h2>
            <div className="flex flex-col gap-2">
              {[
                { id: "Light", title: "Light (~5 mins, 30 XP)" },
                { id: "Regular", title: "Regular (~10 mins, 60 XP)" },
                { id: "Serious", title: "Serious (~20 mins, 120 XP)" },
                { id: "Champion", title: "Champion (~30 mins, 200 XP)" },
              ].map(goal => (
                <button 
                  key={goal.id}
                  onClick={() => updateData("dailyGoal", goal.id)}
                  className={cn(
                    "p-4 rounded-2xl font-bold border-2 transition-colors text-left",
                    formData.dailyGoal === goal.id ? "border-brand-default bg-brand-light text-brand-dark" : "border-surface-muted text-gray-600 hover:border-gray-300"
                  )}
                >
                  {goal.title}
                </button>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <Button variant="outline" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button size="lg" className="w-full font-bold" onClick={nextStep} disabled={!formData.dailyGoal}>পরবর্তী</Button>
            </div>
          </div>
        )}

        {/* STEP 9: Password & Finish */}
        {step === 9 && (
          <form onSubmit={handleComplete} className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-bold text-brand-dark">পাসওয়ার্ড সেট করুন</h2>
            <p className="text-sm text-gray-500">কমপক্ষে ৮ অক্ষরের হতে হবে (অক্ষর ও সংখ্যাসহ)।</p>
            <Input 
              type="password" 
              placeholder="••••••••" 
              value={formData.password}
              onChange={(e) => updateData("password", e.target.value)}
              className="h-14 text-lg rounded-2xl"
              required
              minLength={8}
            />
            <div className="flex gap-4">
              <Button variant="outline" type="button" size="lg" className="w-full" onClick={prevStep}>পেছনে</Button>
              <Button type="submit" size="lg" className="w-full font-bold">সম্পন্ন করুন</Button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
