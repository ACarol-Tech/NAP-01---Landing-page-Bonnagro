# Bonnagro — Landing Page (NAP 01)

Landing page institucional da **Bonnagro**, empresa de ração animal para bovinos, caprinos/ovinos e suínos. Projeto desenvolvido para a atividade **NAP 01 - Landpage**.

## Requisitos atendidos

- **Estrutura HTML** — `index.html`, semântico (`header`, `nav`, `main`, `section`, `footer`), com cabeçalho, seção hero, linhas de produto, tabela nutricional, formulário de contato e rodapé.
- **Estilização CSS** — `style.css`, com sistema de cores e tipografia próprio (verde-mata, dourado-milho, tons de terra), usando as fontes Fraunces, Work Sans e IBM Plex Mono.
- **Responsividade** — layout fluido com `clamp()`, grid que se adapta em `900px` e `720px`, e menu mobile do tipo hambúrguer.
- **Tabela** — tabela nutricional comparativa entre as linhas Bovinos, Caprinos/Ovinos e Suínos (proteína, energia, fibra, cálcio, fósforo, consumo diário).
- **Formulário** — formulário de solicitação de orçamento (nome, e-mail, telefone, linha de interesse, mensagem). Ao enviar, abre automaticamente:
  - o **app de e-mail** do visitante, endereçado para `anaaasd55@gmail.com`, com todos os dados já formatados no corpo da mensagem;
  - o **WhatsApp da empresa** (`+55 91 98586-6132`), em nova aba, com a mesma mensagem.
  - A pessoa só precisa confirmar o envio nos dois. Para trocar o e-mail ou o número, edite as constantes `EMAIL_EMPRESA` e `NUMERO_WHATSAPP_ORCAMENTO` no início do bloco de submit do formulário, em `script.js`.
- **JavaScript** — `script.js`, com:
  - Validação de formulário em tempo real (nome, e-mail com regex, telefone, seleção obrigatória, mensagem mínima), com mensagens de erro por campo;
  - Navegação por hiperlink (menu com âncoras `#inicio`, `#linhas`, `#tabela`, `#contato`), incluindo destaque automático do link ativo conforme o scroll;
  - Menu responsivo (abrir/fechar em telas pequenas).

- **Widget flutuante de Dúvidas + WhatsApp** — botão flutuante no canto inferior direito com:
  - Atalho direto para o WhatsApp da Bonnagro, já com mensagem inicial preenchida;
  - Mini formulário "Dúvidas?" (nome + pergunta) que, ao enviar, valida os campos e abre o WhatsApp automaticamente com a pergunta formatada — sem precisar de back-end.
  - **Número configurado:** `+55 91 98586-6132`. Para trocar, edite a constante `NUMERO_WHATSAPP` em `script.js` e o link `href` do botão verde no `index.html` (procure por `wa.me`).

## Estrutura de arquivos

```
bonnagro/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── logo.jpeg
└── README.md
```

## Como visualizar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` diretamente no navegador,
   ou sirva a pasta com um servidor local, por exemplo:
   ```bash
   npx serve .
   ```
3. Acesse o endereço indicado pelo terminal (ex.: `http://localhost:3000`).

