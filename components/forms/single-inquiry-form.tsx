'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import {
  InquirySchema,
  InquiryPayload,
  PROJECT_TYPES,
  ARCHITECTURE_SCOPES,
  BUDGET_OPTIONS,
} from '@/lib/validations/inquiry';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants/site';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function SingleInquiryForm() {
  const [formData, setFormData] = useState<InquiryPayload>({
    fullName: '',
    companyName: '',
    workEmail: '',
    projectType: PROJECT_TYPES[0],
    scope: ARCHITECTURE_SCOPES[0],
    budgetRange: BUDGET_OPTIONS[0],
    projectSummary: '',
    website_url_confirm: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSelectPill = (field: 'projectType' | 'scope', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setServerMessage('');

    // Client-side Zod validation
    const result = InquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (path) {
          fieldErrors[path.toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Submit to serverless API route handler
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setServerMessage(
          data.error || 'Dispatch limit reached or network error. Your inputs are preserved.'
        );
        return;
      }

      setStatus('success');
      setServerMessage(data.message || SITE_CONFIG.responseCopy);
    } catch {
      setStatus('error');
      setServerMessage(
        'A network interruption occurred. Your inquiry entries have been safely preserved. Please retry.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div
        className="relative w-full max-w-form mx-auto p-8 sm:p-12 rounded-2xl bg-canvas-elevated border border-emerald-200/80 shadow-card-hover text-center select-none overflow-hidden"
        role="status"
        aria-live="polite"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold block mb-2">
          INQUIRY DISPATCHED // 200 OK
        </span>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-content-primary tracking-tight">
          Inquiry Successfully Received
        </h3>

        <p className="mt-3 text-sm sm:text-base text-content-secondary max-w-md mx-auto leading-relaxed">
          {SITE_CONFIG.responseCopy}
        </p>

        <div className="mt-8 pt-6 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-content-tertiary gap-3">
          <span className="text-emerald-700 font-medium">DISPATCH // LOGGED SECURELY</span>
          <span>DIRECT INTAKE: {SITE_CONFIG.email}</span>
        </div>

        <div className="mt-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setStatus('idle');
              setFormData({
                fullName: '',
                companyName: '',
                workEmail: '',
                projectType: PROJECT_TYPES[0],
                scope: ARCHITECTURE_SCOPES[0],
                budgetRange: BUDGET_OPTIONS[0],
                projectSummary: '',
                website_url_confirm: '',
              });
            }}
          >
            Submit Another Project Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative w-full max-w-form mx-auto p-6 sm:p-10 rounded-2xl bg-canvas-elevated border border-border-hairline shadow-card-hover text-left overflow-hidden"
      aria-label="Studio Architecture Consultation Form"
    >
      {/* Ambient background soft glow */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-veytrix-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-veytrix-blue/10 rounded-full blur-3xl pointer-events-none" />
      {/* Rate Limit / Network Error Banner */}
      {status === 'error' && (
        <div
          className="mb-8 p-4 rounded-md bg-red-50 border border-red-200 text-status-error flex items-start gap-3"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold block mb-0.5">Submission Notice</span>
            <span>{serverMessage}</span>
          </div>
        </div>
      )}

      {/* Invisible Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_confirm">Leave this field blank</label>
        <input
          id="website_url_confirm"
          name="website_url_confirm"
          type="text"
          value={formData.website_url_confirm}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-xs font-semibold text-content-primary mb-2 font-mono">
            01 // FULL NAME *
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="e.g. Sarah Lin"
            value={formData.fullName}
            onChange={handleChange}
            error={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <span id="fullName-error" className="mt-1.5 text-xs text-status-error font-mono">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label htmlFor="companyName" className="text-xs font-semibold text-content-primary mb-2 font-mono">
            02 // COMPANY / ORGANIZATION *
          </label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            required
            placeholder="e.g. Nexus Dynamics"
            value={formData.companyName}
            onChange={handleChange}
            error={!!errors.companyName}
            aria-describedby={errors.companyName ? 'companyName-error' : undefined}
          />
          {errors.companyName && (
            <span id="companyName-error" className="mt-1.5 text-xs text-status-error font-mono">
              {errors.companyName}
            </span>
          )}
        </div>
      </div>

      {/* Work Email */}
      <div className="mt-6 flex flex-col">
        <label htmlFor="workEmail" className="text-xs font-semibold text-content-primary mb-2 font-mono">
          03 // WORK EMAIL *
        </label>
        <Input
          id="workEmail"
          name="workEmail"
          type="email"
          required
          placeholder="sarah@nexusdynamics.com"
          value={formData.workEmail}
          onChange={handleChange}
          error={!!errors.workEmail}
          aria-describedby={errors.workEmail ? 'workEmail-error' : undefined}
        />
        {errors.workEmail && (
          <span id="workEmail-error" className="mt-1.5 text-xs text-status-error font-mono">
            {errors.workEmail}
          </span>
        )}
      </div>

      {/* Project Type Pills */}
      <div className="mt-6 flex flex-col">
        <label className="text-xs font-semibold text-content-primary mb-2 font-mono">
          04 // PROJECT TYPE *
        </label>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => {
            const isSelected = formData.projectType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => handleSelectPill('projectType', type)}
                className={`px-3 py-2 rounded-md text-xs font-medium border transition-colors min-h-[44px] ${
                  isSelected
                    ? 'bg-content-primary text-white border-content-primary shadow-sm'
                    : 'bg-white text-content-secondary border-border-default hover:border-slate-400'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Architecture Scope Pills */}
      <div className="mt-6 flex flex-col">
        <label className="text-xs font-semibold text-content-primary mb-2 font-mono">
          05 // ARCHITECTURAL SCOPE *
        </label>
        <div className="flex flex-wrap gap-2">
          {ARCHITECTURE_SCOPES.map((scope) => {
            const isSelected = formData.scope === scope;
            return (
              <button
                key={scope}
                type="button"
                onClick={() => handleSelectPill('scope', scope)}
                className={`px-3 py-2 rounded-md text-xs font-medium border transition-colors min-h-[44px] ${
                  isSelected
                    ? 'bg-content-primary text-white border-content-primary shadow-sm'
                    : 'bg-white text-content-secondary border-border-default hover:border-slate-400'
                }`}
              >
                {scope}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget / Investment Range */}
      <div className="mt-6 flex flex-col">
        <label htmlFor="budgetRange" className="text-xs font-semibold text-content-primary mb-2 font-mono">
          06 // INVESTMENT RANGE
        </label>
        <select
          id="budgetRange"
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          className="w-full h-12 px-4 rounded-md border border-border-default bg-white text-content-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue"
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="mt-1 text-[11px] text-content-tertiary">
          Budget parameters remain flexible and will be scoped during architecture review.
        </span>
      </div>

      {/* Project Summary */}
      <div className="mt-6 flex flex-col">
        <label htmlFor="projectSummary" className="text-xs font-semibold text-content-primary mb-2 font-mono">
          07 // PROJECT SUMMARY & REQUIREMENTS *
        </label>
        <Textarea
          id="projectSummary"
          name="projectSummary"
          required
          placeholder="Describe your product goals, technical constraints, timeline targets, or architecture requirements..."
          value={formData.projectSummary}
          onChange={handleChange}
          error={!!errors.projectSummary}
          aria-describedby={errors.projectSummary ? 'projectSummary-error' : undefined}
          rows={4}
        />
        {errors.projectSummary && (
          <span id="projectSummary-error" className="mt-1.5 text-xs text-status-error font-mono">
            {errors.projectSummary}
          </span>
        )}
      </div>

      {/* Submit Action */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border-hairline">
        <div className="text-xs text-content-tertiary flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Non-disclosure protected by default.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto min-w-[220px] min-h-[48px]"
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>DISPATCHING...</span>
            </span>
          ) : (
            'Request Architecture Consultation →'
          )}
        </Button>
      </div>
    </form>
  );
}
