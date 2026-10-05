'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Check,
  Zap,
  MapPin,
  Clock,
  Compass,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Smartphone,
  Layers,
} from 'lucide-react';

// =============================================================================
// AUTHENTIC FLUTTER SCREENSHOTS (SOURCE OF TRUTH)
// =============================================================================
const AAHAR_SCREENS = {
  ownerDashboard: '/projects/aahar-nearby/screen_owner_dashboard.png',
  ownerAddMenu: '/projects/aahar-nearby/screen_add_menu.png',
  ownerPublished: '/projects/aahar-nearby/screen_ai_formatting.png',
  employeeFeed: '/projects/aahar-nearby/discovery_feed.png',
  employeeSearch: '/projects/aahar-nearby/screen_search_results.png',
  menuDetails: '/projects/aahar-nearby/menu_details.png',
} as const;

// =============================================================================
// STORYBOARD CHAPTER DEFINITIONS (4 ROLES, 8 NARRATIVE STEPS)
// =============================================================================
export interface StoryStep {
  id: number;
  chapter: '01 OWNER' | '02 EMPLOYEE' | '03 DISCOVERY' | '04 DIRECTIONS';
  chapterIndex: number;
  stepNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  durationMs: number;
  primarySurface: 'owner' | 'bridge' | 'employee';
  ownerScreen: keyof typeof AAHAR_SCREENS;
  employeeScreen: keyof typeof AAHAR_SCREENS;
  ownerHighlight?: {
    label: string;
    sublabel?: string;
    top: string;
    left: string;
  };
  employeeHighlight?: {
    label: string;
    sublabel?: string;
    top: string;
    left: string;
  };
  eventBadge?: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    id: 0,
    chapter: '01 OWNER',
    chapterIndex: 0,
    stepNumber: '01',
    badge: 'KITCHEN OPERATIONS',
    title: "Owner Updates Today's Menu",
    subtitle: 'Morning operations at Annapurna Pure Veg Mess',
    description:
      "The mess operator opens Aahar to configure today's fresh lunch offerings before the office lunch rush.",
    durationMs: 2700,
    primarySurface: 'owner',
    ownerScreen: 'ownerDashboard',
    employeeScreen: 'employeeFeed',
    ownerHighlight: {
      label: '+ ADD TODAY’S SPECIAL',
      sublabel: 'Action Initiated',
      top: '51%',
      left: '28%',
    },
    eventBadge: 'OPERATOR READY',
  },
  {
    id: 1,
    chapter: '01 OWNER',
    chapterIndex: 0,
    stepNumber: '02',
    badge: 'AI PARSING ENGINE',
    title: 'Input & AI Formatting',
    subtitle: 'Raw kitchen text parsed into structured dishes',
    description:
      'Unstructured kitchen notes are instantly structured with dish names, pricing, and thali combinations via Gemini AI.',
    durationMs: 2700,
    primarySurface: 'owner',
    ownerScreen: 'ownerAddMenu',
    employeeScreen: 'employeeFeed',
    ownerHighlight: {
      label: 'FORMAT MENU WITH GEMINI AI',
      sublabel: 'Structured Extraction',
      top: '65%',
      left: '50%',
    },
    eventBadge: 'DISHES EXTRACTED',
  },
  {
    id: 2,
    chapter: '01 OWNER',
    chapterIndex: 0,
    stepNumber: '03',
    badge: 'OPERATOR COMMIT',
    title: 'Publish Today’s Special',
    subtitle: 'Special Paneer Thali · ₹120 committed to hub',
    description:
      'The owner confirms the parsed menu. With a single tap, today’s lunch special is committed to the local Firestore collection.',
    durationMs: 2300,
    primarySurface: 'owner',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'employeeFeed',
    ownerHighlight: {
      label: 'PUBLISH MENU // LIVE',
      sublabel: 'Committed to Hub',
      top: '84%',
      left: '50%',
    },
    eventBadge: 'MENU PUBLISHED',
  },
  {
    id: 3,
    chapter: '02 EMPLOYEE',
    chapterIndex: 1,
    stepNumber: '04',
    badge: 'GEOFENCE SYNC BRIDGE',
    title: 'Menu Goes Live',
    subtitle: 'Instant propagation within 500m walking radius',
    description:
      'Aahar propagates the updated menu to nearby office workers. Sub-second geofence sync ensures only walking-distance diners receive the update.',
    durationMs: 2400,
    primarySurface: 'bridge',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'employeeFeed',
    eventBadge: 'GEOFENCE SYNCED (500m)',
  },
  {
    id: 4,
    chapter: '02 EMPLOYEE',
    chapterIndex: 1,
    stepNumber: '05',
    badge: 'DINER DISCOVERY',
    title: 'Employee Discovers Outlet',
    subtitle: '1:00 PM lunch break in adjacent IT park',
    description:
      'An office worker opens Aahar. The live discovery stream ranks Annapurna Pure Veg Mess at the top based on deterministic walking distance.',
    durationMs: 2700,
    primarySurface: 'employee',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'employeeFeed',
    employeeHighlight: {
      label: 'ANNAPURNA PURE VEG MESS',
      sublabel: '280m · 4 min walk',
      top: '38%',
      left: '50%',
    },
    eventBadge: 'DISCOVERY STREAM LIVE',
  },
  {
    id: 5,
    chapter: '02 EMPLOYEE',
    chapterIndex: 1,
    stepNumber: '06',
    badge: 'REAL-TIME FILTERING',
    title: 'Searches Lunch Specials',
    subtitle: 'Targeted query for fresh paneer options',
    description:
      'Filtering for "Paneer" instantly isolates outlets serving hot paneer meals right now, with walking distances calculated via Haversine geometry.',
    durationMs: 2700,
    primarySurface: 'employee',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'screen_search_results' in AAHAR_SCREENS ? 'employeeSearch' : 'employeeSearch',
    employeeHighlight: {
      label: 'QUERY: "PANEER"',
      sublabel: 'Filtered Results',
      top: '11%',
      left: '42%',
    },
    eventBadge: 'SEARCH FILTER APPLIED',
  },
  {
    id: 6,
    chapter: '03 DISCOVERY',
    chapterIndex: 2,
    stepNumber: '07',
    badge: 'CLIMAX MOMENT',
    title: 'Today’s Menu Live',
    subtitle: 'Owner updated it → Employee sees it',
    description:
      'The employee opens Annapurna’s profile. The exact Special Paneer Thali (₹120) published by the kitchen owner moments earlier is live, verified, and priced.',
    durationMs: 3400,
    primarySurface: 'employee',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'menuDetails',
    employeeHighlight: {
      label: 'SPECIAL PANEER THALI · ₹120',
      sublabel: 'Published by Owner Moments Earlier',
      top: '52%',
      left: '50%',
    },
    eventBadge: 'VERIFIED MENU SYNC',
  },
  {
    id: 7,
    chapter: '04 DIRECTIONS',
    chapterIndex: 3,
    stepNumber: '08',
    badge: 'LAST-MILE TRANSIT',
    title: 'Found It. Now Walk to It.',
    subtitle: '280 meters · 4 minutes walking time',
    description:
      'No 45-minute delivery waiting. Clear pedestrian wayfinding guides the employee directly from office reception to the mess counter.',
    durationMs: 3600,
    primarySurface: 'employee',
    ownerScreen: 'ownerPublished',
    employeeScreen: 'menuDetails',
    employeeHighlight: {
      label: 'GET DIRECTIONS // 280m',
      sublabel: '4 Min Walking Route',
      top: '88%',
      left: '50%',
    },
    eventBadge: 'HOT MEAL REACHED',
  },
];

