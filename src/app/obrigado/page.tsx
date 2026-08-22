"use client";

const whatsappUrl =
  "https://wa.me/5511982544590?text=Ol%C3%A1%21%20Acabei%20de%20realizar%20a%20compra%20do%20eSIM%20TIM%20Black%20107GB%20pelo%20site.%20Gostaria%20de%20receber%20meu%20eSIM.%20Meu%20nome%20%C3%A9%3A%20";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(160deg,#06132d_0%,#0b1f45_55%,#031027_100%)] px-6 py-8 text-slate-900 flex items-center justify-center">
      <section className="w-full max-w-[520px] rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9">
        <div className="mx-auto mb-5 grid h-[76px] w-[76px] place-items-center rounded-full bg-emerald-50 text-[42px] font-extrabold text-emerald-600">✓</div>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">Pagamento concluído!</h1>
        <p className="mx-auto mt-3 max-w-[420px] text-base leading-relaxed text-slate-500">
          Obrigado pela sua compra. Agora só falta entrar em contato pelo WhatsApp para receber seu eSIM TIM Black 107GB.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
          <strong className="block text-slate-900">eSIM TIM Black 107GB 5G</strong>
          <span className="mt-1 block text-sm text-slate-500">Entrega digital • Ativação rápida • Suporte pelo WhatsApp</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#20b95a] px-5 text-[17px] font-extrabold text-white shadow-lg shadow-emerald-500/20 transition hover:brightness-95"
        >
          📲 Receber meu eSIM pelo WhatsApp
        </a>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Tenha em mãos o nome utilizado no pagamento para facilitar a identificação do pedido.
        </p>

        <div className="mt-5 border-t border-slate-200 pt-4 text-[13px] leading-relaxed text-slate-500">
          🔒 <b className="text-slate-700">Pagamento processado pela InfinitePay</b><br />
          Antes da entrega, o pagamento será conferido pelo vendedor.
        </div>
      </section>
    </main>
  );
}
