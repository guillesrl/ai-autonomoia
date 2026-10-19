const CONSENT_KEY = 'autonomoia_analytics_consent';
const MEASUREMENT_ID = 'G-LC9EQM8ZJV';

export function getAnalyticsConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(value) {
  try {
    if (value === null) window.localStorage.removeItem(CONSENT_KEY);
    else window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // If storage is unavailable, keep analytics disabled for this visit.
  }
  window.dispatchEvent(new CustomEvent('analytics-consent-changed', { detail: value }));
}

export function loadAnalytics() {
  if (getAnalyticsConsent() !== 'granted' || document.querySelector(`script[data-analytics="${MEASUREMENT_ID}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
  });
  window.gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  script.dataset.analytics = MEASUREMENT_ID;
  document.head.appendChild(script);
}

export function track(eventName, parameters = {}) {
  if (getAnalyticsConsent() === 'granted' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}
