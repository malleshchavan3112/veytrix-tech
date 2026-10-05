'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Heart,
  Store,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Plus,
  RefreshCw,
  Navigation,
  ArrowLeft,
  SlidersHorizontal,
  Flame,
  User,
  Coffee,
  Check,
  X,
  Building2,
  TrendingUp,
  Eye,
  CheckCheck,
} from 'lucide-react';
import {
  BusinessOutlet,
  MenuItem,
  ModerationReport,
  INITIAL_OUTLETS,
  INITIAL_OWNER_DATA,
  INITIAL_ADMIN_STATS,
  INITIAL_MODERATION_REPORTS,
  FOOD_FILTER_CATEGORIES,
  DietaryType,
} from '@/data/aahar-demo';

type DemoRole = 'employee' | 'owner' | 'admin';

export function InteractiveProductDemo() {
  const [activeRole, setActiveRole] = useState<DemoRole>('employee');
  const [outlets, setOutlets] = useState<BusinessOutlet[]>(INITIAL_OUTLETS);
  const [ownerData, setOwnerData] = useState(INITIAL_OWNER_DATA);
  const [adminStats, setAdminStats] = useState(INITIAL_ADMIN_STATS);
  const [reports, setReports] = useState<ModerationReport[]>(INITIAL_MODERATION_REPORTS);

  // Employee State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedOutletId, setSelectedOutletId] = useState<string | null>(null);
  const [directionsNotice, setDirectionsNotice] = useState<string | null>(null);

  // Owner State
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('120');
  const [newItemCategory, setNewItemCategory] = useState('Thali');
  const [newItemDietary, setNewItemDietary] = useState<DietaryType>('veg');
  const [newItemDescription, setNewItemDescription] = useState('Freshly prepared daily lunch special');
  const [aiParsing, setAiParsing] = useState(false);
  const [ownerNotification, setOwnerNotification] = useState<string | null>(null);

  // Admin State
  const [adminTab, setAdminTab] = useState<'outlets' | 'reports'>('outlets');
  const [adminNotification, setAdminNotification] = useState<string | null>(null);

  // Reset entire demo state
  const handleResetDemo = () => {
    setOutlets(INITIAL_OUTLETS);
    setOwnerData(INITIAL_OWNER_DATA);
    setAdminStats(INITIAL_ADMIN_STATS);
    setReports(INITIAL_MODERATION_REPORTS);
    setSelectedOutletId(null);
    setSearchQuery('');
    setSelectedCategory('All');
    setDirectionsNotice(null);
    setOwnerNotification(null);
    setAdminNotification(null);
    setIsAddingItem(false);
  };

  // ---------------------------------------------------------------------------
  // Employee Handlers
  // ---------------------------------------------------------------------------
  const handleToggleFavorite = (outletId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const nextFav = !o.isFavorite;
          return {
            ...o,
            isFavorite: nextFav,
            favoritesCount: nextFav ? o.favoritesCount + 1 : o.favoritesCount - 1,
          };
        }
        return o;
      })
    );
  };

  const handleSimulateDirections = (outlet: BusinessOutlet) => {
    setDirectionsNotice(
      `Simulated walking route: ${outlet.walkTime} (${outlet.distanceText}) to ${outlet.name}. Real-time Google Maps trigger activated in production.`
    );
    setTimeout(() => {
      setDirectionsNotice(null);
    }, 4500);
  };

  // Filtered outlets for employee
  const filteredOutlets = useMemo(() => {
    return outlets.filter((outlet) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        outlet.menu.some((m) => m.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' ||
        outlet.category === selectedCategory ||
        outlet.menu.some((m) => m.category === selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [outlets, searchQuery, selectedCategory]);

  const activeOutlet = useMemo(() => {
    return outlets.find((o) => o.id === selectedOutletId) || null;
  }, [outlets, selectedOutletId]);

  // ---------------------------------------------------------------------------
  // Owner Handlers
  // ---------------------------------------------------------------------------
  const handleToggleOwnerOpenStatus = () => {
    const nextState = !ownerData.isOpen;
    setOwnerData((prev) => ({ ...prev, isOpen: nextState }));
    // Sync to outlets list
    setOutlets((prev) =>
      prev.map((o) => (o.id === 'out-01' ? { ...o, isOpen: nextState } : o))
    );
    setOwnerNotification(
      nextState ? 'Status Updated: Now accepting diners for lunch.' : 'Status Updated: Kitchen closed for lunch.'
    );
    setTimeout(() => setOwnerNotification(null), 3000);
  };

  const handleToggleItemAvailability = (itemId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === 'out-01') {
          return {
            ...o,
            menu: o.menu.map((item) =>
              item.id === itemId ? { ...item, isAvailable: !item.isAvailable } : item
            ),
          };
        }
        return o;
      })
    );
  };

  const handleDeleteMenuItem = (itemId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === 'out-01') {
          return {
            ...o,
            menu: o.menu.filter((item) => item.id !== itemId),
          };
        }
        return o;
      })
    );
    setOwnerNotification('Item removed from today’s active menu.');
    setTimeout(() => setOwnerNotification(null), 3000);
  };

  const handleAddNewSpecial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const priceNum = parseInt(newItemPrice, 10) || 120;
    const newItem: MenuItem = {
      id: `m-custom-${Date.now()}`,
      name: newItemName.trim(),
      description: newItemDescription.trim(),
      price: priceNum,
      dietary: newItemDietary,
      category: newItemCategory,
      isSpecialToday: true,
      isAvailable: true,
    };

    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === 'out-01') {
          return {
            ...o,
            menu: [newItem, ...o.menu],
          };
        }
        return o;
      })
    );

    setNewItemName('');
    setIsAddingItem(false);
    setOwnerNotification(`Published Special: "${newItem.name}" is now live for all diners.`);
    setTimeout(() => setOwnerNotification(null), 3500);
  };

  const handleSimulateAiFormatter = () => {
    setAiParsing(true);
    setTimeout(() => {
      const parsedItem: MenuItem = {
        id: `m-ai-${Date.now()}`,
        name: 'Kaju Paneer Masala & 3 Butter Rotis',
        description: 'Roasted cashew & cottage cheese curry in rich tomato-cashew gravy with 3 hot tawa rotis',
        price: 160,
        dietary: 'veg',
        category: 'Thali',
        isSpecialToday: true,
        isAvailable: true,
      };

      setOutlets((prev) =>
        prev.map((o) => {
          if (o.id === 'out-01') {
            return {
              ...o,
              menu: [parsedItem, ...o.menu],
            };
          }
          return o;
        })
      );

      setAiParsing(false);
      setOwnerNotification('AI Formatter: Chalkboard text parsed & published in 15 seconds!');
      setTimeout(() => setOwnerNotification(null), 3500);
    }, 700);
  };

  // ---------------------------------------------------------------------------
  // Admin Handlers
  // ---------------------------------------------------------------------------
  const handleToggleOutletVerification = (outletId: string) => {
    setOutlets((prev) =>
      prev.map((o) => {
        if (o.id === outletId) {
          const nextVerified = !o.verified;
          return { ...o, verified: nextVerified };
        }
        return o;
      })
    );

    setAdminStats((prev) => ({
      ...prev,
      verifiedOutlets: outlets.find((o) => o.id === outletId)?.verified
        ? prev.verifiedOutlets - 1
        : prev.verifiedOutlets + 1,
      pendingVerificationCount: outlets.find((o) => o.id === outletId)?.verified
        ? prev.pendingVerificationCount + 1
        : prev.pendingVerificationCount - 1,
    }));

    setAdminNotification('Outlet verification state updated successfully.');
    setTimeout(() => setAdminNotification(null), 3000);
  };

  const handleResolveReport = (reportId: string, action: 'resolved' | 'dismissed') => {
    setReports((prev) =>
      prev.map((r) => (r.id === reportId ? { ...r, status: action } : r))
    );
    setAdminStats((prev) => ({
      ...prev,
      openReportsCount: Math.max(0, prev.openReportsCount - 1),
    }));
    setAdminNotification(`Report #${reportId} marked as ${action}.`);
    setTimeout(() => setAdminNotification(null), 3000);
  };

  return (
    <div
      className="w-full rounded-2xl bg-white border border-border-hairline shadow-2xl overflow-hidden text-left"
      aria-label="Aahar Nearby Interactive Product Demo"
    >
      {/* ===================================================================== */}
      {/* 1. TOP DEMO DISCLOSURE & ROLE CONTROLS BAR                            */}
      {/* ===================================================================== */}
      <div className="bg-slate-950 text-white px-4 sm:px-6 py-3.5 border-b border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Product Eyebrow & Status Disclosure */}
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-mono text-xs font-bold tracking-wider text-emerald-400 uppercase">
              INTERACTIVE PRODUCT DEMO
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="font-mono text-[11px] text-slate-400">
              Simulated product environment · Demo data only
            </span>
          </div>
        </div>

        {/* Right: Role Switcher & Reset Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          {/* Role Switcher with 200ms smooth transition */}
          <div
            role="tablist"
            aria-label="Demo User Roles"
            className="inline-flex p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono"
          >
            <button
              role="tab"
              aria-selected={activeRole === 'employee'}
              onClick={() => setActiveRole('employee')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all duration-200 min-h-[36px] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                activeRole === 'employee'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>01 Diner</span>
            </button>

            <button
              role="tab"
              aria-selected={activeRole === 'owner'}
              onClick={() => setActiveRole('owner')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all duration-200 min-h-[36px] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                activeRole === 'owner'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>02 Owner</span>
            </button>

            <button
              role="tab"
              aria-selected={activeRole === 'admin'}
              onClick={() => setActiveRole('admin')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-all duration-200 min-h-[36px] flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                activeRole === 'admin'
                  ? 'bg-emerald-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>03 Admin</span>
            </button>
          </div>

          {/* Reset Demo State Button */}
          <button
            onClick={handleResetDemo}
            title="Reset interactive demo to default state"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Reset demo state"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 2. DEMO BODY / SIMULATED APPLICATION CHROME                           */}
      {/* ===================================================================== */}
      <div className="bg-canvas-subtle/20 p-3 sm:p-6 md:p-8 min-h-[640px]">
        {/* Notification Toast Banner */}
        {(directionsNotice || ownerNotification || adminNotification) && (
          <div
            role="status"
            aria-live="polite"
            className="mb-4 p-3.5 rounded-xl bg-slate-900 text-white border border-emerald-500/40 shadow-lg text-xs font-mono flex items-center justify-between gap-3 animate-fadeIn"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{directionsNotice || ownerNotification || adminNotification}</span>
            </div>
            <button
              onClick={() => {
                setDirectionsNotice(null);
                setOwnerNotification(null);
                setAdminNotification(null);
              }}
              className="text-slate-400 hover:text-white"
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ROLE 01 — EMPLOYEE / DINER VIEW                                     */}
        {/* ------------------------------------------------------------------- */}
        {activeRole === 'employee' && (
          <div className="w-full max-w-4xl mx-auto space-y-6 transition-all duration-200">
            {/* Context Sub-bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-border-hairline gap-3 text-xs">
              <div className="flex items-center gap-2 text-content-secondary font-mono">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Simulated GPS Anchor:</span>
                <span className="font-semibold text-content-primary">
                  Cyber City Complex (Latitude: 17.4435, Longitude: 78.3772)
                </span>
              </div>
              <div className="font-mono text-content-tertiary">
                Showing outlets sorted by Haversine Distance
              </div>
            </div>

            {/* Screen 1A: Outlets Discovery List */}
            {!selectedOutletId ? (
              <div className="space-y-6">
                {/* Search & Category Filter Matrix */}
                <div className="space-y-3">
                  {/* Search Bar */}
                  <div className="relative w-full">
                    <Search className="w-4 h-4 text-content-tertiary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search rotational thalis, specials, or nearby mess..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-border-default bg-white text-sm text-content-primary placeholder:text-content-tertiary focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors"
                      aria-label="Search food or outlets"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-content-tertiary hover:text-content-primary p-1"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Horizontal Category Filters */}
                  <div
                    className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none"
                    role="tablist"
                    aria-label="Food Categories"
                  >
                    {FOOD_FILTER_CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium whitespace-nowrap border transition-all duration-150 min-h-[36px] ${
                            isSelected
                              ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                              : 'bg-white text-content-secondary border-border-default hover:border-slate-400'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Outlets Grid */}
                {filteredOutlets.length === 0 ? (
                  <div className="p-12 text-center rounded-xl bg-white border border-border-hairline">
                    <p className="text-sm text-content-secondary">
                      No nearby outlets matched &ldquo;{searchQuery}&rdquo;. Try another food keyword or clear filters.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                      }}
                      className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-mono"
                    >
                      Reset Discovery Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredOutlets.map((outlet) => {
                      const specials = outlet.menu.filter((m) => m.isSpecialToday);
                      return (
                        <div
                          key={outlet.id}
                          onClick={() => setSelectedOutletId(outlet.id)}
                          className="group relative p-5 rounded-2xl bg-white border border-border-hairline hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                          tabIndex={0}
                          role="button"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedOutletId(outlet.id);
                            }
                          }}
                          aria-label={`Open menu for ${outlet.name}`}
                        >
                          <div>
                            {/* Card Top: Distance & Favorite Button */}
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span className="font-mono text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-emerald-600" />
                                  <span>{outlet.distanceText}</span>
                                </span>
                                <span className="font-mono text-[11px] text-content-tertiary">
                                  · {outlet.walkTime}
                                </span>
                                {outlet.verified && (
                                  <span
                                    title="Verified Mess Outlet"
                                    className="text-emerald-600 inline-flex items-center"
                                  >
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                  </span>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={(e) => handleToggleFavorite(outlet.id, e)}
                                className={`p-1.5 rounded-full border transition-colors ${
                                  outlet.isFavorite
                                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                                    : 'bg-white border-border-default text-content-tertiary hover:text-rose-500'
                                }`}
                                aria-label={outlet.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                              >
                                <Heart
                                  className={`w-4 h-4 ${outlet.isFavorite ? 'fill-rose-500' : ''}`}
                                />
                              </button>
                            </div>

                            {/* Outlet Name & Category */}
                            <h3 className="font-display text-base font-bold text-content-primary group-hover:text-emerald-700 transition-colors">
                              {outlet.name}
                            </h3>
                            <p className="text-xs text-content-secondary mt-0.5 font-mono">
                              {outlet.cuisineTag} · {outlet.priceRange}
                            </p>

                            {/* Today's Special Highlights */}
                            <div className="mt-3 p-2.5 rounded-xl bg-canvas-subtle/80 border border-border-hairline">
                              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 font-semibold block mb-1">
                                TODAY&apos;S MENU HIGHLIGHT
                              </span>
                              <p className="text-xs text-content-primary font-medium line-clamp-1">
                                {specials.length > 0 ? specials[0].name : outlet.menu[0].name}
                              </p>
                              <span className="text-[11px] text-content-tertiary mt-0.5 block">
                                {outlet.hoursToday}
                              </span>
                            </div>
                          </div>

                          {/* Card Footer: CTA */}
                          <div className="mt-4 pt-3 border-t border-border-hairline flex items-center justify-between text-xs font-mono text-emerald-700 font-semibold">
                            <span>{outlet.menu.length} Items Live Today</span>
                            <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              View Menu →
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              /* Screen 1B: Outlet Detail View with Today's Full Menu */
              activeOutlet && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Back to Outlets Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
                    <button
                      onClick={() => setSelectedOutletId(null)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-content-secondary hover:text-content-primary py-1 px-2.5 rounded-lg border border-border-default hover:bg-white transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Nearby Outlets</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleFavorite(activeOutlet.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                          activeOutlet.isFavorite
                            ? 'bg-rose-50 border-rose-200 text-rose-600'
                            : 'bg-white border-border-default text-content-secondary hover:text-rose-600'
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${activeOutlet.isFavorite ? 'fill-rose-500' : ''}`}
                        />
                        <span>{activeOutlet.favoritesCount} Favorites</span>
                      </button>

                      <button
                        onClick={() => handleSimulateDirections(activeOutlet)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get Walking Directions</span>
                      </button>
                    </div>
                  </div>

                  {/* Outlet Hero Banner */}
                  <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded">
                        {activeOutlet.category}
                      </span>
                      <span className="font-mono text-xs text-content-tertiary">
                        {activeOutlet.distanceText} ({activeOutlet.walkTime})
                      </span>
                      {activeOutlet.isOpen ? (
                        <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                          OPEN NOW
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-medium">
                          CLOSED
                        </span>
                      )}
                    </div>

                    <h2 className="font-display text-2xl font-bold text-content-primary">
                      {activeOutlet.name}
                    </h2>
                    <p className="mt-1 text-sm text-content-secondary">{activeOutlet.tagline}</p>
                    <p className="mt-2 text-xs font-mono text-content-tertiary">
                      📍 {activeOutlet.address} · {activeOutlet.hoursToday}
                    </p>
                  </div>

                  {/* Menu Items List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-bold text-content-primary">
                        Today&apos;s Active Rotational Menu
                      </h3>
                      <span className="font-mono text-xs text-content-tertiary">
                        Verified at 11:15 AM
                      </span>
                    </div>

                    <div className="space-y-3">
                      {activeOutlet.menu.map((dish) => (
                        <div
                          key={dish.id}
                          className="p-4 rounded-xl bg-white border border-border-hairline flex items-start justify-between gap-4 shadow-sm"
                        >
                          <div className="flex items-start gap-3">
                            {/* Veg / Non-Veg Indicator Icon */}
                            <span
                              className={`w-4 h-4 mt-0.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                                dish.dietary === 'veg'
                                  ? 'border-emerald-600 bg-white'
                                  : dish.dietary === 'non-veg'
                                  ? 'border-rose-600 bg-white'
                                  : 'border-amber-600 bg-white'
                              }`}
                              title={
                                dish.dietary === 'veg'
                                  ? 'Pure Vegetarian'
                                  : dish.dietary === 'non-veg'
                                  ? 'Non-Vegetarian'
                                  : 'Egg Item'
                              }
                            >
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  dish.dietary === 'veg'
                                    ? 'bg-emerald-600'
                                    : dish.dietary === 'non-veg'
                                    ? 'bg-rose-600'
                                    : 'bg-amber-600'
                                }`}
                              />
                            </span>

                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-display text-sm font-bold text-content-primary">
                                  {dish.name}
                                </h4>
                                {dish.isSpecialToday && (
                                  <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                    TODAY&apos;S SPECIAL
                                  </span>
                                )}
                              </div>
                              <p className="mt-1 text-xs text-content-secondary leading-relaxed">
                                {dish.description}
                              </p>
                              <div className="mt-2 flex items-center gap-3 text-xs font-mono">
                                <span className="font-bold text-content-primary">₹{dish.price}</span>
                                <span className="text-content-tertiary">· {dish.category}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2 flex-shrink-0">
                            {dish.isAvailable ? (
                              <span className="font-mono text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                                In Stock
                              </span>
                            ) : (
                              <span className="font-mono text-[11px] text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                                Sold Out
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ROLE 02 — HOTEL / MESS OWNER CONSOLE                                */}
        {/* ------------------------------------------------------------------- */}
        {activeRole === 'owner' && (
          <div className="w-full max-w-4xl mx-auto space-y-6 transition-all duration-200">
            {/* Header with Business Status Toggle */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    OUTLET CONSOLE // {ownerData.outletId}
                  </span>
                  <span className="font-mono text-xs text-content-tertiary">
                    Proprietor: {ownerData.proprietorName}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold text-content-primary">
                  {ownerData.outletName}
                </h2>
                <p className="text-xs text-content-secondary font-mono mt-0.5">
                  Galaxy Tech Plaza · Connected to Firebase Firestore Reactive Stream
                </p>
              </div>

              {/* Status Toggle Button */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-content-secondary">
                  Kitchen Dispatch:
                </span>
                <button
                  type="button"
                  onClick={handleToggleOwnerOpenStatus}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border transition-colors flex items-center gap-2 ${
                    ownerData.isOpen
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-red-50 text-red-700 border-red-300'
                  }`}
                  aria-label="Toggle dining room status"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      ownerData.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'
                    }`}
                  />
                  <span>{ownerData.isOpen ? 'OPEN FOR LUNCH' : 'KITCHEN CLOSED'}</span>
                </button>
              </div>
            </div>

            {/* Performance Summary Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between text-content-tertiary mb-1">
                  <span className="font-mono text-[11px] uppercase">Diners Reached</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-2xl font-bold text-content-primary">
                  {ownerData.metrics.dinersReachedToday}
                </span>
                <span className="block mt-1 text-[11px] text-emerald-600 font-mono">
                  +18% vs yesterday
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between text-content-tertiary mb-1">
                  <span className="font-mono text-[11px] uppercase">Menu Views</span>
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-2xl font-bold text-content-primary">
                  {ownerData.metrics.menuViewsToday}
                </span>
                <span className="block mt-1 text-[11px] text-content-tertiary font-mono">
                  Today&apos;s lunch peak
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between text-content-tertiary mb-1">
                  <span className="font-mono text-[11px] uppercase">Active Fans</span>
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-2xl font-bold text-content-primary">
                  {ownerData.metrics.activeFavorites}
                </span>
                <span className="block mt-1 text-[11px] text-content-tertiary font-mono">
                  Saved this mess
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <div className="flex items-center justify-between text-content-tertiary mb-1">
                  <span className="font-mono text-[11px] uppercase">Publish Speed</span>
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-2xl font-bold text-emerald-700">
                  {ownerData.metrics.avgPublishSpeedSeconds}s
                </span>
                <span className="block mt-1 text-[11px] text-content-tertiary font-mono">
                  Target &lt; 30s
                </span>
              </div>
            </div>

            {/* AI Menu Formatter Quick Action Strip */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">
                    15-Second AI Menu Formatter Simulator
                  </h3>
                  <p className="text-xs text-slate-300">
                    Simulate chalkboard text parser: parse raw notes into structured dishes automatically.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSimulateAiFormatter}
                disabled={aiParsing}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                {aiParsing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>PARSING TEXT...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Simulate Chalkboard Scan</span>
                  </>
                )}
              </button>
            </div>

            {/* Menu Items Management */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-content-primary">
                    Today&apos;s Active Published Dishes
                  </h3>
                  <p className="text-xs text-content-secondary">
                    Toggling availability synchronizes instantly to diner discovery feeds.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingItem(!isAddingItem)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-mono font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingItem ? 'Cancel' : 'Add Daily Special'}</span>
                </button>
              </div>

              {/* Add Special Inline Form */}
              {isAddingItem && (
                <form
                  onSubmit={handleAddNewSpecial}
                  className="p-5 rounded-2xl bg-white border border-emerald-500/50 shadow-md space-y-4 animate-fadeIn"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-bold block">
                    ADD NEW ROTATIONAL LUNCH SPECIAL
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="text-xs font-mono text-content-secondary block mb-1">
                        Dish Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shahi Paneer Thali"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border-default text-xs text-content-primary focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-content-secondary block mb-1">
                        Price (₹) *
                      </label>
                      <input
                        type="number"
                        required
                        value={newItemPrice}
                        onChange={(e) => setNewItemPrice(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border-default text-xs text-content-primary focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono text-content-secondary block mb-1">
                        Category
                      </label>
                      <select
                        value={newItemCategory}
                        onChange={(e) => setNewItemCategory(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-border-default text-xs text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option value="Thali">Thali</option>
                        <option value="Quick Lunch">Quick Lunch</option>
                        <option value="South Indian">South Indian</option>
                        <option value="Biryani">Biryani</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Dessert">Dessert</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-content-secondary block mb-1">
                        Dietary Preference
                      </label>
                      <select
                        value={newItemDietary}
                        onChange={(e) => setNewItemDietary(e.target.value as DietaryType)}
                        className="w-full h-10 px-3 rounded-lg border border-border-default text-xs text-content-primary bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option value="veg">Pure Vegetarian (Green)</option>
                        <option value="non-veg">Non-Vegetarian (Red)</option>
                        <option value="egg">Egg Item (Yellow)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingItem(false)}
                      className="px-3 py-2 rounded-lg text-xs font-mono text-content-secondary hover:text-content-primary"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold transition-colors shadow-sm"
                    >
                      Publish to Diner Feed →
                    </button>
                  </div>
                </form>
              )}

              {/* Items Table */}
              <div className="rounded-2xl bg-white border border-border-hairline shadow-sm overflow-hidden">
                <div className="divide-y divide-border-hairline">
                  {outlets
                    .find((o) => o.id === 'out-01')
                    ?.menu.map((dish) => (
                      <div
                        key={dish.id}
                        className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                              dish.dietary === 'veg'
                                ? 'border-emerald-600'
                                : dish.dietary === 'non-veg'
                                ? 'border-rose-600'
                                : 'border-amber-600'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                dish.dietary === 'veg'
                                  ? 'bg-emerald-600'
                                  : dish.dietary === 'non-veg'
                                  ? 'bg-rose-600'
                                  : 'bg-amber-600'
                              }`}
                            />
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-display text-sm font-bold text-content-primary">
                                {dish.name}
                              </span>
                              {dish.isSpecialToday && (
                                <span className="font-mono text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                                  SPECIAL
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono text-content-tertiary">
                              ₹{dish.price} · {dish.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 justify-end">
                          <button
                            type="button"
                            onClick={() => handleToggleItemAvailability(dish.id)}
                            className={`px-3 py-1 rounded-md text-xs font-mono font-semibold border transition-colors ${
                              dish.isAvailable
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                                : 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
                            }`}
                          >
                            {dish.isAvailable ? 'In Stock (Active)' : 'Sold Out'}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteMenuItem(dish.id)}
                            title="Remove from today's menu"
                            className="p-1.5 rounded-md text-content-tertiary hover:text-red-600 hover:bg-red-50 transition-colors"
                            aria-label={`Remove ${dish.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------- */}
        {/* ROLE 03 — PLATFORM ADMIN VIEW                                       */}
        {/* ------------------------------------------------------------------- */}
        {activeRole === 'admin' && (
          <div className="w-full max-w-4xl mx-auto space-y-6 transition-all duration-200">
            {/* Admin Header */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                      SUPERADMIN // REGIONAL HUB 01
                    </span>
                    <span className="font-mono text-xs text-content-tertiary">
                      Hyperlocal Audit Authority
                    </span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-content-primary">
                    Platform Moderation &amp; Verification Console
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAdminTab('outlets')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                      adminTab === 'outlets'
                        ? 'bg-slate-900 text-white'
                        : 'bg-canvas-subtle text-content-secondary hover:text-content-primary'
                    }`}
                  >
                    Outlets Directory ({outlets.length})
                  </button>
                  <button
                    onClick={() => setAdminTab('reports')}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors flex items-center gap-1.5 ${
                      adminTab === 'reports'
                        ? 'bg-slate-900 text-white'
                        : 'bg-canvas-subtle text-content-secondary hover:text-content-primary'
                    }`}
                  >
                    <span>Reports</span>
                    {adminStats.openReportsCount > 0 && (
                      <span className="px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px]">
                        {adminStats.openReportsCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Platform Overview Telemetry Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <span className="font-mono text-[11px] text-content-tertiary block mb-1">
                  REGISTERED OUTLETS
                </span>
                <span className="font-mono text-2xl font-bold text-content-primary">
                  {adminStats.registeredOutlets}
                </span>
                <span className="text-[11px] text-content-tertiary font-mono block mt-1">
                  Total in tech corridor
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <span className="font-mono text-[11px] text-content-tertiary block mb-1">
                  VERIFIED OUTLETS
                </span>
                <span className="font-mono text-2xl font-bold text-emerald-700">
                  {adminStats.verifiedOutlets}
                </span>
                <span className="text-[11px] text-emerald-600 font-mono block mt-1">
                  Compliance certified
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <span className="font-mono text-[11px] text-content-tertiary block mb-1">
                  PENDING AUDIT
                </span>
                <span className="font-mono text-2xl font-bold text-amber-600">
                  {adminStats.pendingVerificationCount}
                </span>
                <span className="text-[11px] text-amber-600 font-mono block mt-1">
                  Action required
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-border-hairline shadow-sm">
                <span className="font-mono text-[11px] text-content-tertiary block mb-1">
                  ROUTING UPTIME
                </span>
                <span className="font-mono text-2xl font-bold text-blue-600">
                  {adminStats.uptimePercentage}
                </span>
                <span className="text-[11px] text-content-tertiary font-mono block mt-1">
                  Haversine geo service
                </span>
              </div>
            </div>

            {/* Tab 1: Outlets Directory & Verification State */}
            {adminTab === 'outlets' ? (
              <div className="rounded-2xl bg-white border border-border-hairline shadow-sm overflow-hidden">
                <div className="px-5 py-3.5 bg-canvas-subtle/80 border-b border-border-hairline flex items-center justify-between text-xs font-mono font-semibold text-content-primary">
                  <span>OUTLET DIRECTORY</span>
                  <span>VERIFICATION AUDIT ACTION</span>
                </div>

                <div className="divide-y divide-border-hairline">
                  {outlets.map((outlet) => (
                    <div
                      key={outlet.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-sm font-bold text-content-primary">
                            {outlet.name}
                          </h4>
                          {outlet.verified ? (
                            <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-emerald-600" />
                              <span>VERIFIED</span>
                            </span>
                          ) : (
                            <span className="font-mono text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 text-amber-600" />
                              <span>PENDING AUDIT</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-content-secondary mt-1">
                          {outlet.category} · {outlet.address}
                        </p>
                        <p className="text-[11px] font-mono text-content-tertiary mt-0.5">
                          {outlet.menu.length} Published Dishes · {outlet.favoritesCount} Diners Bookmarked
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleToggleOutletVerification(outlet.id)}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-colors ${
                            outlet.verified
                              ? 'bg-white text-content-secondary border-border-default hover:border-red-400 hover:text-red-600'
                              : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                          }`}
                        >
                          {outlet.verified ? 'Revoke / Re-Audit' : 'Approve & Verify'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Tab 2: User Reports Moderation */
              <div className="rounded-2xl bg-white border border-border-hairline shadow-sm overflow-hidden">
                <div className="px-5 py-3.5 bg-canvas-subtle/80 border-b border-border-hairline flex items-center justify-between text-xs font-mono font-semibold text-content-primary">
                  <span>DINER MODERATION REPORTS</span>
                  <span>DISPOSITION</span>
                </div>

                <div className="divide-y divide-border-hairline">
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-content-primary">
                            Report #{report.id}
                          </span>
                          <span className="text-content-tertiary">·</span>
                          <span className="text-xs text-content-secondary font-semibold">
                            {report.outletName}
                          </span>
                        </div>
                        <p className="text-xs text-content-primary">
                          <strong>Item:</strong> {report.reportedItem}
                        </p>
                        <p className="text-xs text-content-secondary leading-relaxed bg-canvas-subtle/60 p-2.5 rounded-lg border border-border-hairline">
                          &ldquo;{report.reason}&rdquo;
                        </p>
                        <span className="font-mono text-[10px] text-content-tertiary block">
                          Reported: {report.reportedAt}
                        </span>
                      </div>

                      <div className="flex sm:flex-col items-end gap-2 flex-shrink-0">
                        {report.status === 'pending' ? (
                          <>
                            <button
                              type="button"
                              onClick={() => handleResolveReport(report.id, 'resolved')}
                              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-semibold transition-colors"
                            >
                              Resolve
                            </button>
                            <button
                              type="button"
                              onClick={() => handleResolveReport(report.id, 'dismissed')}
                              className="px-3 py-1.5 rounded-lg bg-white border border-border-default text-content-secondary hover:text-content-primary text-xs font-mono transition-colors"
                            >
                              Dismiss
                            </button>
                          </>
                        ) : (
                          <span
                            className={`font-mono text-xs px-2.5 py-1 rounded border font-semibold inline-flex items-center gap-1 ${
                              report.status === 'resolved'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-slate-50 text-slate-600 border-slate-200'
                            }`}
                          >
                            <CheckCheck className="w-3.5 h-3.5" />
                            <span className="uppercase">{report.status}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* 3. SIMULATION FOOTER BAR                                              */}
      {/* ===================================================================== */}
      <div className="px-6 py-3 bg-white border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-content-tertiary">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Local React State Only · Zero production database calls</span>
        </div>
        <div>
          <span>Role: {activeRole.toUpperCase()} · 180ms State Switcher</span>
        </div>
      </div>
    </div>
  );
}
