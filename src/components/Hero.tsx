"use client";

import { PRODUCT, CHECKOUT_URL } from "@/lib/config";
import { trackCTAPrincipal } from "@/lib/analytics";

export function Hero() {
  function handleCTA() {
    trackCTAPrincipal();
    if (!CHECKOUT_URL.startsWith("https://") && !CHECKOUT_URL.startsWith("http://")) {
      window.alert("O checkout ainda não foi configurado. Substitua CHECKOUT_URL em src/lib/config.ts pelo link do seu checkout.");
      return;
    }
    window.location.href = CHECKOUT_URL;
  }

  return (
    <section className="relative px-5 pt-12 pb-10 text-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-neon-glow)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto">
        {/* Badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-neon)]/30 bg-[var(--color-neon)]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-neon)] animate-pulse" />
          <span className="text-xs font-medium text-[var(--color-neon)] tracking-wide uppercase">
            {PRODUCT.type} • {PRODUCT.technology}
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in animate-fade-in-delay-1 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-2">
          <span className="gradient-text">{PRODUCT.name}</span>
        </h1>
        <p className="animate-fade-in animate-fade-in-delay-1 text-3xl sm:text-4xl font-bold text-white mb-3">
          {PRODUCT.data}{" "}
          <span className="text-[var(--color-neon)]">{PRODUCT.technology}</span>
        </p>

        {/* Subtitle */}
        <p className="animate-fade-in animate-fade-in-delay-2 text-base sm:text-lg text-gray-400 mb-2">
          {PRODUCT.type} + Ligações ilimitadas
        </p>
        <p className="animate-fade-in animate-fade-in-delay-2 text-sm text-gray-500 mb-8">
          Internet para o dia a dia com ativação rápida.
        </p>

        {/* Price */}
        <div className="animate-fade-in animate-fade-in-delay-3 mb-8">
          <p className="text-sm text-gray-500 mb-1">Pagamento único</p>
          <p className="text-5xl sm:text-6xl font-extrabold text-white">
            {PRODUCT.currency}{" "}
            <span className="text-[var(--color-neon)]">{PRODUCT.price}</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in animate-fade-in-delay-4 mb-6">
          <button
            onClick={handleCTA}
            className="cta-glow w-full max-w-xs mx-auto block py-4 px-8 rounded-xl text-lg font-bold text-[var(--color-dark)] tracking-wide"
            aria-label="Comprar eSIM TIM Black"
          >
            QUERO MEU eSIM
          </button>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-in animate-fade-in-delay-5 flex items-center justify-center gap-2 text-xs text-gray-500">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          <span>Pagamento seguro</span>
          <span className="text-gray-700">•</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          <span>Entrega digital</span>
          <span className="text-gray-700">•</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
          <span>Suporte na ativação</span>
        </div>
      </div>
    </section>
  );
}