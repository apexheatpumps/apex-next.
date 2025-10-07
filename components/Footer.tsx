import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold">Apex Heat Pumps</div>
          <div>Vancouver • Burnaby • Richmond • North Vancouver • Surrey</div>
          <div className="mt-1">HPCN Registered • CleanBC Certified</div>
          <div className="mt-2">
            <a className="text-apex.primary underline" href="tel:6044426711" aria-label="Call 604-442-6711">
              604-442-6711
            </a>
            {' '}•{' '}
            <a className="text-apex.primary underline" href="mailto:info@apexheatpumps.ca">info@apexheatpumps.ca</a>
          </div>
        </div>
        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-1">
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/rebates">CleanBC Rebates</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Availability</div>
          <p className="mt-2">24/7 emergency support. Same-day installs when available.</p>
        </div>
      </div>
    </footer>
  );
}
