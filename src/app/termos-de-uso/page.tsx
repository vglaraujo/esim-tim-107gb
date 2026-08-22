import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | eSIM TIM Black",
  description: "Termos de uso da oferta independente de eSIM.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] px-5 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[var(--color-neon)] mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Voltar
        </Link>

        <h1 className="text-2xl font-bold text-white mb-2">Termos de Uso</h1>
        <p className="text-xs text-gray-600 mb-8">Última atualização: 22 de agosto de 2026</p>

        <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">1. Sobre a oferta</h2>
            <p>Esta página apresenta uma oferta independente de eSIM. A venda não é realizada pela TIM e este site não é um canal oficial da operadora. O comprador deve verificar a compatibilidade do aparelho com eSIM antes da contratação.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">2. Compra e pagamento</h2>
            <p>O valor da oferta é informado na página de compra. O pagamento é realizado por meio do checkout disponibilizado pelo vendedor. A confirmação da compra depende da aprovação do pagamento pela plataforma utilizada.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">3. Entrega e ativação</h2>
            <p>Por se tratar de produto digital, as instruções e os dados necessários à ativação são enviados após a confirmação do pagamento. O comprador é responsável por possuir aparelho compatível, seguir as instruções de instalação e utilizar o serviço de acordo com as regras da operadora.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">4. Garantia</h2>
            <p>A oferta informa garantia de 30 dias para problemas relacionados ao serviço, observadas as condições da oferta. A garantia não cobre incompatibilidade do aparelho, configuração incorreta pelo comprador, falta de cobertura, indisponibilidade de rede da operadora, uso em desacordo com as instruções ou fatos que não sejam de responsabilidade do vendedor.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">5. Cancelamento e reembolso</h2>
            <p>Solicitações de cancelamento, reembolso ou suporte devem ser encaminhadas pelo canal de atendimento informado durante a compra. Quando houver falha imputável ao vendedor que impeça a utilização do serviço e que não possa ser corrigida, a solicitação será analisada conforme a garantia anunciada e a legislação aplicável.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">6. Uso adequado</h2>
            <p>É vedado utilizar o produto para finalidades ilícitas, fraudes, tentativas de burlar sistemas da operadora ou qualquer atividade proibida pela legislação ou pelas regras aplicáveis ao serviço de telecomunicações.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">7. Alterações</h2>
            <p>Estes termos podem ser atualizados para refletir alterações na oferta, no processo de atendimento ou na legislação. A versão vigente estará disponível nesta página.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">8. Contato</h2>
            <p>O canal de atendimento aplicável à compra será informado no processo de checkout ou nas instruções enviadas após a confirmação do pagamento.</p>
          </section>

          <p className="text-xs text-gray-600 pt-2">Este documento é um modelo informativo e não substitui orientação jurídica específica para a atividade comercial.</p>
        </div>
      </div>
    </main>
  );
}
