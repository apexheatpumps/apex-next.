import { LeadForm } from '@/components/LeadForm';
import Link from 'next/link';

export const metadata = {
  title: 'Heat Pump Contractor Vancouver | Apex Heat Pumps',
  description: 'Vancouver heat pump installs and gas furnace retrofits. CleanBC rebates up to $24,500. We handle all paperwork. Call 604-442-6711.'
};

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-50">
        <div className="container py-10 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Vancouver Heat Pump Installation
            </h1>
            <p className="mt-4 text-lg">
              HPCN & CleanBC certified. Up to <strong>$24,500</strong> in rebates.
              We handle all paperwork. 24/7 emergency support.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:6044426711" aria-label="Call Apex Heat Pumps at 604-442-6711"
                 onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event','phone_click_apex'); }}}
                 className="btn-primary">
                Call 604-442-6711
              </a>
              <Link href="/rebates" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100">
                Rebate Pre-Qualification
              </Link>
            </div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Gas furnace → heat pump retrofits</li>
              <li>• Vancouver, Burnaby, Richmond, North Vancouver, Surrey</li>
              <li>• CleanBC paperwork handled end-to-end</li>
            </ul>
          </div>
          <div id="quote" className="card">
            <h2 className="text-xl font-bold">Request Your Free Quote</h2>
            <p className="text-sm text-slate-600 mt-1">Fast callback. No obligation.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              By submitting, you agree to be contacted about your project.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold">Why homeowners choose Apex</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="card"><h3 className="font-semibold">CleanBC + HPCN Certified</h3><p className="mt-2 text-sm text-slate-600">Eligible for up to $24,500 rebates. We manage all paperwork.</p></div>
          <div className="card"><h3 className="font-semibold">Gas Furnace Retrofits</h3><p className="mt-2 text-sm text-slate-600">Specialists in switching from gas to efficient heat pumps.</p></div>
          <div className="card"><h3 className="font-semibold">24/7 Emergency</h3><p className="mt-2 text-sm text-slate-600">Live operator. Priority response in Vancouver + 25km.</p></div>
        </div>
      </section>
    </div>
  );
}
