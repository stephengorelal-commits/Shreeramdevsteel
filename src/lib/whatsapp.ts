import { trackEvent } from './analytics';

export const PHONE_NUMBER = '+91 99207 76840';
export const PHONE_TEL = 'tel:+919920776840';
export const WHATSAPP_NUMBER = '919920776840';
export const WHATSAPP_BASE = 'https://wa.me/919920776840';

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string, label: string): void {
  trackEvent('click_whatsapp', { label });
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

export function openWhatsAppEnquiry(productName: string, label: string): void {
  trackEvent('product_enquiry_click', { label, product: productName });
  const message = `Hello Shree Ramdev Steel,\n\nI would like to enquire about: ${productName}\n\nPlease share price and availability.\n\nThank you.`;
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

export function openCall(label: string): void {
  trackEvent('click_call', { label });
  window.location.href = PHONE_TEL;
}

export function openWholesaleQuote(label: string): void {
  trackEvent('wholesale_quote_click', { label });
  const message = `Hello Shree Ramdev Steel,\n\nI would like to get a wholesale quote for stainless steel products.\n\nPlease share your wholesale pricing.\n\nThank you.`;
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}
