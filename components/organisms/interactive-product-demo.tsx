'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
  Filter,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Smartphone,
  Info,
  RefreshCw,
} from 'lucide-react';

export type DemoRole = 'employee' | 'owner' | 'admin';

interface MenuItemState {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  isAvailable: boolean;
}

interface VerificationItem {
  id: string;
  name: string;
  hub: string;
  distance: string;
  status: 'pending' | 'verified' | 'flagged';
  fssaiNumber: string;
  submittedAt: string;
}

const INITIAL_MENU_ITEMS: MenuItemState[] = [
  { id: 'm1', name: 'Executive South Indian Thali', category: 'Lunch', price: 80, isVeg: true, isAvailable: true },
  { id: 'm2', name: 'Special Paneer Butter Masala Meal', category: 'Lunch', price: 110, isVeg: true, isAvailable: true },
  { id: 'm3', name: 'Curd Rice with Tadka & Pickle', category: 'Light Lunch', price: 50, isVeg: true, isAvailable: true },
  { id: 'm4', name: 'Steamed Idli with Sambar (3 pcs)', category: 'Breakfast', price: 40, isVeg: true, isAvailable: false },
];

const INITIAL_VERIFICATIONS: VerificationItem[] = [
  {
    id: 'v1',
    name: 'Sri Udupi Grand Pure Veg',
    hub: 'Cyber Park, Sector 33',
    distance: '280 m',
    status: 'verified',
    fssaiNumber: '10822001000492',
    submittedAt: 'Today, 09:30 AM',
  },
  {
    id: 'v2',
    name: 'Annapurna Executive Mess',
    hub: 'Cyber Park, Sector 33',
    distance: '420 m',
    status: 'pending',
    fssaiNumber: '10824003001844',
    submittedAt: 'Today, 11:15 AM',
  },
  {
    id: 'v3',
    name: 'Balaji Tiffin & Meals',
    hub: 'DLF Phase 2 Hub',
    distance: '850 m',
    status: 'flagged',
    fssaiNumber: '10821004000312',
    submittedAt: 'Yesterday, 04:20 PM',
  },
];

