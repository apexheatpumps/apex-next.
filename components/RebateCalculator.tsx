'use client';
import { useState } from 'react';

type Answers = {
  heating: 'gas'|'electric'|'oil'|'propane';
  dwelling: 'detached'|'townhome'|'condo';
  income: 'standard'|'incomeQualified';
  occupants: number;
};

export function RebateCalculator() {
  const [ans, setAns] = useState<Answers>({
    heating: 'gas',
    dwelling: 'detached',
    income: 'standard',
    occupants: 2
  });
  const [estimate, setEstimate] = useState<number | null>(null);

  function compute(a: Answers) {
    // Simple local logic for demo purposes
    let base = 6000; // baseline
    if (a.heating === 'gas') base += 6000; // fuel-switch bonus
    if (a.dwelling !== 'condo') base += 2000;
    if (a.income === 'incomeQualified') base += 8500;
    // Cap around 24500 to align with messaging
    return Math.min(base, 24500);
  }

  return (
    <div className="card max-w-2xl">
      <h3 className="text-xl font-bold">Rebate Pre‑Qualification</h3>
      <p className="text-sm text-slate-600 mt-1">Answer four quick questions to see an estimated rebate.</p>

      <div className="mt-4 grid gap-4">
        <div>
          <label className="block text-sm font-medium">Current primary heating</label>
          <select className="input mt-1" value={ans.heating} onChange={(e)=>setAns({...ans, heating: e.target.value as any})}>
            <option value="gas">Natural Gas</option>
            <option value="electric">Electric Baseboards</option>
            <option value="oil">Oil</option>
            <option value="propane">Propane</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Dwelling type</label>
          <select className="input mt-1" value={ans.dwelling} onChange={(e)=>setAns({...ans, dwelling: e.target.value as any})}>
            <option value="detached">Detached / Duplex</option>
            <option value="townhome">Townhome</option>
            <option value="condo">Condo / Apartment</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Income level</label>
          <select className="input mt-1" value={ans.income} onChange={(e)=>setAns({...ans, income: e.target.value as any})}>
            <option value="standard">Standard</option>
            <option value="incomeQualified">Income‑Qualified</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">People in the home</label>
          <input className="input mt-1" type="number" min={1} value={ans.occupants} onChange={(e)=>setAns({...ans, occupants: Number(e.target.value) || 1})} />
        </div>

        <div className="flex gap-3">
          <button className="btn-primary" onClick={()=>setEstimate(compute(ans))}>Estimate Rebate</button>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100">
            Speak to a Specialist
          </a>
        </div>

        {estimate !== null && (
          <div className="mt-3 p-3 rounded-md bg-slate-100 text-slate-800">
            Estimated rebate: <strong>${'{'}estimate{'}'}</strong>. Final amounts depend on program eligibility and site visit.
          </div>
        )}
      </div>
    </div>
  );
}
