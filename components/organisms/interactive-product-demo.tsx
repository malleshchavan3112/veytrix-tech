'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  Check,
  Navigation,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
} from 'lucide-react';

// =============================================================================
// AUTHENTIC AAHAR FLUTTER SCREENS (SOURCE OF TRUTH FROM E:\aahar_nearby)
// =============================================================================

export const AAHAR_JOURNEY_SCREENS = {
  ownerDashboard: '/projects/aahar-nearby/screen_owner_dashboard.png',
  addMenu: '/projects/aahar-nearby/screen_add_menu.png',
  ownerPublished: '/projects/aahar-nearby/screen_ai_formatting.png',
  employeeHome: '/projects/aahar-nearby/discovery_feed.png',
  employeeSearch: '/projects/aahar-nearby/screen_search_results.png',
  outletDetail: '/projects/aahar-nearby/menu_details.png',
  todayMenu: '/projects/aahar-nearby/menu_details.png',
  adminQueue: '/projects/aahar-nearby/screen_admin_verification_queue.png',
  adminLogin: '/projects/aahar-nearby/screen_admin_portal.png',
} as const;

// =============================================================================
// STEP CONFIGURATION (8 AUTHENTIC PRODUCT STEPS)
// =============================================================================

export interface WalkthroughStep {
  id: number;
  role: 'MESS OWNER' | 'EMPLOYEE / DINER';
  roleTag: string;
  stepNumber: string;
  navTitle: string;
  title: string;
  subtitle: string;
  description: string;
  actionCallout: string;
  screenKey: keyof typeof AAHAR_JOURNEY_SCREENS;
  imageAlt: string;
  transitionType: 'push' | 'modal' | 'fade';
  touchTarget?: {
    top: string;
    left: string;
    label?: string;
  };
}

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    id: 0,
    role: 'MESS OWNER',
    roleTag: '01 / MESS OWNER',
    stepNumber: '01',
    navTitle: 'Open Aahar',
    title: 'Owner Opens Aahar',
    subtitle: 'Morning kitchen operations',
    description: 'The owner opens Aahar and prepares today’s lunch menu.',
    actionCallout: '+ ADD TODAY’S SPECIAL',
    screenKey: 'ownerDashboard',
    imageAlt: 'Aahar Nearby authentic Owner Dashboard Flutter screen',
    transitionType: 'fade',
    touchTarget: { top: '50.5%', left: '28%', label: 'Add Item' },
  },
  {
    id: 1,
    role: 'MESS OWNER',
    roleTag: '02 / MESS OWNER',
    stepNumber: '02',
    navTitle: 'Add Special',
    title: "Add Today's Special",
    subtitle: 'Raw menu parsing with Gemini AI',
    description: 'The owner inputs today’s special. Aahar auto-detects dish names and pricing.',
    actionCallout: 'FORMAT MENU WITH GEMINI AI',
    screenKey: 'addMenu',
    imageAlt: 'Aahar Nearby authentic Add Menu Flutter screen',
    transitionType: 'modal',
    touchTarget: { top: '65.5%', left: '50%', label: 'Format with AI' },
  },
  {
    id: 2,
    role: 'MESS OWNER',
    roleTag: '03 / MESS OWNER',
    stepNumber: '03',
    navTitle: 'Goes Live',
    title: 'Menu Goes Live',
    subtitle: 'Instant geofenced propagation',
    description: 'One tap commits the structured lunch menu. The item is published to the local hub.',
    actionCallout: 'PROCEED TO DINER DISCOVERY',
    screenKey: 'ownerPublished',
    imageAlt: 'Aahar Nearby authentic Published Menu Flutter screen',
    transitionType: 'push',
    touchTarget: { top: '94%', left: '50%', label: 'Proceed to Diner' },
  },
  {
    id: 3,
    role: 'EMPLOYEE / DINER',
    roleTag: '04 / EMPLOYEE',
    stepNumber: '04',
    navTitle: 'Open Aahar',
    title: 'Employee Opens Aahar',
    subtitle: 'Nearby lunch discovery',
    description: 'An office worker at DLF Cyber Park opens Aahar to find today’s open kitchens.',
    actionCallout: 'SEARCH DISHES & MESSES',
    screenKey: 'employeeHome',
    imageAlt: 'Aahar Nearby authentic Employee Discovery Feed Flutter screen',
    transitionType: 'push',
    touchTarget: { top: '10.5%', left: '42%', label: 'Search' },
  },
  {
    id: 4,
    role: 'EMPLOYEE / DINER',
    roleTag: '05 / DISCOVERY',
    stepNumber: '05',
    navTitle: 'Search',
    title: 'Search for Lunch',
    subtitle: 'Querying "Paneer"',
    description: 'Entering "Paneer" instantly queries the local catalog, elevating Annapurna Mess.',
    actionCallout: 'OPEN OUTLET PROFILE',
    screenKey: 'employeeSearch',
    imageAlt: 'Aahar Nearby authentic Search Results Flutter screen',
    transitionType: 'push',
    touchTarget: { top: '60%', left: '50%', label: 'Select Mess' },
  },
  {
    id: 5,
    role: 'EMPLOYEE / DINER',
    roleTag: '06 / OUTLET',
    stepNumber: '06',
    navTitle: 'View Mess',
    title: 'Discover the Outlet',
    subtitle: 'Inspecting kitchen profile & hygiene',
    description: 'The employee verifies the outlet is open, FSSAI certified, and 250m away.',
    actionCallout: 'INSPECT TODAY’S MENU',
    screenKey: 'outletDetail',
    imageAlt: 'Aahar Nearby authentic Hotel Profile Details Flutter screen',
    transitionType: 'push',
    touchTarget: { top: '60%', left: '50%', label: 'View Menu' },
  },
  {
    id: 6,
    role: 'EMPLOYEE / DINER',
    roleTag: '07 / MENU SYNC',
    stepNumber: '07',
    navTitle: 'See Special',
    title: "The Owner's Update is Live",
    subtitle: 'The ecosystem loop completes in real time',
    description: 'The exact Special Paneer Thali entered by the owner is now visible for ₹120.',
    actionCallout: 'GET WALKING DIRECTIONS',
    screenKey: 'todayMenu',
    imageAlt: "Aahar Nearby authentic Today's Menu Flutter screen",
    transitionType: 'push',
    touchTarget: { top: '43%', left: '71%', label: 'Directions' },
  },
  {
    id: 7,
    role: 'EMPLOYEE / DINER',
    roleTag: '08 / DIRECTIONS',
    stepNumber: '08',
    navTitle: 'Walk to Lunch',
    title: 'Walk to Lunch',
    subtitle: 'Turn-by-turn walking route',
    description: 'The employee follows the 4-minute walking route to pick up their thali.',
    actionCallout: '280 M · 4 MIN WALK',
    screenKey: 'todayMenu',
    imageAlt: 'Aahar Nearby authentic Walking Directions route view',
    transitionType: 'fade',
  },
];

