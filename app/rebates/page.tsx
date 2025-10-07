import { RebateCalculator } from '@/components/RebateCalculator';

export const metadata = {
  title: 'CleanBC Rebates | Up to $24,500 | Apex Heat Pumps',
  description: 'See BC rebate options for heat pump retrofits. We handle CleanBC, BC Hydro, and FortisBC paperwork for you.'
};
export default function RebatesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">BC Rebates & Paperwork</h1>
      <p className="mt-4 text-slate-700">
        Most Vancouver homeowners can qualify for significant rebates for switching from a gas furnace to a high-efficiency heat pump.
        Apex is HPCN listed and CleanBC certified. We manage the entire application and paperwork.
      </p>
      <ul className="mt-6 space-y-2 text-slate-700">
        <li>• Up to <strong>$24,500</strong> in combined rebates for eligible retrofits.</li>
        <li>• We verify eligibility, submit documents, and track approvals.</li>
        <li>• Serving Vancouver, Burnaby, Richmond, North Vancouver, and Surrey.</li>
      </ul>
      <div className="mt-10">
        <RebateCalculator />
      </div>
    </div>
  );
}
