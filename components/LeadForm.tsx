'use client';
import { useFormStatus, useFormState } from 'react-dom';
import { submitLead } from '@/lib/actions';

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-label="Submit quote request" className="btn-primary w-full" disabled={pending}>
      {pending ? 'Sending…' : 'Request Callback'}
    </button>
  );
}
const initial = { ok: false, error: '' } as { ok: boolean; error?: string };
export function LeadForm() {
  const [state, formAction] = useFormState(submitLead, initial);
  return (
    <form action={formAction} className="space-y-3" aria-label="Lead capture form">
      <div><label htmlFor="name" className="block text-sm font-medium">Full name</label>
        <input id="name" name="name" required className="input" autoComplete="name" /></div>
      <div><label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" required className="input" inputMode="tel" /></div>
      <div><label htmlFor="email" className="block text-sm font-medium">Email (optional)</label>
        <input id="email" name="email" type="email" className="input" /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div><label htmlFor="city" className="block text-sm font-medium">City</label>
          <input id="city" name="city" defaultValue="Vancouver" className="input" /></div>
        <div><label htmlFor="service" className="block text-sm font-medium">Service</label>
          <select id="service" name="service" className="input" defaultValue="retrofit" aria-label="Select service">
            <option value="retrofit">Gas furnace → Heat pump</option>
            <option value="install">New installation</option>
            <option value="repair">Emergency repair</option>
          </select></div>
      </div>
      <div><label htmlFor="message" className="block text-sm font-medium">Notes</label>
        <textarea id="message" name="message" rows={3} className="input" /></div>
      <SubmitBtn />
      {state?.ok && (<p className="text-green-600 text-sm mt-2" role="status">Thanks—our team will call you shortly.</p>)}
      {!state?.ok && state?.error && (<p className="text-red-600 text-sm mt-2" role="alert">{state.error}</p>)}
    </form>
  );
}
