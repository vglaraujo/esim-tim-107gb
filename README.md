# eSIM TIM Black 107GB 5G — Landing Page

Landing page profissional para venda de eSIM TIM Black. Projeto Next.js simples, estático e otimizado para celular.

---

## COMO PUBLICAR NA VERCEL (pelo celular)

### Passo 1 — Criar repositório no GitHub

1. Abra o navegador e acesse **github.com** (logue se necessário)
2. No canto superior direito, toque no **+** e depois em **New repository**
3. Em **Repository name**, digite algo como: `esim-tim-black`
4. Deixe **Public** selecionado
5. **NÃO** marque "Add a README file"
6. **NÃO** marque "Add .gitignore"
7. Toque em **Create repository**

### Passo 2 — Enviar os arquivos para o GitHub

**Como enviar pelo celular:**

1. No repositório vazio, toque em **"Add file" → "Create new file"**
2. Digite o caminho completo com barra: `src/app/page.tsx`
3. Cole o conteúdo do arquivo
4. Toque em **Commit changes**
5. Repita para cada arquivo

**Dica para enviar vários arquivos de uma vez:**

1. Toque em **"Add file" → "Upload files"**
2. Selecione vários arquivos do seu celular
3. **Importante:** todos os arquivos enviados juntos vão para a mesma pasta
4. Para pastas diferentes, faça um upload por vez

**Ordem recomendada de upload:**

1. Primeiro envie os arquivos raiz: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `.gitignore`
2. Depois envie os da pasta `src/app/`: `layout.tsx`, `page.tsx`, `globals.css`
3. Depois envie os da pasta `src/components/` (todos de uma vez)
4. Depois envie os da pasta `src/lib/` (todos de uma vez)
5. Por fim, envie os das subpastas `termos-de-uso/` e `politica-de-privacidade/`
6. O `README.md` pode ser enviado a qualquer momento

### Passo 3 — Importar na Vercel

1. Acesse **vercel.com** (logue ou crie conta com GitHub)
2. Toque em **"Add New..." → Project**
3. Na seção "Import Git Repository", encontre seu repositório `esim-tim-black`
4. Se não aparecer, toque em **"Adjust GitHub App Permissions"** e autorize
5. Com o repositório selecionado:
   - **Framework Preset:** deve detectar "Next.js" automaticamente
   - **Build Command:** deixe `next build`
   - **Output Directory:** deixe `.next`
6. Toque em **"Deploy"**
7. Aguarde ~1 minuto
8. Pronto! Você receberá um link como: `https://esim-tim-black.vercel.app`

---

## COMO PERSONALIZAR

### Trocar o link do checkout

Abra o arquivo `src/lib/config.ts` e troque:

```
export const CHECKOUT_URL = "COLE_SEU_LINK_AQUI";
```

Para o seu link real, por exemplo:

```
export const CHECKOUT_URL = "https://seulink.checkout.com/pay";
```

Todos os botões de compra ("QUERO MEU eSIM" e "COMPRAR AGORA") usam essa variável.

### Trocar preço

No mesmo arquivo `src/lib/config.ts`:

```
price: "35,00",
```

### Trocar textos

- **Hero:** edite `src/components/Hero.tsx`
- **Benefícios:** edite `src/components/Benefits.tsx`
- **Como funciona:** edite `src/components/HowItWorks.tsx`
- **FAQ:** edite `src/components/FAQ.tsx`
- **Footer:** edite `src/components/Footer.tsx`

### Trocar email de suporte

No arquivo `src/lib/config.ts`:

```
export const SUPPORT = {
  email: "seuemail@aqui.com",
};
```

### Trocar informações de SEO

No arquivo `src/app/layout.tsx`, edite:
- `title` — título que aparece na aba do navegador e no Google
- `description` — descrição que aparece nos resultados de busca

---

## COMO ADICIONAR GOOGLE ANALYTICS / META PIXEL

O arquivo `src/lib/analytics.ts` já tem a estrutura pronta.

1. Adicione os scripts do Google Analytics e Meta Pixel no `layout.tsx`
2. Descomente as funções em `analytics.ts` e preencha os IDs
3. Os eventos já estão configurados:
   - `trackCTAPrincipal()` — clique no botão "QUERO MEU eSIM"
   - `trackCompra()` — clique no botão "COMPRAR AGORA"
   - `trackCompatibilidade()` — clique em "VERIFICAR COMPATIBILIDADE"

---

## ESTRUTURA DO PROJETO

```
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .gitignore
├── README.md
├── src/
│   ├── app/
│   │   ├── layout.tsx          # SEO, fonte, layout global
│   │   ├── page.tsx            # Página principal (monta tudo)
│   │   ├── globals.css         # Estilos e tema escuro
│   │   ├── termos-de-uso/
│   │   │   └── page.tsx        # Placeholder de termos
│   │   └── politica-de-privacidade/
│   │       └── page.tsx        # Placeholder de privacidade
│   ├── components/
│   │   ├── Hero.tsx            # Seção hero com preço e CTA
│   │   ├── Benefits.tsx        # Cards de benefícios
│   │   ├── HowItWorks.tsx      # 4 passos de como funciona
│   │   ├── Compatibility.tsx   # Alerta de compatibilidade eSIM
│   │   ├── Security.tsx        # Seção de compra segura
│   │   ├── Guarantee.tsx       # Garantia de 30 dias
│   │   ├── FAQ.tsx             # Perguntas frequentes
│   │   ├── FinalCTA.tsx        # CTA final de compra
│   │   └── Footer.tsx          # Rodapé com disclaimer
│   └── lib/
│       ├── config.ts           # CHECKOUT_URL, preço, suporte
│       └── analytics.ts        # Eventos de conversão (placeholder)
```

## Página pós-pagamento

A página `/obrigado/` já está incluída no projeto e abre o WhatsApp no número 11 98254-4590.

Na InfinitePay, ative o redirecionamento após o pagamento e use:
`https://SEU-DOMINIO.vercel.app/obrigado/`

O webhook pode permanecer vazio neste fluxo manual.
