// Inline SVG Data URIs for offline-capable, instant-rendering default images
export const DEFAULT_PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4f46e5" />
      <stop offset="50%" stop-color="#7c3aed" />
      <stop offset="100%" stop-color="#db2777" />
    </linearGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.07" />
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#bgGrad)" />
  <rect width="800" height="450" fill="url(#gridPattern)" />
  <circle cx="680" cy="90" r="160" fill="#ffffff" fill-opacity="0.08" />
  <circle cx="120" cy="360" r="140" fill="#ffffff" fill-opacity="0.06" />
  <g transform="translate(360, 160)">
    <rect x="-10" y="-10" width="100" height="100" rx="24" fill="#ffffff" fill-opacity="0.2" />
    <path d="M15 25 L35 10 L55 25 M20 42 L60 42 M20 58 L60 58 M20 74 L45 74" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="400" y="310" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" fill-opacity="0.95" text-anchor="middle" letter-spacing="1.5">INKWELL ARTICLE COVER</text>
</svg>
`)}`;

export const TECH_PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" fill="none">
  <defs>
    <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#312e81" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#techGrad)" />
  <circle cx="700" cy="60" r="220" fill="url(#accentGrad)" fill-opacity="0.15" />
  <g transform="translate(340, 140)">
    <rect x="0" y="0" width="120" height="120" rx="28" fill="url(#accentGrad)" fill-opacity="0.3" stroke="#818cf8" stroke-width="2" />
    <path d="M35 45 L20 60 L35 75 M85 45 L100 60 L85 75 M65 40 L55 80" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="400" y="320" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#f8fafc" fill-opacity="0.9" text-anchor="middle" letter-spacing="1">REACT & WEB ARCHITECTURE</text>
</svg>
`)}`;

export const DESIGN_PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" fill="none">
  <defs>
    <linearGradient id="designGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#designGrad)" />
  <circle cx="150" cy="100" r="180" fill="#ffffff" fill-opacity="0.1" />
  <g transform="translate(340, 140)">
    <rect x="0" y="0" width="120" height="120" rx="28" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2" />
    <circle cx="60" cy="60" r="32" fill="none" stroke="#ffffff" stroke-width="6" stroke-dasharray="12 6" />
    <path d="M45 60 L75 60 M60 45 L60 75" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
  </g>
  <text x="400" y="320" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" letter-spacing="1">UI/UX & DESIGN SYSTEMS</text>
</svg>
`)}`;

export const WRITING_PLACEHOLDER_IMAGE = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" fill="none">
  <defs>
    <linearGradient id="writeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7c3aed" />
      <stop offset="50%" stop-color="#d946ef" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#writeGrad)" />
  <g transform="translate(340, 140)">
    <rect x="0" y="0" width="120" height="120" rx="28" fill="#ffffff" fill-opacity="0.2" stroke="#ffffff" stroke-opacity="0.4" stroke-width="2" />
    <path d="M35 30 L85 30 M35 50 L85 50 M35 70 L65 70 M35 90 L55 90" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
  </g>
  <text x="400" y="320" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" fill-opacity="0.9" text-anchor="middle" letter-spacing="1">MARKDOWN & TECHNICAL WRITING</text>
</svg>
`)}`;

/**
 * Image fallback handler for <img> onError events.
 * Swaps broken image src with guaranteed inline SVG placeholder.
 */
export function handleImageError(e, fallback = DEFAULT_PLACEHOLDER_IMAGE) {
  e.target.onerror = null;
  e.target.src = fallback;
}
