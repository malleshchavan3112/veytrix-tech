'use client';

import React, { useState, useMemo } from 'react';
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
  ChevronRight,
  ChevronLeft,
  Search,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Plus,
  Trash2,
  RotateCcw,
  SlidersHorizontal,
  PhoneCall,
  Share2,
  FileCheck,
  XCircle,
  HelpCircle,
  TrendingUp,
  X,
} from 'lucide-react';

// =============================================================================
// DATA CONTRACTS (Aligned with Aahar Nearby Flutter Models)
// =============================================================================

export interface MockMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Breakfast' | 'Lunch' | 'Snacks' | 'Dinner' | 'Daily Special';
  isVeg: boolean;
  isAvailable: boolean;
}

export interface MockOutlet {
  id: string;
  name: string;
  category: string;
  address: string;
  hub: string;
  distanceMeters: number;
  rating: number;
  totalRatings: number;
  isOpen: boolean; // Mutated by Owner
  verificationStatus: 'approved' | 'pending' | 'flagged'; // Mutated by Admin
  fssaiNumber: string;
  phone: string;
  isFavorite: boolean; // Mutated by Employee
  menu: MockMenuItem[];
}

export interface MockReport {
  id: string;
  outletId: string;
  outletName: string;
  issue: string;
  status: 'open' | 'resolved' | 'dismissed';
  reportedAt: string;
}

