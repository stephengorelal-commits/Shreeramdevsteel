// GA4 Event Tracking
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type GA4Event =
  | 'click_call'
  | 'click_whatsapp'
  | 'whatsapp_form_submit'
  | 'wholesale_quote_click'
  | 'gallery_image_view'
  | 'product_enquiry_click'
  | 'scroll_depth'
  | 'section_view';

export function trackEvent(event: GA4Event, params?: Record<string, string | number>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, params);
  }
}

let lastScrollDepth = 0;
const scrollMilestones = [25, 50, 75, 100];

export function initScrollTracking(): void {
  if (typeof window === 'undefined') return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of scrollMilestones) {
      if (scrollPercent >= milestone && lastScrollDepth < milestone) {
        lastScrollDepth = milestone;
        trackEvent('scroll_depth', { percent: milestone });
      }
    }
  }, { passive: true });
}

let lastSectionViewed = '';
export function trackSectionView(sectionId: string, sectionName: string): void {
  if (lastSectionViewed === sectionId) return;
  lastSectionViewed = sectionId;
  trackEvent('section_view', { section_id: sectionId, section_name: sectionName });
}
