# Orto & Implante

Site Next.js da clínica Orto & Implante, de Bertioga/SP.

Esta etapa migra a arquitetura estrutural e os dados institucionais atualmente publicados pela clínica, mantendo indexação, analytics, deploy e envio real de formulário desativados.

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

No Windows/PowerShell, use `npm.cmd run ...` se `npm.ps1` estiver bloqueado pela política local.

## Rotas

- `/`
- `/a-clinica`
- `/tratamentos`
- `/tratamentos/[slug]`
- `/equipe`
- `/contato`
- `/politica-de-privacidade`
- `/aviso-legal`

## Dados Migrados

- Nome público: Orto & Implante.
- Cidade/UF: Bertioga/SP.
- Endereço: Av. Anchieta, 1346, salas 11/12, Bertioga/SP.
- Telefone: (13) 3317-5142.
- WhatsApp: (13) 99621-8347.
- E-mail: orto.implante@outlook.com.
- Atendimento: segunda a sexta, 09h às 19h, com intervalo das 12h às 14h; sábado, 09h às 13h.
- Convênios: não aceita convênios.
- Responsável técnico: Dr. Alexandre Molter, CRO 64.315.
- Registro da clínica: CROSP-CL 17925.
- Fundação informada: 2001.
- Experiência informada: mais de 20 anos.
- Pacientes atendidos informados: mais de 12 mil.

## Tratamentos

Os dez tratamentos migrados estão em `src/content/treatments.ts`:

- Prótese Protocolo.
- Implantes Dentários.
- Cirurgia Guiada.
- Alinhadores Invisíveis.
- Lentes de Contato Dental.
- Tratamento de Canal.
- Ortodontia.
- Cirurgias.
- Clareamento Dental.
- Clínica Geral.

Cada tratamento tem slug, resumo, apresentação geral, finalidade, possíveis indicações, funcionamento geral, nota sobre avaliação individual e FAQ.

## Estrutura

- `src/content/site.ts`: dados gerais, registros e navegação.
- `src/content/contact.ts`: canais, endereço, horários e interesses do formulário.
- `src/content/treatments.ts`: tratamentos tipados e slugs.
- `src/content/professionals.ts`: responsável técnico e futuros profissionais.
- `src/content/faq.ts`: perguntas frequentes.
- `src/content/testimonials.ts`: avaliações aprovadas, vazio por enquanto.
- `src/content/legal.ts`: textos legais em versão de desenvolvimento.
- `src/components/SiteHeader.tsx`, `MobileNavigation.tsx`, `SiteFooter.tsx`, `BrandMark.tsx`, `WhatsAppButton.tsx`.
- `src/components/AppointmentRequestForm.tsx`.
- `src/components/sections/*`: seções reutilizáveis do MVP.

## Placeholders Restantes

- Imagens reais da clínica, equipe, tratamentos, marca e Open Graph.
- Profissionais adicionais além do responsável técnico.
- Links sociais exatos.
- URL exata do Google Maps.
- Coordenadas geográficas.
- Política de privacidade final e aviso legal final.
- Provedor de e-mail, domínio de produção, analytics e rate limiting externo.

Pastas de imagens provisórias:

- `public/images/clinic`
- `public/images/team`
- `public/images/treatments`
- `public/images/brand`
- `public/images/og`

## Formulário

O formulário coleta somente:

- nome;
- telefone ou WhatsApp;
- cidade;
- tratamento ou interesse;
- mensagem curta;
- aceite da política de privacidade;
- honeypot e campos técnicos permitidos.

Não solicitar CPF, RG, exames, documentos, upload, informações clínicas sensíveis, dados financeiros ou detalhes de convênio.

O envio real permanece desativado. Preview e produção devem usar `CONTACT_FORM_MODE=disabled` até aprovação de domínio, remetente verificado, provedor de e-mail, rate limiting externo e política final.

## SEO e Produção

- `NEXT_PUBLIC_SITE_URL` deve permanecer vazio até o domínio final ser aprovado.
- `NEXT_PUBLIC_INDEXING_ENABLED=false` deve permanecer ativo até aprovação explícita.
- Sitemap retorna vazio sem domínio confirmado.
- Não há analytics, deploy ou publicação configurados nesta etapa.

## Como Atualizar

Para adicionar tratamentos, edite `src/content/treatments.ts` mantendo linguagem educativa, sem promessas de resultado e com observação de avaliação individual.

Para adicionar profissionais, edite `src/content/professionals.ts` somente com nome, função, registro, bio e imagem autorizados.

Para substituir placeholders visuais, use arquivos locais aprovados nas pastas de `public/images/*`; não baixe imagens externas sem autorização.
