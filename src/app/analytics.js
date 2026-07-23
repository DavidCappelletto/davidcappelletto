'use client';

import Clarity from '@microsoft/clarity';

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  // GA4 — no-op if analytics consent wasn't given (gtag never loaded)
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
  // Clarity — no-op if analytics consent wasn't given (Clarity never initialized)
  if (window.__dcClarityReady) {
    Clarity.event(eventName);
  }
}
