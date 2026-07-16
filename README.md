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

## Como publicar (GitHub Pages)

1. Crie um repositório no GitHub (ex.: `bonnagro-landing-page`).
2. Envie os arquivos deste projeto para o repositório:
   ```bash
   git init
   git add .
   git commit -m "NAP 01 - Landing page Bonnagro"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/bonnagro-landing-page.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**, selecione a branch `main` e a pasta `/root`, salve.
4. A página ficará disponível em:
   `https://SEU_USUARIO.github.io/bonnagro-landing-page/`

## Créditos das imagens

As fotos usadas no site vêm do **Wikimedia Commons** (banco de imagens livre) e foram escolhidas por serem de uso permitido:

- Colheita de soja ao pôr do sol — fazenda São José (fundo do hero e banner de campo)
- "Fazendas de Gado" — fazenda às margens do Rio Amazonas (card Bovinos) — **licença CC BY-SA 4.0**, requer atribuição ao reutilizar
- Plantação de soja (banner de campo)
- Cabra (card Caprinos/Ovinos) e porco (card Suínos) — imagens de domínio público (USDA)

Recomendo, assim que possível, substituir essas fotos por imagens reais da Bonnagro (fazenda, rebanho, equipe) — é só trocar o link do `src` de cada `<img>` por `assets/nome-da-foto.jpg` no `index.html`.

## Observações

- O envio do formulário está simulado no front-end (não há back-end configurado). Para envio real por e-mail, integre com um serviço como Formspree, EmailJS ou uma API própria.
- A logo utilizada é a imagem fornecida pelo cliente (`assets/logo.jpeg`).
