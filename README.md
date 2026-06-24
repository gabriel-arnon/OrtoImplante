# Orto & Implante

Site Next.js em fase estrutural para a clinica Orto & Implante, de Bertioga/SP.

Esta fase cria rotas, componentes reutilizaveis, modelos de conteudo e formulario seguro com placeholders. Nao ha indexacao, analytics, deploy, dominio canonico ou envio real de e-mail habilitado.

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

No Windows/PowerShell, use `npm.cmd run ...` se `npm.ps1` estiver bloqueado pela politica local.

## Rotas

- `/`
- `/a-clinica`
- `/tratamentos`
- `/tratamentos/[slug]`
- `/equipe`
- `/contato`
- `/politica-de-privacidade`
- `/aviso-legal`

## Estrutura Criada

- `src/content/site.ts`: dados gerais e navegacao.
- `src/content/contact.ts`: canais, endereco, horarios e interesses do formulario.
- `src/content/treatments.ts`: tratamentos tipados e slugs.
- `src/content/professionals.ts`: profissionais tipados.
- `src/content/faq.ts`: perguntas frequentes tipadas.
- `src/content/testimonials.ts`: depoimentos aprovados, vazio por padrao.
- `src/components/SiteHeader.tsx`, `MobileNavigation.tsx`, `SiteFooter.tsx`, `BrandMark.tsx`, `WhatsAppButton.tsx`.
- `src/components/AppointmentRequestForm.tsx`.
- `src/components/sections/*`: secoes reutilizaveis do MVP.

## Placeholders

Os textos e imagens atuais sao provisorios. Substitua somente com informacoes confirmadas pela clinica.

Pastas de imagens:

- `public/images/clinic`
- `public/images/team`
- `public/images/treatments`
- `public/images/brand`
- `public/images/og`

## Adicionar Tratamentos

Edite `src/content/treatments.ts` e adicione itens com:

- `slug`;
- `title`;
- `summary`;
- `description`;
- `featured`;
- `faq`;
- imagem opcional aprovada.

Nao adicionar tratamentos nao confirmados.

## Adicionar Profissionais

Edite `src/content/professionals.ts` somente com dados aprovados:

- nome;
- funcao;
- registro profissional;
- bio curta;
- imagem autorizada opcional.

Nao inventar nomes, CROs, cargos ou especialidades.

## Configurar Contato Futuramente

Edite `src/content/contact.ts` com telefone, WhatsApp, e-mail, endereco, mapa e horarios confirmados.

Preview e producao devem permanecer com `CONTACT_FORM_MODE=disabled` ate:

- dominio final aprovado;
- remetente verificado;
- provedor de e-mail configurado;
- rate limiting externo ativo;
- politica de privacidade final aprovada.

`NEXT_PUBLIC_SITE_URL` deve permanecer vazio e `NEXT_PUBLIC_INDEXING_ENABLED=false` ate aprovacao final.