const ROLES = [
  { key: '01 OWNER', label: '01 OWNER', startStep: 0 },
  { key: '02 EMPLOYEE', label: '02 EMPLOYEE', startStep: 3 },
  { key: '03 DISCOVERY', label: '03 DISCOVERY', startStep: 6 },
  { key: '04 DIRECTIONS', label: '04 DIRECTIONS', startStep: 7 },
] as const;

export function AaharProductStoryboard() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredViewportRef = useRef<boolean>(false);

  const currentStep = STORY_STEPS[activeStep];

  // ---------------------------------------------------------------------------
  // 1. Accessibility: Detect prefers-reduced-motion
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setIsReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // ---------------------------------------------------------------------------
  // 2. Viewport Trigger via IntersectionObserver (30-40% visibility)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (isReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredViewportRef.current) {
          hasTriggeredViewportRef.current = true;
          // Entrance delay: 600-900ms
          const entranceTimeout = setTimeout(() => {
            setIsPlaying(true);
            setHasStarted(true);
          }, 750);
          return () => clearTimeout(entranceTimeout);
        }
      },
      { threshold: 0.35 }
    );

    const target = containerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [isReducedMotion]);

  // ---------------------------------------------------------------------------
  // 3. Autoplay Loop (Runs once through 8 steps, then pauses)
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (!isPlaying || isReducedMotion) {
      if (timerRef.current) clearTimeout(timerRef.current);
      return;
    }

    const duration = currentStep.durationMs;
    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => {
        if (prev < STORY_STEPS.length - 1) {
          return prev + 1;
        } else {
          // Finished full story: stop playing, hold final directions screen
          setIsPlaying(false);
          return prev;
        }
      });
    }, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, activeStep, currentStep.durationMs, isReducedMotion]);

  // ---------------------------------------------------------------------------
  // User Actions
  // ---------------------------------------------------------------------------
  const togglePlayPause = useCallback(() => {
    if (activeStep === STORY_STEPS.length - 1 && !isPlaying) {
      setActiveStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  }, [activeStep, isPlaying]);

  const replayStory = useCallback(() => {
    setActiveStep(0);
    setIsPlaying(true);
  }, []);

  const jumpToStep = useCallback((stepIndex: number) => {
    setActiveStep(stepIndex);
    setIsPlaying(false);
  }, []);

  const jumpToChapter = useCallback((startStep: number) => {
    setActiveStep(startStep);
    setIsPlaying(false);
  }, []);

  const nextStep = useCallback(() => {
    setActiveStep((prev) => Math.min(prev + 1, STORY_STEPS.length - 1));
    setIsPlaying(false);
  }, []);

  const prevStep = useCallback(() => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
    setIsPlaying(false);
  }, []);

  // Visual Surface Hierarchy
  const isOwnerPrimary = currentStep.primarySurface === 'owner';
  const isBridgeActive = currentStep.primarySurface === 'bridge';
  const isEmployeePrimary = currentStep.primarySurface === 'employee';

  // Mobile active screen determination
  const mobileActiveScreen = isOwnerPrimary || isBridgeActive
    ? AAHAR_SCREENS[currentStep.ownerScreen]
    : AAHAR_SCREENS[currentStep.employeeScreen];

  const mobileRoleTitle = isOwnerPrimary || isBridgeActive
    ? 'OWNER APPLICATION // KITCHEN OPS'
    : 'EMPLOYEE APPLICATION // OFFICE DINER';

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-3xl bg-[#FBFBFD] border border-slate-200/80 shadow-xl overflow-hidden"
      aria-label="Aahar Nearby Interactive Product Storyboard"
    >
      {/* Subtle Editorial Background Lighting */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-80"
        style={{
          background:
            'radial-gradient(circle at 50% 35%, rgba(22,138,74,0.06), transparent 55%)',
        }}
      />

      {/* ===================================================================== */}
      {/* 1. TOP HEADER & MINIMAL CONTROL BAR                                   */}
      {/* ===================================================================== */}
      <div className="relative z-10 px-4 sm:px-8 py-4 sm:py-5 border-b border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/70 backdrop-blur-md">
        {/* Role Chapter Tabs (01 OWNER -> 02 EMPLOYEE -> 03 DISCOVERY -> 04 DIRECTIONS) */}
        <nav
          className="flex flex-wrap items-center gap-1 sm:gap-2"
          aria-label="Product Story Roles"
        >
          {ROLES.map((role, idx) => {
            const isActive = currentStep.chapter === role.key;
            return (
              <React.Fragment key={role.key}>
                {idx > 0 && (
                  <span className="text-slate-300 font-mono text-xs select-none">
                    →
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => jumpToChapter(role.startStep)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-mono text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E8F5EE] text-[#0D5C35] border border-emerald-300 shadow-sm ring-1 ring-emerald-500/20'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {role.label}
                </button>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Minimal Control Cluster */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5">
          {/* Autoplay Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200 font-mono text-[11px] text-slate-700">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isPlaying
                  ? 'bg-emerald-500 animate-pulse'
                  : 'bg-slate-400'
              }`}
            />
            <span className="font-semibold uppercase tracking-wider">
              {isPlaying ? 'AUTO PLAYING' : 'STORYBOARD'}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">
              0{activeStep + 1}/08
            </span>
          </div>

          {/* Pause / Play Button */}
          <button
            type="button"
            onClick={togglePlayPause}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 text-xs font-mono font-medium transition-colors shadow-sm"
            aria-label={isPlaying ? 'Pause Story' : 'Play Story'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-slate-600" />
                <span>Pause</span>
              </>
            ) : activeStep === STORY_STEPS.length - 1 ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 text-[#168A4A]" />
                <span className="text-[#0D5C35] font-semibold">Replay Story</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#168A4A] fill-[#168A4A]" />
                <span>Resume</span>
              </>
            )}
          </button>

          {/* Quick Replay */}
          {activeStep > 0 && !isPlaying && activeStep < STORY_STEPS.length - 1 && (
            <button
              type="button"
              onClick={replayStory}
              className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors shadow-sm"
              title="Restart from Step 01"
              aria-label="Restart Story"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. THE WIDE EDITORIAL STAGE (CONNECTED MULTI-SURFACE COMPOSITION)      */}
      {/* ===================================================================== */}
      <div className="relative z-10 p-5 sm:p-8 lg:p-12 overflow-hidden">
        {/* DESKTOP STAGE: Connected Dual-Phone Layout (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center max-w-6xl mx-auto">
          {/* SURFACE A: OWNER APPLICATION (Left 5 Cols) */}
          <div
            className={`lg:col-span-5 flex flex-col items-center transition-all duration-700 ${
              isOwnerPrimary
                ? 'scale-100 opacity-100 z-20'
                : isBridgeActive
                ? 'scale-[0.96] opacity-90 z-10'
                : 'scale-[0.92] opacity-60 hover:opacity-90 z-0'
            }`}
          >
            {/* Surface Header Tag */}
            <div className="flex items-center justify-between w-full max-w-[290px] mb-3 px-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isOwnerPrimary || isBridgeActive
                      ? 'bg-emerald-500 animate-pulse'
                      : 'bg-slate-300'
                  }`}
                />
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-700">
                  OWNER APPLICATION
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                KITCHEN OPS
              </span>
            </div>

            {/* Authentic Phone Enclosure */}
            <div
              className={`relative w-[280px] aspect-[9/19.5] rounded-[42px] bg-slate-950 p-3 shadow-2xl transition-all duration-500 ${
                isOwnerPrimary
                  ? 'ring-2 ring-emerald-500/50 shadow-emerald-950/15'
                  : 'ring-1 ring-slate-800'
              }`}
            >
              {/* Phone Speaker Notch */}
              <div className="w-16 h-3 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Phone Display Viewport */}
              <div className="relative w-full h-[calc(100%-18px)] rounded-[30px] overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  src={AAHAR_SCREENS[currentStep.ownerScreen]}
                  alt="Aahar Nearby Authentic Owner Flutter Screen"
                  fill
                  priority={activeStep <= 3}
                  sizes="280px"
                  className="object-cover object-top transition-opacity duration-500"
                />

                {/* Owner Callout Indicator (If Active) */}
                {currentStep.ownerHighlight && isOwnerPrimary && (
                  <div
                    className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      top: currentStep.ownerHighlight.top,
                      left: currentStep.ownerHighlight.left,
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute w-8 h-8 rounded-full bg-emerald-400/30 animate-ping" />
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                    </div>
                    <div className="mt-2 -ml-12 whitespace-nowrap bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/50 shadow-xl text-left">
                      <div className="font-mono text-[9px] font-bold text-emerald-400 tracking-wider">
                        {currentStep.ownerHighlight.label}
                      </div>
                      {currentStep.ownerHighlight.sublabel && (
                        <div className="text-[8px] font-mono text-slate-300">
                          {currentStep.ownerHighlight.sublabel}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Published Confirmation Watermark on Screen */}
                {activeStep >= 2 && (
                  <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded bg-emerald-950/85 border border-emerald-600/70 font-mono text-[9px] text-emerald-300 flex items-center gap-1 shadow-md">
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                    <span>SPECIAL LIVE</span>
                  </div>
                )}
              </div>
            </div>

            {/* Owner Context Capsule */}
            <div className="mt-4 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono text-slate-600 shadow-sm flex items-center gap-2">
              <span className="text-[#0D5C35] font-semibold">01 / OWNER</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 text-[11px]">
                {activeStep < 2
                  ? 'Raw Menu Entry'
                  : activeStep === 2
                  ? 'AI Formatted & Published'
                  : 'Broadcast to Hub'}
              </span>
            </div>
          </div>

          {/* SURFACE B: CENTRAL GEOFENCE SYNC BRIDGE (Middle 2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-0 relative z-10">
            <div className="flex flex-col items-center w-full">
              {/* Status Signal Pill */}
              <div
                className={`mb-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-500 ${
                  isBridgeActive
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                    : activeStep > 3
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-slate-100 text-slate-500 border border-slate-200'
                }`}
              >
                {activeStep >= 3 ? 'SYNC COMPLETE' : 'AWAITING SYNC'}
              </div>

              {/* Connecting Vector Line */}
              <div className="relative w-full h-8 flex items-center justify-center">
                <svg
                  className="w-full h-4 overflow-visible"
                  viewBox="0 0 120 16"
                  fill="none"
                >
                  <line
                    x1="0"
                    y1="8"
                    x2="120"
                    y2="8"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <line
                    x1="0"
                    y1="8"
                    x2={activeStep >= 3 ? '120' : '40'}
                    y2="8"
                    stroke="#168A4A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>

                {isBridgeActive && (
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-lg animate-ping pointer-events-none" />
                )}
              </div>

              {/* Core Ecosystem Event Annotation */}
              <div className="mt-3 text-center px-2">
                <span className="font-mono text-[10px] uppercase font-bold text-slate-700 block">
                  500m GEOFENCE
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                  Sub-second walking radius broadcast
                </span>
              </div>
            </div>
          </div>

          {/* SURFACE C: EMPLOYEE & DINER APPLICATION (Right 5 Cols) */}
          <div
            className={`lg:col-span-5 flex flex-col items-center transition-all duration-700 ${
              isEmployeePrimary
                ? 'scale-100 opacity-100 z-20'
                : isBridgeActive
                ? 'scale-[0.96] opacity-90 z-10'
                : 'scale-[0.92] opacity-60 hover:opacity-90 z-0'
            }`}
          >
            {/* Surface Header Tag */}
            <div className="flex items-center justify-between w-full max-w-[290px] mb-3 px-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isEmployeePrimary
                      ? 'bg-emerald-500 animate-pulse'
                      : 'bg-slate-300'
                  }`}
                />
                <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-slate-700">
                  EMPLOYEE APPLICATION
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                OFFICE DINER
              </span>
            </div>

            {/* Authentic Phone Enclosure */}
            <div
              className={`relative w-[280px] aspect-[9/19.5] rounded-[42px] bg-slate-950 p-3 shadow-2xl transition-all duration-500 ${
                isEmployeePrimary
                  ? 'ring-2 ring-emerald-500/50 shadow-emerald-950/15'
                  : 'ring-1 ring-slate-800'
              }`}
            >
              {/* Phone Speaker Notch */}
              <div className="w-16 h-3 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Phone Display Viewport */}
              <div className="relative w-full h-[calc(100%-18px)] rounded-[30px] overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  src={AAHAR_SCREENS[currentStep.employeeScreen]}
                  alt="Aahar Nearby Authentic Employee Flutter Screen"
                  fill
                  priority={activeStep >= 3}
                  sizes="280px"
                  className="object-cover object-top transition-opacity duration-500"
                />

                {/* Employee Callout Indicator (If Active) */}
                {currentStep.employeeHighlight && isEmployeePrimary && (
                  <div
                    className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      top: currentStep.employeeHighlight.top,
                      left: currentStep.employeeHighlight.left,
                    }}
                  >
                    {activeStep === 6 ? (
                      <div className="relative flex flex-col items-center">
                        <div className="w-56 bg-slate-950/95 backdrop-blur-md p-2.5 rounded-lg border-2 border-emerald-400 shadow-2xl text-left">
                          <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-800">
                            <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>MENU SYNCED</span>
                            </span>
                            <span className="font-mono text-[9px] text-emerald-400 font-semibold">
                              ₹120
                            </span>
                          </div>
                          <div className="font-display text-xs font-bold text-white">
                            Special Paneer Thali
                          </div>
                          <div className="text-[9px] text-slate-300 mt-0.5 leading-snug">
                            Published by the owner moments earlier.
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-8 h-8 rounded-full bg-emerald-400/30 animate-ping" />
                          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                        </div>
                        <div className="mt-2 -ml-12 whitespace-nowrap bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-500/50 shadow-xl text-left">
                          <div className="font-mono text-[9px] font-bold text-emerald-400 tracking-wider">
                            {currentStep.employeeHighlight.label}
                          </div>
                          {currentStep.employeeHighlight.sublabel && (
                            <div className="text-[8px] font-mono text-slate-300">
                              {currentStep.employeeHighlight.sublabel}
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Employee Context Capsule */}
            <div className="mt-4 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-mono text-slate-600 shadow-sm flex items-center gap-2">
              <span className="text-[#0D5C35] font-semibold">
                {activeStep <= 4
                  ? '02 / EMPLOYEE'
                  : activeStep <= 6
                  ? '03 / DISCOVERY'
                  : '04 / DIRECTIONS'}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 text-[11px]">
                {activeStep <= 4
                  ? 'Feed Populated'
                  : activeStep === 5
                  ? 'Search Query Filter'
                  : activeStep === 6
                  ? 'Today’s Menu Detail'
                  : 'Pedestrian Transit'}
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET STAGE: Focused Single-Screen Storytelling (< lg) */}
        <div className="block lg:hidden max-w-sm mx-auto">
          {/* Active Role Tag */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-wider uppercase text-slate-800">
                {mobileRoleTitle}
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-800 bg-[#E8F5EE] px-2 py-0.5 rounded border border-emerald-300 font-semibold">
              {currentStep.stepNumber} / 08
            </span>
          </div>

          {/* Primary Active Phone */}
          <div className="relative mx-auto w-[270px] aspect-[9/19.5] rounded-[40px] bg-slate-950 p-3 shadow-2xl ring-2 ring-emerald-500/40">
            {/* Notch */}
            <div className="w-16 h-3 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>

            {/* Viewport */}
            <div className="relative w-full h-[calc(100%-18px)] rounded-[28px] overflow-hidden bg-slate-900 border border-slate-800">
              <Image
                src={mobileActiveScreen}
                alt="Aahar Nearby Authentic Flutter Screen"
                fill
                priority
                sizes="270px"
                className="object-cover object-top"
              />

              {/* Climax Callout for Step 6 */}
              {activeStep === 6 && (
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 bg-slate-950/95 backdrop-blur-md p-2 rounded-lg border-2 border-emerald-400 shadow-2xl text-left z-20">
                  <div className="flex items-center justify-between pb-1 mb-1 border-b border-slate-800">
                    <span className="font-mono text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>MENU SYNCED</span>
                    </span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold">
                      ₹120
                    </span>
                  </div>
                  <div className="font-display text-xs font-bold text-white">
                    Special Paneer Thali
                  </div>
                  <div className="text-[9px] text-slate-300 mt-0.5 leading-snug">
                    Published by the owner moments earlier.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Supporting Connected Ecosystem Strip */}
          <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200/90 text-xs font-mono shadow-xs flex items-center justify-between">
            <span className="text-slate-500 text-[11px]">CONNECTED FLOW:</span>
            <span className="text-[#0D5C35] font-semibold text-[11px]">
              {isOwnerPrimary
                ? 'Owner → Ready for Hub Sync'
                : isBridgeActive
                ? '500m Geofence Syncing'
                : 'Synced from Owner Kitchen'}
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* STEP 7: MINIMAL EXTERNAL ROUTE GRAPHIC (DIRECTIONS CLIMAX)         */}
        {/* ------------------------------------------------------------------- */}
        {activeStep === 7 && (
          <div className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-md transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#168A4A]" />
                <span className="font-bold text-slate-800">
                  DETERMINISTIC PEDESTRIAN ROUTE
                </span>
              </div>
              <span className="text-[#0D5C35] font-semibold bg-[#E8F5EE] px-2 py-0.5 rounded border border-emerald-200">
                280m · 4 MIN WALK
              </span>
            </div>

            {/* Linear Waypoint Chain */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  START
                </div>
                <div className="font-bold text-slate-800 mt-0.5">Office Desk</div>
                <div className="text-[10px] text-slate-500">Tower C Lobby</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  STEP 01
                </div>
                <div className="font-bold text-slate-800 mt-0.5">Gate 3 Exit</div>
                <div className="text-[10px] text-slate-500">80m · 1 min</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  STEP 02
                </div>
                <div className="font-bold text-slate-800 mt-0.5">Skywalk</div>
                <div className="text-[10px] text-slate-500">Cross Main Rd</div>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="text-[10px] text-emerald-700 uppercase font-semibold">
                  DESTINATION
                </div>
                <div className="font-bold text-emerald-950 mt-0.5">
                  Annapurna Mess
                </div>
                <div className="text-[10px] text-emerald-700 font-semibold">
                  Hot Thali Ready
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* 3. CONTEXTUAL NARRATIVE & SCRUBBER BAR                                */}
      {/* ===================================================================== */}
      <div className="relative z-10 px-5 sm:px-10 py-5 sm:py-6 border-t border-slate-200/80 bg-slate-50/80">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Editorial Step Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
              <span className="font-bold text-[#0D5C35]">
                {currentStep.stepNumber} // {currentStep.chapter}
              </span>
              <span className="text-slate-300">·</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 text-[10px] font-semibold tracking-wider uppercase">
                {currentStep.badge}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              {currentStep.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-2xl">
              {currentStep.description}
            </p>
          </div>

          {/* Step Scrubber & Stepper Buttons */}
          <div className="flex items-center gap-4 self-end md:self-center">
            {/* Step Dots */}
            <div
              className="flex items-center gap-1.5"
              aria-label="Story progress steps"
            >
              {STORY_STEPS.map((step) => {
                const isCurrent = step.id === activeStep;
                const isPast = step.id < activeStep;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => jumpToStep(step.id)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      isCurrent
                        ? 'w-6 bg-[#168A4A]'
                        : isPast
                        ? 'w-2 bg-emerald-300 hover:bg-emerald-400'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Step ${step.stepNumber}: ${step.title}`}
                    aria-label={`Jump to Step ${step.stepNumber}`}
                  />
                );
              })}
            </div>

            {/* Previous / Next Stepper */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevStep}
                disabled={activeStep === 0}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-sm"
                aria-label="Previous Step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={activeStep === STORY_STEPS.length - 1}
                className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-sm"
                aria-label="Next Step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
