'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export function PlatformGovernanceDemo() {
  const [adminStep, setAdminStep] = useState<number>(0);
  const [isVerified, setIsVerified] = useState<boolean>(true);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: 3-Step Admin Narrative (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
            PLATFORM GOVERNANCE // AUDIT WORKFLOW
          </span>

          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#18221D]">
            How Verified Partners Enter the Ecosystem
          </h3>

          <p className="mt-2 text-sm text-[#4E5C53] leading-relaxed">
            Every dining experience is anchored by deterministic compliance audits. Platform administrators inspect kitchen FSSAI certificates, storefront photographs, and GPS geofence bounds before issuing verified partner trust badges.
          </p>

          {/* 3 Step Audit Navigation Cards */}
          <div className="mt-6 space-y-3 w-full">
            <div
              onClick={() => setAdminStep(0)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                adminStep === 0
                  ? 'bg-white border-blue-600 shadow-xs'
                  : 'bg-[#F2F5F3] border-transparent opacity-75'
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-blue-700 block">
                01 // AUDIT SUBMISSION
              </span>
              <h5 className="font-display text-xs font-bold text-[#18221D] mt-0.5">
                Review FSSAI License &amp; Geofence Match
              </h5>
              <p className="text-[11px] text-[#6C7970] mt-1">
                Krishna South Indian Mess submitted FSSAI license #10023045678901 with physical storefront documentation.
              </p>
            </div>

            <div
              onClick={() => setAdminStep(1)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                adminStep === 1
                  ? 'bg-white border-blue-600 shadow-xs'
                  : 'bg-[#F2F5F3] border-transparent opacity-75'
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-blue-700 block">
                02 // APPROVE &amp; VERIFY
              </span>
              <h5 className="font-display text-xs font-bold text-[#18221D] mt-0.5">
                Approve Verified Partner Status
              </h5>
              <p className="text-[11px] text-[#6C7970] mt-1">
                Admin approval flips the partner status to Approved, issuing a verification badge.
              </p>
            </div>

            <div
              onClick={() => setAdminStep(2)}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                adminStep === 2
                  ? 'bg-white border-blue-600 shadow-xs'
                  : 'bg-[#F2F5F3] border-transparent opacity-75'
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-blue-700 block">
                03 // EMPLOYEE CONFIRMATION
              </span>
              <h5 className="font-display text-xs font-bold text-[#18221D] mt-0.5">
                Diners See Emerald Verified Shield Badge
              </h5>
              <p className="text-[11px] text-[#6C7970] mt-1">
                The green &quot;Verified Partner&quot; badge immediately renders on the consumer discovery feed.
              </p>
            </div>
          </div>

          {/* Interactive Toggle for Verification */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-[#CCD6D0] w-full flex items-center justify-between shadow-xs">
            <div>
              <span className="text-xs font-mono font-bold text-[#18221D] block">
                Current Audit Status
              </span>
              <span className="text-[11px] font-mono text-[#6C7970]">
                {isVerified ? 'Partner is Approved & Active' : 'Partner is Pending Review'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsVerified(!isVerified)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-xs ${
                isVerified
                  ? 'bg-[#E8F5EE] text-[#0D5C35] border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {isVerified ? '✓ Verified (Revoke)' : 'Approve Partner'}
            </button>
          </div>
        </div>

        {/* Right: Authentic Admin Mobile Screen Capture (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[350px] sm:max-w-[370px] h-[640px] rounded-[44px] bg-[#101613] p-3 shadow-xl border-2 border-slate-700 flex flex-col justify-between overflow-hidden">
            {/* Admin Header */}
            <div className="px-4 pt-1 pb-1 flex items-center justify-between text-white/80 font-mono text-[10px]">
              <span>12:10</span>
              <span className="font-bold text-blue-400">ADMIN CONSOLE</span>
              <span>5G</span>
            </div>

            {/* Authentic Admin Verification Queue Screen */}
            <div className="relative flex-1 rounded-[30px] overflow-hidden bg-white border border-[#E7EBE8]">
              <Image
                src="/projects/aahar-nearby/screen_admin_verification_queue.png"
                alt="Aahar Nearby authentic Admin Verification Queue Flutter screen"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 350px, 370px"
              />

              {/* Live Status Overlay Banner */}
              <div className="absolute bottom-16 left-3 right-3 p-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/10 text-white flex items-center justify-between z-20 shadow-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[11px] font-bold">
                    FSSAI #10023045678901
                  </span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    isVerified
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-400/40'
                  }`}
                >
                  {isVerified ? 'APPROVED' : 'PENDING'}
                </span>
              </div>
            </div>

            {/* Gesture Home Bar */}
            <div className="py-1 flex justify-center">
              <div className="w-20 h-1 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
