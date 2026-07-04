import { useState, useEffect } from 'react';
import axios from 'axios';

import { ILessonPricingResponse } from '@lib/services/interface/lessonPricing/lessonPricing';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface UseLessonPricingResult {
  data: ILessonPricingResponse | null;
  loading: boolean;
  error: string | null;
}

/**
 * Fetches the pricing config and the current USD/AMD exchange rate for a given
 * courseTypeKey from the backend.
 *
 * The exchange rate is fetched and cached server-side for 24 hours — the browser
 * never calls cb.am directly.
 *
 * @param courseId  The id of the course.
 *                  Pass null/undefined to skip the fetch entirely.
 */
export function useLessonPricing(courseId: string | null | undefined): UseLessonPricingResult {
  const [data, setData] = useState<ILessonPricingResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!courseId) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get<ILessonPricingResponse>(`${API_URL}/pricing/by-course/${courseId}`)
      .then((res) => {
        if (!cancelled) {
          setData(res.data);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error(`[useLessonPricing] Failed to fetch pricing for "${courseId}":`, err);
          setError('Failed to load pricing information.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    // Cleanup: prevent state updates if the component unmounts mid-flight
    return () => {
      cancelled = true;
    };
  }, [courseId]);

  return { data, loading, error };
}
