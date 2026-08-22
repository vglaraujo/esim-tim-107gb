"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "O que é eSIM?",
    a: "eSIM é um chip digital integrado ao seu celular. Ele substitui o chip físico e permite ativar um plano de celular sem precisar inserir nenhum cartão."
  },
  {
    q: "Meu celular precisa ser compatível?",
    a: "Sim. Antes de comprar, verifique se o seu aparelho possui suporte a eSIM nas configurações ou consulte o fabricante."
  },
  {
    q: "Como recebo o eSIM?",
    a: "Após a confirmação do pagamento, você recebe as instruções e o QR Code para ativação por e-mail ou mensagem."
  },
  {
    q: "Quanto tempo demora para receber?",
    a: "O envio é feito em poucos minutos após a confirmação do pagamento. Em casos excepcionais, pode levar até algumas horas."
  },
  {
    q: "Posso usar 5G?",
    a: "Sim, o plano é 5G. A velocidade depende da cobertura 5G da TIM na sua região."
  },
  {
    q: "O pagamento é único?",
    a: "Sim. Você paga uma única vez pelo período contratado. Não há cobranças recorrentes ou surpresas."
  },
  {
    q: "Existe garantia?",
    a: "Sim. Oferecemos garantia de 30 dias para problemas relacionados ao serviço conforme as condições da oferta. Entre em contato com o suporte."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="px-5 py-14 bg-[var(--color-dark-lighter)]" id="faq">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-8">
          Perguntas frequentes
        </h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium text-white pr-4">
                  {item.q}
                </span>
                <span
                  className={`faq-icon text-[var(--color-neon)] text-xl font-light shrink-0 ${openIndex === i ? "open" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={`faq-content ${openIndex === i ? "open" : ""}`}
                aria-hidden={openIndex !== i}
              >
                <p className="px-4 pb-4 text-sm text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}