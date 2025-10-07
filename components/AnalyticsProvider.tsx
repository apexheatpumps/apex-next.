'use client';
import { useEffect } from 'react';

export function AnalyticsProvider() {
  useEffect(() => {
    const ga = process.env.NEXT_PUBLIC_GA_ID;
    if (!ga) return;
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${ga}`;
    document.head.appendChild(s1);
    const s2 = document.createElement('script');
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${ga}');
    `;
    document.head.appendChild(s2);
  }, []);
  return null;
}
