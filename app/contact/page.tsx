import { LeadForm } from '@/components/LeadForm';
export const metadata = {
  title: 'Contact Apex Heat Pumps | Free Quote',
  description: 'Call 604-442-6711 or request a free heat pump quote. Vancouver + 25km.'
};
export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-700">
        Call <a className="text-apex.primary underline" href="tel:6044426711">604-442-6711</a> or send the form.
      </p>
      <div className="mt-6 max-w-xl"><LeadForm /></div>
    </div>
  );
}
