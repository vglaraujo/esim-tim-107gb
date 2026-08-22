"use client";

import { PRODUCT, CHECKOUT_URL } from "@/lib/config";
import { trackCompra } from "@/lib/analytics";

export function FinalCTA() {
  function handleCompra() {
    trackCompra();
    if (!CHECKOUT_URL.startsWith("https://") && !CHECKOUT_URL.startsWith("http://")) {
      window.alert("O checkout ainda não foi configurado. Substitua CHECKOUT_URL em src/lib/config.ts pelo link do seu checkout.");
      return;
    }
    window.location.href = CHECKOUT_URL;
  }

  return (
    <section className="px-5 py-16">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-white mb-2">
          Pronto para ativar seu eSIM?
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          {PRODUCT.data} + {PRODUCT.technology} + Ligações ilimitadas
        </p>

        {/* Price */}
        <p className="text-4xl font-extrabold text-white mb-6">
          {PRODUCT.currency}{" "}
          <span className="text-[var(--color-neon)]">{PRODUCT.price}</span>
        </p>

        <button
          onClick={handleCompra}
          className="cta-glow w-full max-w-xs mx-auto block py-4 px-8 rounded-xl text-lg font-bold text-[var(--color-dark)] tracking-wide"
          aria-label="Comprar eSIM TIM Black agora"
        >
          COMPRAR AGORA
        </button>

        <p className="mt-4 text-xs text-gray-600">
          Pagamento seguro • Ativação rápida • Suporte incluído
        </p>
      </div>
    </section>
  );
}