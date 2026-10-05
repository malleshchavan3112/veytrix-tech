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
  Compass,
  Bookmark,
  User,
  Coffee,
  Utensils,
  Leaf,
  Layers,
  FileText,
  History,
  CheckCheck,
} from 'lucide-react';

// =============================================================================
// DATA CONTRACTS (Directly matching Flutter models in lib/core/models/)
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
  isOpen: boolean; // Mutated by Owner in real-time
  verificationStatus: 'approved' | 'pending' | 'flagged'; // Mutated by Admin in real-time
  fssaiNumber: string;
  phone: string;
  isFavorite: boolean; // Mutated by Employee in real-time
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

// Initial Seed Data directly matching Aahar Nearby Flutter E2E Mock State
const INITIAL_OUTLETS: MockOutlet[] = [
  {
    id: 'htl_01',
    name: 'Annapurna Pure Veg Mess',
    category: 'North Indian Thali, Executive Meals',
    address: 'Near DLF Cyber Park, Sector 24',
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
        description: '2 Naan / 4 Rotis, Paneer Curry, Jeera Rice, Salad & Sweet',
        price: 110,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'm3',
        name: 'Curd Rice with Tadka & Lemon Pickle',
        description: 'Fresh tempered curd rice with mustard seeds and curry leaves',
        price: 50,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'm4',
        name: 'Steamed Idli with Sambar & 2 Chutneys',
        description: '3 pieces fluffy steamed idli served with piping hot vegetable sambar',
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
    address: '45, Market Street, Local Hub',
    hub: 'Cyber Park Hub',
    distanceMeters: 420,
    rating: 4.6,
    totalRatings: 98,
    isOpen: true,
    verificationStatus: 'pending', // Starts pending so Admin can verify live!
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
        description: 'Fast executive meal tray for corporate lunch breaks',
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
        description: 'Homestyle moong dal khichdi with ghee tempering',
        price: 60,
        category: 'Lunch',
        isVeg: true,
        isAvailable: true,
      },
      {
        id: 'b2',
        name: 'Aloo Paratha with Curd & Pickle (2 pcs)',
        description: 'Tawa-toasted spiced potato parathas with fresh curd',
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
// MAIN COMPONENT: THREE AUTHENTIC AAHAR PHONES WITH SHARED STATE
// =============================================================================

export function InteractiveProductDemo() {
  const [outlets, setOutlets] = useState<MockOutlet[]>(INITIAL_OUTLETS);
  const [reports, setReports] = useState<MockReport[]>(INITIAL_REPORTS);
  const [activeRole, setActiveRole] = useState<'employee' | 'owner' | 'admin'>('owner');
  const [syncToast, setSyncToast] = useState<string | null>(null);

  // Trigger brief sync toast indicator
  const triggerSyncToast = (msg: string) => {
    setSyncToast(msg);
    setTimeout(() => setSyncToast(null), 3200);
  };

  // Reset entire demo to baseline
  const handleResetDemo = () => {
    setOutlets(INITIAL_OUTLETS);
    setReports(INITIAL_REPORTS);
    triggerSyncToast('Demo reset to initial baseline state');
  };

  // 1. Owner toggles kitchen open / closed
  const handleToggleKitchenStatus = (outletId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const next = !o.isOpen;
          triggerSyncToast(
            next
              ? `${o.name} marked OPEN. Employee feed updated.`
              : `${o.name} marked CLOSED. Diners see Closed badge.`
          );
          return { ...o, isOpen: next };
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
          const changed = updatedMenu.find((m) => m.id === itemId);
          triggerSyncToast(
            `"${changed?.name}" marked ${changed?.isAvailable ? 'IN STOCK' : 'SOLD OUT'}`
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
          triggerSyncToast(`Added "${dishWithId.name}" (₹${dishWithId.price}) to Today's Menu!`);
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
          triggerSyncToast(`Removed "${target?.name}" from menu`);
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

  // 6. Admin verifies outlet
  const handleSetVerification = (outletId: string, status: 'approved' | 'flagged') => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          triggerSyncToast(
            status === 'approved'
              ? `Approved "${o.name}". Verified Partner badge visible in Employee app!`
              : `Flagged "${o.name}" for hygiene re-audit.`
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
    triggerSyncToast(`Report marked ${nextStatus}`);
  };

  // Owner's outlet in the demo is htl_01 (Annapurna)
  const ownerOutlet = outlets.find((o) => o.id === 'htl_01') || outlets[0];

  return (
    <div className="w-full flex flex-col items-center">
      {/* ======================================================================= */}
      {/* TOP LABEL & SYNC FEEDBACK BANNER (Minimalist, per Section 7)            */}
      {/* ======================================================================= */}
      <div className="w-full max-w-5xl mx-auto mb-6 flex flex-col items-center">
        <div className="flex items-center justify-between w-full px-4 py-2 rounded-xl bg-canvas-subtle/80 border border-border-hairline mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#168A4A] animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider text-[#0D5C35] uppercase">
              AAHAR NEARBY · PRODUCT ECOSYSTEM
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-content-tertiary hidden sm:inline">
              REACTIVE FLUTTER RECREATION · ZERO BACKEND
            </span>
            <button
              type="button"
              onClick={handleResetDemo}
              className="font-mono text-[10px] text-content-secondary hover:text-emerald-700 flex items-center gap-1 transition-colors px-2 py-0.5 rounded border border-border-hairline bg-white shadow-2xs"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset State</span>
            </button>
          </div>
        </div>

        {/* Live Ecosystem Cross-Role Notification Toast */}
        {syncToast && (
          <div className="w-full px-4 py-2 rounded-xl bg-[#168A4A] text-white font-mono text-xs flex items-center justify-between shadow-lg animate-fadeIn mb-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-200 flex-shrink-0" />
              <span className="line-clamp-1">{syncToast}</span>
            </div>
            <button
              type="button"
              onClick={() => setSyncToast(null)}
              className="text-emerald-200 hover:text-white ml-2"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* ======================================================================= */}
      {/* THREE AUTHENTIC PHONES PRESENTATION (Desktop: 3 Phones Side-by-Side)   */}
      {/* ======================================================================= */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start justify-center w-full max-w-6xl mx-auto py-2">
        {/* PHONE 01: EMPLOYEE */}
        <div
          onClick={() => setActiveRole('employee')}
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            activeRole === 'employee'
              ? 'scale-105 z-20 opacity-100'
              : 'scale-[0.95] z-10 opacity-85 hover:opacity-100 hover:scale-[0.98]'
          }`}
        >
          <div className="mb-3 text-center">
            <span className="font-mono text-xs font-bold tracking-wider text-[#168A4A] uppercase block">
              01 // EMPLOYEE
            </span>
            <span className="text-xs text-content-secondary font-medium">
              Hyperlocal Discovery &amp; Today&apos;s Menu
            </span>
          </div>

          <AaharPhoneFrame active={activeRole === 'employee'}>
            <AaharEmployeeApp
              outlets={outlets}
              onToggleFavorite={handleToggleFavorite}
            />
          </AaharPhoneFrame>
        </div>

        {/* PHONE 02: OWNER (Center Phone by default) */}
        <div
          onClick={() => setActiveRole('owner')}
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            activeRole === 'owner'
              ? 'scale-105 z-20 opacity-100'
              : 'scale-[0.95] z-10 opacity-85 hover:opacity-100 hover:scale-[0.98]'
          }`}
        >
          <div className="mb-3 text-center">
            <span className="font-mono text-xs font-bold tracking-wider text-[#168A4A] uppercase block">
              02 // MESS OWNER
            </span>
            <span className="text-xs text-content-secondary font-medium">
              Daily Menu &amp; Kitchen Operations
            </span>
          </div>

          <AaharPhoneFrame active={activeRole === 'owner'}>
            <AaharOwnerApp
              outlet={ownerOutlet}
              onToggleKitchen={() => handleToggleKitchenStatus(ownerOutlet.id)}
              onToggleItem={(itemId) => handleToggleItemAvailability(ownerOutlet.id, itemId)}
              onAddDish={(dish) => handleAddDish(ownerOutlet.id, dish)}
              onDeleteDish={(itemId) => handleDeleteDish(ownerOutlet.id, itemId)}
            />
          </AaharPhoneFrame>
        </div>

        {/* PHONE 03: ADMIN */}
        <div
          onClick={() => setActiveRole('admin')}
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
            activeRole === 'admin'
              ? 'scale-105 z-20 opacity-100'
              : 'scale-[0.95] z-10 opacity-85 hover:opacity-100 hover:scale-[0.98]'
          }`}
        >
          <div className="mb-3 text-center">
            <span className="font-mono text-xs font-bold tracking-wider text-[#168A4A] uppercase block">
              03 // PLATFORM ADMIN
            </span>
            <span className="text-xs text-content-secondary font-medium">
              Governance &amp; FSSAI Verification
            </span>
          </div>

          <AaharPhoneFrame active={activeRole === 'admin'}>
            <AaharAdminApp
              outlets={outlets}
              reports={reports}
              onVerifyOutlet={handleSetVerification}
              onResolveReport={handleResolveReport}
            />
          </AaharPhoneFrame>
        </div>
      </div>

      {/* ======================================================================= */}
      {/* MOBILE VIEWPORT: SINGLE LARGE INTERACTIVE PHONE (Per Section 18)        */}
      {/* ======================================================================= */}
      <div className="md:hidden flex flex-col items-center w-full">
        {/* Compact Mobile Segment Switcher */}
        <div className="grid grid-cols-3 gap-1.5 w-full max-w-[325px] mb-3 p-1 rounded-xl bg-canvas-subtle border border-border-hairline text-center text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveRole('employee')}
            className={`py-1.5 rounded-lg transition-colors ${
              activeRole === 'employee'
                ? 'bg-[#168A4A] text-white shadow-2xs'
                : 'text-content-secondary hover:text-content-primary'
            }`}
          >
            Employee
          </button>
          <button
            type="button"
            onClick={() => setActiveRole('owner')}
            className={`py-1.5 rounded-lg transition-colors ${
              activeRole === 'owner'
                ? 'bg-[#168A4A] text-white shadow-2xs'
                : 'text-content-secondary hover:text-content-primary'
            }`}
          >
            Owner
          </button>
          <button
            type="button"
            onClick={() => setActiveRole('admin')}
            className={`py-1.5 rounded-lg transition-colors ${
              activeRole === 'admin'
                ? 'bg-[#168A4A] text-white shadow-2xs'
                : 'text-content-secondary hover:text-content-primary'
            }`}
          >
            Admin
          </button>
        </div>

        {/* Single Focused Smartphone */}
        <AaharPhoneFrame active={true}>
          {activeRole === 'employee' && (
            <AaharEmployeeApp
              outlets={outlets}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
          {activeRole === 'owner' && (
            <AaharOwnerApp
              outlet={ownerOutlet}
              onToggleKitchen={() => handleToggleKitchenStatus(ownerOutlet.id)}
              onToggleItem={(itemId) => handleToggleItemAvailability(ownerOutlet.id, itemId)}
              onAddDish={(dish) => handleAddDish(ownerOutlet.id, dish)}
              onDeleteDish={(itemId) => handleDeleteDish(ownerOutlet.id, itemId)}
            />
          )}
          {activeRole === 'admin' && (
            <AaharAdminApp
              outlets={outlets}
              reports={reports}
              onVerifyOutlet={handleSetVerification}
              onResolveReport={handleResolveReport}
            />
          )}
        </AaharPhoneFrame>

        {/* Subtitle label */}
        <div className="mt-3 text-center">
          <span className="font-mono text-[11px] font-bold text-[#168A4A] uppercase block">
            {activeRole === 'employee' && '01 // EMPLOYEE · Hyperlocal Discovery'}
            {activeRole === 'owner' && '02 // MESS OWNER · Operations & Menu Dispatch'}
            {activeRole === 'admin' && '03 // PLATFORM ADMIN · Governance & Audit'}
          </span>
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SMARTPHONE SHELL: AUTHENTIC HARDWARE PROPORTIONS & STATUS BARS
// =============================================================================

function AaharPhoneFrame({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <div
      className={`w-[305px] sm:w-[325px] h-[640px] rounded-[44px] bg-[#0c1015] p-3 shadow-2xl border-4 transition-all duration-300 relative flex flex-col select-none ${
        active
          ? 'border-[#168A4A] shadow-[#168A4A]/15 ring-4 ring-[#168A4A]/25'
          : 'border-slate-800 shadow-xl'
      }`}
    >
      {/* Top Dynamic Island / Camera & Speaker */}
      <div className="w-24 h-4 bg-black rounded-full mx-auto mb-1 flex items-center justify-between px-2.5 flex-shrink-0 z-30">
        <div className="w-2 h-2 rounded-full bg-slate-900" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
      </div>

      {/* Screen Viewport with Authentic Aahar Canvas Background */}
      <div className="relative w-full flex-1 rounded-[32px] overflow-hidden bg-[#F7F8F6] flex flex-col border border-black shadow-inner">
        {/* Mobile Status Bar */}
        <div className="w-full h-5 px-5 pt-0.5 flex items-center justify-between text-[10px] font-mono text-[#17201B] bg-white flex-shrink-0 border-b border-[#E7EBE8]/60">
          <span className="font-bold">12:30</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-sans font-semibold">5G</span>
            <div className="w-4 h-2 rounded-2xs border border-[#17201B] p-0.5 flex items-center">
              <div className="h-full w-full bg-[#168A4A] rounded-3xs" />
            </div>
          </div>
        </div>

        {/* Scrollable Mobile Application Body */}
        <div className="w-full flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </div>

        {/* Bottom Gesture Indicator Bar */}
        <div className="w-full h-3.5 bg-white flex items-center justify-center flex-shrink-0 border-t border-[#E7EBE8]/40">
          <div className="w-28 h-1 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 01: EMPLOYEE APP (Faithful recreation of Flutter E03 - E06)
// =============================================================================

function AaharEmployeeApp({
  outlets,
  onToggleFavorite,
}: {
  outlets: MockOutlet[];
  onToggleFavorite: (id: string) => void;
}) {
  const [selectedOutletId, setSelectedOutletId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bottomNavIndex, setBottomNavIndex] = useState(0);
  const [showDirections, setShowDirections] = useState(false);

  const selectedOutlet = outlets.find((o) => o.id === selectedOutletId);

  // Filtered outlets
  const filteredOutlets = useMemo(() => {
    return outlets.filter((o) => {
      // Bottom nav 'Saved' tab
      if (bottomNavIndex === 2 && !o.isFavorite) return false;

      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Pure Veg' && !o.category.toLowerCase().includes('pure veg')) return false;
        if (selectedCategory === 'Mess' && !o.category.toLowerCase().includes('mess')) return false;
        if (selectedCategory === 'Breakfast' && !o.menu.some((m) => m.category === 'Breakfast')) return false;
        if (selectedCategory === 'Lunch' && !o.menu.some((m) => m.category === 'Lunch')) return false;
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
  }, [outlets, searchQuery, selectedCategory, bottomNavIndex]);

  // DETAIL SCREEN (outlet_detail_screen.dart)
  if (selectedOutlet) {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        {/* Top App Bar */}
        <div className="px-3 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-20">
          <button
            type="button"
            onClick={() => {
              setSelectedOutletId(null);
              setShowDirections(false);
            }}
            className="flex items-center gap-1 text-xs font-bold text-[#17201B] hover:text-[#168A4A]"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Back</span>
          </button>
          <span className="font-bold text-xs text-[#17201B] truncate max-w-[160px]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {selectedOutlet.name}
          </span>
          <button
            type="button"
            onClick={() => onToggleFavorite(selectedOutlet.id)}
            className="p-1 rounded-full hover:bg-slate-50"
          >
            <Heart
              className={`w-4 h-4 ${
                selectedOutlet.isFavorite ? 'fill-red-500 text-red-500' : 'text-[#66736B]'
              }`}
            />
          </button>
        </div>

        {/* Outlet Header Card */}
        <div className="p-3.5 bg-white border-b border-[#E7EBE8]">
          <div className="flex items-center gap-1.5 mb-0.5">
            <h3 className="font-bold text-sm text-[#17201B] leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {selectedOutlet.name}
            </h3>
            {selectedOutlet.verificationStatus === 'approved' && (
              <CheckCircle2 className="w-3.5 h-3.5 text-[#168A4A] flex-shrink-0" />
            )}
          </div>
          <p className="text-[11px] text-[#66736B] leading-tight mb-2.5">
            {selectedOutlet.address}
          </p>

          <div className="flex items-center justify-between text-[11px]">
            <span
              className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                selectedOutlet.isOpen
                  ? 'bg-[#F0FDF4] text-[#1F9D55]'
                  : 'bg-red-50 text-red-600'
              }`}
            >
              {selectedOutlet.isOpen ? '● Open Now' : '● Closed'}
            </span>
            <span className="text-[#66736B] font-semibold">★ {selectedOutlet.rating} ({selectedOutlet.totalRatings})</span>
            <span className="font-mono text-[#168A4A] font-bold text-[10px]">{selectedOutlet.distanceMeters}m walk</span>
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
              className="p-1.5 border border-[#E7EBE8] rounded-lg text-[#168A4A] hover:bg-slate-50 flex items-center justify-center"
            >
              <PhoneCall className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Turn-by-Turn Route Box */}
          {showDirections && (
            <div className="mt-2.5 p-2.5 rounded-xl bg-[#E8F5EE] border border-emerald-200 text-[10px] text-[#0D5C35] animate-fadeIn">
              <span className="font-bold block mb-1">WALKING DIRECTIONS (4 MIN):</span>
              <p className="leading-relaxed">Exit Cyber Park via East Pedestrian Gate → 180m on Sector 33 Main Avenue → Turn right at Landmark ATM. Destination is on your left.</p>
            </div>
          )}
        </div>

        {/* Menu Items List */}
        <div className="p-3 flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#17201B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Today&apos;s Live Menu
            </span>
            <span className="text-[10px] font-mono text-[#168A4A] bg-[#E8F5EE] px-1.5 py-0.5 rounded font-bold">
              {selectedOutlet.menu.length} DISHES
            </span>
          </div>

          <div className="space-y-2">
            {selectedOutlet.menu.map((dish) => (
              <div
                key={dish.id}
                className="p-2.5 bg-white rounded-xl border border-[#E7EBE8] flex items-start justify-between gap-2 shadow-2xs"
              >
                <div className="flex items-start gap-2 flex-1">
                  {/* Veg Indicator Box */}
                  <span className="w-3.5 h-3.5 rounded-xs border border-[#168A4A] flex items-center justify-center p-0.5 mt-0.5 flex-shrink-0">
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
                    className={`text-[9px] font-bold mt-1 px-1.5 py-0.5 rounded ${
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

  // DISCOVERY HOME FEED (employee_home_screen.dart)
  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* 1. Location Header (location_header.dart) */}
      <div className="px-3.5 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#E8F5EE] flex items-center justify-center flex-shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#168A4A]" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-xs text-[#17201B] leading-none" style={{ fontFamily: 'Public Sans, sans-serif' }}>
                Cyber Park, Sector 33
              </span>
              <span className="text-[10px] text-[#66736B]">▼</span>
            </div>
            <span className="font-mono text-[9px] text-[#66736B] block mt-0.5">
              350m radius · GPS Active
            </span>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#EFF2EF] flex items-center justify-center relative">
          <Clock className="w-3.5 h-3.5 text-[#17201B]" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#F47B20] ring-1 ring-white" />
        </div>
      </div>

      {/* 2. Search Field (TextField in Flutter) */}
      <div className="px-3 py-2 bg-white border-b border-[#E7EBE8]">
        <div className="h-8 rounded-full bg-white border border-[#E7EBE8] px-3 flex items-center gap-2 shadow-2xs">
          <Search className="w-3.5 h-3.5 text-[#168A4A] flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search food, mess, hotel or outlet"
            className="w-full text-xs text-[#17201B] placeholder-[#66736B] bg-transparent outline-none font-medium"
          />
          {searchQuery && (
            <button type="button" onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600 text-xs">
              ×
            </button>
          )}
        </div>
      </div>

      {/* 3. Category Filter Chips (FilterChipsCarousel) */}
      <div className="px-3 py-2 bg-white border-b border-[#E7EBE8] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {['All', 'Lunch', 'Breakfast', 'Pure Veg', 'Mess'].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`h-7 px-3 rounded-full text-[11px] font-semibold flex items-center gap-1 whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#168A4A] text-white shadow-xs'
                : 'bg-white border border-[#E7EBE8] text-[#66736B] hover:bg-slate-50'
            }`}
          >
            {cat === 'Pure Veg' && <Leaf className="w-3 h-3 text-[#1F9D55]" />}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      {/* 4. Section Title & Count */}
      <div className="px-3.5 pt-2.5 pb-1 flex items-center justify-between">
        <span className="font-extrabold text-[11px] text-[#17201B] tracking-wider uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {bottomNavIndex === 2 ? `SAVED OUTLETS (${filteredOutlets.length})` : `NEARBY FOOD (${filteredOutlets.length})`}
        </span>
        <span className="text-[10px] text-[#66736B]">
          {filteredOutlets.length} outlet{filteredOutlets.length === 1 ? '' : 's'}
        </span>
      </div>

      {/* 5. Outlets Feed (HotelCard in Flutter) */}
      <div className="p-3 space-y-2.5 flex-1">
        {filteredOutlets.length === 0 ? (
          <div className="p-8 text-center text-xs text-[#66736B]">
            No outlets found matching &quot;{searchQuery || selectedCategory}&quot;
          </div>
        ) : (
          filteredOutlets.map((outlet) => {
            const topDish = outlet.menu[0];
            return (
              <div
                key={outlet.id}
                onClick={() => setSelectedOutletId(outlet.id)}
                className="bg-white rounded-2xl border border-[#E7EBE8] shadow-2xs cursor-pointer hover:border-[#168A4A]/60 transition-all overflow-hidden"
              >
                {/* Card Top Section */}
                <div className="p-3">
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-[13px] text-[#17201B] leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {outlet.name}
                        </span>
                        {outlet.verificationStatus === 'approved' && (
                          <CheckCircle2 className="w-3 h-3 text-[#168A4A] flex-shrink-0" />
                        )}
                      </div>
                      <span className="text-[10.5px] text-[#66736B] block leading-tight mt-0.5">
                        {outlet.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(outlet.id);
                      }}
                      className="p-1 rounded-full hover:bg-slate-50"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          outlet.isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-300'
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
                    <span className="text-[#66736B] font-semibold">★ {outlet.rating}</span>
                    <span className="font-mono text-[#168A4A] font-bold text-[10px]">{outlet.distanceMeters}m</span>
                  </div>

                  {/* Today's Special Banner Row */}
                  {topDish && (
                    <div className="mt-2 pt-2 border-t border-[#E7EBE8]/60 flex items-center justify-between text-[10.5px]">
                      <div className="flex items-center gap-1.5 truncate flex-1">
                        <span className="w-3 h-3 rounded-2xs border border-[#168A4A] flex items-center justify-center p-0.5 flex-shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#168A4A]" />
                        </span>
                        <span className="font-medium text-[#17201B] truncate">
                          {topDish.name}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#168A4A] flex-shrink-0 ml-1">
                        ₹{topDish.price}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 6. Authentic Bottom Navigation Bar (app_bottom_nav_bar.dart) */}
      <div className="h-12 bg-white border-t border-[#E7EBE8] flex items-center justify-around flex-shrink-0 px-2">
        <button
          type="button"
          onClick={() => setBottomNavIndex(0)}
          className={`flex flex-col items-center justify-center ${
            bottomNavIndex === 0 ? 'text-[#168A4A]' : 'text-[#66736B]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span className="text-[9px] font-bold mt-0.5">Explore</span>
        </button>
        <button
          type="button"
          onClick={() => setBottomNavIndex(1)}
          className={`flex flex-col items-center justify-center ${
            bottomNavIndex === 1 ? 'text-[#168A4A]' : 'text-[#66736B]'
          }`}
        >
          <Search className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">Search</span>
        </button>
        <button
          type="button"
          onClick={() => setBottomNavIndex(2)}
          className={`flex flex-col items-center justify-center ${
            bottomNavIndex === 2 ? 'text-[#168A4A]' : 'text-[#66736B]'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span className="text-[9px] font-bold mt-0.5">Saved</span>
        </button>
        <button
          type="button"
          onClick={() => setBottomNavIndex(3)}
          className={`flex flex-col items-center justify-center relative ${
            bottomNavIndex === 3 ? 'text-[#168A4A]' : 'text-[#66736B]'
          }`}
        >
          <User className="w-4 h-4" />
          <span className="absolute top-0 right-1 w-1.5 h-1.5 rounded-full bg-[#F47B20]" />
          <span className="text-[9px] font-medium mt-0.5">Profile</span>
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 02: OWNER APP (Faithful recreation of Flutter H04 - H06)
// =============================================================================

function AaharOwnerApp({
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

  // Submit dish form
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

  // SCREEN: ADD MENU ITEM (add_menu_item_screen.dart)
  if (activeScreen === 'add-dish') {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        <div className="px-3 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-20">
          <button
            type="button"
            onClick={() => setActiveScreen('dashboard')}
            className="flex items-center gap-1 text-xs font-bold text-[#17201B]"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Cancel</span>
          </button>
          <span className="font-bold text-xs text-[#17201B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Add Today&apos;s Dish
          </span>
          <div className="w-8" />
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
                className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none focus:border-[#168A4A]"
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
                  className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-[#E7EBE8] text-xs font-mono font-bold text-[#168A4A] outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-[#66736B] block mb-1">MEAL SLOT</label>
                <select
                  value={dishCategory}
                  onChange={(e) => setDishCategory(e.target.value as any)}
                  className="w-full px-2 py-1.5 rounded-xl bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none"
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
                className="w-full px-2.5 py-1.5 rounded-xl bg-white border border-[#E7EBE8] text-xs text-[#17201B] outline-none focus:border-[#168A4A]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#168A4A] hover:bg-[#0D5C35] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            Publish to Today&apos;s Menu
          </button>
        </form>
      </div>
    );
  }

  // SCREEN: AI MENU ASSISTANT (ai_menu_assistant_screen.dart)
  if (activeScreen === 'ai-scanner') {
    return (
      <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
        <div className="px-3 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between sticky top-0 z-20">
          <button
            type="button"
            onClick={() => setActiveScreen('dashboard')}
            className="flex items-center gap-1 text-xs font-bold text-[#17201B]"
          >
            <ArrowLeft className="w-4 h-4 text-[#168A4A]" />
            <span>Cancel</span>
          </button>
          <span className="font-bold text-xs text-[#17201B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            AI Menu Assistant
          </span>
          <div className="w-8" />
        </div>

        <div className="p-3.5 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl border border-[#E7EBE8]">
              <span className="text-[10px] font-mono font-bold text-[#F47B20] block mb-1">
                CHALKBOARD OCR &amp; PARSER
              </span>
              <p className="text-xs text-[#17201B]">
                Snap your chalkboard menu or paste raw kitchen notes; Gemini parses items &amp; prices.
              </p>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl text-white font-mono text-[11px] space-y-1">
              <span className="text-slate-400 block text-[9px]">MOCK CHALKBOARD INPUT:</span>
              <p className="text-emerald-400">&gt; &quot;Special Ghee Roast Dosa 75 Rs with 2 Chutneys &amp; Sambar&quot;</p>
            </div>

            {isScanning && (
              <div className="p-3 bg-[#E8F5EE] rounded-xl border border-emerald-200 text-center animate-pulse">
                <span className="font-bold text-xs text-[#168A4A] block">
                  Analyzing menu with Gemini AI...
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

  // SCREEN: OWNER DASHBOARD (owner_dashboard_screen.dart)
  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* 1. Partner Header AppBar */}
      <div className="px-3.5 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-[#66736B] block leading-none">Good Afternoon</span>
          <span className="text-xs font-bold text-[#17201B] truncate" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {outlet.name}
          </span>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#E8F5EE] text-[#168A4A] flex items-center justify-center font-bold text-xs">
          AP
        </div>
      </div>

      <div className="p-3 space-y-2.5 flex-1">
        {/* Verification Status Pill */}
        <div className="px-3 py-1.5 bg-[#E8F5EE] rounded-xl border border-emerald-200 flex items-center justify-between text-[10.5px]">
          <span className="font-bold text-[#168A4A] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Verified Partner
          </span>
          <span className="font-mono text-[9.5px] text-[#0D5C35]">Cyber Park Hub</span>
        </div>

        {/* Kitchen Status Toggle Card */}
        <div className="p-3 bg-white rounded-2xl border border-[#E7EBE8] shadow-2xs">
          <div className="flex items-center justify-between mb-1.5">
            <div>
              <span className="text-[10px] font-bold text-[#66736B] block">KITCHEN SERVICE</span>
              <span className="text-xs font-bold text-[#17201B]">
                {outlet.isOpen ? 'Kitchen Open / Serving Diners' : 'Kitchen Closed / Off-peak'}
              </span>
            </div>
            <button
              type="button"
              onClick={onToggleKitchen}
              className={`px-3 py-1 rounded-lg text-[10.5px] font-bold transition-all flex items-center gap-1.5 ${
                outlet.isOpen
                  ? 'bg-[#168A4A] text-white shadow-2xs'
                  : 'bg-red-600 text-white shadow-2xs'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>{outlet.isOpen ? 'OPEN' : 'CLOSED'}</span>
            </button>
          </div>
          <span className="text-[10px] text-[#66736B] block">
            Syncs to diners in real-time across the platform.
          </span>
        </div>

        {/* Quick Action Buttons: Add Item & AI Assistant */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveScreen('add-dish')}
            className="p-2 bg-[#168A4A] hover:bg-[#0D5C35] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Dish</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen('ai-scanner')}
            className="p-2 bg-white rounded-xl border border-[#E7EBE8] hover:border-[#F47B20] text-[#17201B] text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F47B20]" />
            <span>AI Menu Scan</span>
          </button>
        </div>

        {/* Today's Menu Inventory Control */}
        <div className="p-3 bg-white rounded-2xl border border-[#E7EBE8]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#17201B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Today&apos;s Live Menu
            </span>
            <span className="text-[10px] font-mono text-[#168A4A] bg-[#E8F5EE] px-1.5 py-0.5 rounded font-bold">
              {outlet.menu.length} ACTIVE
            </span>
          </div>

          <div className="space-y-2">
            {outlet.menu.map((item) => (
              <div
                key={item.id}
                className="p-2 rounded-xl bg-[#F7F8F6] border border-[#E7EBE8] flex items-center justify-between gap-1.5"
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
                    className={`px-2 py-0.5 rounded text-[9.5px] font-bold transition-colors ${
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
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Owner Bottom Nav Bar (app_bottom_nav_bar.dart) */}
      <div className="h-12 bg-white border-t border-[#E7EBE8] flex items-center justify-around flex-shrink-0 px-2">
        <button type="button" className="flex flex-col items-center justify-center text-[#168A4A]">
          <Layers className="w-4 h-4" />
          <span className="text-[9px] font-bold mt-0.5">Dashboard</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveScreen('add-dish')}
          className="flex flex-col items-center justify-center text-[#66736B]"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">Add Menu</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#66736B]">
          <History className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">History</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#66736B]">
          <Store className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">My Mess</span>
        </button>
      </div>
    </div>
  );
}

// =============================================================================
// SCREEN 03: ADMIN APP (Faithful recreation of Flutter A02 - A03)
// =============================================================================

function AaharAdminApp({
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

  const verifiedCount = outlets.filter((o) => o.verificationStatus === 'approved').length;

  return (
    <div className="flex-1 flex flex-col bg-[#F7F8F6] text-left">
      {/* 1. Admin Top AppBar */}
      <div className="px-3.5 py-2.5 bg-white border-b border-[#E7EBE8] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#168A4A]" />
          <div>
            <span className="text-[9.5px] font-mono text-[#66736B] block leading-none">SuperAdmin Portal</span>
            <span className="text-xs font-bold text-[#17201B]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Control Center
            </span>
          </div>
        </div>
        <span className="text-[9px] font-mono bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">
          ZONE 01
        </span>
      </div>

      {/* 2. Platform Health Bento Grid (admin_dashboard_screen.dart) */}
      <div className="p-2.5 grid grid-cols-3 gap-1.5 bg-white border-b border-[#E7EBE8]">
        <div className="p-1.5 rounded-lg bg-[#F7F8F6] border border-[#E7EBE8] text-center">
          <span className="text-[8.5px] font-mono text-[#66736B] block">TOTAL</span>
          <span className="font-mono text-xs font-bold text-[#17201B]">{outlets.length}</span>
        </div>
        <div className="p-1.5 rounded-lg bg-[#E8F5EE] border border-emerald-200 text-center">
          <span className="text-[8.5px] font-mono text-[#168A4A] block">VERIFIED</span>
          <span className="font-mono text-xs font-bold text-[#168A4A]">{verifiedCount}</span>
        </div>
        <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200 text-center">
          <span className="text-[8.5px] font-mono text-amber-700 block">PENDING</span>
          <span className="font-mono text-xs font-bold text-amber-700">
            {outlets.length - verifiedCount}
          </span>
        </div>
      </div>

      {/* 3. Sub Tabs */}
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

      {/* 4. Verification Queue / Complaints Stream */}
      <div className="p-2.5 space-y-2 flex-1 overflow-y-auto">
        {adminTab === 'verification' ? (
          outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="p-2.5 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs space-y-2"
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <span className="font-bold text-xs text-[#17201B] block leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {outlet.name}
                  </span>
                  <span className="text-[10px] text-[#66736B] block mt-0.5">
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
              className="p-2.5 bg-white rounded-xl border border-[#E7EBE8] shadow-2xs space-y-2"
            >
              <div className="flex items-start justify-between gap-1">
                <div>
                  <span className="font-bold text-xs text-[#17201B] block leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
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

      {/* Admin Bottom Nav Bar (app_bottom_nav_bar.dart) */}
      <div className="h-12 bg-white border-t border-[#E7EBE8] flex items-center justify-around flex-shrink-0 px-2">
        <button type="button" className="flex flex-col items-center justify-center text-[#168A4A]">
          <Layers className="w-4 h-4" />
          <span className="text-[9px] font-bold mt-0.5">Dashboard</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#66736B]">
          <CheckCheck className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">Verify</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#66736B]">
          <Utensils className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">Audits</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#66736B]">
          <User className="w-4 h-4" />
          <span className="text-[9px] font-medium mt-0.5">Profile</span>
        </button>
      </div>
    </div>
  );
}
