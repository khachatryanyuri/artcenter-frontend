import * as React from 'react';
import { Box, Divider, Typography, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';

import { ILessonPricing, IDiscount } from '@lib/services/interface/lessonPricing/lessonPricing';
import { getLocalizedText } from '@lib/services/helpers/service';

// ---------------------------------------------------------------------------
// Locale-aware text constants
// ---------------------------------------------------------------------------
const LABELS: Record<string, Record<string, string>> = {
  participants: { hy: 'ուսանող', ru: 'человека', en: 'students' },
  min: { hy: 'րոպե', ru: 'минут', en: 'minutes' },
  discounts: { hy: 'Զեղչեր', ru: 'Скидки', en: 'Discounts' },
  perPerson: { hy: 'Գները նշված են մեկ ուսանողի համար', ru: 'Цены указаны за одного человека', en: 'Prices are per student' },
  levels: { hy: 'Մակարդակներ', ru: 'Уровни', en: 'Levels' },
  rateNote: {
    hy: '* ԱՄՆ դոլարով գները հաշվարկված են ՀՀ ԿԲ ներկայիս փոխարժեքով՝ 1 USD = {rate} ՀՀ դրամ',
    ru: '* Цены в долларах США рассчитаны по текущему курсу ЦБ РА: 1 USD = {rate} AMD',
    en: '* Prices in USD are calculated at the current CBA exchange rate: 1 USD = {rate} AMD',
  },
  fullCourse: { hy: 'ամբողջ մակարդակի/կուրսի վճարման դեպքում', ru: 'при оплате всего уровня/курса', en: 'for full level/course payment' },
  '8lessons': { hy: '8 դասի նախավճարի դեպքում', ru: 'при оплате сразу за 8 уроков', en: 'for advance payment of 8 lessons' },
};

function t(key: string, locale: string): string {
  return LABELS[key]?.[locale] ?? LABELS[key]?.['en'] ?? key;
}

function discountLabel(condition: string, locale: string): string {
  return LABELS[condition]?.[locale] ?? LABELS[condition]?.['en'] ?? condition;
}

// ---------------------------------------------------------------------------
// Price formatting helpers (same logic as the old constants.ts)
// ---------------------------------------------------------------------------
function formatAMD(amdPrice: number): string {
  return amdPrice >= 10000 ? `${amdPrice / 1000}.000` : amdPrice.toString();
}

function formatPrice(amdPrice: number, usdExchangeRate: number, locale: string): string {
  const usdPrice = Math.round(amdPrice / usdExchangeRate);
  const formattedAmd = formatAMD(amdPrice);
  const currencyLabel = locale === 'hy' ? 'ՀՀ դրամ' : 'AMD';
  return `${formattedAmd} ${currencyLabel} ($${usdPrice})`;
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
interface Props {
  pricing: ILessonPricing;
  usdExchangeRate: number;
}

export default function PricingTable({ pricing, usdExchangeRate }: Props) {
  const { locale = 'hy' } = useRouter();

  return (
    <Box sx={{ mt: 3 }}>
      {/* Localised section heading */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
        {getLocalizedText(pricing.label, locale)}
      </Typography>

      {/* Sections */}
      {pricing.sections.map((section, idx) => {
        const isGroupLesson = section.tiers.some((tier) => tier.participantCount > 1);
        
        return (
          <Box key={idx} sx={{ mb: 4 }}>
            {/* Section Title */}
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, color: 'text.primary', textTransform: 'uppercase' }}>
              {getLocalizedText(section.title, locale)}
            </Typography>

            {/* Description / Levels */}
            {section.description && Object.keys(section.description).length > 0 && (
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary', fontStyle: 'italic' }}>
                {getLocalizedText(section.description, locale)}
              </Typography>
            )}

            {section.levels && section.levels.length > 0 && (
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                {t('levels', locale)}: {section.levels.join(', ')}
              </Typography>
            )}

            {/* Per-person note for group lessons */}
            {isGroupLesson && (
              <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary', fontStyle: 'italic' }}>
                {t('perPerson', locale)}
              </Typography>
            )}

            {/* Pricing tiers */}
            {section.tiers.map((tier) => (
              <Box key={tier.participantCount} sx={{ mb: 1 }}>
                {/* Participant count header — only shown for group lessons */}
                {isGroupLesson && (
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {tier.participantCount} {t('participants', locale)}
                  </Typography>
                )}

                {/* Duration rows */}
                {tier.durations.map((d) => (
                  <Typography key={d.duration} variant="body2" sx={{ ml: isGroupLesson ? 2 : 0 }}>
                    {d.duration} {t('min', locale)} — {formatPrice(d.priceAMD, usdExchangeRate, locale)}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        );
      })}

      {/* Discounts */}
      {pricing.discounts.length > 0 && (
        <>
          <Divider sx={{ my: 1.5 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
            {t('discounts', locale)}
          </Typography>
          <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
            {pricing.discounts.map((discount: IDiscount) => (
              <li key={discount.condition}>
                <Typography variant="body2">
                  {discount.percentage}% — {discountLabel(discount.condition, locale)}
                </Typography>
              </li>
            ))}
          </Box>
        </>
      )}

      {/* Exchange rate disclaimer */}
      <Typography
        variant="caption"
        sx={{ display: 'block', mt: 2, color: 'text.disabled', fontStyle: 'italic' }}
      >
        {t('rateNote', locale).replace('{rate}', usdExchangeRate.toString())}
      </Typography>
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Skeleton shown while the pricing data is loading
// ---------------------------------------------------------------------------
export function PricingTableSkeleton() {
  return (
    <Box sx={{ mt: 3 }}>
      <Skeleton variant="text" width="40%" height={28} />
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} variant="text" width="60%" height={20} sx={{ mt: 0.5 }} />
      ))}
      <Skeleton variant="text" width="50%" height={20} sx={{ mt: 1.5 }} />
      <Skeleton variant="text" width="45%" height={20} sx={{ mt: 0.5 }} />
    </Box>
  );
}
