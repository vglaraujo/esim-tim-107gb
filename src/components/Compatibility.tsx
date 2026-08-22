"use client";

import { useState } from "react";
import { trackCompatibilidade } from "@/lib/analytics";

export function Compatibility() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    trackCompatibilidade();
    setIsOpen((prev) => !prev);
  }

  return (
    <section className="px-5 py-14" id="compatibilidade">
      <div className="max-w-md mx-auto">
        {/* Alert card */}
        <div className="bg-[var(--color-surface)] border border-yellow-500/30 rounded-xl p-5 text-center">
          <div className="text-3xl mb-3">⚠️</div>
          <h2 className="text-lg font-bold text-white mb-2">
            Seu celular precisa ser compatível com eSIM.
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Antes de comprar, confirme se o seu aparelho possui suporte a eSIM.
          </p>
          <button
            onClick={handleToggle}
            className="w-full py-3.5 rounded-xl border border-[var(--color-neon)]/50 text-[var(--color-neon)] font-semibold text-sm hover:bg-[var(--color-neon)]/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls="compat-panel"
          >
            {isOpen ? "FECHAR INFORMAÇÕES" : "VERIFICAR COMPATIBILIDADE"}
          </button>
        </div>

        {/* Expandable panel */}
        <div
          id="compat-panel"
          className={`compat-panel ${isOpen ? "open" : ""}`}
          aria-hidden={!isOpen}
        >
          <div className="mt-4 bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-xl p-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Como verificar no iPhone
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Vá em <strong className="text-gray-300">Ajustes → Geral → Sobre</strong>. Se
                aparecer &quot;Número eSIM&quot; ou &quot;eSIM disponível&quot;, seu iPhone é compatível.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Como verificar no Android
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Vá em <strong className="text-gray-300">Configurações → Rede e internet → Cartão SIM</strong>. Se houver a opção de adicionar eSIM, seu aparelho é compatível.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Não tem certeza?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Consulte o site do fabricante do seu aparelho ou entre em contato
                com o suporte antes de realizar a compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}