export function InteractiveProductDemo() {
  const [activeRole, setActiveRole] = useState<DemoRole>('employee');
  const [employeeSubView, setEmployeeSubView] = useState<'feed' | 'detail'>('feed');
  const [employeeSearch, setEmployeeSearch] = useState('');
  const [employeeFilter, setEmployeeFilter] = useState('All');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDirections, setShowDirections] = useState(false);

  // Owner state
  const [isKitchenOpen, setIsKitchenOpen] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItemState[]>(INITIAL_MENU_ITEMS);
  const [aiScanning, setAiScanning] = useState(false);
  const [ownerToast, setOwnerToast] = useState<string | null>(null);

  // Admin state
  const [verifications, setVerifications] = useState<VerificationItem[]>(INITIAL_VERIFICATIONS);
  const [adminToast, setAdminToast] = useState<string | null>(null);

  // Toggle item availability
  const toggleItemAvailability = (id: string) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isAvailable: !item.isAvailable } : item))
    );
  };

  // Simulate AI chalkboard scan
  const handleSimulateAiScan = () => {
    setAiScanning(true);
    setTimeout(() => {
      setAiScanning(false);
      const newItem: MenuItemState = {
        id: `ai-${Date.now()}`,
        name: 'Mysore Masala Dosa with Chutney',
        category: 'Daily Special',
        price: 65,
        isVeg: true,
        isAvailable: true,
      };
      setMenuItems((prev) => [newItem, ...prev]);
      setOwnerToast('AI parsed 1 new special from chalkboard snapshot');
      setTimeout(() => setOwnerToast(null), 3500);
    }, 1200);
  };

  // Admin verification actions
  const handleVerify = (id: string, action: 'verified' | 'flagged') => {
    setVerifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: action } : item))
    );
    setAdminToast(
      action === 'verified'
        ? 'Outlet approved & verified for Cyber Park zone'
        : 'Audit flagged: FSSAI document re-verification requested'
    );
    setTimeout(() => setAdminToast(null), 3500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ========================================================================= */}
      {/* 1. COMPACT SIMULATED DEMO CHROME & ROLE SELECTOR                         */}
      {/* ========================================================================= */}
      <div className="w-full max-w-4xl mx-auto mb-8 sm:mb-12">
        {/* Subtle environment disclaimer */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 rounded-xl bg-canvas-subtle/80 border border-border-hairline mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-emerald-800">
              AAHAR NEARBY · THREE-ROLE MOBILE ECOSYSTEM
            </span>
          </div>
          <span className="font-mono text-[10px] sm:text-[11px] text-content-tertiary">
            SIMULATED ENVIRONMENT · DEMO DATA ONLY
          </span>
        </div>

        {/* 3-Role Editorial Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-1.5 rounded-2xl bg-canvas-subtle/60 border border-border-hairline">
          {/* Role 1: Employee */}
          <button
            type="button"
            onClick={() => setActiveRole('employee')}
            className={`flex flex-col items-start text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
              activeRole === 'employee'
                ? 'bg-white shadow-md border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-mono text-[11px] font-bold text-emerald-700">01 // EMPLOYEE</span>
              <span className={`w-2 h-2 rounded-full ${activeRole === 'employee' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-content-primary">
              Hyperlocal Discovery
            </span>
            <span className="text-[11px] text-content-tertiary mt-0.5 line-clamp-1">
              Workplace search &amp; today&apos;s menu
            </span>
          </button>

          {/* Role 2: Owner */}
          <button
            type="button"
            onClick={() => setActiveRole('owner')}
            className={`flex flex-col items-start text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
              activeRole === 'owner'
                ? 'bg-white shadow-md border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-mono text-[11px] font-bold text-emerald-700">02 // MESS OWNER</span>
              <span className={`w-2 h-2 rounded-full ${activeRole === 'owner' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-content-primary">
              Menu Operations
            </span>
            <span className="text-[11px] text-content-tertiary mt-0.5 line-clamp-1">
              Kitchen toggle &amp; menu publishing
            </span>
          </button>

          {/* Role 3: Admin */}
          <button
            type="button"
            onClick={() => setActiveRole('admin')}
            className={`flex flex-col items-start text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
              activeRole === 'admin'
                ? 'bg-white shadow-md border border-emerald-600/30 ring-1 ring-emerald-600/20'
                : 'hover:bg-white/60 text-content-secondary'
            }`}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className="font-mono text-[11px] font-bold text-emerald-700">03 // PLATFORM ADMIN</span>
              <span className={`w-2 h-2 rounded-full ${activeRole === 'admin' ? 'bg-emerald-600' : 'bg-transparent'}`} />
            </div>
            <span className="font-display text-sm sm:text-base font-bold text-content-primary">
              Governance &amp; Verification
            </span>
            <span className="text-[11px] text-content-tertiary mt-0.5 line-clamp-1">
              FSSAI compliance &amp; audit queue
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE THREE MOBILE DEVICES PRESENTATION                                  */}
      {/* ========================================================================= */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Desktop & Tablet: Three vertical smartphones composition */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-center justify-center pt-2 pb-8">
          {/* ------------------------------------------------------------------- */}
          {/* PHONE 01: EMPLOYEE / DINER                                         */}
          {/* ------------------------------------------------------------------- */}
          <div
            onClick={() => setActiveRole('employee')}
            className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeRole === 'employee'
                ? 'scale-105 z-20 opacity-100'
                : 'scale-95 opacity-80 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            {/* Editorial device label */}
            <div className="mb-3 text-center">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
                01 // EMPLOYEE
              </span>
              <span className="font-display text-xs text-content-secondary font-medium">
                Discovery &amp; Daily Menu
              </span>
            </div>

            {/* Smartphone Frame */}
            <div
              className={`w-[260px] lg:w-[285px] aspect-[9/19.5] rounded-[38px] bg-slate-950 p-2.5 shadow-2xl border-4 transition-all duration-300 relative ${
                activeRole === 'employee'
                  ? 'border-emerald-600/70 shadow-emerald-950/20 ring-4 ring-emerald-500/20'
                  : 'border-slate-800 shadow-xl'
              }`}
            >
              {/* Dynamic Island / Speaker */}
              <div className="w-20 h-3.5 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Real Aahar Screen Display */}
              <div className="relative w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-slate-900">
                <Image
                  src={
                    employeeSubView === 'detail'
                      ? '/projects/aahar-nearby/menu_details.png'
                      : '/projects/aahar-nearby/screen_employee_portal.png'
                  }
                  alt="Aahar Nearby Authentic Employee Discovery App Screen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 260px, 285px"
                  priority
                />
              </div>

              {/* Active Indicator Glow Badge */}
              {activeRole === 'employee' && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  ACTIVE PREVIEW
                </div>
              )}
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* PHONE 02: HOTEL / MESS OWNER                                       */}
          {/* ------------------------------------------------------------------- */}
          <div
            onClick={() => setActiveRole('owner')}
            className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeRole === 'owner'
                ? 'scale-105 z-20 opacity-100'
                : 'scale-95 opacity-80 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            {/* Editorial device label */}
            <div className="mb-3 text-center">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
                02 // MESS OWNER
              </span>
              <span className="font-display text-xs text-content-secondary font-medium">
                Daily Menu &amp; Operations
              </span>
            </div>

            {/* Smartphone Frame */}
            <div
              className={`w-[260px] lg:w-[285px] aspect-[9/19.5] rounded-[38px] bg-slate-950 p-2.5 shadow-2xl border-4 transition-all duration-300 relative ${
                activeRole === 'owner'
                  ? 'border-emerald-600/70 shadow-emerald-950/20 ring-4 ring-emerald-500/20'
                  : 'border-slate-800 shadow-xl'
              }`}
            >
              {/* Dynamic Island / Speaker */}
              <div className="w-20 h-3.5 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Real Aahar Screen Display */}
              <div className="relative w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-slate-900">
                <Image
                  src="/projects/aahar-nearby/screen_owner_dashboard.png"
                  alt="Aahar Nearby Authentic Mess Owner Dashboard Screen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 260px, 285px"
                  priority
                />
              </div>

              {/* Active Indicator Glow Badge */}
              {activeRole === 'owner' && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  ACTIVE PREVIEW
                </div>
              )}
            </div>
          </div>

          {/* ------------------------------------------------------------------- */}
          {/* PHONE 03: PLATFORM ADMIN                                           */}
          {/* ------------------------------------------------------------------- */}
          <div
            onClick={() => setActiveRole('admin')}
            className={`relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
              activeRole === 'admin'
                ? 'scale-105 z-20 opacity-100'
                : 'scale-95 opacity-80 hover:opacity-100 hover:scale-[0.98]'
            }`}
          >
            {/* Editorial device label */}
            <div className="mb-3 text-center">
              <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-emerald-700 block">
                03 // PLATFORM ADMIN
              </span>
              <span className="font-display text-xs text-content-secondary font-medium">
                Governance &amp; Verification
              </span>
            </div>

            {/* Smartphone Frame */}
            <div
              className={`w-[260px] lg:w-[285px] aspect-[9/19.5] rounded-[38px] bg-slate-950 p-2.5 shadow-2xl border-4 transition-all duration-300 relative ${
                activeRole === 'admin'
                  ? 'border-emerald-600/70 shadow-emerald-950/20 ring-4 ring-emerald-500/20'
                  : 'border-slate-800 shadow-xl'
              }`}
            >
              {/* Dynamic Island / Speaker */}
              <div className="w-20 h-3.5 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>

              {/* Real Aahar Screen Display */}
              <div className="relative w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-slate-900">
                <Image
                  src="/projects/aahar-nearby/screen_admin_portal.png"
                  alt="Aahar Nearby Authentic Platform Admin Mobile Screen"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 260px, 285px"
                  priority
                />
              </div>

              {/* Active Indicator Glow Badge */}
              {activeRole === 'admin' && (
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-mono text-[10px] px-2.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  ACTIVE PREVIEW
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Viewport: Single Focused Smartphone with Quick Left/Right Selector */}
        <div className="md:hidden flex flex-col items-center">
          {/* Role indicator header */}
          <div className="flex items-center justify-between w-full max-w-[280px] mb-3">
            <button
              type="button"
              onClick={() => {
                if (activeRole === 'admin') setActiveRole('owner');
                else if (activeRole === 'owner') setActiveRole('employee');
                else setActiveRole('admin');
              }}
              className="p-1.5 rounded-lg bg-canvas-subtle border border-border-hairline text-content-secondary"
              aria-label="Previous role"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="text-center">
              <span className="font-mono text-[11px] font-bold text-emerald-700 uppercase">
                {activeRole === 'employee' && '01 // EMPLOYEE'}
                {activeRole === 'owner' && '02 // MESS OWNER'}
                {activeRole === 'admin' && '03 // PLATFORM ADMIN'}
              </span>
              <span className="block text-xs font-semibold text-content-primary">
                {activeRole === 'employee' && 'Discovery & Daily Menu'}
                {activeRole === 'owner' && 'Daily Menu & Operations'}
                {activeRole === 'admin' && 'Governance & Verification'}
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
              aria-label="Next role"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Focused Smartphone Frame */}
          <div className="w-[260px] sm:w-[280px] aspect-[9/19.5] rounded-[38px] bg-slate-950 p-2.5 shadow-2xl border-4 border-emerald-600/70 relative">
            <div className="w-20 h-3.5 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
            </div>

            <div className="relative w-full h-[calc(100%-18px)] rounded-[26px] overflow-hidden bg-slate-900">
              <Image
                src={
                  activeRole === 'employee'
                    ? employeeSubView === 'detail'
                      ? '/projects/aahar-nearby/menu_details.png'
                      : '/projects/aahar-nearby/screen_employee_portal.png'
                    : activeRole === 'owner'
                    ? '/projects/aahar-nearby/screen_owner_dashboard.png'
                    : '/projects/aahar-nearby/screen_admin_portal.png'
                }
                alt={`Aahar Nearby authentic ${activeRole} screen`}
                fill
                className="object-cover object-top"
                sizes="280px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. FOCUSED INTERACTIVE MOBILE PRODUCT DRILL-DOWN                          */}
      {/* ========================================================================= */}
      <div className="w-full max-w-4xl mx-auto mt-10 pt-8 border-t border-border-hairline">
        <div className="text-center mb-6">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            FOCUSED PRODUCT WORKFLOW //{' '}
            {activeRole === 'employee'
              ? 'DINER EXPERIENCE'
              : activeRole === 'owner'
              ? 'OPERATIONS CONSOLE'
              : 'GOVERNANCE AUDIT'}
          </span>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-content-primary">
            {activeRole === 'employee' && 'Explore What Office Workers Experience'}
            {activeRole === 'owner' && 'Test Hotel Kitchen Operations & Menu Controls'}
            {activeRole === 'admin' && 'Audit Platform Verification Queue'}
          </h3>
          <p className="mt-1 text-sm text-content-secondary max-w-xl mx-auto">
            Interact with simulated role controls styled in the authentic Aahar Nearby Flutter design language (Forest Green #168A4A, Pure White cards, and JetBrains Mono pricing).
          </p>
        </div>

        {/* ----------------------------------------------------------------------- */}
        {/* ROLE 01: EMPLOYEE INTERACTION PANEL                                    */}
        {/* ----------------------------------------------------------------------- */}
        {activeRole === 'employee' && (
          <div className="bg-[#F7F8F6] p-5 sm:p-6 rounded-2xl border border-[#E7EBE8] text-left">
            {/* Top Sub-view Selector */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E7EBE8] mb-5">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#168A4A]" />
                <span className="text-xs font-semibold text-[#17201B]">
                  Location: <span className="text-[#168A4A]">Cyber Park, Sector 33</span>
                </span>
                <span className="text-[10px] bg-[#E8F5EE] text-[#168A4A] font-bold px-2 py-0.5 rounded-full">
                  GPS Active
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEmployeeSubView('feed')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    employeeSubView === 'feed'
                      ? 'bg-[#168A4A] text-white shadow-sm'
                      : 'bg-white text-[#17201B] border border-[#E7EBE8] hover:bg-slate-50'
                  }`}
                >
                  Discovery Feed
                </button>
                <button
                  type="button"
                  onClick={() => setEmployeeSubView('detail')}
                  className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    employeeSubView === 'detail'
                      ? 'bg-[#168A4A] text-white shadow-sm'
                      : 'bg-white text-[#17201B] border border-[#E7EBE8] hover:bg-slate-50'
                  }`}
                >
                  Outlet Menu View
                </button>
              </div>
            </div>

            {/* Simulated Live Outlet Interaction Card */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E7EBE8] shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-bold text-base text-[#17201B]">
                      Sri Udupi Grand Pure Veg
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] bg-[#E8F5EE] text-[#168A4A] font-bold px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-[#66736B]">
                    South Indian · Thali · Fast Tiffin · 280 m from Cyber Park Exit
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#1F9D55] border border-emerald-200">
                    Open Now
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 rounded-lg border border-[#E7EBE8] hover:bg-slate-50 transition-colors"
                    aria-label="Toggle favorite"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite ? 'fill-red-500 text-red-500' : 'text-[#66736B]'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Today's Special Dish Row */}
              <div className="mt-4 pt-4 border-t border-[#E7EBE8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded border border-[#168A4A] flex items-center justify-center p-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#168A4A]" />
                  </span>
                  <div>
                    <span className="text-sm font-bold text-[#17201B] block">
                      Executive South Indian Lunch Thali
                    </span>
                    <span className="text-xs text-[#66736B]">
                      Includes 3 Rotis, Dal Tadka, Seasonal Sabzi, Sambar, Rice &amp; Curd
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:self-center">
                  <span className="font-mono text-base font-bold text-[#168A4A]">₹80</span>
                  <button
                    type="button"
                    onClick={() => setShowDirections(!showDirections)}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#168A4A] hover:bg-[#0D5C35] text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{showDirections ? 'Hide Route' : 'Get Walking Route'}</span>
                  </button>
                </div>
              </div>

              {/* Directions Panel */}
              {showDirections && (
                <div className="mt-4 p-3.5 rounded-lg bg-[#E8F5EE] border border-emerald-200 text-xs text-[#0D5C35] animate-fadeIn">
                  <div className="font-bold flex items-center justify-between mb-1">
                    <span>WALKING ROUTE: 4 MIN WALK (280 M)</span>
                    <span className="text-[10px] font-mono">SPEED: 1.2 m/s</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-[11px] text-[#17201B]">
                    <li>Exit Cyber Park Tower B via East Pedestrian Gate.</li>
                    <li>Head straight on Sector 33 Main Avenue for 180 meters.</li>
                    <li>Turn right at the Landmark Bank ATM; destination will be on the left.</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* ROLE 02: OWNER INTERACTION PANEL                                       */}
        {/* ----------------------------------------------------------------------- */}
        {activeRole === 'owner' && (
          <div className="bg-[#F7F8F6] p-5 sm:p-6 rounded-2xl border border-[#E7EBE8] text-left">
            {/* Owner Feedback Toast */}
            {ownerToast && (
              <div className="mb-4 p-3 rounded-lg bg-[#E8F5EE] border border-emerald-300 text-xs font-semibold text-[#0D5C35] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#168A4A]" />
                <span>{ownerToast}</span>
              </div>
            )}

            {/* Top Operations Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E7EBE8] mb-5">
              <div>
                <span className="font-display text-base font-bold text-[#17201B] block">
                  Hotel Annapurna Kitchen Console
                </span>
                <span className="text-xs text-[#66736B]">
                  Outlet ID: AH-CYBER-049 · Daily Broadcast Status: Live
                </span>
              </div>

              {/* Kitchen Open/Close Switch */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#17201B]">
                  Kitchen State:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    const next = !isKitchenOpen;
                    setIsKitchenOpen(next);
                    setOwnerToast(next ? 'Outlet marked OPEN to diners' : 'Outlet marked CLOSED');
                    setTimeout(() => setOwnerToast(null), 3000);
                  }}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                    isKitchenOpen
                      ? 'bg-[#168A4A] text-white border-[#168A4A]'
                      : 'bg-red-600 text-white border-red-600'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isKitchenOpen ? 'bg-white' : 'bg-red-200'}`} />
                  <span>{isKitchenOpen ? 'OPEN / SERVING' : 'CLOSED / OFF-PEAK'}</span>
                </button>
              </div>
            </div>

            {/* Live Today's Menu Inventory Control */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h4 className="font-display text-sm font-bold text-[#17201B]">
                  Today&apos;s Live Menu Items
                </h4>
                <span className="text-[11px] text-[#66736B]">
                  Toggle dishes in/out of stock in real time
                </span>
              </div>

              {/* Simulated AI Chalkboard Scan Trigger */}
              <button
                type="button"
                onClick={handleSimulateAiScan}
                disabled={aiScanning}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F47B20] hover:bg-[#d96714] text-white flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{aiScanning ? 'Parsing Chalkboard...' : 'Simulate AI Menu Scan'}</span>
              </button>
            </div>

            {/* Menu Items List */}
            <div className="space-y-2.5">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#E7EBE8] flex items-center justify-between gap-3 shadow-2xl-none"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center p-0.5 ${
                        item.isVeg ? 'border-[#168A4A]' : 'border-red-600'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          item.isVeg ? 'bg-[#168A4A]' : 'bg-red-600'
                        }`}
                      />
                    </span>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#17201B] block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#66736B]">
                        {item.category} · Price: <span className="font-mono text-[#168A4A] font-semibold">₹{item.price}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        item.isAvailable
                          ? 'bg-[#E8F5EE] text-[#168A4A]'
                          : 'bg-red-50 text-red-600'
                      }`}
                    >
                      {item.isAvailable ? 'IN STOCK' : 'SOLD OUT'}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleItemAvailability(item.id)}
                      className="text-xs px-2.5 py-1 rounded font-semibold border border-[#E7EBE8] hover:bg-slate-50 transition-colors"
                    >
                      Toggle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* ROLE 03: ADMIN INTERACTION PANEL                                       */}
        {/* ----------------------------------------------------------------------- */}
        {activeRole === 'admin' && (
          <div className="bg-[#F7F8F6] p-5 sm:p-6 rounded-2xl border border-[#E7EBE8] text-left">
            {/* Admin Feedback Toast */}
            {adminToast && (
              <div className="mb-4 p-3 rounded-lg bg-[#E8F5EE] border border-emerald-300 text-xs font-semibold text-[#0D5C35] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#168A4A]" />
                <span>{adminToast}</span>
              </div>
            )}

            {/* Platform Overview Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="bg-white p-3 rounded-xl border border-[#E7EBE8]">
                <span className="text-[10px] font-mono text-[#66736B] uppercase block">
                  Registered Outlets
                </span>
                <span className="font-mono text-lg font-bold text-[#17201B]">48</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E7EBE8]">
                <span className="text-[10px] font-mono text-[#66736B] uppercase block">
                  Verified Outlets
                </span>
                <span className="font-mono text-lg font-bold text-[#168A4A]">42</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E7EBE8]">
                <span className="text-[10px] font-mono text-[#66736B] uppercase block">
                  Pending Audit
                </span>
                <span className="font-mono text-lg font-bold text-[#F47B20]">6</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E7EBE8]">
                <span className="text-[10px] font-mono text-[#66736B] uppercase block">
                  Spatial Engine
                </span>
                <span className="font-mono text-lg font-bold text-[#168A4A]">Healthy</span>
              </div>
            </div>

            {/* Moderation Queue */}
            <div className="mb-3 flex items-center justify-between">
              <h4 className="font-display text-sm font-bold text-[#17201B]">
                Outlet Verification &amp; Hygiene Compliance Queue
              </h4>
              <span className="text-[11px] font-mono text-[#66736B]">
                Interactive Audit Actions
              </span>
            </div>

            <div className="space-y-3">
              {verifications.map((outlet) => (
                <div
                  key={outlet.id}
                  className="bg-white p-4 rounded-xl border border-[#E7EBE8] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#17201B]">{outlet.name}</span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          outlet.status === 'verified'
                            ? 'bg-[#E8F5EE] text-[#168A4A]'
                            : outlet.status === 'pending'
                            ? 'bg-amber-50 text-amber-700'
                            : 'bg-red-50 text-red-600'
                        }`}
                      >
                        {outlet.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#66736B] mt-0.5">
                      Hub: {outlet.hub} · FSSAI: <span className="font-mono">{outlet.fssaiNumber}</span> · Submitted: {outlet.submittedAt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleVerify(outlet.id, 'verified')}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#168A4A] hover:bg-[#0D5C35] text-white transition-colors"
                    >
                      Approve &amp; Verify
                    </button>
                    <button
                      type="button"
                      onClick={() => handleVerify(outlet.id, 'flagged')}
                      className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-red-300 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Flag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
