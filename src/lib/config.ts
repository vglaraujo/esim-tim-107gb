// ============================================
// CONFIGURAÇÃO PRINCIPAL DO PRODUTO
// ============================================
// Edite os valores abaixo para personalizar a landing page.
// Todos os botões de compra usam CHECKOUT_URL.

export const PRODUCT = {
  name: "TIM BLACK",
  data: "107GB",
  technology: "5G",
  type: "eSIM",
  features: ["Ligações ilimitadas", "Ativação rápida"],
  price: "35,00",
  currency: "R$",
  guarantee: "30 dias",
} as const;

// ============================================
// CHECKOUT - Troque o link abaixo pelo seu link real
// ============================================
export const CHECKOUT_URL = "https://checkout.infinitepay.io/vglaraujo/Qku3h5VzTO";

// ============================================
// SUPORTE / CONTATO
// ============================================
export const SUPPORT = {
} as const;
