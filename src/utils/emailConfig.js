// EmailJS configuration
// All three values come from your EmailJS dashboard (https://dashboard.emailjs.com).
// They're injected at build time via Vite env vars — see .env.example for setup.
//
// IMPORTANT: Vite only exposes env vars prefixed with VITE_ to client-side code.
// These are not secret — EmailJS public keys and IDs are designed to be used
// in browser code (your EmailJS account dashboard controls rate limits/abuse).

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export const isEmailjsConfigured = () =>
  Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey);
