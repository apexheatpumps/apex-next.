'use client';
import Link from 'next/link';

export function Header() {
  const onPhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click_apex');
    }
  };
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold text-xl" aria-label="Apex Heat Pumps home">
          APEX Heat Pumps
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden md:flex gap-6">
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/rebates" className="hover:underline">Rebates</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <a href="tel:6044426711" onClick={onPhoneClick} className="btn-primary hidden sm:inline-flex" aria-label="Call 604-442-6711">
          Call 604-442-6711
        </a>
      </div>
    </header>
  );
}
