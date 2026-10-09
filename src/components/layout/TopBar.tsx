import { Flame, Bell, Menu } from 'lucide-react';
import Image from 'next/image';

export function TopBar() {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-surface/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-border-light shadow-subtle">
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-primary bg-surface-muted border border-border-light">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex flex-col">
          <span className="font-sans font-bold text-lg tracking-tight text-primary leading-tight">SOHAG</span>
          <span className="font-sans font-semibold text-[11px] tracking-widest text-text-secondary leading-none uppercase">Physics</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-surface-muted px-2.5 py-1.5 rounded-lg border border-border-light">
          <Flame className="w-4 h-4 text-accent-amber fill-current" />
          <span className="text-sm font-semibold text-primary">15</span>
        </div>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:bg-surface-muted transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-action rounded-full border-2 border-surface"></span>
        </button>
        <div className="w-10 h-10 rounded-xl overflow-hidden border border-border-light">
          <Image src="/logo.jpg" alt="Profile" width={40} height={40} className="object-cover bg-white" />
        </div>
      </div>
    </header>
  );
}
