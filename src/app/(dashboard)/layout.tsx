import { Sidebar } from "@/components/layout/Sidebar";
import { BottomNav } from "@/components/layout/BottomNav";
import { TopBar } from "@/components/layout/TopBar";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-surface-muted">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        {/* Mobile Top Bar */}
        <TopBar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-5xl p-4 md:p-6 lg:p-8">
            <ProtectedRoute>
              {children}
            </ProtectedRoute>
          </div>
        </main>
        
        {/* Mobile Bottom Nav */}
        <BottomNav />
      </div>
    </div>
  );
}
