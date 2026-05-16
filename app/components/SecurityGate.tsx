"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, ShieldCheck, AlertCircle, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { verifyPin, checkAuthStatus } from "../actions";

export default function SecurityGate({ children }: { children: React.ReactNode }) {
  const [pin, setPin] = useState("");
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if authorized via server session (cookie)
    const checkAuth = async () => {
      try {
        const authorized = await checkAuthStatus();
        setIsAuthorized(authorized);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerifying) return;

    setIsVerifying(true);
    try {
      const result = await verifyPin(pin);

      if (result.success) {
        setIsAuthorized(true);
        toast.success("Access granted", {
          description: "Welcome back!",
          duration: 3000,
        });
      } else {
        setIsError(true);
        setPin("");
        toast.error("Incorrect PIN", {
          description: "Please try again or contact the administrator.",
        });
        setTimeout(() => setIsError(false), 500);
      }
    } catch (error) {
      toast.error("Verification failed", {
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handlePinChange = (value: string) => {
    if (value.length <= 6 && /^\d*$/.test(value)) {
      setPin(value);
    }
  };

  // Prevent flash of content while checking auth
  if (isAuthorized === null) return null;

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className={`relative w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 ${isError ? 'animate-shake' : ''}`}>
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Protected Area</h1>
          <p className="text-white/60 text-sm mb-1">
            Please enter your 6-digit access PIN to continue.
          </p>
          <p className="text-blue-400/80 text-xs font-medium">
            Contact owner(Alankrit) for access
          </p>
        </div>

        <form onSubmit={handlePinSubmit} className="space-y-6">
          <div className="relative">
            <div 
              className="flex justify-center gap-3"
            >
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-14 rounded-xl border-2 flex items-center justify-center text-xl font-mono transition-all duration-200 ${pin.length > index
                    ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    : index === pin.length && isFocused
                      ? 'border-blue-400/50 bg-white/10 ring-2 ring-blue-500/20'
                      : 'border-white/10 bg-white/5'
                    }`}
                >
                  {pin[index] ? (
                    <div className="w-2 h-2 rounded-full bg-white animate-in zoom-in duration-300" />
                  ) : (
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                  )}
                </div>
              ))}
            </div>

            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={pin}
              onChange={(e) => handlePinChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-default"
              autoFocus
              id="pin-input"
            />
          </div>

          {/* Hidden input label for accessibility */}
          <label htmlFor="pin-input" className="sr-only">Enter 6-digit PIN</label>

          <button
            type="submit"
            disabled={pin.length !== 6 || isVerifying}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            {isVerifying ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Access Website
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secure Access
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            24h Session
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-10px); }
          40%, 80% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
}
