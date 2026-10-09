"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Bot, Database, FileSignature } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'হোম', href: '/', icon: Home },
  { name: 'অনুশীলন', href: '/practice', icon: BookOpen },
  { name: 'এআই', href: '/ai', icon: Bot },
  { name: 'প্রশ্নব্যাংক', href: '/qbank', icon: Database },
  { name: 'মডেল টেস্ট', href: '/test', icon: FileSignature },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-border-light pb-safe pt-2 px-2 z-50 shadow-[0_-4px_24px_rgba(18,56,45,0.04)]">
      <div className="flex items-center justify-between px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center py-2 px-1 rounded-xl transition-all flex-1 relative",
                isActive ? "text-action" : "text-text-secondary hover:bg-surface-muted/50"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-6 h-6 mb-1 transition-transform", isActive ? "stroke-2 scale-110" : "stroke-[1.5]")} />
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-action rounded-full"></div>
                )}
              </div>
              <span className={cn("text-[10px] font-semibold mt-1", isActive ? "font-bold" : "")}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
