# Projeto em Preparacao

## Regras do Projeto

- Todo conteudo publico deve permanecer em portugues brasileiro.
- Esta copia esta em fase de limpeza e preparacao para novo desenvolvimento.
- Nao reaproveitar dados pessoais, contatos, imagens, marcas, textos ou metadados do projeto anterior.
- Nao publicar, fazer deploy, push ou merge sem aprovacao explicita.

## Privacidade e Formulario

- O formulario deve coletar apenas nome, telefone/WhatsApp, cidade, categoria do assunto, breve descricao, aceite de privacidade e campos tecnicos ocultos.
- Nao solicitar CPF, RG, senhas, tokens, numeros completos de conta/cartao, codigos de seguranca, documentos, extratos ou uploads.
- O formulario nunca deve reportar sucesso se o modo de entrega configurado nao aceitou a solicitacao.
- Mock de desenvolvimento e permitido somente em ambiente local e testes automatizados.
- Preview e producao devem usar `CONTACT_FORM_MODE=disabled` ate existir dominio real, remetente verificado e rate limiting externo aprovado.
- Falhas de entrega devem preservar os dados digitados e oferecer canais alternativos configurados.
- Nao registrar dados pessoais submetidos nem enviar conteudo do formulario para analytics.
- Credenciais de e-mail e rate limit devem permanecer somente no servidor.
- `/api/health` deve expor apenas status grosseiro, sem e-mails, segredos, dados de visitantes, corpos de provedores ou stack traces.

## Dominio e Indexacao

- Nao hardcodar dominio futuro como configuracao ativa.
- Nao usar URLs temporarias de preview como canonical de producao.
- Manter `NEXT_PUBLIC_SITE_URL` vazio ate dominio final confirmado.
- Manter indexacao desativada ate aprovacao final.

## Rate Limiting

- O provedor em memoria e apenas para desenvolvimento local e testes.
- Producao deve usar provedor externo atras da mesma abstracao.
- A opcao externa atual e Upstash Redis REST via HTTPS, sem pacote de fornecedor salvo necessidade real.
