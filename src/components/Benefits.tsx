const BENEFITS = [
  { icon: "📶", title: "107GB de internet", desc: "Navegue, assista e baixe sem preocupação." },
  { icon: "🚀", title: "Rede 5G", desc: "Velocidade máxima onde o 5G estiver disponível." },
  { icon: "📞", title: "Ligações ilimitadas", desc: "Ligue para quem quiser, quando quiser." },
  { icon: "📱", title: "100% digital", desc: "Sem chip físico. Tudo no seu celular." },
  { icon: "⚡", title: "Ativação rápida", desc: "Receba e ative em poucos minutos." },
  { icon: "🛡️", title: "Garantia de 30 dias", desc: "Compra protegida conforme condições da oferta." },
];

export function Benefits() {
  return (
    <section className="px-5 py-14">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-white text-center mb-8">
          O que você recebe
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="card-hover bg-[var(--color-surface)] border border-[var(--color-surface-light)] rounded-xl p-4"
            >
              <span className="text-2xl block mb-2" role="img" aria-label={b.title}>
                {b.icon}
              </span>
              <h3 className="text-sm font-semibold text-white mb-1">{b.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}