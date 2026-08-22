import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-5 py-8 bg-[var(--color-dark-lighter)] border-t border-[var(--color-surface-light)]">
      <div className="max-w-md mx-auto text-center space-y-4">
        <p className="text-xs font-semibold text-[var(--color-tim-red)]">
          Venda independente. Não somos a TIM.
        </p>
        <p className="text-xs text-gray-600 leading-relaxed">
          Produto digital. Verifique a compatibilidade do seu aparelho antes da compra.
          O pagamento é processado pela plataforma de checkout indicada no botão de compra.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <Link href="/termos-de-uso" className="hover:text-[var(--color-neon)] transition-colors">
            Termos de uso
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/politica-de-privacidade" className="hover:text-[var(--color-neon)] transition-colors">
            Política de privacidade
          </Link>
        </div>

        <p className="text-[11px] text-gray-700">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
