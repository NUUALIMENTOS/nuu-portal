# NUU Alimentos — Portal de Pedidos B2B

Portal de pedidos integrado ao TINY ERP.

---

## Como publicar (sem precisar de programador)

### Passo 1 — Crie uma conta gratuita no Vercel
Acesse https://vercel.com e clique em "Sign Up".
Pode usar sua conta Google ou criar com e-mail.

### Passo 2 — Instale o Vercel CLI (só na primeira vez)
Abra o terminal do seu computador e digite:
```
npm install -g vercel
```
Se não tiver Node.js, baixe em https://nodejs.org primeiro.

### Passo 3 — Faça o deploy
Na pasta deste projeto, abra o terminal e execute:
```
vercel --prod
```
Siga as perguntas na tela (aceite os padrões). Em menos de 1 minuto você receberá uma URL como:
```
https://nuu-portal.vercel.app
```

### Passo 4 — Compartilhe a URL com seus clientes
Envie o link pelo WhatsApp. O cliente acessa, cola o token, informa o CNPJ e já pode fazer pedidos.

---

## Arquivos do projeto

| Arquivo | O que faz |
|---|---|
| `index.html` | O portal completo (visual + lógica) |
| `api/tiny.js` | Proxy seguro para a API do TINY (roda no servidor) |
| `vercel.json` | Configuração do Vercel |

---

## Como obter o Token TINY

1. Acesse seu TINY ERP em https://erp.olist.com
2. Vá em **Configurações → Integrações → Token de acesso à API**
3. Gere ou copie o token
4. Cole no campo "Token TINY ERP" na tela de login do portal

---

## Personalizar produtos e preços

Os produtos são carregados automaticamente do TINY quando o usuário informa um token válido.
Se quiser usar produtos de demonstração fixos, edite a variável `DEMO_PRODS` no `index.html`.

---

## Pedido mínimo

O valor mínimo padrão é **R$ 300,00**. Para alterar, edite a linha:
```js
const MIN_ORDER = 300;
```
no arquivo `index.html`.

---

## Suporte

Dúvidas sobre a API TINY: https://ajuda.tiny.com.br
