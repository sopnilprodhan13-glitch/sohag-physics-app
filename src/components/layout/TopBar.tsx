import { Flame, Bell, Menu } from 'lucide-react';
import Image from 'next/image';

export function TopBar() {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-transparent px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-default shadow-sm border border-gray-100">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex flex-col">
          <span className="font-sans font-extrabold text-xl tracking-tight text-brand-dark">SOHAG PHYSICS</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Admission</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-white shadow-sm border border-gray-100 px-3 py-1.5 rounded-full">
          <Flame className="w-4 h-4 text-accent-warning fill-current" />
          <span className="text-sm font-extrabold text-brand-dark">১৫</span>
        </div>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-default shadow-sm border border-gray-100 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-brand-default rounded-full border border-white"></span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <Image src="/logo.jpg" alt="Profile" width={40} height={40} className="object-cover bg-white" />
        </div>
      </div>
    </header>
  );
}
