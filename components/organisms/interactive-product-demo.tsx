'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Heart,
  Store,
  ShieldCheck,
  Clock,
  Sparkles,
  Check,
  Navigation,
  ArrowLeft,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  Plus,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  User,
  Utensils,
  Leaf,
  Compass,
  FileText,
  CheckCheck,
  Building2,
  X,
  Share2,
  PhoneCall,
  Flame,
} from 'lucide-react';

// =============================================================================
// DATA CONTRACTS & STATE DEFINITIONS
// =============================================================================

export interface JourneyState {
  menuPublished: boolean;
  newDish: {
    name: string;
    price: number;
    category: string;
    dietary: string;
    description: string;
  };
  outletOpen: boolean;
  outletVerified: boolean;
  searchQuery: string;
  selectedCategory: string;
  isFavorite: boolean;
}

const INITIAL_JOURNEY_STATE: JourneyState = {
  menuPublished: false,
  newDish: {
    name: 'Special Paneer Thali',
    price: 120,
    category: 'Lunch',
    dietary: 'Veg',
    description: "Today's special lunch thali with fresh paneer, 3 rotis, dal tadka, jeera rice & gulab jamun.",
  },
  outletOpen: true,
  outletVerified: true,
  searchQuery: '',
  selectedCategory: 'All',
  isFavorite: false,
};

// =============================================================================
// STEP SPECIFICATIONS (8 AUTHENTIC JOURNEY STEPS)
// =============================================================================

interface StepInfo {
  id: number;
  role: 'MESS OWNER' | 'EMPLOYEE / DINER';
  roleColor: string;
  stepNumber: string;
  navLabel: string;
  title: string;
  subtitle: string;
  narrative: string;
  actionGuidance: string;
  flowNode: string;
}

const JOURNEY_STEPS: StepInfo[] = [
  {
    id: 0,
    role: 'MESS OWNER',
    roleColor: '#0D5C35',
    stepNumber: '01',
    navLabel: '01 Owner',
    title: 'Owner Opens Aahar',
    subtitle: 'Morning kitchen operations & catalog prep',
    narrative:
      'The mess owner opens Aahar at 10:30 AM to inspect active kitchen operations and prepare the daily rotational lunch menu before peak office order hours.',
    actionGuidance: 'Tap "+ Add Dish" on the phone to create today\'s lunch special.',
    flowNode: 'OWNER',
  },
  {
    id: 1,
    role: 'MESS OWNER',
    roleColor: '#0D5C35',
    stepNumber: '02',
    navLabel: '02 Add Menu',
    title: "Add Today's Special",
    subtitle: 'Publishing rotational thali item',
    narrative:
      'The owner inputs the "Special Paneer Thali" at ₹120. Minimal mobile fields eliminate tedious e-commerce catalog forms during busy morning kitchen prep.',
    actionGuidance: 'Click "Add to Live Menu" inside the phone to commit the dish.',
    flowNode: 'MENU',
  },
  {
    id: 2,
    role: 'MESS OWNER',
    roleColor: '#0D5C35',
    stepNumber: '03',
    navLabel: '03 Publish',
    title: 'Publish Menu',
    subtitle: 'Instant geofenced propagation',
    narrative:
      'The special is instantly committed to the live inventory. A geofenced broadcast prepares the item for hungry office workers within 500 meters.',
    actionGuidance: 'Click "Switch to Diner Experience" to see how nearby employees discover it.',
    flowNode: 'PUBLISHED',
  },
  {
    id: 3,
    role: 'EMPLOYEE / DINER',
    roleColor: '#168A4A',
    stepNumber: '04',
    navLabel: '04 Discover',
    title: 'Employee Opens Aahar',
    subtitle: 'Deterministic 350m lunch discovery',
    narrative:
      'At 1:00 PM, an office worker at DLF Cyber Park opens Aahar. The spatial engine locks to their immediate 350m geofence, surfacing currently open kitchens.',
    actionGuidance: 'Tap the search bar or click "Search for Paneer" to filter today\'s meals.',
    flowNode: 'EMPLOYEE',
  },
  {
    id: 4,
    role: 'EMPLOYEE / DINER',
    roleColor: '#168A4A',
    stepNumber: '05',
    navLabel: '05 Search',
    title: 'Search for Lunch',
    subtitle: "Filtering for today's paneer special",
    narrative:
      'Entering "Paneer" instantly queries the local catalog, elevating Annapurna Mess because its newly published menu contains fresh paneer.',
    actionGuidance: 'Tap "Annapurna Pure Veg Mess" to inspect today\'s full menu.',
    flowNode: 'DISCOVERY',
  },
  {
    id: 5,
    role: 'EMPLOYEE / DINER',
    roleColor: '#168A4A',
    stepNumber: '06',
    navLabel: '06 Outlet',
    title: 'Discover the Outlet',
    subtitle: 'Inspecting mess profile & hygiene verification',
    narrative:
      'The employee opens Annapurna Mess. They verify it is open, certified with FSSAI license #10023045678901, and located only 280m from their office desk.',
    actionGuidance: 'Tap "Today\'s Menu" to view the live meal list.',
    flowNode: 'OUTLET',
  },
  {
    id: 6,
    role: 'EMPLOYEE / DINER',
    roleColor: '#168A4A',
    stepNumber: '07',
    navLabel: '07 Menu',
    title: 'See the Updated Menu',
    subtitle: 'The ecosystem loop completes in real time',
    narrative:
      'The exact Special Paneer Thali entered by the owner in Step 02 appears front and center for ₹120. Real-time menu intelligence without stale catalog data.',
    actionGuidance: 'Tap "Get Walking Directions" to navigate to the mess for lunch.',
    flowNode: 'MENU SYNC',
  },
  {
    id: 7,
    role: 'EMPLOYEE / DINER',
    roleColor: '#168A4A',
    stepNumber: '08',
    navLabel: '08 Directions',
    title: 'Plan the Lunch',
    subtitle: 'Turn-by-turn walking route through Cyber Park',
    narrative:
      'With their meal confirmed, the employee follows the 4-minute walking route to pick up their thali neatly within their 45-minute lunch break.',
    actionGuidance: 'Journey complete! Replay the flow or explore Platform Governance below.',
    flowNode: 'DIRECTIONS',
  },
];

