'use server';

import { Resend } from 'resend';
import { leadSchema } from './validators';

const resendApiKey = process.env.RESEND_API_KEY;
const inbox = process.env.LEAD_INBOX || 'info@apexheatpumps.ca';

export async function submitLead(prevState: any, formData: FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    const parsed = leadSchema.safeParse({
      name: data.name,
      phone: data.phone,
      email: (data.email as string) || '',
      city: (data.city as string) || 'Vancouver',
      service: (data.service as string) || 'retrofit',
      message: (data.message as string) || ''
    });
    if (!parsed.success) {
      return { ok: false, error: parsed.error.errors[0]?.message ?? 'Invalid input' };
    }
    const lead = parsed.data;
    if (!resendApiKey) {
      return { ok: false, error: 'Email service not configured. Add RESEND_API_KEY in Vercel env.' };
    }
    const resend = new Resend(resendApiKey);
    const subject = `APEX Lead: ${lead.service.toUpperCase()} - ${lead.name} (${lead.city})`;
    const html = `<h2>New Lead</h2><ul>
      <li><b>Name:</b> ${lead.name}</li>
      <li><b>Phone:</b> ${lead.phone}</li>
      <li><b>Email:</b> ${lead.email || '-'}</li>
      <li><b>City:</b> ${lead.city}</li>
      <li><b>Service:</b> ${lead.service}</li>
      <li><b>Message:</b> ${lead.message || '-'}</li></ul>`;
    await resend.emails.send({ from: 'Apex Leads <no-reply@apexheatpumps.ca>', to: inbox, subject, html });
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? 'Failed to submit' };
  }
}
