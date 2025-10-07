'use client';
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html><body><div className="container py-24"><h1 className="text-2xl font-bold">Something went wrong</h1><p className="mt-2 text-slate-700">{error.message}</p></div></body></html>
  );
}
