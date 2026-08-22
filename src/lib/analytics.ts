// ============================================
// ANALYTICS - Eventos de conversão (placeholder)
// ============================================
// Quando estiver pronto, adicione seu Google Analytics ID,
// Meta Pixel ID e descomente as funções abaixo.

// --- Google Analytics ---
// const GA_ID = "G-XXXXXXXXXX";

// function gtag(...args: unknown[]) {
//   if (typeof window !== "undefined" && (window as any).gtag) {
//     (window as any).gtag(...args);
//   }
// }

// --- Meta Pixel ---
// const META_PIXEL_ID = "XXXXXXXXXXXXXXX";

// function fbq(...args: unknown[]) {
//   if (typeof window !== "undefined" && (window as any).fbq) {
//     (window as any).fbq(...args);
//   }
// }

/**
 * Evento: clique no botão principal do Hero
 */
export function trackCTAPrincipal() {
  // gtag("event", "cta_principal_click", { event_category: "engagement" });
  // fbq("track", "Lead");
  console.log("[analytics] CTA principal clicado");
}

/**
 * Evento: clique no botão de compra (CTA final)
 */
export function trackCompra() {
  // gtag("event", "purchase_click", { event_category: "conversion" });
  // fbq("track", "InitiateCheckout");
  console.log("[analytics] Compra clicada");
}

/**
 * Evento: clique em verificar compatibilidade
 */
export function trackCompatibilidade() {
  // gtag("event", "compat_check_click", { event_category: "engagement" });
  // fbq("track", "ViewContent");
  console.log("[analytics] Verificar compatibilidade clicado");
}
