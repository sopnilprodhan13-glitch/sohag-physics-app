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
    <aside className="hidden md:flex flex-col w-72 h-screen border-r border-border-light bg-surface sticky top-0">
      
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-subtle shrink-0">
          <Image 
            src="/logo.jpg" 
            alt="Sohag Physics Logo" 
            width={40} 
            height={40} 
            className="w-full h-full object-cover bg-white"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-bold text-lg tracking-tight text-primary leading-tight">SOHAG</span>
          <span className="font-sans font-semibold text-[13px] tracking-widest text-text-secondary leading-none uppercase">Physics</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium text-[15px]",
                isActive 
                  ? "bg-surface-muted text-action" 
                  : "text-text-secondary hover:bg-gray-50 hover:text-primary"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-action" : "text-gray-400")} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Sidebar Footer - Sleek Streak Box */}
      <div className="p-6">
        <div className="p-5 rounded-2xl bg-surface border border-border-light shadow-sm flex flex-col gap-3 group hover:border-action/30 transition-colors">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-accent-amber fill-current" />
            <span className="font-semibold text-primary text-sm">3 Day Streak</span>
          </div>
          <div className="w-full bg-border-light rounded-full h-1.5 overflow-hidden">
            <div className="bg-action h-full rounded-full w-[40%] transition-all duration-1000"></div>
          </div>
          <p className="text-[12px] font-medium text-text-secondary">Complete 1 more lesson</p>
        </div>
      </div>
      
    </aside>
  );
}
