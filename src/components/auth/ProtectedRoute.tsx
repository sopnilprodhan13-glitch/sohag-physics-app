"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/firebase/auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If not loading and there's no user, redirect to login page
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  // While checking authentication, show a loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-brand-mint border-t-brand-default rounded-full animate-spin"></div>
      </div>
    );
  }

  // If there's a user, render the protected content
  if (user) {
    return <>{children}</>;
  }

  // Prevent flashing content before redirect
  return null;
}