// =============================================================================
// SUB-COMPONENT: REALISTIC DISCRETE TOUCH INDICATOR
// =============================================================================

function DiscreteTouchRipple({
  top,
  left,
  isActive,
}: {
  top: string;
  left: string;
  isActive: boolean;
}) {
  if (!isActive) return null;

  return (
    <div
      className="pointer-events-none absolute z-30 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ top, left }}
      aria-hidden="true"
    >
      {/* Expanding Soft Radial Ring */}
      <span className="absolute w-12 h-12 rounded-full border-2 border-[#168A4A] bg-[#168A4A]/25 animate-[ping_0.6s_cubic-bezier(0,0,0.2,1)_forwards]" />
      {/* Crisp 10px Center Target */}
      <span className="relative w-3.5 h-3.5 rounded-full bg-[#168A4A] shadow-lg border-2 border-white ring-2 ring-[#168A4A]/40" />
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT: CINEMATIC AUTO-PLAY PRODUCT JOURNEY
// =============================================================================

export function GuidedProductJourney() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [prevStep, setPrevStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [touchActive, setTouchActive] = useState<boolean>(false);
  const [showSyncBridge, setShowSyncBridge] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef<boolean>(false);
  const stepTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const step = WALKTHROUGH_STEPS[currentStep];

  // Manual or Auto Step Advance
  const goToStep = useCallback(
    (target: number, isAuto = false) => {
      if (target === currentStep) return;
      if (!isAuto) {
        setIsPlaying(false);
      }

      setPrevStep(currentStep);
      setIsTransitioning(true);
      setTouchActive(false);

      // Handle Bridge moment between Owner and Employee (Step 2 -> 3)
      if (currentStep === 2 && target === 3) {
        setShowSyncBridge(true);
        setTimeout(() => {
          setShowSyncBridge(false);
          setCurrentStep(target);
          setIsTransitioning(false);
        }, 1200);
        return;
      }

      // Normal screen transition
      setCurrentStep(target);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
    },
    [currentStep]
  );

  // Trigger discrete touch animation after screen settles
  useEffect(() => {
    if (step.touchTarget) {
      touchTimerRef.current = setTimeout(() => {
        setTouchActive(true);
        const hideTimer = setTimeout(() => {
          setTouchActive(false);
        }, 600);
        return () => clearTimeout(hideTimer);
      }, 900);
    }
    return () => {
      if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    };
  }, [currentStep, step.touchTarget]);

  // Autoplay progression loop (3.6s per step, 28-32s total, stops at Step 8)
  useEffect(() => {
    if (!isPlaying) {
      if (stepTimerRef.current) clearTimeout(stepTimerRef.current);
      return;
    }

    const duration = currentStep === 7 ? 4500 : 3600;

    stepTimerRef.current = setTimeout(() => {
      if (currentStep < WALKTHROUGH_STEPS.length - 1) {
        goToStep(currentStep + 1, true);
      } else {
        // Complete the journey and stop. No infinite looping!
        setIsPlaying(false);
        setIsCompleted(true);
      }
    }, duration);

    return () => {
      if (stepTimerRef.current) clearTimeout(stepTimerRef.current);
    };
  }, [isPlaying, currentStep, goToStep]);

  // IntersectionObserver: Automatically start flow when 35% visible
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.35 &&
          !hasPlayedRef.current
        ) {
          hasPlayedRef.current = true;
          // Clean entrance sequence: small breath then start journey
          setTimeout(() => {
            setIsPlaying(true);
          }, 900);
        }
      },
      { threshold: [0.35] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleNext = () => {
    setIsPlaying(false);
    if (currentStep < WALKTHROUGH_STEPS.length - 1) {
      goToStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    setIsPlaying(false);
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const handleReplay = () => {
    setIsCompleted(false);
    setIsPlaying(true);
    goToStep(0);
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full py-6 flex flex-col items-center select-none"
    >
      {/* --------------------------------------------------------------------- */}
      {/* 1. CINEMATIC PRODUCT PIPELINE (OWNER ────────→ EMPLOYEE)              */}
      {/* --------------------------------------------------------------------- */}
      <div className="w-full max-w-5xl mx-auto mb-10 sm:mb-12 px-4">
        {/* Role Bracket Bar */}
        <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D5C35]" />
            <span className="text-[#0D5C35]">01-03 // MESS OWNER (MENU OPERATIONS)</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-content-tertiary">
            <span className="text-[11px] font-mono">
              ONE MENU UPDATE · GEOFENCED BROADCAST
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#168A4A]" />
            <span className="text-[#168A4A]">04-08 // EMPLOYEE (FOOD DISCOVERY)</span>
          </div>
        </div>

        {/* Dynamic Bridge Pulse Notice when transitioning Step 03 -> 04 */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            showSyncBridge || currentStep === 3
              ? 'max-h-16 opacity-100 mb-4'
              : 'max-h-0 opacity-0 mb-0'
          }`}
        >
          <div className="py-2.5 px-4 rounded-xl bg-[#E8F5EE] border border-emerald-300 text-center shadow-xs flex items-center justify-center gap-3">
            <Sparkles className="w-4 h-4 text-[#F47B20] animate-pulse shrink-0" />
            <span className="font-mono text-xs font-bold text-[#0D5C35]">
              OWNER: MENU PUBLISHED ──→ SYNCING TO GEOFENCE ──→ EMPLOYEE: DISCOVERY ACTIVE
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 2. MINIMAL CINEMATIC TIMELINE WITH SMOOTH PROGRESS LINE             */}
        {/* ------------------------------------------------------------------- */}
        <div className="relative w-full pt-4 pb-2">
          {/* Base Neutral Track Line */}
          <div className="absolute top-7 left-3 right-3 h-[2px] bg-[#E0E7E2] -z-0" />

          {/* Active Emerald Progress Fill */}
          <div
            className="absolute top-7 left-3 h-[2px] bg-[#168A4A] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] -z-0"
            style={{
              width: `calc(${(currentStep / (WALKTHROUGH_STEPS.length - 1)) * 100}% - 24px)`,
            }}
          />

          {/* 8 Minimal Timeline Nodes */}
          <div className="grid grid-cols-8 gap-1 relative z-10">
            {WALKTHROUGH_STEPS.map((s, idx) => {
              const isActive = idx === currentStep;
              const isPast = idx < currentStep;

              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToStep(idx)}
                  className="flex flex-col items-center group cursor-pointer focus-visible:outline-none"
                  aria-label={`Jump to step ${s.stepNumber}: ${s.title}`}
                >
                  {/* Node Circle */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 text-xs font-mono font-bold ${
                      isActive
                        ? 'bg-white text-[#168A4A] ring-4 ring-[#168A4A] shadow-md scale-110'
                        : isPast
                        ? 'bg-[#168A4A] text-white shadow-xs'
                        : 'bg-[#F2F5F3] text-[#6C7970] group-hover:bg-[#E8F5EE] border border-[#CCD6D0]'
                    }`}
                  >
                    {isPast ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <span>{s.stepNumber}</span>
                    )}
                  </div>

                  {/* Node Subtitle (Desktop) */}
                  <div className="hidden md:flex flex-col items-center mt-2 text-center">
                    <span
                      className={`text-[11px] font-mono leading-tight ${
                        isActive
                          ? 'font-bold text-[#168A4A]'
                          : isPast
                          ? 'font-medium text-[#18221D]'
                          : 'text-[#8C9890]'
                      }`}
                    >
                      {s.navTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Step Header */}
        <div className="md:hidden mt-4 flex items-center justify-between px-4 py-2 bg-[#F2F5F3] rounded-xl border border-[#E0E7E2]">
          <span className="font-mono text-xs font-bold text-[#0D5C35]">
            STEP {step.stepNumber} / 08
          </span>
          <span className="text-xs font-semibold text-[#18221D]">
            {step.title}
          </span>
          <span className="text-[10px] font-mono text-[#6C7970]">
            {step.role}
          </span>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* 3. FULL-WIDTH HERO PRODUCT STAGE (DOMINANT 480-520PX PHONE)          */}
      {/* --------------------------------------------------------------------- */}
      <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Compact Step Annotation (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Active Step Role Pill */}
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-emerald-200 bg-[#E8F5EE] text-[#0D5C35]">
              {step.roleTag}
            </span>
            {step.id === 6 && (
              <span className="font-mono text-[10px] text-[#F47B20] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-bold animate-pulse">
                ★ PRODUCT CLIMAX
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#18221D] leading-tight">
            {step.title}
          </h3>

          <p className="mt-1 font-display text-sm font-semibold text-[#0D5C35]">
            {step.subtitle}
          </p>

          <p className="mt-3 text-sm text-[#4E5C53] leading-relaxed max-w-md">
            {step.description}
          </p>

          {/* Action Callout Pill */}
          <div className="mt-5 py-2 px-3.5 rounded-xl bg-white border border-[#DDE4DF] shadow-xs inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0D5C35]">
            <span className="w-2 h-2 rounded-full bg-[#168A4A]" />
            <span>{step.actionCallout}</span>
          </div>

          {/* Completed State Callout */}
          {isCompleted && (
            <div className="mt-6 p-4 w-full rounded-2xl bg-[#E8F5EE] border border-emerald-300 shadow-sm animate-fade-in">
              <span className="font-mono text-xs font-bold text-[#0D5C35] block mb-1">
                JOURNEY COMPLETE
              </span>
              <p className="text-xs text-[#18221D] leading-snug">
                Owner → Menu → Employee → Lunch. Watch again or explore Platform Governance.
              </p>
              <button
                type="button"
                onClick={handleReplay}
                className="mt-3 px-4 py-2 rounded-xl bg-[#168A4A] text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#0D5C35] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Product Flow</span>
              </button>
            </div>
          )}

          {/* Controller Bar: Previous / Next / Autoplay / Replay */}
          <div className="mt-8 flex flex-wrap items-center gap-3 w-full">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-4 py-2.5 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                currentStep === 0
                  ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                  : 'bg-white hover:bg-slate-50 text-[#18221D] border-[#CCD6D0]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep === WALKTHROUGH_STEPS.length - 1}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm transition-all ${
                currentStep === WALKTHROUGH_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500'
                  : 'bg-[#168A4A] hover:bg-[#0D5C35] text-white'
              }`}
            >
              <span>Next Step</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Subtle Autoplay Status Pill & Toggle */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-3.5 py-2.5 rounded-xl border text-xs font-mono font-semibold flex items-center gap-2 transition-all ${
                  isPlaying
                    ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                    : 'bg-white border-[#CCD6D0] hover:bg-slate-50 text-[#18221D]'
                }`}
                title={isPlaying ? 'Pause auto-play' : 'Play product flow'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#F47B20]" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#168A4A] fill-[#168A4A]" />
                    <span>Play Flow</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReplay}
                className="p-2.5 rounded-xl bg-white border border-[#CCD6D0] hover:bg-slate-50 text-[#6C7970] transition-colors"
                title="Restart from step 01"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: DOMINANT 480-520PX AUTHENTIC SMARTPHONE HERO (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2 relative py-4">
          {/* Subtle Ambient Radial Glow Behind Phone */}
          <div className="absolute w-[500px] h-[780px] bg-[#168A4A]/12 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Premium Device Shell (Fixed & Rock-Solid Physical Anchor) */}
          <div className="relative w-full max-w-[460px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[510px] h-[780px] sm:h-[820px] lg:h-[850px] rounded-[52px] bg-[#101613] p-3.5 shadow-2xl border-[4px] border-[#222E28] ring-1 ring-white/10 flex flex-col justify-between overflow-hidden select-none">
            {/* Outer Bezel Gloss Line */}
            <div className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/10" />

            {/* Dynamic Island Notch & Speaker Pill */}
            <div className="relative z-30 w-full flex items-center justify-between px-6 pt-1.5 pb-1">
              <span className="text-[11px] font-mono font-semibold text-white/90">
                12:22
              </span>
              <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 border border-white/10 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#168A4A]/70" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              </div>
              <div className="flex items-center gap-1.5 text-white/80">
                <span className="text-[10px] font-mono font-bold">5G</span>
                <div className="w-4 h-2 rounded-[2px] border border-white/60 p-[1px] flex items-center">
                  <div className="w-full h-full bg-[#168A4A] rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* SCREEN VIEWPORT WITH NATIVE DUAL-BUFFER PUSH TRANSITIONS */}
            <div className="relative z-20 w-full flex-1 rounded-[38px] overflow-hidden bg-[#F7F8F6] border border-[#E7EBE8] flex flex-col shadow-inner">
              {/* Native Push Transition Layer */}
              <div
                className={`relative w-full h-full transition-transform duration-550 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isTransitioning
                    ? step.transitionType === 'modal'
                      ? 'translate-y-2 opacity-90'
                      : 'translate-x-3 opacity-90'
                    : 'translate-x-0 translate-y-0 opacity-100'
                }`}
              >
                {/* Authentic Flutter Screen Asset */}
                <Image
                  src={AAHAR_JOURNEY_SCREENS[step.screenKey]}
                  alt={step.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 460px, 510px"
                  priority={currentStep < 2}
                />

                {/* ------------------------------------------------------------- */}
                {/* AUTHENTIC TOUCH INDICATORS & STEP-SPECIFIC OVERLAYS          */}
                {/* ------------------------------------------------------------- */}

                {/* Discrete Touch Ripple */}
                {step.touchTarget && (
                  <DiscreteTouchRipple
                    top={step.touchTarget.top}
                    left={step.touchTarget.left}
                    isActive={touchActive}
                  />
                )}

                {/* STEP 01: OWNER DASHBOARD - Tap + Add Item target */}
                {currentStep === 0 && (
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="absolute top-[48.5%] left-[8%] w-[42%] h-[5.5%] rounded-xl z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                    title="Tap + Add Item"
                    aria-label="Tap Add Item"
                  />
                )}

                {/* STEP 02: ADD MENU - Tap Format with AI target */}
                {currentStep === 1 && (
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="absolute top-[63.5%] left-[9%] w-[82%] h-[6%] rounded-xl z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                    title="Format Menu with Gemini AI"
                    aria-label="Format Menu with Gemini AI"
                  />
                )}

                {/* STEP 03: PUBLISH - Tap Proceed to Diner target */}
                {currentStep === 2 && (
                  <button
                    type="button"
                    onClick={() => goToStep(3)}
                    className="absolute bottom-[3%] left-[5%] w-[90%] h-[6.5%] rounded-2xl z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                    title="Proceed to Diner View"
                    aria-label="Proceed to Diner View"
                  />
                )}

                {/* STEP 04: EMPLOYEE HOME - Tap Search target */}
                {currentStep === 3 && (
                  <button
                    type="button"
                    onClick={() => goToStep(4)}
                    className="absolute top-[7.5%] left-[5%] w-[90%] h-[5.5%] rounded-xl z-20 cursor-pointer bg-transparent hover:border-2 hover:border-[#168A4A] transition-all focus:outline-none"
                    title="Tap to search"
                    aria-label="Tap search bar"
                  />
                )}

                {/* STEP 05: SEARCH RESULTS - Tap Annapurna Card target */}
                {currentStep === 4 && (
                  <button
                    type="button"
                    onClick={() => goToStep(5)}
                    className="absolute top-[54%] left-[5%] w-[90%] h-[15%] rounded-2xl z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                    title="Open Annapurna Mess"
                    aria-label="Open Annapurna Mess"
                  />
                )}

                {/* STEP 06: OUTLET DETAIL - Tap Menu Tab target */}
                {currentStep === 5 && (
                  <button
                    type="button"
                    onClick={() => goToStep(6)}
                    className="absolute top-[55%] left-[5%] right-[5%] h-[12%] rounded-2xl z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                    title="Inspect Today's Menu"
                    aria-label="Inspect Today's Menu"
                  />
                )}

                {/* STEP 07: MENU SYNC - CLIMAX HIGHLIGHT OVER SPECIAL THALI */}
                {currentStep === 6 && (
                  <>
                    {/* Subtle Emerald Highlight around the Chef's Special Thali */}
                    <div className="absolute top-[58.5%] left-[4%] right-[4%] p-2.5 rounded-2xl bg-[#E8F5EE]/95 border-2 border-[#168A4A] shadow-xl z-20 animate-fade-in pointer-events-none">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[9px] font-bold text-[#0D5C35] bg-white px-2 py-0.5 rounded border border-emerald-300 inline-flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#F47B20]" />
                          <span>JUST ADDED BY OWNER IN STEP 02</span>
                        </span>
                        <span className="font-mono text-xs font-bold text-[#168A4A]">
                          ₹120
                        </span>
                      </div>
                      <p className="text-[11px] font-bold text-[#18221D]">
                        Special Paneer Thali · Live in Cyber Park Hub
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => goToStep(7)}
                      className="absolute top-[41%] left-[51%] w-[40%] h-[4.5%] rounded-full z-20 cursor-pointer bg-transparent hover:bg-[#168A4A]/10 transition-colors focus:outline-none"
                      title="Get Directions"
                      aria-label="Get Directions"
                    />
                  </>
                )}

                {/* STEP 08: DIRECTIONS - PROGRESSIVE WALKING ROUTE DRAWING */}
                {currentStep === 7 && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 p-5 flex flex-col justify-between animate-fade-in">
                    <div>
                      {/* Top Back Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#E7EBE8]">
                        <button
                          type="button"
                          onClick={() => goToStep(6)}
                          className="p-1 -ml-1 text-[#18221D]"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <span className="font-display text-xs font-bold text-[#18221D]">
                          Walking Route to Annapurna Mess
                        </span>
                        <span className="w-4" />
                      </div>

                      {/* Distance Badge */}
                      <div className="mt-4 p-3.5 rounded-2xl bg-[#E8F5EE] border border-emerald-300 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase font-bold text-[#0D5C35]">
                            WALKING ESTIMATE
                          </span>
                          <h5 className="font-display text-base font-bold text-[#18221D]">
                            280 Meters · 4 Min Walk
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[#168A4A] text-white flex items-center justify-center">
                          <Navigation className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Animated Pedestrian Map Route Drawing */}
                      <div className="mt-4 p-4 rounded-2xl bg-[#F7F8F6] border border-[#E0E7E2] relative h-48 overflow-hidden flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 240 140">
                          {/* Route Path */}
                          <path
                            d="M 30 110 L 90 110 L 90 40 L 210 40"
                            fill="none"
                            stroke="#168A4A"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="300"
                            strokeDashoffset="0"
                            className="animate-[dash_1.5s_ease-in-out_forwards]"
                          />
                          {/* Origin Point */}
                          <circle cx="30" cy="110" r="6" fill="#0D5C35" />
                          <text x="15" y="130" fontSize="9" fontFamily="monospace" fill="#0D5C35">
                            Office Desk
                          </text>

                          {/* Waypoint Gate 3 */}
                          <circle cx="90" cy="40" r="4" fill="#F47B20" />
                          <text x="65" y="30" fontSize="8" fontFamily="monospace" fill="#6C7970">
                            Gate 3 Skywalk
                          </text>

                          {/* Destination Point */}
                          <circle cx="210" cy="40" r="6" fill="#168A4A" />
                          <text x="165" y="60" fontSize="9" fontFamily="monospace" fontWeight="bold" fill="#168A4A">
                            Annapurna Mess
                          </text>
                        </svg>
                      </div>

                      {/* Step Summary List */}
                      <div className="mt-3 space-y-2 text-xs font-mono text-[#18221D]">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#168A4A] text-white text-[9px] flex items-center justify-center">
                            1
                          </span>
                          <span>Exit DLF Cyber Park Gate 3 (80m)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#168A4A] text-white text-[9px] flex items-center justify-center">
                            2
                          </span>
                          <span>Cross pedestrian skywalk to Tower B (120m)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#168A4A] text-white text-[9px] flex items-center justify-center">
                            3
                          </span>
                          <span>Arrive at Annapurna Mess (80m)</span>
                        </div>
                      </div>
                    </div>

                    {/* Replay Journey Action */}
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="w-full py-3.5 rounded-2xl bg-[#168A4A] hover:bg-[#0D5C35] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>↺ Replay Product Flow</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Native Bottom Home Gesture Bar */}
            <div className="relative z-30 w-full py-1.5 flex items-center justify-center">
              <div className="w-28 h-1 bg-white/40 rounded-full" />
            </div>
          </div>

          {/* Elliptical Ground Shadow Beneath Phone */}
          <div className="w-[380px] h-6 bg-radial from-[#168A4A]/25 via-black/15 to-transparent blur-md mt-2" />
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// PLATFORM GOVERNANCE: AUTHENTIC ADMIN VERIFICATION & AUDIT FLOW
// =============================================================================

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
                src={AAHAR_JOURNEY_SCREENS.adminQueue}
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

// Backwards-compatible alias for existing imports
export const InteractiveProductDemo = GuidedProductJourney;
