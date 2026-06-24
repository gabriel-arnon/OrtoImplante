# Deploy

Deploy ainda nao autorizado.

Antes de qualquer preview publico ou producao:

- confirmar dominio final;
- manter `NEXT_PUBLIC_SITE_URL` vazio ate aprovacao;
- manter `NEXT_PUBLIC_INDEXING_ENABLED=false`;
- usar `CONTACT_FORM_MODE=disabled` em preview e producao ate e-mail e rate limiting estarem aprovados;
- configurar credenciais somente no ambiente do provedor;
- revisar logs para garantir que dados pessoais nao sejam registrados.

Nao fazer push, deploy ou publicacao sem aprovacao explicita.
