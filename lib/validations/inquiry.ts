import { z } from 'zod';

export const InquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
  companyName: z
    .string()
    .trim()
    .min(2, 'Company or organization name is required')
    .max(100, 'Company name must not exceed 100 characters'),
  workEmail: z
    .string()
    .trim()
    .email('Please enter a valid work email address')
    .max(120, 'Email must not exceed 120 characters'),
  projectType: z
    .string()
    .min(1, 'Please select a project type'),
  scope: z
    .string()
    .min(1, 'Please select an architectural scope'),
  budgetRange: z
    .string()
    .default("Not sure / Let's discuss"),
  projectSummary: z
    .string()
    .trim()
    .min(10, 'Project summary must be at least 10 characters')
    .max(2000, 'Project summary must not exceed 2000 characters'),
  website_url_confirm: z
    .string()
    .optional(),
});

export type InquiryPayload = z.infer<typeof InquirySchema>;

export const PROJECT_TYPES = [
  'Web Application',
  'Mobile App (iOS / Android)',
  'Design System & UI/UX',
  'Custom Software & AI',
  '0-to-1 Product Incubation',
] as const;

export const ARCHITECTURE_SCOPES = [
  'End-to-End Build & Launch',
  'Architecture & Prototyping',
  'Design System Engineering',
  'Performance & Security Audit',
] as const;

export const BUDGET_OPTIONS = [
  "Not sure / Let's discuss",
] as const;
