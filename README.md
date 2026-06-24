# Projeto em Preparacao

Aplicacao Next.js em fase de limpeza para novo desenvolvimento. Esta copia preserva a arquitetura tecnica reutilizavel e remove referencias, dados pessoais e assets especificos do projeto anterior.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## Ambiente

Use `.env.example` como referencia. Valores reais devem ficar fora do Git.

- `NEXT_PUBLIC_SITE_URL` deve permanecer vazio ate o dominio final ser confirmado.
- `NEXT_PUBLIC_INDEXING_ENABLED=false` deve permanecer ate aprovacao final.
- `CONTACT_FORM_MODE=mock` e permitido apenas localmente e em testes.
- Preview e producao devem usar `CONTACT_FORM_MODE=disabled` ate configuracao completa.
- Credenciais de e-mail, rate limit e provedores externos devem ficar somente em variaveis de ambiente server-side.

## Estado Atual

- Conteudo publico substituido por placeholders neutros.
- Formulario preservado com campos minimos.
- Structured data juridico removido.
- Assets especificos do projeto anterior devem permanecer removidos ou substituidos antes da publicacao.

## Checklist Antes de Novo Desenvolvimento

- Confirmar identidade, dominio, canais e politica de privacidade finais.
- Configurar provedor real de e-mail somente apos dominio/remetente verificados.
- Configurar rate limiting externo para ambientes serverless.
- Revisar testes E2E quando o conteudo final for definido.
