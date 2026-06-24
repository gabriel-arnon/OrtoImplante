# Entrega de E-mail

Nenhum destinatario, remetente ou provedor real deve ficar documentado com valor sensivel.

Variaveis esperadas:

```env
CONTACT_FORM_MODE=
CONTACT_EMAIL_TO=
CONTACT_EMAIL_FROM=
CONTACT_EMAIL_REPLY_TO=
CONTACT_EMAIL_PROVIDER=
CONTACT_EMAIL_API_KEY=
```

Preview e producao devem permanecer com `CONTACT_FORM_MODE=disabled` ate dominio, remetente, provedor e rate limiting externo serem aprovados.
