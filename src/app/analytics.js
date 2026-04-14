'use client';

import Clarity from '@microsoft/clarity';

export function trackEvent(eventName, params = {}) {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
  // Clarity
  if (typeof window !== 'undefined') {
    Clarity.event(eventName);
  }
}