// =============================================================================
// SUB-COMPONENT: AUTHENTIC SMARTPHONE HARDWARE FRAME
// =============================================================================

function MobilePhoneFrame({
  children,
  role = 'EMPLOYEE',
}: {
  children: React.ReactNode;
  role?: 'OWNER' | 'EMPLOYEE' | 'ADMIN';
}) {
  return (
    <div className="relative mx-auto w-full max-w-[370px] sm:max-w-[380px] h-[680px] sm:h-[720px] rounded-[44px] bg-[#121815] p-3 shadow-2xl border-[3.5px] border-[#222E28] ring-1 ring-white/10 flex flex-col justify-between overflow-hidden select-none">
      {/* Outer Phone Bezel Gloss */}
      <div className="absolute inset-0 rounded-[40px] pointer-events-none border border-white/10" />

      {/* Dynamic Island Notch & Speaker Pill */}
      <div className="relative z-30 w-full flex items-center justify-between px-6 pt-1 pb-1">
        <span className="text-[11px] font-mono font-semibold text-white/90">
          12:45
        </span>
        <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-2 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-[#168A4A]/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        </div>
        <div className="flex items-center gap-1.5 text-white/80">
          <span className="text-[10px] font-mono font-bold">5G</span>
          <div className="w-4 h-2 rounded-[2px] border border-white/60 p-[1px] flex items-center">
            <div className="w-full h-full bg-[#168A4A] rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Screen Viewport with Authentic Aahar Colors & Typography */}
      <div className="relative z-20 w-full flex-1 rounded-[32px] overflow-hidden bg-[#F7F8F6] border border-[#E7EBE8] flex flex-col">
        {children}
      </div>

      {/* Native Bottom Home Gesture Bar */}
      <div className="relative z-30 w-full py-1.5 flex items-center justify-center">
        <div className="w-28 h-1 bg-white/40 rounded-full" />
      </div>
    </div>
  );
}

// =============================================================================
// MAIN COMPONENT: GUIDED PRODUCT JOURNEY
// =============================================================================

export function GuidedProductJourney() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [state, setState] = useState<JourneyState>(INITIAL_JOURNEY_STATE);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const step = JOURNEY_STEPS[currentStep];

  // Autoplay loop (1.8s per step)
  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = setTimeout(() => {
        setCurrentStep((prev) => {
          if (prev < JOURNEY_STEPS.length - 1) {
            // Apply corresponding state transitions automatically
            if (prev === 1) {
              setState((s) => ({ ...s, menuPublished: true }));
            }
            if (prev === 3) {
              setState((s) => ({ ...s, searchQuery: 'Paneer' }));
            }
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0; // Loop or pause
          }
        });
      }, 2200);
    }
    return () => {
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };
  }, [isPlaying, currentStep]);

  const goToStep = (target: number) => {
    setIsPlaying(false);
    if (target < 0) target = 0;
    if (target >= JOURNEY_STEPS.length) target = JOURNEY_STEPS.length - 1;

    // Apply smart state forward/back
    if (target >= 2) {
      setState((s) => ({ ...s, menuPublished: true }));
    } else {
      setState((s) => ({ ...s, menuPublished: false }));
    }

    if (target >= 4) {
      setState((s) => ({ ...s, searchQuery: 'Paneer' }));
    } else {
      setState((s) => ({ ...s, searchQuery: '' }));
    }

    setCurrentStep(target);
  };

  const handleNext = () => goToStep(currentStep + 1);
  const handlePrev = () => goToStep(currentStep - 1);

  const handlePublishFromStep1 = () => {
    setState((s) => ({ ...s, menuPublished: true }));
    goToStep(2);
  };

  const handleSearchSubmit = (q: string) => {
    setState((s) => ({ ...s, searchQuery: q }));
    goToStep(4);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setState(INITIAL_JOURNEY_STATE);
    setCurrentStep(0);
  };

  return (
    <div className="w-full flex flex-col">
      {/* --------------------------------------------------------------------- */}
      {/* COMPACT ECOSYSTEM EXPLANATION                                         */}
      {/* --------------------------------------------------------------------- */}
      <div className="max-w-4xl mx-auto w-full mb-10 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 bg-[#F2F5F3] rounded-2xl border border-[#E0E7E2]">
          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8F5EE] border border-emerald-200 flex items-center justify-center text-[#168A4A]">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#0D5C35] block">
                ROLE 01
              </span>
              <span className="font-display text-xs font-bold text-[#18221D]">
                MESS OWNER · Menu Operations
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8F5EE] border border-emerald-200 flex items-center justify-center text-[#168A4A]">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#168A4A] block">
                ROLE 02
              </span>
              <span className="font-display text-xs font-bold text-[#18221D]">
                EMPLOYEE · Food Discovery
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8] shadow-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-blue-700 block">
                ROLE 03
              </span>
              <span className="font-display text-xs font-bold text-[#18221D]">
                ADMIN · Governance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* HORIZONTAL STEP NAVIGATION (DESKTOP) & PROGRESS PILL                   */}
      {/* --------------------------------------------------------------------- */}
      <div className="max-w-5xl mx-auto w-full mb-8">
        {/* Step Tabs Row */}
        <div className="hidden lg:grid grid-cols-8 gap-1.5 p-1.5 bg-[#F2F5F3] rounded-xl border border-[#E0E7E2]">
          {JOURNEY_STEPS.map((s, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToStep(idx)}
                className={`py-2 px-1 text-center rounded-lg transition-all text-xs font-mono font-medium flex flex-col items-center gap-0.5 ${
                  isActive
                    ? 'bg-[#168A4A] text-white shadow-sm font-semibold'
                    : isCompleted
                    ? 'bg-white text-[#0D5C35] hover:bg-[#E8F5EE]'
                    : 'text-[#6C7970] hover:bg-white/80'
                }`}
              >
                <span>{s.navLabel}</span>
                {isCompleted && (
                  <Check className="w-2.5 h-2.5 text-[#168A4A]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Step Badge */}
        <div className="lg:hidden flex items-center justify-between px-3 py-2 bg-[#F2F5F3] rounded-xl border border-[#E0E7E2]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#0D5C35] bg-white px-2 py-0.5 rounded border border-[#E7EBE8]">
              STEP {step.stepNumber} / 08
            </span>
            <span className="text-xs font-semibold text-[#18221D]">
              {step.title}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#6C7970]">
            {step.role}
          </span>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}
      {/* 2-COLUMN MAIN EXPERIENCE STAGE                                        */}
      {/* --------------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Visual Storytelling & Flow Connector (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Active Role & Step Header */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border inline-block"
              style={{
                color: step.roleColor,
                backgroundColor: step.role === 'MESS OWNER' ? '#E8F5EE' : '#F0F9F4',
                borderColor: '#C6E5D3',
              }}
            >
              {step.stepNumber} // {step.role}
            </span>
            {step.id === 6 && (
              <span className="font-mono text-[10px] text-[#F47B20] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded font-bold animate-pulse">
                ★ KEY SYNC MOMENT
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#18221D] leading-tight">
            {step.title}
          </h3>

          <p className="mt-1 font-display text-sm font-semibold text-[#0D5C35]">
            {step.subtitle}
          </p>

          <p className="mt-4 text-sm text-[#4E5C53] leading-relaxed">
            {step.narrative}
          </p>

          {/* Interactive Guidance Box */}
          <div className="mt-5 p-3.5 w-full rounded-xl bg-white border border-[#DDE4DF] shadow-xs flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#E8F5EE] border border-emerald-200 flex items-center justify-center text-[#168A4A] shrink-0 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-mono font-bold text-[#0D5C35] uppercase block mb-0.5">
                TRY THE ACTION
              </span>
              <p className="text-xs text-[#18221D] leading-snug">
                {step.actionGuidance}
              </p>
            </div>
          </div>

          {/* Step Flow Visual Track */}
          <div className="mt-6 pt-5 border-t border-[#E7EBE8] w-full">
            <span className="font-mono text-[10px] uppercase text-[#6C7970] block mb-2 font-bold">
              ECOSYSTEM PIPELINE STATUS
            </span>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
              {[
                'OWNER',
                'MENU',
                'PUBLISHED',
                'EMPLOYEE',
                'DISCOVERY',
                'OUTLET',
                'MENU SYNC',
                'DIRECTIONS',
              ].map((node, i) => {
                const isCurrent = i === currentStep;
                const isPast = i < currentStep;
                return (
                  <React.Fragment key={node}>
                    <span
                      className={`px-1.5 py-0.5 rounded transition-colors ${
                        isCurrent
                          ? 'bg-[#168A4A] text-white font-bold'
                          : isPast
                          ? 'bg-[#E8F5EE] text-[#0D5C35]'
                          : 'bg-[#F2F5F3] text-[#8C9890]'
                      }`}
                    >
                      {node}
                    </span>
                    {i < 7 && <span className="text-[#C2CBC5]">→</span>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Primary Controls Row: Autoplay & Manual Navigation */}
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
              disabled={currentStep === JOURNEY_STEPS.length - 1}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm transition-all ${
                currentStep === JOURNEY_STEPS.length - 1
                  ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500'
                  : 'bg-[#168A4A] hover:bg-[#0D5C35] text-white'
              }`}
            >
              <span>Next Step</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Autoplay / Replay Controller */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-2 rounded-xl bg-white border border-[#CCD6D0] hover:bg-slate-50 text-xs font-mono font-semibold text-[#18221D] flex items-center gap-1.5 transition-colors"
                title={isPlaying ? 'Pause product flow' : 'Play product flow'}
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
                onClick={handleReset}
                className="p-2 rounded-xl bg-white border border-[#CCD6D0] hover:bg-slate-50 text-[#6C7970] transition-colors"
                title="Reset journey"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: ONE LARGE AUTHENTIC AAHAR MOBILE PHONE (7 Cols) */}
        <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
          <MobilePhoneFrame
            role={step.role === 'MESS OWNER' ? 'OWNER' : 'EMPLOYEE'}
          >
            {/* Step-specific Mobile App View */}
            {currentStep === 0 && (
              <PhoneOwnerDashboardView
                state={state}
                onAddDishClick={() => goToStep(1)}
              />
            )}

            {currentStep === 1 && (
              <PhoneAddMenuItemFormView
                state={state}
                onSubmit={handlePublishFromStep1}
                onBack={() => goToStep(0)}
              />
            )}

            {currentStep === 2 && (
              <PhoneOwnerPublishedView
                state={state}
                onSwitchToDiner={() => goToStep(3)}
              />
            )}

            {currentStep === 3 && (
              <PhoneEmployeeHomeView
                state={state}
                onSearchFocus={() => goToStep(4)}
                onOutletClick={() => goToStep(5)}
              />
            )}

            {currentStep === 4 && (
              <PhoneEmployeeSearchView
                state={state}
                onClearSearch={() => goToStep(3)}
                onOutletClick={() => goToStep(5)}
              />
            )}

            {currentStep === 5 && (
              <PhoneOutletDetailView
                state={state}
                activeTab="about"
                onTabSelect={(t) => {
                  if (t === 'menu') goToStep(6);
                  if (t === 'directions') goToStep(7);
                }}
                onBack={() => goToStep(4)}
              />
            )}

            {currentStep === 6 && (
              <PhoneOutletDetailView
                state={state}
                activeTab="menu"
                onTabSelect={(t) => {
                  if (t === 'directions') goToStep(7);
                }}
                onBack={() => goToStep(5)}
                onGoToDirections={() => goToStep(7)}
              />
            )}

            {currentStep === 7 && (
              <PhoneOutletDetailView
                state={state}
                activeTab="directions"
                onTabSelect={(t) => {
                  if (t === 'menu') goToStep(6);
                }}
                onBack={() => goToStep(6)}
                onReplay={handleReset}
              />
            )}
          </MobilePhoneFrame>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 01: OWNER DASHBOARD (Step 01 - Authentic Flutter UI)
// =============================================================================

function PhoneOwnerDashboardView({
  state,
  onAddDishClick,
}: {
  state: JourneyState;
  onAddDishClick: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      {/* Aahar Partner Header */}
      <div className="px-4 py-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#6C7970] block">
            PARTNER DASHBOARD
          </span>
          <h4 className="font-display text-sm font-bold text-[#18221D]">
            Annapurna Pure Veg Mess
          </h4>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E8F5EE] border border-emerald-200 text-[#0D5C35] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A4A] animate-pulse" />
          <span>OPEN</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-4">
        {/* Morning Operational Prompt */}
        <div className="p-3.5 rounded-xl bg-white border border-[#DDE4DF] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0D5C35]">
              MORNING FOOD PREP
            </span>
            <span className="text-[10px] font-mono text-[#6C7970]">
              Hub: Cyber Park
            </span>
          </div>
          <p className="text-xs text-[#4E5C53] leading-relaxed">
            Update today&apos;s special thali items before the 11:30 AM lunch discovery rush.
          </p>
        </div>

        {/* Quick Actions Row */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] block mb-2 font-bold">
            QUICK ACTIONS
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={onAddDishClick}
              className="p-3 rounded-xl bg-[#168A4A] hover:bg-[#0D5C35] text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all ring-2 ring-[#168A4A]/20"
            >
              <Plus className="w-4 h-4" />
              <span>+ Add Dish</span>
            </button>

            <button
              type="button"
              className="p-3 rounded-xl bg-white border border-[#CCD6D0] hover:bg-[#F2F5F3] text-[#18221D] font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
              <span>Scan Board</span>
            </button>
          </div>
        </div>

        {/* Active Menu Inventory Preview */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] font-bold">
              TODAY&apos;S LIVE MENU (2 ACTIVE)
            </span>
            <span className="text-[10px] font-mono text-[#168A4A]">FSSAI #10023045678901</span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </div>
                  <span className="font-display text-xs font-bold text-[#18221D]">
                    Executive Dal Khichdi
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#6C7970] mt-0.5 block">
                  ₹90 · Regular Daily
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E8F5EE] text-[#0D5C35] font-semibold">
                In Stock
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </div>
                  <span className="font-display text-xs font-bold text-[#18221D]">
                    Deluxe Veg Thali
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#6C7970] mt-0.5 block">
                  ₹140 · Regular Daily
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E8F5EE] text-[#0D5C35] font-semibold">
                In Stock
              </span>
            </div>
          </div>
        </div>

        {/* Highlighted Step Action Trigger */}
        <button
          type="button"
          onClick={onAddDishClick}
          className="mt-auto w-full py-3 rounded-xl bg-[#0D5C35] hover:bg-[#073D22] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
        >
          <span>Tap to Add Special Paneer Thali</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 02: ADD MENU ITEM FORM (Step 02 - Authentic Flutter Form)
// =============================================================================

function PhoneAddMenuItemFormView({
  state,
  onSubmit,
  onBack,
}: {
  state: JourneyState;
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-y-auto">
      {/* Mobile Form App Bar */}
      <div className="px-4 py-3 border-b border-[#E7EBE8] flex items-center justify-between bg-white sticky top-0 z-10">
        <button
          type="button"
          onClick={onBack}
          className="p-1 -ml-1 text-[#18221D] hover:bg-[#F2F5F3] rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h4 className="font-display text-xs font-bold text-[#18221D]">
          Add Menu Item
        </h4>
        <span className="w-4" />
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3.5">
        {/* Dish Title Field */}
        <div>
          <label className="font-mono text-[10px] uppercase text-[#6C7970] block mb-1 font-bold">
            DISH NAME
          </label>
          <div className="p-2.5 rounded-xl border-2 border-[#168A4A] bg-[#F9FBF9] text-xs font-bold text-[#18221D] flex items-center justify-between">
            <span>Special Paneer Thali</span>
            <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
          </div>
        </div>

        {/* Price & Category Fields */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="font-mono text-[10px] uppercase text-[#6C7970] block mb-1 font-bold">
              PRICE (₹)
            </label>
            <div className="p-2.5 rounded-xl border border-[#CCD6D0] bg-white text-xs font-mono font-bold text-[#18221D]">
              ₹ 120
            </div>
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase text-[#6C7970] block mb-1 font-bold">
              CATEGORY
            </label>
            <div className="p-2.5 rounded-xl border border-[#CCD6D0] bg-white text-xs font-semibold text-[#18221D]">
              Lunch Special
            </div>
          </div>
        </div>

        {/* Dietary Tag Selector */}
        <div>
          <label className="font-mono text-[10px] uppercase text-[#6C7970] block mb-1 font-bold">
            DIETARY SPECIFICATION
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-xl bg-[#E8F5EE] border-2 border-[#168A4A] flex items-center gap-2 text-xs font-bold text-[#0D5C35]">
              <div className="w-3 h-3 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <span>100% Pure Veg</span>
            </div>
            <div className="p-2 rounded-xl bg-[#F7F8F6] border border-[#CCD6D0] opacity-50 flex items-center gap-2 text-xs text-[#6C7970]">
              <div className="w-3 h-3 rounded-[2px] border border-red-600 p-[1px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
              </div>
              <span>Non-Veg</span>
            </div>
          </div>
        </div>

        {/* Description Field */}
        <div>
          <label className="font-mono text-[10px] uppercase text-[#6C7970] block mb-1 font-bold">
            TODAY&apos;S DESCRIPTION
          </label>
          <div className="p-2.5 rounded-xl border border-[#CCD6D0] bg-[#F7F8F6] text-[11px] text-[#4E5C53] leading-relaxed">
            Fresh paneer butter masala, 3 butter tawa rotis, dal tadka, jeera rice &amp; gulab jamun.
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-auto pt-3">
          <button
            type="button"
            onClick={onSubmit}
            className="w-full py-3 rounded-xl bg-[#168A4A] hover:bg-[#0D5C35] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all ring-2 ring-[#168A4A]/20"
          >
            <span>Add to Live Menu →</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 03: OWNER PUBLISHED MENU (Step 03 - Live Inventory Confirmation)
// =============================================================================

function PhoneOwnerPublishedView({
  state,
  onSwitchToDiner,
}: {
  state: JourneyState;
  onSwitchToDiner: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F7F8F6] overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[#6C7970] block">
            PARTNER DASHBOARD
          </span>
          <h4 className="font-display text-sm font-bold text-[#18221D]">
            Annapurna Pure Veg Mess
          </h4>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E8F5EE] border border-emerald-200 text-[#0D5C35] text-[10px] font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#168A4A]" />
          <span>OPEN</span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-4">
        {/* Aahar-style Success Banner */}
        <div className="p-3.5 rounded-xl bg-[#E8F5EE] border border-emerald-300 shadow-xs flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#168A4A] flex items-center justify-center text-white shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-[10px] font-bold text-[#0D5C35] uppercase block">
              MENU PUBLISHED SUCCESSFULLY
            </span>
            <p className="text-xs text-[#0D5C35] leading-snug">
              Special Paneer Thali is live in Cyber Park Hub catalog.
            </p>
          </div>
        </div>

        {/* Updated Today's Live Menu */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] block mb-2 font-bold">
            TODAY&apos;S LIVE MENU (3 ITEMS)
          </span>

          <div className="flex flex-col gap-2">
            {/* Newly Added Special Item */}
            <div className="p-3 rounded-xl bg-white border-2 border-[#168A4A] shadow-xs flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </div>
                  <span className="font-display text-xs font-bold text-[#18221D]">
                    Special Paneer Thali
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-orange-100 text-[#F47B20] font-bold">
                    NEW
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#168A4A] mt-0.5 block">
                  ₹120 · Lunch Special
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#E8F5EE] text-[#0D5C35] font-bold">
                In Stock
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between opacity-80">
              <div>
                <span className="font-display text-xs font-semibold text-[#18221D]">
                  Executive Dal Khichdi
                </span>
                <span className="text-[10px] font-mono text-[#6C7970] block">
                  ₹90
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#6C7970]">Active</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between opacity-80">
              <div>
                <span className="font-display text-xs font-semibold text-[#18221D]">
                  Deluxe Veg Thali
                </span>
                <span className="text-[10px] font-mono text-[#6C7970] block">
                  ₹140
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#6C7970]">Active</span>
            </div>
          </div>
        </div>

        {/* Transition to Diner Experience Trigger */}
        <div className="mt-auto">
          <button
            type="button"
            onClick={onSwitchToDiner}
            className="w-full py-3 rounded-xl bg-[#0D5C35] hover:bg-[#073D22] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Proceed to Diner Experience →</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 04: EMPLOYEE HOME FEED (Step 04 - Authentic Discovery Feed)
// =============================================================================

function PhoneEmployeeHomeView({
  state,
  onSearchFocus,
  onOutletClick,
}: {
  state: JourneyState;
  onSearchFocus: () => void;
  onOutletClick: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F7F8F6] overflow-y-auto">
      {/* Authentic Aahar Location Header */}
      <div className="px-4 pt-3 pb-2 bg-white border-b border-[#E7EBE8]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#E8F5EE] border border-emerald-200 flex items-center justify-center text-[#168A4A]">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-xs font-bold text-[#18221D]">
                  Cyber Park, Sector 33
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#0D5C35] font-semibold block">
                350m radius · Office Hub
              </span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#F2F5F3] flex items-center justify-center text-[#6C7970]">
            <Heart className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Search Bar (Clickable trigger for Step 05) */}
        <div
          onClick={onSearchFocus}
          className="mt-3 p-2.5 rounded-xl border border-[#CCD6D0] bg-[#F7F8F6] flex items-center justify-between cursor-pointer hover:border-[#168A4A] transition-colors"
        >
          <div className="flex items-center gap-2 text-xs text-[#6C7970]">
            <Search className="w-3.5 h-3.5 text-[#168A4A]" />
            <span>Search thali, paneer, mess...</span>
          </div>
          <span className="text-[10px] font-mono text-[#168A4A] font-semibold bg-[#E8F5EE] px-1.5 py-0.5 rounded">
            TAP
          </span>
        </div>

        {/* Category Pills Carousel */}
        <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 no-scrollbar">
          {['All', 'Pure Veg', 'Thali', 'North Indian', 'South Indian'].map(
            (cat, i) => (
              <span
                key={cat}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium whitespace-nowrap ${
                  i === 0
                    ? 'bg-[#168A4A] text-white font-bold'
                    : 'bg-[#F2F5F3] text-[#4E5C53]'
                }`}
              >
                {cat}
              </span>
            )
          )}
        </div>
      </div>

      {/* Discovery Feed Outlets */}
      <div className="p-3.5 flex-1 flex flex-col gap-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] font-bold">
          NEARBY OPEN OUTLETS (350M)
        </span>

        {/* Annapurna Mess Outlet Card */}
        <div
          onClick={onOutletClick}
          className="p-3.5 rounded-2xl bg-white border-2 border-[#168A4A] shadow-xs cursor-pointer hover:shadow-md transition-all group"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="font-display text-sm font-bold text-[#18221D] group-hover:text-[#168A4A] transition-colors">
                  Annapurna Pure Veg Mess
                </h5>
                <ShieldCheck className="w-3.5 h-3.5 text-[#168A4A]" />
              </div>
              <span className="text-[10px] text-[#6C7970] block mt-0.5">
                North Indian Thali &amp; Executive Meals
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E8F5EE] text-[#0D5C35]">
              OPEN NOW
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-3 text-[11px] font-mono text-[#4E5C53]">
            <span className="font-bold text-[#18221D] flex items-center gap-1">
              <span className="text-amber-500">★</span> 4.8
            </span>
            <span>·</span>
            <span>280m · 4 min walk</span>
            <span>·</span>
            <span className="text-[#0D5C35] font-semibold">Veg Only</span>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#F2F5F3] flex items-center justify-between text-xs">
            <span className="text-[#0D5C35] font-mono text-[11px] font-semibold">
              Today: Specials Updated
            </span>
            <span className="text-[#168A4A] font-mono text-[11px] font-bold flex items-center gap-0.5">
              <span>View Menu</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Secondary Outlet Preview */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#E7EBE8] opacity-75">
          <div className="flex items-start justify-between">
            <div>
              <h5 className="font-display text-xs font-bold text-[#18221D]">
                Sri Sai Tiffin Center
              </h5>
              <span className="text-[10px] text-[#6C7970] block mt-0.5">
                South Indian Meals &amp; Quick Combos
              </span>
            </div>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#E8F5EE] text-[#0D5C35]">
              OPEN
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-[#6C7970]">
            <span>★ 4.6</span>
            <span>·</span>
            <span>340m · 5 min walk</span>
          </div>
        </div>
      </div>

      {/* Authentic Aahar Bottom Navigation Bar */}
      <div className="px-4 py-2 bg-white border-t border-[#E7EBE8] grid grid-cols-4 gap-1 text-center">
        <div className="flex flex-col items-center gap-0.5 text-[#168A4A]">
          <Compass className="w-4 h-4" />
          <span className="text-[9px] font-mono font-bold">Discover</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#6C7970]">
          <Heart className="w-4 h-4" />
          <span className="text-[9px] font-mono">Favorites</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#6C7970]">
          <Utensils className="w-4 h-4" />
          <span className="text-[9px] font-mono">Orders</span>
        </div>
        <div className="flex flex-col items-center gap-0.5 text-[#6C7970]">
          <User className="w-4 h-4" />
          <span className="text-[9px] font-mono">Profile</span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 05: SEARCH FOR LUNCH (Step 05 - Query "Paneer")
// =============================================================================

function PhoneEmployeeSearchView({
  state,
  onClearSearch,
  onOutletClick,
}: {
  state: JourneyState;
  onClearSearch: () => void;
  onOutletClick: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F7F8F6] overflow-y-auto">
      {/* Search Header with "Paneer" query filled */}
      <div className="px-4 py-3 bg-white border-b border-[#E7EBE8]">
        <div className="p-2.5 rounded-xl border-2 border-[#168A4A] bg-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#18221D]">
            <Search className="w-4 h-4 text-[#168A4A]" />
            <span>Paneer</span>
          </div>
          <button
            type="button"
            onClick={onClearSearch}
            className="p-1 text-[#6C7970] hover:text-[#18221D]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-2.5">
          <span className="font-mono text-[10px] text-[#0D5C35] font-semibold">
            1 Outlet with matching daily special
          </span>
          <span className="font-mono text-[10px] text-[#6C7970]">Within 350m</span>
        </div>
      </div>

      <div className="p-3.5 flex-1 flex flex-col gap-3">
        {/* Filtered Result Elevating the Updated Outlet */}
        <div
          onClick={onOutletClick}
          className="p-3.5 rounded-2xl bg-white border-2 border-[#168A4A] shadow-md cursor-pointer hover:shadow-lg transition-all group"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h5 className="font-display text-sm font-bold text-[#18221D] group-hover:text-[#168A4A]">
                  Annapurna Pure Veg Mess
                </h5>
                <ShieldCheck className="w-3.5 h-3.5 text-[#168A4A]" />
              </div>
              <span className="text-[10px] text-[#6C7970] block mt-0.5">
                280m · 4 min walk · Cyber Park Hub
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E8F5EE] text-[#0D5C35]">
              OPEN
            </span>
          </div>

          {/* Highlighted Match Badge */}
          <div className="mt-3 p-2.5 rounded-xl bg-[#F0F9F4] border border-[#C6E5D3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
              <span className="font-display text-xs font-bold text-[#0D5C35]">
                Special Paneer Thali
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-[#18221D]">
              ₹120
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#6C7970]">
            <span>Added 5 mins ago by kitchen</span>
            <span className="text-[#168A4A] font-bold flex items-center gap-0.5">
              <span>Open Outlet</span>
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 06, 07, 08: OUTLET DETAIL SCREEN (Steps 06, 07, 08)
// =============================================================================

function PhoneOutletDetailView({
  state,
  activeTab = 'about',
  onTabSelect,
  onBack,
  onGoToDirections,
  onReplay,
}: {
  state: JourneyState;
  activeTab: 'about' | 'menu' | 'directions';
  onTabSelect: (tab: 'about' | 'menu' | 'directions') => void;
  onBack: () => void;
  onGoToDirections?: () => void;
  onReplay?: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#F7F8F6] overflow-y-auto">
      {/* App Bar */}
      <div className="px-4 py-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-10">
        <button
          type="button"
          onClick={onBack}
          className="p-1 -ml-1 text-[#18221D] hover:bg-[#F2F5F3] rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h4 className="font-display text-xs font-bold text-[#18221D] truncate max-w-[200px]">
          Annapurna Pure Veg Mess
        </h4>
        <div className="flex items-center gap-1.5 text-[#6C7970]">
          <Share2 className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Outlet Hero Banner */}
      <div className="p-4 bg-white border-b border-[#E7EBE8]">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-display text-base font-bold text-[#18221D]">
                Annapurna Pure Veg Mess
              </h3>
            </div>
            <p className="text-xs text-[#6C7970] mt-0.5">
              Near DLF Cyber Park Gate 3, Sector 24
            </p>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E8F5EE] text-[#0D5C35]">
            OPEN NOW
          </span>
        </div>

        {/* FSSAI Verified Badge & Metrics */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] font-mono">
          <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#E8F5EE] text-[#0D5C35] font-semibold border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FSSAI Verified Partner</span>
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-[#4E5C53]">
            280m · 4 min walk
          </span>
          <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold border border-amber-200">
            ★ 4.8 (142)
          </span>
        </div>

        {/* Tabs Bar: Menu, Directions, About */}
        <div className="mt-4 grid grid-cols-3 gap-1 p-1 bg-[#F2F5F3] rounded-xl border border-[#E7EBE8]">
          <button
            type="button"
            onClick={() => onTabSelect('menu')}
            className={`py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeTab === 'menu'
                ? 'bg-[#168A4A] text-white shadow-xs'
                : 'text-[#4E5C53] hover:bg-white'
            }`}
          >
            Today&apos;s Menu
          </button>
          <button
            type="button"
            onClick={() => onTabSelect('directions')}
            className={`py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeTab === 'directions'
                ? 'bg-[#168A4A] text-white shadow-xs'
                : 'text-[#4E5C53] hover:bg-white'
            }`}
          >
            Directions
          </button>
          <button
            type="button"
            onClick={() => onTabSelect('about')}
            className={`py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
              activeTab === 'about'
                ? 'bg-[#168A4A] text-white shadow-xs'
                : 'text-[#4E5C53] hover:bg-white'
            }`}
          >
            Overview
          </button>
        </div>
      </div>

      {/* TAB CONTENT: ABOUT / OVERVIEW (Step 06) */}
      {activeTab === 'about' && (
        <div className="p-4 flex-1 flex flex-col gap-3">
          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0D5C35] block mb-1">
              HYGIENE &amp; VERIFICATION
            </span>
            <div className="flex items-center justify-between text-xs text-[#18221D] font-mono">
              <span>FSSAI License:</span>
              <span className="font-bold">#10023045678901</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#18221D] font-mono mt-1">
              <span>Inspection Rating:</span>
              <span className="font-bold text-[#168A4A]">Grade A+ (Verified)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#6C7970] block mb-1">
              OPERATING TIMINGS
            </span>
            <div className="flex items-center justify-between text-xs text-[#4E5C53]">
              <span>Lunch Service:</span>
              <span className="font-mono font-bold text-[#18221D]">
                11:30 AM – 3:30 PM
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#4E5C53] mt-1">
              <span>Dinner Service:</span>
              <span className="font-mono font-bold text-[#18221D]">
                7:30 PM – 10:30 PM
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onTabSelect('menu')}
            className="mt-auto w-full py-3 rounded-xl bg-[#168A4A] hover:bg-[#0D5C35] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>Inspect Today&apos;s Menu →</span>
          </button>
        </div>
      )}

      {/* TAB CONTENT: TODAY'S MENU (Step 07 - THE KEY SYNC MOMENT) */}
      {activeTab === 'menu' && (
        <div className="p-3.5 flex-1 flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] font-bold">
            TODAY&apos;S SPECIALS (REAL-TIME SYNCED)
          </span>

          {/* THE HIGHLIGHTED SYNCED DISH */}
          <div className="p-3.5 rounded-2xl bg-white border-2 border-[#168A4A] shadow-md ring-2 ring-[#168A4A]/20">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-[#168A4A] bg-[#E8F5EE] px-2 py-0.5 rounded border border-emerald-200 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F47B20]" />
                <span>JUST ADDED BY OWNER TODAY</span>
              </span>
              <span className="font-mono text-sm font-bold text-[#168A4A]">
                ₹120
              </span>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-3 h-3 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center mt-1 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <div>
                <h5 className="font-display text-sm font-bold text-[#18221D]">
                  Special Paneer Thali
                </h5>
                <p className="mt-1 text-xs text-[#4E5C53] leading-relaxed">
                  Fresh paneer butter masala, 3 butter tawa rotis, dal tadka, jeera rice &amp; gulab jamun.
                </p>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-[#F2F5F3] flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#0D5C35] font-semibold">
                ✓ In Stock &amp; Ready
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#168A4A] text-white font-mono text-[11px] font-semibold">
                Select Item
              </span>
            </div>
          </div>

          {/* Regular Menu Items */}
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#6C7970] font-bold mt-1">
            STANDARD ROTATIONAL THALIS
          </span>

          <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <div>
                <span className="font-display text-xs font-semibold text-[#18221D] block">
                  Executive Dal Khichdi
                </span>
                <span className="text-[10px] text-[#6C7970]">Light home-style lunch</span>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-[#18221D]">₹90</span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#E7EBE8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-[2px] border border-emerald-600 p-[1px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>
              <div>
                <span className="font-display text-xs font-semibold text-[#18221D] block">
                  Deluxe Veg Thali
                </span>
                <span className="text-[10px] text-[#6C7970]">Complete lunch combo</span>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-[#18221D]">₹140</span>
          </div>

          {/* Trigger to Walking Directions */}
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={onGoToDirections}
              className="w-full py-3 rounded-xl bg-[#0D5C35] hover:bg-[#073D22] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Walking Directions →</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT: DIRECTIONS (Step 08 - Final Action) */}
      {activeTab === 'directions' && (
        <div className="p-4 flex-1 flex flex-col gap-3">
          {/* Walking Distance Header */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8] shadow-xs flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#0D5C35]">
                WALKING DISTANCE
              </span>
              <h4 className="font-display text-sm font-bold text-[#18221D]">
                280 Meters · 4 Min Walk
              </h4>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E8F5EE] flex items-center justify-center text-[#168A4A]">
              <Navigation className="w-4 h-4" />
            </div>
          </div>

          {/* Turn-by-turn Walking Guide */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E7EBE8] flex-1">
            <span className="font-mono text-[10px] uppercase font-bold text-[#6C7970] block mb-3">
              WALKING ROUTE THROUGH CYBER PARK
            </span>

            <div className="space-y-3 text-xs text-[#18221D]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#0D5C35] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <span className="font-semibold block">Exit DLF Cyber Park Gate 3</span>
                  <span className="text-[11px] text-[#6C7970]">Walk straight 80 meters</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#E8F5EE] text-[#0D5C35] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <span className="font-semibold block">Cross pedestrian skywalk to Tower B</span>
                  <span className="text-[11px] text-[#6C7970]">Shaded pedestrian walkway 120 meters</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#168A4A] text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <span className="font-semibold block">Arrive at Annapurna Mess</span>
                  <span className="text-[11px] text-[#0D5C35] font-semibold">
                    Food Court Alley, 1st stall on the left
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* End of Journey CTA */}
          <div className="mt-auto flex flex-col gap-2">
            <button
              type="button"
              onClick={onReplay}
              className="w-full py-3 rounded-xl bg-[#168A4A] hover:bg-[#0D5C35] text-white font-display text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>↺ Replay Product Flow from Step 1</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// =============================================================================
// SECONDARY SECTION: PLATFORM GOVERNANCE (Admin Moderation Flow)
// =============================================================================

export function PlatformGovernanceDemo() {
  const [adminStep, setAdminStep] = useState<number>(0);
  const [isVerified, setIsVerified] = useState<boolean>(true);

  const toggleVerification = () => {
    setIsVerified(!isVerified);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: 3-Step Admin Narrative (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="font-mono text-xs uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
            PLATFORM GOVERNANCE // AUDIT WORKFLOW
          </span>

          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#18221D]">
            FSSAI Document Verification
          </h3>

          <p className="mt-2 text-sm text-[#4E5C53] leading-relaxed">
            Every dining experience is anchored by deterministic compliance audits. Platform admins inspect kitchen hygiene certificates and geofence bounds before issuing verified partner trust badges.
          </p>

          {/* 3 Step Flow Indicators */}
          <div className="mt-6 space-y-3 w-full">
            <div
              onClick={() => setAdminStep(0)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                adminStep === 0
                  ? 'bg-white border-blue-600 shadow-xs'
                  : 'bg-[#F2F5F3] border-transparent opacity-75'
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-blue-700 block">
                01 // AUDIT SUBMISSION
              </span>
              <h5 className="font-display text-xs font-bold text-[#18221D] mt-0.5">
                Review FSSAI License &amp; Geofence
              </h5>
              <p className="text-[11px] text-[#6C7970] mt-1">
                Annapurna Mess submitted license #10023045678901 with a 350m spatial radius pin.
              </p>
            </div>

            <div
              onClick={() => setAdminStep(1)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
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
                Clicking Approve instantly flips the cryptographic status from Pending to Verified.
              </p>
            </div>

            <div
              onClick={() => setAdminStep(2)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                adminStep === 2
                  ? 'bg-white border-blue-600 shadow-xs'
                  : 'bg-[#F2F5F3] border-transparent opacity-75'
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-blue-700 block">
                03 // EMPLOYEE CONFIRMATION
              </span>
              <h5 className="font-display text-xs font-bold text-[#18221D] mt-0.5">
                Employee Sees Verified Partner Badge
              </h5>
              <p className="text-[11px] text-[#6C7970] mt-1">
                Diners immediately see the emerald FSSAI Verified Partner shield on their discovery feed.
              </p>
            </div>
          </div>

          {/* Interactive Toggle for Verification */}
          <div className="mt-6 p-3 rounded-xl bg-white border border-[#CCD6D0] w-full flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-[#18221D]">
              Interactive Status: {isVerified ? 'VERIFIED' : 'PENDING AUDIT'}
            </span>
            <button
              type="button"
              onClick={toggleVerification}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                isVerified
                  ? 'bg-[#E8F5EE] text-[#0D5C35] border border-emerald-300'
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}
            >
              {isVerified ? 'Revoke / Flag' : 'Approve Partner'}
            </button>
          </div>
        </div>

        {/* Right: Authentic Admin Mobile Viewport (6 cols) */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[340px] sm:max-w-[360px] h-[600px] rounded-[38px] bg-[#121815] p-3 shadow-xl border-2 border-slate-700 flex flex-col justify-between overflow-hidden">
            {/* Admin Header */}
            <div className="px-3 pt-1 pb-1 flex items-center justify-between text-white/80 font-mono text-[10px]">
              <span>12:45</span>
              <span className="font-bold text-blue-400">ADMIN CONSOLE</span>
              <span>5G</span>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 rounded-[26px] bg-[#F7F8F6] border border-[#E7EBE8] overflow-y-auto p-3.5 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#E7EBE8]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#6C7970]">
                  VERIFICATION QUEUE
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-100 text-blue-800 font-bold">
                  DLF Cyber Hub
                </span>
              </div>

              {/* Outlet Verification Card */}
              <div className="p-3 rounded-xl bg-white border border-[#DDE4DF] shadow-xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-display text-xs font-bold text-[#18221D]">
                      Annapurna Pure Veg Mess
                    </h5>
                    <span className="text-[10px] text-[#6C7970] font-mono">
                      FSSAI #10023045678901
                    </span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold ${
                      isVerified
                        ? 'bg-[#E8F5EE] text-[#0D5C35]'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {isVerified ? 'VERIFIED' : 'PENDING'}
                  </span>
                </div>

                <div className="mt-2 text-[10px] text-[#4E5C53] space-y-1 font-mono">
                  <div>Audit Timestamp: 10:15 AM Today</div>
                  <div>Geofence Match: 280m Cyber Park (Valid)</div>
                  <div>Hygiene Inspection: Grade A+ (Passed)</div>
                </div>

                <div className="mt-3 pt-2 border-t border-[#F2F5F3] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsVerified(true)}
                    className="flex-1 py-1.5 rounded-lg bg-[#168A4A] text-white font-mono text-[10px] font-bold"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsVerified(false)}
                    className="py-1.5 px-3 rounded-lg bg-slate-100 text-[#6C7970] font-mono text-[10px]"
                  >
                    Flag
                  </button>
                </div>
              </div>

              {/* Live Status Preview Card */}
              <div className="p-3 rounded-xl bg-white border border-[#DDE4DF]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#6C7970] block mb-1">
                  EMPLOYEE FEED PREVIEW
                </span>
                <div className="p-2.5 rounded-lg bg-[#F7F8F6] border border-[#E7EBE8] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#18221D]">
                    Annapurna Mess
                  </span>
                  {isVerified ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-[#0D5C35] font-bold bg-[#E8F5EE] px-2 py-0.5 rounded">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Partner</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      Unverified
                    </span>
                  )}
                </div>
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
