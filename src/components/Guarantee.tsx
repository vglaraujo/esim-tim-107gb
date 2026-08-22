export function Guarantee() {
  return (
    <section className="px-5 py-14">
      <div className="max-w-md mx-auto">
        <div className="bg-[var(--color-surface)] border border-[var(--color-neon)]/20 rounded-xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-neon)]/10 border border-[var(--color-neon)]/30 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-3">
            30 dias de garantia
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Se houver algum problema relacionado ao serviço conforme as condições da oferta,
            entre em contato com o suporte para receber atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}