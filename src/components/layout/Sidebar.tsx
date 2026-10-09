"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Bot, BarChart2, User, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Practice', href: '/practice', icon: BookOpen },
  { name: 'AI Tutor', href: '/ai', icon: Bot },
  { name: 'Progress', href: '/progress', icon: BarChart2 },
  { name: 'Profile', href: '/profile', icon: User },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-72 h-screen border-r border-brand-mint/50 bg-white sticky top-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-brand-mint shadow-sm shrink-0">
          <Image 
            src="/logo.jpg" 
            alt="Sohag Physics Logo" 
            width={48} 
            height={48} 
            className="w-full h-full object-cover bg-white"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-black text-xl tracking-tight text-brand-dark leading-none">SOHAG</span>
          <span className="font-sans font-black text-xl tracking-tight text-brand-default leading-none">PHYSICS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 space-y-1.5 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 font-bold text-[15px]",
                isActive 
                  ? "bg-brand-default text-white shadow-md shadow-brand-default/20 translate-x-1" 
                  : "text-gray-500 hover:bg-brand-mint/40 hover:text-brand-dark"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Sidebar Footer - Sleek Streak Box */}
      <div className="p-6">
        <div className="p-5 rounded-3xl bg-brand-light/40 border border-brand-mint relative overflow-hidden group hover:border-brand-default/50 transition-colors cursor-pointer">
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/40 rounded-bl-full -z-0"></div>
          
          <div className="relative z-10 flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Flame className="w-4 h-4 text-accent-warning fill-current" />
              </div>
              <span className="font-extrabold text-brand-dark text-sm">3 Days</span>
            </div>
          </div>
          
          <div className="w-full bg-white/60 rounded-full h-1.5 mb-2 overflow-hidden relative z-10">
            <div className="bg-brand-default h-full rounded-full w-[40%]"></div>
          </div>
          <p className="text-[11px] font-bold text-brand-secondary relative z-10">Complete 1 more lesson</p>
        </div>
      </div>
      
    </aside>
  );
}
