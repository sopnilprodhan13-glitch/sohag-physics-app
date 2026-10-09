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
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-2 z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
      <div className="flex items-center justify-between px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          // Check if active based on pathname
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center p-2 rounded-lg transition-colors flex-1",
                isActive ? "text-brand-default" : "text-gray-400 hover:text-brand-dark"
              )}
            >
              <Icon className={cn("w-6 h-6 mb-1", isActive ? "stroke-2" : "stroke-[1.5]")} />
              <span className="text-[10px] font-bold">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
