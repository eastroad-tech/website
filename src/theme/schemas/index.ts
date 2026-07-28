import { z } from 'astro:content';

export const authorSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  linkedinUrl: z.string().url().optional(),
});

export const insightSchema = z.object({
  title: z.string(),
  kicker: z.string(),
  dek: z.string(),
  publishedAt: z.date(),
  readingTime: z.string(),
  author: z.string(),
  topics: z.array(z.string()),
  draft: z.boolean().default(false),
  seoTitle: z.string(),
  canonical: z.string(),
  relatedResearch: z.array(z.string()).default([]),
});

export const whitepaperSchema = insightSchema.extend({
  pageCount: z.number(),
  pdfPath: z.string(),
  methodologyNote: z.string(),
  keyFindings: z.array(z.string()),
});

export const caseStudySchema = z.object({
  title: z.string(),
  kicker: z.string(),
  confidentiality: z.enum(['anonymized', 'named']),
  dek: z.string(),
  sector: z.string(),
  engagementModel: z.string(),
  capabilitiesInvolved: z.array(z.string()),
  duration: z.string(),
  outcomeStats: z.array(z.object({ value: z.string(), label: z.string() })),
  publishedAt: z.date(),
  draft: z.boolean().default(false),
});

export const capabilitySchema = z.object({
  title: z.string(),
  number: z.string(),
  positioning: z.string(),
  clientProblems: z.string(),
  approach: z.string(),
  deliverables: z.array(z.string()),
  relatedInsights: z.array(z.string()).default([]),
});
