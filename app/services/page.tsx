export const metadata = {
  title: 'Heat Pump Services | Apex Heat Pumps Vancouver',
  description: 'Installation, emergency repair, and maintenance. Gas furnace to heat pump conversions across Vancouver and nearby cities.'
};
export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="card"><h2 className="font-semibold">Installation</h2><p className="mt-2 text-sm text-slate-600">Ducted & ductless systems. Right-sized for Vancouver climate.</p></div>
        <div className="card"><h2 className="font-semibold">Gas Furnace → Heat Pump</h2><p className="mt-2 text-sm text-slate-600">CleanBC-eligible retrofits. Permit and rebate paperwork handled.</p></div>
        <div className="card"><h2 className="font-semibold">Emergency Repair</h2><p className="mt-2 text-sm text-slate-600">24/7 diagnostics and repairs.</p></div>
      </div>
    </div>
  );
}
