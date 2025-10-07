'use client';
export function FloatingCall() {
  const onPhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click_apex');
    }
  };
  return (
    <div className="fixed bottom-4 right-4 sm:hidden z-50">
      <a href="tel:6044426711" onClick={onPhoneClick} aria-label="Tap to call 604-442-6711"
         className="rounded-full bg-apex.primary text-white px-5 py-3 shadow-lg font-semibold">
        Call Now
      </a>
    </div>
  );
}
