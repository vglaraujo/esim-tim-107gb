export function Security() {
  return (
    <section className="px-5 py-14 bg-[var(--color-dark-lighter)]">
      <div className="max-w-md mx-auto">
        <div className="bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-xl p-6 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <h2 className="text-lg font-bold text-white mb-3">
            Pagamento seguro e suporte
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            O pagamento é realizado em um checkout externo seguro. Os dados do cartão
            e do pagamento são tratados pela própria plataforma de checkout. Após a
            confirmação, você recebe as instruções para ativação e suporte durante o processo.
          </p>
        </div>
      </div>
    </section>
  );
}