// Initial Seed Data directly matching Aahar Nearby Phase 2 E2E Mock State
const INITIAL_OUTLETS: MockOutlet[] = [
  {
    id: 'htl_01',
    name: 'Annapurna Pure Veg Mess',
    category: 'North Indian Thali, Executive Meals',
    address: 'Opposite Tower B, DLF Cyber Park, Sector 24',
    hub: 'Cyber Park Hub',
    distanceMeters: 280,
    rating: 4.8,
    totalRatings: 142,
    isOpen: true,
    verificationStatus: 'approved',
    fssaiNumber: '10023045678901',
    phone: '+91 98765 43201',
    isFavorite: false,
    menu: [
      {
        id: 'm1',
        name: 'Executive South Indian Thali',
        description: '3 Rotis, Dal Tadka, Seasonal Sabzi, Sambar, Steamed Rice, Papad & Curd',
        price: 80,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'm2',
        name: 'Special Paneer Butter Masala Meal',
        description: '2 Butter Naan / 4 Rotis, Paneer Gravy, Jeera Rice & Green Salad',
        price: 110,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'm3',
        name: 'Curd Rice with Tadka & Lemon Pickle',
        description: 'Tempered mustard seed curd rice, digestive and light',
        price: 50,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'm4',
        name: 'Steamed Idli with Sambar & 2 Chutneys',
        description: '3 pieces fluffy steamed idli served with piping hot sambar',
        price: 40,
        category: 'Breakfast',
        isVeg: true,
        isAvailable: true,
      },
    ],
  },
  {
    id: 'htl_02',
    name: 'Krishna South Indian Tiffin',
    category: 'South Indian, Tiffin & Fast Meals',
    address: 'Shop 14, Main Market, Sector 33',
    hub: 'Cyber Park Hub',
    distanceMeters: 420,
    rating: 4.6,
    totalRatings: 98,
    isOpen: true,
    verificationStatus: 'pending', // Starts pending to test Admin Verification flow!
    fssaiNumber: '10824003001844',
    phone: '+91 98765 43210',
    isFavorite: false,
    menu: [
      {
        id: 'k1',
        name: 'Ghee Roast Masala Dosa',
        description: 'Crispy golden crepe with spiced potato filling & coconut chutney',
        price: 70,
        category: 'Breakfast',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'k2',
        name: 'Mini Meals (Rice, Sambar, Rasam, Curd)',
        description: 'Quick executive lunch plate for office lunch break',
        price: 65,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
    ],
  },
  {
    id: 'htl_03',
    name: 'Balaji Executive Tiffin & Mess',
    category: 'Homestyle Meals, Daily Roti',
    address: 'Plot 42, Sector 33 Plaza',
    hub: 'Cyber Park Hub',
    distanceMeters: 650,
    rating: 4.5,
    totalRatings: 76,
    isOpen: false,
    verificationStatus: 'flagged',
    fssaiNumber: '10821004000312',
    phone: '+91 98765 43299',
    isFavorite: false,
    menu: [
      {
        id: 'b1',
        name: 'Dal Khichdi with Roasted Papad',
        description: 'Comforting moong dal khichdi with ghee tempering',
        price: 60,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'b2',
        name: 'Aloo Paratha with Curd & Pickle (2 pcs)',
        description: 'Stuffed potato whole wheat flatbreads with fresh curd',
        price: 55,
        category: 'Breakfast',
        isVeg: true,
        isAvailable: true,
      },
    ],
  },
];

const INITIAL_REPORTS: MockReport[] = [
  {
    id: 'rep_01',
    outletId: 'htl_01',
    outletName: 'Annapurna Pure Veg Mess',
    issue: 'Price mismatch reported on Paneer Thali menu item',
    status: 'open',
    reportedAt: 'Today, 11:20 AM',
  },
  {
    id: 'rep_02',
    outletId: 'htl_03',
    outletName: 'Balaji Executive Tiffin',
    issue: 'FSSAI hygiene audit certificate renewal due',
    status: 'open',
    reportedAt: 'Yesterday, 04:45 PM',
  },
];

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function InteractiveProductDemo() {
  // Shared Multi-Role State Engine
  const [outlets, setOutlets] = useState<MockOutlet[]>(INITIAL_OUTLETS);
  const [reports, setReports] = useState<MockReport[]>(INITIAL_REPORTS);
  const [activeRole, setActiveRole] = useState<'employee' | 'owner' | 'admin'>('employee');
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Helper to trigger cross-role sync notification
  const triggerSyncToast = (msg: string) => {
    setSyncToast(msg);
    setTimeout(() => setSyncToast(null), 3500);
  };

  // Reset entire demo to fresh seed
  const handleResetDemo = () => {
    setOutlets(INITIAL_OUTLETS);
    setReports(INITIAL_REPORTS);
    triggerSyncToast('Demo reset to initial baseline data');
  };

  // ---------------------------------------------------------------------------
  // SHARED MUTATIONS (Connecting Employee, Owner, Admin)
  // ---------------------------------------------------------------------------

  // 1. Owner toggles kitchen open / closed
  const handleToggleKitchenStatus = (outletId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const nextState = !o.isOpen;
          triggerSyncToast(
            nextState
              ? `[OWNER SYNC] ${o.name} is now OPEN. Diners can order!`
              : `[OWNER SYNC] ${o.name} marked CLOSED. Diners see Closed badge.`
          );
          return { ...o, isOpen: nextState };
        }
        return o;
      })
    );
  };

  // 2. Owner toggles menu item in/out of stock
  const handleToggleItemAvailability = (outletId: string, itemId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const updatedMenu = o.menu.map((m) =>
            m.id === itemId ? { ...m, isAvailable: !m.isAvailable } : m
          );
          const changedItem = updatedMenu.find((m) => m.id === itemId);
          triggerSyncToast(
            `[MENU SYNC] "${changedItem?.name}" marked ${
              changedItem?.isAvailable ? 'IN STOCK' : 'SOLD OUT'
            }`
          );
          return { ...o, menu: updatedMenu };
        }
        return o;
      })
    );
  };

  // 3. Owner adds a new dish
  const handleAddDish = (outletId: string, newDish: Omit<MockMenuItem, 'id'>) => {
    const dishWithId: MockMenuItem = {
      ...newDish,
      id: `dish_${Date.now()}`,
    };
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          triggerSyncToast(`[MENU SYNC] Added "${dishWithId.name}" (₹${dishWithId.price}) to Today's Menu!`);
          return { ...o, menu: [dishWithId, ...o.menu] };
        }
        return o;
      })
    );
  };

  // 4. Owner deletes a dish
  const handleDeleteDish = (outletId: string, itemId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const target = o.menu.find((m) => m.id === itemId);
          triggerSyncToast(`[MENU SYNC] Removed "${target?.name}" from Today's Menu`);
          return { ...o, menu: o.menu.filter((m) => m.id !== itemId) };
        }
        return o;
      })
    );
  };

  // 5. Employee toggles favorite
  const handleToggleFavorite = (outletId: string) => {
    setOutlets((prev) =>
      prev.map((o) => (o.id === outletId ? { ...o, isFavorite: !o.isFavorite } : o))
    );
  };

  // 6. Admin updates outlet verification status
  const handleSetVerification = (outletId: string, status: 'approved' | 'flagged') => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          triggerSyncToast(
            status === 'approved'
              ? `[ADMIN SYNC] Approved "${o.name}". Verified Partner badge active!`
              : `[ADMIN SYNC] Flagged "${o.name}" for hygiene re-audit.`
          );
          return { ...o, verificationStatus: status };
        }
        return o;
      })
    );
  };

  // 7. Admin resolves report
  const handleResolveReport = (reportId: string, nextStatus: 'resolved' | 'dismissed') => {
    setReports((prev) =>
      prev.map((r) => (r.id === reportId ? { ...r, status: nextStatus } : r))
    );
    triggerSyncToast(`[AUDIT SYNC] Report marked ${nextStatus}`);
  };

  // Owner managed outlet in this demo is htl_01 (Annapurna)
  const ownerOutlet = outlets.find((o) => o.id === 'htl_01') || outlets[0];

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* ======================================================================= */}
      {/* 1. COMPACT SIMULATED DEMO CONTROL BAR                                   */}
      {/* ======================================================================= */}
      <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-canvas-subtle/80 border border-border-hairline mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider uppercase text-emerald-800">
              AAHAR NEARBY · LIVE MULTI-ROLE ECOSYSTEM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] text-content-tertiary">
              SIMULATED REACT STATE · ZERO BACKEND
            </span>
            <button
              type="button"
              onClick={handleResetDemo}
              className="font-mono text-[11px] text-content-secondary hover:text-emerald-700 flex items-center gap-1 transition-colors px-2 py-0.5 rounded border border-border-hairline bg-white"
              title="Reset state to initial seed"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset State</span>
            </button>
          </div>
        </div>

        {/* Global Cross-Role Sync Toast Banner */}
        {syncToast && (
          <div className="mb-4 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-mono text-xs flex items-center justify-between shadow-lg animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-200" />
              <span>{syncToast}</span>
            </div>
            <button
              type="button"
              onClick={() => setSyncToast(null)}
              className="text-emerald-200 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* 3-Role Focus Switcher Bar */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-canvas-subtle/70 border border-border-hairline">
          <button
            type="button"
            onClick={() => setActiveRole('employee')}
            className={`py-2.5 px-3 rounded-xl text-left transition-all duration-200 ${
              activeRole === 'employee'
                ? 'bg-white shadow-sm border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[10px] font-bold text-emerald-700">01 // DINER</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeRole === 'employee' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-xs sm:text-sm font-bold text-content-primary block leading-tight">
              Employee App
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveRole('owner')}
            className={`py-2.5 px-3 rounded-xl text-left transition-all duration-200 ${
              activeRole === 'owner'
                ? 'bg-white shadow-sm border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[10px] font-bold text-emerald-700">02 // OWNER</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeRole === 'owner' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-xs sm:text-sm font-bold text-content-primary block leading-tight">
              Mess Owner App
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveRole('admin')}
            className={`py-2.5 px-3 rounded-xl text-left transition-all duration-200 ${
              activeRole === 'admin'
                ? 'bg-white shadow-sm border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[10px] font-bold text-emerald-700">03 // ADMIN</span>
              <span className={`w-1.5 h-1.5 rounded-full ${activeRole === 'admin' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-xs sm:text-sm font-bold text-content-primary block leading-tight">
              Platform Admin
            </span>
          </button>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* 2. THE THREE INTERACTIVE PHONES                                         */}
      {/* ======================================================================= */}

      {/* Desktop / Tablet Composition: Three Phones Side-by-Side */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start justify-center w-full max-w-6xl mx-auto py-2">
        {/* PHONE 01: EMPLOYEE APP */}
        <div
          onClick={() => setActiveRole('employee')}
          className={`flex flex-col items-center transition-all duration-300 ${
            activeRole === 'employee'
              ? 'scale-[1.03] z-20 opacity-100'
              : 'scale-[0.97] opacity-85 hover:opacity-100'
          }`}
        >
          <div className="mb-2.5 text-center">
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
              01 // EMPLOYEE
            </span>
            <span className="font-display text-xs text-content-secondary font-medium">
              Hyperlocal Discovery
            </span>
          </div>

          <SmartphoneFrame active={activeRole === 'employee'}>
            <EmployeeApp
              outlets={outlets}
              onToggleFavorite={handleToggleFavorite}
            />
          </SmartphoneFrame>
        </div>

        {/* PHONE 02: OWNER APP */}
        <div
          onClick={() => setActiveRole('owner')}
          className={`flex flex-col items-center transition-all duration-300 ${
            activeRole === 'owner'
              ? 'scale-[1.03] z-20 opacity-100'
              : 'scale-[0.97] opacity-85 hover:opacity-100'
          }`}
        >
          <div className="mb-2.5 text-center">
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
              02 // MESS OWNER
            </span>
            <span className="font-display text-xs text-content-secondary font-medium">
              Menu Operations
            </span>
          </div>

          <SmartphoneFrame active={activeRole === 'owner'}>
            <OwnerApp
              outlet={ownerOutlet}
              onToggleKitchen={() => handleToggleKitchenStatus(ownerOutlet.id)}
              onToggleItem={(itemId) => handleToggleItemAvailability(ownerOutlet.id, itemId)}
              onAddDish={(dish) => handleAddDish(ownerOutlet.id, dish)}
              onDeleteDish={(itemId) => handleDeleteDish(ownerOutlet.id, itemId)}
            />
          </SmartphoneFrame>
        </div>

        {/* PHONE 03: ADMIN APP */}
        <div
          onClick={() => setActiveRole('admin')}
          className={`flex flex-col items-center transition-all duration-300 ${
            activeRole === 'admin'
              ? 'scale-[1.03] z-20 opacity-100'
              : 'scale-[0.97] opacity-85 hover:opacity-100'
          }`}
        >
          <div className="mb-2.5 text-center">
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
              03 // PLATFORM ADMIN
            </span>
            <span className="font-display text-xs text-content-secondary font-medium">
              Governance &amp; Verification
            </span>
          </div>

          <SmartphoneFrame active={activeRole === 'admin'}>
            <AdminApp
              outlets={outlets}
              reports={reports}
              onVerifyOutlet={handleSetVerification}
              onResolveReport={handleResolveReport}
            />
          </SmartphoneFrame>
        </div>
      </div>

      {/* Mobile Viewport: Single Focused Interactive Phone with Left/Right Controls */}
      <div className="md:hidden flex flex-col items-center w-full">
        {/* Navigation Selector */}
        <div className="flex items-center justify-between w-full max-w-[310px] mb-3 px-2">
          <button
            type="button"
            onClick={() => {
              if (activeRole === 'admin') setActiveRole('owner');
              else if (activeRole === 'owner') setActiveRole('employee');
              else setActiveRole('admin');
            }}
            className="p-1.5 rounded-lg bg-canvas-subtle border border-border-hairline text-content-secondary"
            aria-label="Previous role phone"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-center">
            <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase block">
              {activeRole === 'employee' && '01 // EMPLOYEE DINER'}
              {activeRole === 'owner' && '02 // MESS OWNER'}
              {activeRole === 'admin' && '03 // PLATFORM ADMIN'}
            </span>
            <span className="text-xs font-semibold text-content-primary">
              {activeRole === 'employee' && 'Discovery Feed & Menus'}
              {activeRole === 'owner' && 'Menu Operations Console'}
              {activeRole === 'admin' && 'Platform Governance Queue'}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              if (activeRole === 'employee') setActiveRole('owner');
              else if (activeRole === 'owner') setActiveRole('admin');
              else setActiveRole('employee');
            }}
            className="p-1.5 rounded-lg bg-canvas-subtle border border-border-hairline text-content-secondary"
            aria-label="Next role phone"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Focused Phone */}
        <SmartphoneFrame active={true}>
          {activeRole === 'employee' && (
            <EmployeeApp
              outlets={outlets}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
          {activeRole === 'owner' && (
            <OwnerApp
              outlet={ownerOutlet}
              onToggleKitchen={() => handleToggleKitchenStatus(ownerOutlet.id)}
              onToggleItem={(itemId) => handleToggleItemAvailability(ownerOutlet.id, itemId)}
              onAddDish={(dish) => handleAddDish(ownerOutlet.id, dish)}
              onDeleteDish={(itemId) => handleDeleteDish(ownerOutlet.id, itemId)}
            />
          )}
          {activeRole === 'admin' && (
            <AdminApp
              outlets={outlets}
              reports={reports}
              onVerifyOutlet={handleSetVerification}
              onResolveReport={handleResolveReport}
            />
          )}
        </SmartphoneFrame>
      </div>

      {/* ======================================================================= */}
      {/* 3. MULTI-ROLE INTERACTION WALKTHROUGH HINTS                             */}
      {/* ======================================================================= */}
      <div className="w-full max-w-4xl mx-auto mt-10 p-5 rounded-2xl bg-[#F7F8F6] border border-[#E7EBE8] text-left">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#168A4A]" />
          <span className="font-mono text-xs font-bold text-[#168A4A] uppercase tracking-wider">
            HOW TO TEST THE CONNECTED ECOSYSTEM IN REAL TIME
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#66736B]">
          <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
            <span className="font-bold text-[#17201B] block mb-1">
              Step 1: Owner Kitchen Status
            </span>
            Switch to <strong className="text-[#168A4A]">Owner App</strong> and click{' '}
            <em>&quot;Kitchen Open / Closed&quot;</em>. Then switch to{' '}
            <strong className="text-[#168A4A]">Employee App</strong>: Annapurna will immediately show{' '}
            <span className="text-red-600 font-bold">CLOSED</span>.
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
            <span className="font-bold text-[#17201B] block mb-1">
              Step 2: Add Dish or AI Scan
            </span>
            In <strong className="text-[#168A4A]">Owner App</strong>, click <em>&quot;+ Add Dish&quot;</em> or{' '}
            <em>&quot;AI Scan&quot;</em>. Switch to <strong className="text-[#168A4A]">Employee App</strong> and tap
            Annapurna to see the new dish live in the menu.
          </div>

          <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
            <span className="font-bold text-[#17201B] block mb-1">
              Step 3: Admin Compliance Audit
            </span>
            In <strong className="text-[#168A4A]">Admin App</strong>, click{' '}
            <em>&quot;Approve &amp; Verify&quot;</em> on Krishna Tiffin. In{' '}
            <strong className="text-[#168A4A]">Employee App</strong>, Krishna will now display the green{' '}
            <span className="text-[#168A4A] font-bold">Verified Partner</span> badge!
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// REUSABLE SMARTPHONE HARDWARE SHELL
// =============================================================================

function SmartphoneFrame({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={`w-[290px] sm:w-[310px] h-[610px] rounded-[42px] bg-slate-950 p-2.5 shadow-2xl border-4 transition-all duration-300 relative flex flex-col ${
        active
          ? 'border-emerald-600 shadow-emerald-950/20 ring-4 ring-emerald-500/20'
          : 'border-slate-800 shadow-xl'
      }`}
    >
      {/* Top Dynamic Island / Camera & Speaker Pill */}
      <div className="w-24 h-4 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-between px-2.5 flex-shrink-0 z-30">
        <div className="w-2 h-2 rounded-full bg-slate-950" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800" />
      </div>

      {/* Screen Container with Aahar Background */}
      <div className="relative w-full flex-1 rounded-[30px] overflow-hidden bg-[#F7F8F6] flex flex-col border border-slate-900">
        {/* Status Bar */}
        <div className="w-full h-6 px-4 pt-1 flex items-center justify-between text-[10px] font-mono text-[#17201B] bg-white flex-shrink-0 border-b border-[#E7EBE8]/60">
          <span className="font-bold">12:30</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">5G</span>
            <div className="w-4 h-2 rounded-sm border border-[#17201B] p-0.5 flex items-center">
              <div className="h-full w-full bg-[#168A4A] rounded-2xs" />
            </div>
          </div>
        </div>

        {/* Interactive App Screen Viewport */}
        <div className="w-full flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>

        {/* Bottom Gesture Bar */}
        <div className="w-full h-4 bg-white flex items-center justify-center flex-shrink-0 border-t border-[#E7EBE8]/40">
          <div className="w-24 h-1 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 1. EMPLOYEE DINER APPLICATION (React reproduction of Flutter E03 - E06)
// =============================================================================

function EmployeeApp({
  outlets,
  onToggleFavorite,
}: {
  outlets: MockOutlet[];
  onToggleFavorite: (id: string) => void;
}) {
  const [selectedOutletId, setSelectedOutletId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'home' | 'favorites'>('home');
  const [showDirections, setShowDirections] = useState(false);

  const selectedOutlet = outlets.find((o) => o.id === selectedOutletId);

  // Filter outlets based on search, category, and favorites
  const filteredOutlets = useMemo(() => {
    return outlets.filter((o) => {
      if (activeTab === 'favorites' && !o.isFavorite) return false;

      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Pure Veg' && !o.category.toLowerCase().includes('pure veg')) {
          return false;
        }
        if (selectedCategory === 'Mess' && !o.category.toLowerCase().includes('mess')) {
          return false;
        }
        if (selectedCategory === 'Breakfast') {
          const hasBreakfast = o.menu.some((m) => m.category === 'Breakfast');
          if (!hasBreakfast) return false;
        }
        if (selectedCategory === 'Lunch') {
          const hasLunch = o.menu.some((m) => m.category === 'Lunch');
          if (!hasLunch) return false;
        }
      }

      // Search Query filter
      if (searchQuery.trim().length > 0) {
        const q = searchQuery.toLowerCase();
        const matchesName = o.name.toLowerCase().includes(q);
        const matchesMenu = o.menu.some((m) => m.name.toLowerCase().includes(q));
        return matchesName || matchesMenu;
      }

      return true;
    });
  }, [outlets, searchQuery, selectedCategory, activeTab]);

  // If viewing outlet details
  if (selectedOutlet) {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        {/* Detail App Bar */}
        <div className="p-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-10">
          <button
            type="button"
            onClick={() => {
              setSelectedOutletId(null);
              setShowDirections(false);
            }}
            className="p-1 rounded-lg hover:bg-slate-100 text-[#17201B] flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Back</span>
          </button>
          <span className="font-bold text-xs text-[#17201B] truncate max-w-[150px]">
            {selectedOutlet.name}
          </span>
          <button
            type="button"
            onClick={() => onToggleFavorite(selectedOutlet.id)}
            className="p-1.5 rounded-full hover:bg-slate-100"
          >
            <Heart
              className={`w-4 h-4 ${
                selectedOutlet.isFavorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-[#66736B]'
              }`}
            />
          </button>
        </div>

        {/* Outlet Header Card */}
        <div className="p-3.5 bg-white border-b border-[#E7EBE8]">
          <div className="flex items-center gap-1.5 mb-1">
            <h3 className="font-bold text-sm text-[#17201B] leading-tight">
              {selectedOutlet.name}
            </h3>
            {selectedOutlet.verificationStatus === 'approved' && (
              <span className="inline-flex items-center gap-0.5 text-[9px] bg-[#E8F5EE] text-[#168A4A] font-bold px-1.5 py-0.5 rounded">
                <CheckCircle2 className="w-2.5 h-2.5" />
                Verified
              </span>
            )}
          </div>
          <p className="text-[11px] text-[#66736B] leading-tight mb-2.5">
            {selectedOutlet.address}
          </p>

          <div className="flex items-center justify-between text-[11px]">
            <span
              className={`font-bold px-2 py-0.5 rounded text-[10px] ${
                selectedOutlet.isOpen
                  ? 'bg-[#F0FDF4] text-[#1F9D55]'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {selectedOutlet.isOpen ? '● Open Now' : '● Closed'}
            </span>
            <span className="text-[#66736B]">★ {selectedOutlet.rating} ({selectedOutlet.totalRatings})</span>
            <span className="font-mono text-[#168A4A] font-bold">{selectedOutlet.distanceMeters}m walk</span>
          </div>

          {/* Action Row */}
          <div className="mt-3 pt-3 border-t border-[#E7EBE8] flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDirections(!showDirections)}
              className="flex-1 py-1.5 bg-[#168A4A] hover:bg-[#0D5C35] text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 transition-colors"
            >
              <Navigation className="w-3 h-3" />
              <span>{showDirections ? 'Hide Directions' : 'Walking Route'}</span>
            </button>
            <a
              href={`tel:${selectedOutlet.phone}`}
              onClick={(e) => e.preventDefault()}
              className="p-1.5 border border-[#E7EBE8] rounded-lg text-[#17201B] hover:bg-slate-50 flex items-center justify-center"
              title="Call Mess"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#168A4A]" />
            </a>
          </div>

          {/* Simulated Directions Route Panel */}
          {showDirections && (
            <div className="mt-2.5 p-2 rounded-lg bg-[#E8F5EE] border border-emerald-200 text-[10px] text-[#0D5C35] animate-fadeIn">
              <span className="font-bold block mb-1">WALKING DIRECTIONS (4 MIN):</span>
              <p>Exit Cyber Park via East Pedestrian Gate → 180m on Sector 33 Main Avenue → Turn right at Landmark ATM.</p>
            </div>
          )}
        </div>

        {/* Menu Items List */}
        <div className="p-3 flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#17201B]">Today&apos;s Live Menu</span>
            <span className="text-[10px] font-mono text-[#168A4A] bg-[#E8F5EE] px-1.5 py-0.5 rounded">
              {selectedOutlet.menu.length} items
            </span>
          </div>

          <div className="space-y-2">
            {selectedOutlet.menu.map((dish) => (
              <div
                key={dish.id}
                className="p-2.5 bg-white rounded-xl border border-[#E7EBE8] flex items-start justify-between gap-2 shadow-2xs"
              >
                <div className="flex items-start gap-2 flex-1">
                  {/* Veg Indicator */}
                  <span className="w-3 h-3 rounded-xs border border-[#168A4A] flex items-center justify-center p-0.5 mt-0.5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168A4A]" />
                  </span>
                  <div>
                    <span className="font-bold text-xs text-[#17201B] block leading-tight">
                      {dish.name}
                    </span>
                    <span className="text-[10px] text-[#66736B] line-clamp-2 mt-0.5">
                      {dish.description}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="font-mono text-xs font-bold text-[#168A4A]">
                    ₹{dish.price}
                  </span>
                  <span
                    className={`text-[9px] font-bold mt-1 px-1 rounded ${
                      dish.isAvailable
                        ? 'bg-[#E8F5EE] text-[#168A4A]'
                        : 'bg-red-50 text-red-600'
                    }`}
                  >
                    {dish.isAvailable ? 'IN STOCK' : 'SOLD OUT'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Home Feed
  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* Location Bar */}
      <div className="px-3 py-2 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3.5 h-3.5 text-[#168A4A] flex-shrink-0" />
          <div className="truncate">
            <span className="text-[10px] text-[#66736B] block leading-none">Nearby Hub</span>
            <span className="text-xs font-bold text-[#17201B] truncate">Cyber Park, Sector 33</span>
          </div>
        </div>
        <span className="text-[9px] font-mono bg-[#E8F5EE] text-[#168A4A] font-bold px-1.5 py-0.5 rounded">
          GPS ON
        </span>
      </div>

      {/* Search Input */}
      <div className="p-2.5 bg-white border-b border-[#E7EBE8]">
        <div className="relative flex items-center">
          <Search className="w-3.5 h-3.5 text-[#66736B] absolute left-2.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search food, thali, mess..."
            className="w-full pl-8 pr-2.5 py-1.5 rounded-lg bg-[#EFF2EF] text-xs text-[#17201B] placeholder-[#66736B] outline-none focus:ring-1 focus:ring-[#168A4A]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Category Chips */}
      <div className="px-2.5 py-2 bg-white border-b border-[#E7EBE8] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {['All', 'Lunch', 'Breakfast', 'Pure Veg', 'Mess'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`text-[10px] font-semibold px-2 py-1 rounded-full whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-[#168A4A] text-white'
                : 'bg-[#EFF2EF] text-[#17201B] hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sub-Tabs: All Outlets vs Favorites */}
      <div className="flex border-b border-[#E7EBE8] bg-[#F7F8F6] text-xs font-bold text-[#66736B]">
        <button
          type="button"
          onClick={() => setActiveTab('home')}
          className={`flex-1 py-1.5 text-center ${
            activeTab === 'home'
              ? 'text-[#168A4A] border-b-2 border-[#168A4A] bg-white'
              : 'hover:text-[#17201B]'
          }`}
        >
          Nearby Outlets ({outlets.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('favorites')}
          className={`flex-1 py-1.5 text-center ${
            activeTab === 'favorites'
              ? 'text-[#168A4A] border-b-2 border-[#168A4A] bg-white'
              : 'hover:text-[#17201B]'
          }`}
        >
          Favorites ({outlets.filter((o) => o.isFavorite).length})
        </button>
      </div>

      {/* Outlets Stream */}
      <div className="p-2.5 space-y-2.5 flex-1">
        {filteredOutlets.length === 0 ? (
          <div className="p-6 text-center text-xs text-[#66736B]">
            No outlets found matching &quot;{searchQuery || selectedCategory}&quot;
          </div>
        ) : (
          filteredOutlets.map((outlet) => {
            const firstDish = outlet.menu[0];
            return (
              <div
                key={outlet.id}
                onClick={() => setSelectedOutletId(outlet.id)}
                className="p-3 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs cursor-pointer hover:border-[#168A4A]/50 transition-all text-left group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-1.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-xs text-[#17201B] group-hover:text-[#168A4A] transition-colors leading-tight">
                        {outlet.name}
                      </span>
                      {outlet.verificationStatus === 'approved' && (
                        <CheckCircle2 className="w-3 h-3 text-[#168A4A] flex-shrink-0" />
                      )}
                    </div>
                    <span className="text-[10px] text-[#66736B] block leading-tight mt-0.5">
                      {outlet.category}
                    </span>
                  </div>

                  {/* Favorite Heart */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(outlet.id);
                    }}
                    className="p-1 rounded-full hover:bg-slate-100 flex-shrink-0"
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        outlet.isFavorite
                          ? 'fill-red-500 text-red-500'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Distance & Status Row */}
                <div className="mt-2 flex items-center justify-between text-[10px]">
                  <span
                    className={`font-bold px-1.5 py-0.5 rounded text-[9px] ${
                      outlet.isOpen
                        ? 'bg-[#F0FDF4] text-[#1F9D55]'
                        : 'bg-red-50 text-red-600'
                    }`}
                  >
                    {outlet.isOpen ? '● Open Now' : '● Closed'}
                  </span>
                  <span className="text-[#66736B]">★ {outlet.rating}</span>
                  <span className="font-mono text-[#168A4A] font-bold">{outlet.distanceMeters}m</span>
                </div>

                {/* Today's Special Dish Row */}
                {firstDish && (
                  <div className="mt-2 pt-2 border-t border-[#E7EBE8]/60 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5 truncate flex-1">
                      <span className="w-2.5 h-2.5 rounded-2xs border border-[#168A4A] flex items-center justify-center p-0.5 flex-shrink-0">
                        <span className="w-1 h-1 rounded-full bg-[#168A4A]" />
                      </span>
                      <span className="font-medium text-[#17201B] truncate">
                        {firstDish.name}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-[#168A4A] flex-shrink-0 ml-1">
                      ₹{firstDish.price}
                    </span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// =============================================================================
// 2. HOTEL / MESS OWNER APPLICATION (React reproduction of Flutter H04 - H06)
// =============================================================================

function OwnerApp({
  outlet,
  onToggleKitchen,
  onToggleItem,
  onAddDish,
  onDeleteDish,
}: {
  outlet: MockOutlet;
  onToggleKitchen: () => void;
  onToggleItem: (itemId: string) => void;
  onAddDish: (dish: Omit<MockMenuItem, 'id'>) => void;
  onDeleteDish: (itemId: string) => void;
}) {
  const [activeScreen, setActiveScreen] = useState<'dashboard' | 'add-dish' | 'ai-scanner'>('dashboard');

  // Add Item form state
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('85');
  const [dishCategory, setDishCategory] = useState<'Lunch' | 'Breakfast' | 'Snacks'>('Lunch');
  const [dishDesc, setDishDesc] = useState('');

  // AI Scanner simulator state
  const [isScanning, setIsScanning] = useState(false);

  // Submit new dish form
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim()) return;
    onAddDish({
      name: dishName.trim(),
      description: dishDesc.trim() || 'Freshly prepared daily lunch special',
      price: parseInt(dishPrice, 10) || 70,
      category: dishCategory,
      isVeg: true,
      isAvailable: true,
    });
    setDishName('');
    setDishDesc('');
    setActiveScreen('dashboard');
  };

  // Simulate AI chalkboard scanner
  const handleTriggerAiScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onAddDish({
        name: 'Special Ghee Roast Dosa & Chutney',
        description: 'Crispy fermented crepe with pure ghee & spiced potato subzi',
        price: 75,
        category: 'Daily Special',
        isVeg: true,
        isAvailable: true,
      });
      setActiveScreen('dashboard');
    }, 1200);
  };

  // Screen: Add Item
  if (activeScreen === 'add-dish') {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        <div className="p-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-10">
          <button
            type="button"
            onClick={() => setActiveScreen('dashboard')}
            className="p-1 rounded-lg hover:bg-slate-100 text-[#17201B] flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Cancel</span>
          </button>
          <span className="font-bold text-xs text-[#17201B]">Add Today&apos;s Dish</span>
          <div className="w-6" />
        </div>

        <form onSubmit={handleFormSubmit} className="p-3 space-y-3 flex-1 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div>
              <label className="text-[10px] font-bold text-[#66736B] block mb-1">DISH NAME</label>
              <input
                type="text"
                required
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                placeholder="e.g. Special Chapati Meals"
                className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none focus:border-[#168A4A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-bold text-[#66736B] block mb-1">PRICE (₹)</label>
                <input
                  type="number"
                  required
                  value={dishPrice}
                  onChange={(e) => setDishPrice(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#E7EBE8] text-xs font-mono font-bold text-[#168A4A] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#66736B] block mb-1">MEAL SLOT</label>
                <select
                  value={dishCategory}
                  onChange={(e) => setDishCategory(e.target.value as any)}
                  className="w-full px-2 py-1.5 rounded-lg bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none"
                >
                  <option value="Lunch">Lunch</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Snacks">Snacks</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-[#66736B] block mb-1">DESCRIPTION</label>
              <textarea
                value={dishDesc}
                onChange={(e) => setDishDesc(e.target.value)}
                placeholder="Dishes included, roti count..."
                rows={3}
                className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none focus:border-[#168A4A]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#168A4A] hover:bg-[#0D5C35] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            Publish to Today&apos;s Menu
          </button>
        </form>
      </div>
    );
  }

  // Screen: AI Scanner Simulation
  if (activeScreen === 'ai-scanner') {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        <div className="p-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-10">
          <button
            type="button"
            onClick={() => setActiveScreen('dashboard')}
            className="p-1 rounded-lg hover:bg-slate-100 text-[#17201B] flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Cancel</span>
          </button>
          <span className="font-bold text-xs text-[#17201B]">AI Menu Assistant</span>
          <div className="w-6" />
        </div>

        <div className="p-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
              <span className="text-[10px] font-mono font-bold text-[#F47B20] block mb-1">
                CHALKBOARD OCR &amp; PARSER
              </span>
              <p className="text-xs text-[#17201B]">
                Take a quick photo of your handwritten chalkboard or paste raw daily notes.
              </p>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[11px] space-y-1">
              <span className="text-slate-400 block text-[9px]">MOCK CHALKBOARD INPUT:</span>
              <p className="text-emerald-400">&gt; &quot;Special Ghee Roast Dosa 75 Rs with 2 Chutneys &amp; Sambar&quot;</p>
            </div>

            {isScanning && (
              <div className="p-3 bg-[#E8F5EE] rounded-xl border border-emerald-200 text-center animate-pulse">
                <span className="font-bold text-xs text-[#168A4A] block">
                  Analyzing menu with AI...
                </span>
                <span className="text-[10px] text-[#0D5C35]">Structuring items and pricing</span>
              </div>
            )}
          </div>

          <button
            type="button"
            disabled={isScanning}
            onClick={handleTriggerAiScan}
            className="w-full py-2 bg-[#F47B20] hover:bg-[#d96714] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isScanning ? 'Parsing Notes...' : 'Parse & Publish to Today\'s Menu'}</span>
          </button>
        </div>
      </div>
    );
  }

  // Screen: Dashboard
  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* Owner Header */}
      <div className="p-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#66736B] block leading-none">Partner Portal</span>
          <span className="text-xs font-bold text-[#17201B] truncate">{outlet.name}</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#E8F5EE] text-[#168A4A] flex items-center justify-center font-bold text-[10px]">
          AP
        </div>
      </div>

      <div className="p-2.5 space-y-2.5 flex-1">
        {/* Kitchen Status Toggle Card */}
        <div className="p-3 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-bold text-[#66736B] block">KITCHEN SERVICE</span>
              <span className="text-xs font-bold text-[#17201B]">
                {outlet.isOpen ? 'Accepting Diners' : 'Kitchen Closed'}
              </span>
            </div>
            <button
              type="button"
              onClick={onToggleKitchen}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 ${
                outlet.isOpen
                  ? 'bg-[#168A4A] text-white'
                  : 'bg-red-600 text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{outlet.isOpen ? 'OPEN' : 'CLOSED'}</span>
            </button>
          </div>
          <span className="text-[10px] text-[#66736B] block">
            Toggling this updates the Diner app in real-time.
          </span>
        </div>

        {/* Action Buttons: Add Item & AI Assistant */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveScreen('add-dish')}
            className="p-2 bg-white rounded-xl border border-[#E7EBE8] hover:border-[#168A4A] text-[#17201B] text-xs font-bold flex items-center justify-center gap-1 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#168A4A]" />
            <span>+ Add Dish</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('ai-scanner')}
            className="p-2 bg-white rounded-xl border border-[#E7EBE8] hover:border-[#F47B20] text-[#17201B] text-xs font-bold flex items-center justify-center gap-1 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
            <span>AI Menu Scan</span>
          </button>
        </div>

        {/* Today's Menu Inventory Control */}
        <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#17201B]">Today&apos;s Live Menu</span>
            <span className="text-[10px] font-mono text-[#168A4A]">{outlet.menu.length} items</span>
          </div>

          <div className="space-y-2">
            {outlet.menu.map((item) => (
              <div
                key={item.id}
                className="p-2 rounded-lg bg-[#F7F8F6] border border-[#E7EBE8] flex items-center justify-between gap-1.5"
              >
                <div className="flex-1 truncate">
                  <span className="font-bold text-xs text-[#17201B] block truncate leading-tight">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#168A4A] font-bold">
                    ₹{item.price} · {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => onToggleItem(item.id)}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      item.isAvailable
                        ? 'bg-[#E8F5EE] text-[#168A4A] border border-emerald-300'
                        : 'bg-red-50 text-red-600 border border-red-200'
                    }`}
                  >
                    {item.isAvailable ? 'IN STOCK' : 'SOLD OUT'}
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeleteDish(item.id)}
                    className="p-1 text-slate-400 hover:text-red-500 rounded"
                    title="Remove item"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// 3. PLATFORM ADMIN APPLICATION (React reproduction of Flutter A02 - A03)
// =============================================================================

function AdminApp({
  outlets,
  reports,
  onVerifyOutlet,
  onResolveReport,
}: {
  outlets: MockOutlet[];
  reports: MockReport[];
  onVerifyOutlet: (id: string, status: 'approved' | 'flagged') => void;
  onResolveReport: (id: string, status: 'resolved' | 'dismissed') => void;
}) {
  const [adminTab, setAdminTab] = useState<'verification' | 'reports'>('verification');

  const pendingOutlets = outlets.filter((o) => o.verificationStatus !== 'approved');
  const verifiedCount = outlets.filter((o) => o.verificationStatus === 'approved').length;

  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* Top Admin Header */}
      <div className="p-3 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#168A4A]" />
          <div>
            <span className="text-[10px] text-[#66736B] block leading-none">Control Center</span>
            <span className="text-xs font-bold text-[#17201B]">Admin Portal</span>
          </div>
        </div>
        <span className="text-[9px] font-mono bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded">
          SUPERADMIN
        </span>
      </div>

      {/* KPI Bento Grid */}
      <div className="p-2.5 grid grid-cols-3 gap-1.5 bg-white border-b border-[#E7EBE8]">
        <div className="p-2 rounded-lg bg-[#F7F8F6] border border-[#E7EBE8] text-center">
          <span className="text-[9px] font-mono text-[#66736B] block">TOTAL</span>
          <span className="font-mono text-xs font-bold text-[#17201B]">{outlets.length}</span>
        </div>
        <div className="p-2 rounded-lg bg-[#E8F5EE] border border-emerald-200 text-center">
          <span className="text-[9px] font-mono text-[#168A4A] block">VERIFIED</span>
          <span className="font-mono text-xs font-bold text-[#168A4A]">{verifiedCount}</span>
        </div>
        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-center">
          <span className="text-[9px] font-mono text-amber-700 block">PENDING</span>
          <span className="font-mono text-xs font-bold text-amber-700">
            {outlets.length - verifiedCount}
          </span>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex border-b border-[#E7EBE8] bg-[#F7F8F6] text-xs font-bold text-[#66736B]">
        <button
          type="button"
          onClick={() => setAdminTab('verification')}
          className={`flex-1 py-1.5 text-center ${
            adminTab === 'verification'
              ? 'text-[#168A4A] border-b-2 border-[#168A4A] bg-white'
              : 'hover:text-[#17201B]'
          }`}
        >
          Verification ({outlets.length})
        </button>
        <button
          type="button"
          onClick={() => setAdminTab('reports')}
          className={`flex-1 py-1.5 text-center ${
            adminTab === 'reports'
              ? 'text-[#168A4A] border-b-2 border-[#168A4A] bg-white'
              : 'hover:text-[#17201B]'
          }`}
        >
          Complaints ({reports.filter((r) => r.status === 'open').length})
        </button>
      </div>

      {/* Admin Content Area */}
      <div className="p-2.5 space-y-2 flex-1 overflow-y-auto">
        {adminTab === 'verification' ? (
          outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="p-3 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs space-y-2"
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <span className="font-bold text-xs text-[#17201B] block leading-tight">
                    {outlet.name}
                  </span>
                  <span className="text-[10px] text-[#66736B] block">
                    FSSAI: <span className="font-mono">{outlet.fssaiNumber}</span>
                  </span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                    outlet.verificationStatus === 'approved'
                      ? 'bg-[#E8F5EE] text-[#168A4A]'
                      : outlet.verificationStatus === 'pending'
                      ? 'bg-amber-50 text-amber-700'
                      : 'bg-red-50 text-red-600'
                  }`}
                >
                  {outlet.verificationStatus}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 pt-1 border-t border-[#E7EBE8]/60">
                <button
                  type="button"
                  onClick={() => onVerifyOutlet(outlet.id, 'approved')}
                  disabled={outlet.verificationStatus === 'approved'}
                  className="flex-1 py-1 bg-[#168A4A] hover:bg-[#0D5C35] text-white text-[10px] font-bold rounded-lg transition-colors disabled:opacity-40"
                >
                  Approve &amp; Verify
                </button>
                <button
                  type="button"
                  onClick={() => onVerifyOutlet(outlet.id, 'flagged')}
                  disabled={outlet.verificationStatus === 'flagged'}
                  className="px-2 py-1 border border-red-300 text-red-600 hover:bg-red-50 text-[10px] font-bold rounded-lg transition-colors disabled:opacity-40"
                >
                  Flag
                </button>
              </div>
            </div>
          ))
        ) : (
          reports.map((rep) => (
            <div
              key={rep.id}
              className="p-3 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs space-y-2"
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <span className="font-bold text-xs text-[#17201B] block leading-tight">
                    {rep.outletName}
                  </span>
                  <span className="text-[10px] text-red-600 block mt-0.5 leading-tight">
                    {rep.issue}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                    rep.status === 'resolved'
                      ? 'bg-[#E8F5EE] text-[#168A4A]'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {rep.status}
                </span>
              </div>

              {rep.status === 'open' && (
                <div className="flex items-center gap-1.5 pt-1 border-t border-[#E7EBE8]/60">
                  <button
                    type="button"
                    onClick={() => onResolveReport(rep.id, 'resolved')}
                    className="flex-1 py-1 bg-[#168A4A] text-white text-[10px] font-bold rounded-lg"
                  >
                    Resolve Issue
                  </button>
                  <button
                    type="button"
                    onClick={() => onResolveReport(rep.id, 'dismissed')}
                    className="px-2 py-1 border border-[#E7EBE8] text-[#66736B] text-[10px] font-bold rounded-lg"
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
