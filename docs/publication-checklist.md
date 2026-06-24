# Checklist de Publicacao

Publicacao bloqueada ate revisao humana.

- Nenhum dado do projeto anterior deve aparecer no codigo, docs, testes ou assets.
- Nenhum segredo real deve estar versionado.
- `.env.example` deve conter somente valores vazios ou ficticios.
- `NEXT_PUBLIC_SITE_URL` deve ser definido somente apos dominio aprovado.
- Indexacao deve permanecer desativada ate aprovacao.
- Formulario em preview/producao deve usar modo `disabled` ate entrega real e rate limiting externo.
- Historico Git deve ser reescrito ou repositorio recriado se dados reais do projeto anterior nao puderem permanecer no historico.
