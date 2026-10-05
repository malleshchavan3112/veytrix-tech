'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Heart, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';

export function DateInviteInteractiveSandbox() {
  const [noPos, setNoPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState<number>(0);
  const [isAccepted, setIsAccepted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodgeButton = useCallback(() => {
    if (isAccepted) return;
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(30, (bounds.width / 2) - 60);
    const maxY = Math.max(30, (bounds.height / 2) - 40);

    // Random offset avoiding center
    const randomSignX = Math.random() > 0.5 ? 1 : -1;
    const randomSignY = Math.random() > 0.5 ? 1 : -1;
    const newX = randomSignX * (40 + Math.random() * (maxX - 40));
    const newY = randomSignY * (25 + Math.random() * (maxY - 25));

    setNoPos({ x: Math.round(newX), y: Math.round(newY) });
    setDodgeCount((prev) => prev + 1);
  }, [isAccepted]);

  const resetSandbox = () => {
    setIsAccepted(false);
    setNoPos({ x: 0, y: 0 });
    setDodgeCount(0);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-rose-50/80 via-white to-amber-50/50 p-6 sm:p-8 border border-rose-200/80 shadow-xl overflow-hidden text-center select-none"
    >
      {/* Top Header Tag */}
      <div className="flex items-center justify-between pb-3 border-b border-rose-100 text-xs font-mono">
        <div className="flex items-center gap-1.5 text-rose-600 font-semibold">
          <Heart className="w-3.5 h-3.5 fill-rose-500" />
          <span>DATEINVITE // PLAYFUL DODGE PHYSICS SANDBOX</span>
        </div>
        <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-200">
          {dodgeCount > 0 ? `${dodgeCount} EVASIONS` : 'HOVER "NO"'}
        </span>
      </div>

      {isAccepted ? (
        /* Accepted Celebratory State */
        <div className="py-10 flex flex-col items-center animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-200 flex items-center justify-center mb-4 text-rose-600 shadow-sm animate-bounce">
            <Heart className="w-8 h-8 fill-rose-500" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            She Said YES! 🎉
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            Proposal accepted. Supabase RLS state committed, and confirmation email dispatched to creator via Resend API.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              onClick={resetSandbox}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium hover:bg-slate-50 transition-colors shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try Again</span>
            </button>
            <a
              href="https://www.dateinvite.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-mono font-semibold hover:bg-rose-700 transition-colors shadow-sm"
            >
              <span>Create Your Own Invite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : (
        /* Active Interactive Proposal Card */
        <div className="py-8 sm:py-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200 font-mono text-[11px] text-rose-800 mb-4">
            <Sparkles className="w-3 h-3 text-rose-600" />
            <span>Interactive Proposal Experience</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Dinner &amp; Stargazing Tonight?
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            Try clicking &quot;No&quot;. The Framer Motion spring physics vector deflects away before touch contact.
          </p>

          {/* Interactive Button Arena */}
          <div className="relative mt-8 min-h-[90px] w-full flex items-center justify-center gap-4">
            {/* The YES Button (Always reachable) */}
            <button
              type="button"
              onClick={() => setIsAccepted(true)}
              className="relative z-10 px-6 sm:px-8 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-display text-sm font-bold shadow-lg shadow-rose-500/25 hover:from-rose-600 hover:to-rose-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              YES! Absolutely ❤️
            </button>

            {/* The NO Button (Playfully evades hover and click) */}
            <button
              type="button"
              onMouseEnter={dodgeButton}
              onTouchStart={dodgeButton}
              onClick={dodgeButton}
              style={{
                transform: `translate3d(${noPos.x}px, ${noPos.y}px, 0)`,
                transition: 'transform 200ms cubic-bezier(0.2, 0, 0, 1)',
              }}
              className="px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-600 font-display text-sm font-medium shadow-xs hover:border-rose-300 transition-colors cursor-pointer select-none"
            >
              No...
            </button>
          </div>

          {/* Telemetry Micro-Indicator */}
          <div className="mt-6 pt-4 border-t border-rose-100/80 w-full flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Collision Radius: Bounded (Touch-Safe)</span>
            </span>
            <span>Zero PII Stored</span>
          </div>
        </div>
      )}
    </div>
  );
}
