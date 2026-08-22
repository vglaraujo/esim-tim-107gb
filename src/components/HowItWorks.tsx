const STEPS = [
  {
    num: "01",
    title: "Verifique a compatibilidade",
    desc: "Confirme se seu aparelho suporta eSIM nas configurações.",
  },
  {
    num: "02",
    title: "Faça o pagamento",
    desc: "Finalize a compra pelo checkout seguro.",
  },
  {
    num: "03",
    title: "Receba o QR Code",
    desc: "Enviamos as instruções e QR Code para ativação.",
  },
  {
    num: "04",
    title: "Ative seu eSIM",
    desc: "Siga as instruções e seu chip digital estará pronto.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-5 py-14 bg-[var(--color-dark-lighter)]">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-10">
          Como funciona
        </h2>
        <div className="space-y-6">
          {STEPS.map((step) => (
            <div key={step.num} className="flex gap-4 items-start">
              <span className="step-number text-3xl font-extrabold shrink-0 w-10 text-right leading-none">
                {step.num}
              </span>
              <div className="pb-6 border-b border-[var(--color-surface-light)] flex-1">
                <h3 className="text-base font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}