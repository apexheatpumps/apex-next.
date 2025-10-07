import { z } from 'zod';
export const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(7, 'Phone is required'),
  email: z.string().email('Valid email required').optional().or(z.literal('')),
  city: z.string().optional().default('Vancouver'),
  service: z.enum(['install', 'retrofit', 'repair']).default('retrofit'),
  message: z.string().optional().default('')
});
export type LeadInput = z.infer<typeof leadSchema>;
