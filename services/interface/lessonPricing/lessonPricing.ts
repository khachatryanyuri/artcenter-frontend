// Mirrors the backend ILessonPricing interface.
// Keep this file in sync if the backend schema changes.

export interface IPricingDuration {
  duration: 30 | 45 | 60;
  priceAMD: number;
}

export interface IPricingTier {
  participantCount: number; // 1 = individual, 2 = pair, 3 = trio, etc.
  durations: IPricingDuration[];
}

export type DiscountCondition = 'fullCourse' | '8lessons' | string;

export interface IDiscount {
  condition: string;
  percentage: number;
}

export interface IPricingSection {
  title: Record<string, string>;
  description?: Record<string, string>;
  levels?: string[];
  tiers: IPricingTier[];
}

export interface ILessonPricing {
  id: string; // the stringified Mongo _id
  courseId: string;
  label: Record<string, string>; // localized
  sections: IPricingSection[];
  discounts: IDiscount[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ILessonPricingResponse {
  pricing: ILessonPricing;
  usdExchangeRate: number;
}
