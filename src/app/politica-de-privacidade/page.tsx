import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | eSIM TIM Black",
  description: "Política de privacidade da página de venda independente de eSIM.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] px-5 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[var(--color-neon)] mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Voltar
        </Link>

        <h1 className="text-2xl font-bold text-white mb-2">Política de Privacidade</h1>
        <p className="text-xs text-gray-600 mb-8">Última atualização: 22 de agosto de 2026</p>

        <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">1. Compromisso com a privacidade</h2>
            <p>Esta página busca coletar e utilizar somente os dados necessários para atendimento, processamento da compra e entrega do produto digital. O site de venda independente não solicita dados completos de cartão diretamente nesta página.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">2. Dados que podem ser tratados</h2>
            <p>Dependendo da etapa da compra, podem ser tratados dados como nome, telefone, e-mail, informações necessárias à entrega do eSIM e dados relacionados ao pedido. Os dados de pagamento são tratados pela plataforma de checkout escolhida para a compra, conforme a política de privacidade dessa plataforma.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">3. Finalidades</h2>
            <p>Os dados podem ser utilizados para processar pedidos, confirmar pagamentos, entregar o produto digital, prestar suporte, tratar solicitações de garantia e cumprir obrigações legais.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">4. Compartilhamento</h2>
            <p>Quando necessário para concluir a compra ou prestar o serviço, dados podem ser compartilhados com o processador de pagamentos, serviços de hospedagem, ferramentas de comunicação e fornecedores diretamente envolvidos na entrega. Não é intenção desta página vender dados pessoais.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">5. Cookies e tecnologias semelhantes</h2>
            <p>A página pode utilizar recursos técnicos necessários ao funcionamento do site e, futuramente, ferramentas de análise ou publicidade. Caso sejam adicionadas ferramentas que utilizem dados para finalidades específicas, esta política deverá ser atualizada conforme necessário.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">6. Segurança</h2>
            <p>São adotadas medidas técnicas e organizacionais razoáveis para reduzir riscos de acesso indevido, perda ou alteração dos dados. Nenhum sistema conectado à internet é capaz de garantir segurança absoluta.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">7. Direitos do titular</h2>
            <p>Nos termos da legislação aplicável, o titular pode solicitar informações sobre o tratamento de seus dados, correção de dados incorretos e outras providências previstas em lei, conforme aplicável ao caso.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-gray-200 mb-2">8. Atendimento</h2>
            <p>O canal de atendimento aplicável à compra será informado no checkout ou nas instruções enviadas após a confirmação do pagamento.</p>
          </section>

          <p className="text-xs text-gray-600 pt-2">Este documento é um modelo informativo e não substitui orientação jurídica específica ou uma revisão profissional de conformidade com a LGPD.</p>
        </div>
      </div>
    </main>
  );
}
