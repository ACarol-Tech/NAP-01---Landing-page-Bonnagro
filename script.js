/* ===========================================================
   BONNAGRO — script.js
   1. Menu mobile (toggle)
   2. Navegação por hiperlink com destaque do link ativo
   3. Validação do formulário de orçamento
=========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Ano no rodapé ---------- */
  const anoEl = document.getElementById('anoAtual');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navPrincipal');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const aberto = nav.classList.toggle('aberto');
      menuToggle.setAttribute('aria-expanded', String(aberto));
      menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
  }

  /* ---------- Navegação por hiperlink: fecha menu ao clicar e destaca link ativo ---------- */
  const links = document.querySelectorAll('.nav__link');
  const secoes = document.querySelectorAll('main section[id]');

  links.forEach(link => {
    link.addEventListener('click', () => {
      // fecha o menu mobile após navegar por um hiperlink
      if (nav && nav.classList.contains('aberto')) {
        nav.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      }
    });
  });

  const destacarLinkAtivo = () => {
    let atual = '';
    const posicao = window.scrollY + 120; // compensa header fixo

    secoes.forEach(secao => {
      if (posicao >= secao.offsetTop) {
        atual = secao.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.toggle('ativo', link.getAttribute('href') === `#${atual}`);
    });
  };

  window.addEventListener('scroll', destacarLinkAtivo);
  destacarLinkAtivo();

  /* ---------- Validação do formulário ---------- */
  const form = document.getElementById('formOrcamento');
  const status = document.getElementById('statusFormulario');

  if (!form) return;

  const regras = {
    nome(valor) {
      if (valor.trim().length < 3) return 'Informe seu nome completo (mínimo 3 letras).';
      return '';
    },
    email(valor) {
      const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!padrao.test(valor.trim())) return 'Informe um e-mail válido, ex: nome@propriedade.com.';
      return '';
    },
    telefone(valor) {
      const digitos = valor.replace(/\D/g, '');
      if (digitos.length < 10 || digitos.length > 11) return 'Informe um telefone válido com DDD (10 ou 11 dígitos).';
      return '';
    },
    linha(valor) {
      if (!valor) return 'Selecione a linha de ração de interesse.';
      return '';
    },
    mensagem(valor) {
      if (valor.trim().length < 10) return 'Conte um pouco mais sobre o rebanho (mínimo 10 caracteres).';
      return '';
    }
  };

  const mostrarErro = (campoId, mensagem) => {
    const input = document.getElementById(campoId);
    const erroEl = document.getElementById(`erro-${campoId}`);
    const wrapper = input.closest('.campo');

    if (mensagem) {
      wrapper.classList.add('campo--invalido');
      erroEl.textContent = mensagem;
      input.setAttribute('aria-invalid', 'true');
    } else {
      wrapper.classList.remove('campo--invalido');
      erroEl.textContent = '';
      input.removeAttribute('aria-invalid');
    }
  };

  const validarCampo = (campoId) => {
    const input = document.getElementById(campoId);
    const mensagem = regras[campoId](input.value);
    mostrarErro(campoId, mensagem);
    return mensagem === '';
  };

  // Validação em tempo real ao sair do campo
  Object.keys(regras).forEach(campoId => {
    const input = document.getElementById(campoId);
    input.addEventListener('blur', () => validarCampo(campoId));
    input.addEventListener('input', () => {
      if (input.closest('.campo').classList.contains('campo--invalido')) {
        validarCampo(campoId);
      }
    });
  });

  form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const camposValidos = Object.keys(regras).map(validarCampo);
    const formularioValido = camposValidos.every(Boolean);

    if (!formularioValido) {
      status.textContent = 'Verifique os campos destacados antes de enviar.';
      status.className = 'formulario__status falha';
      const primeiroCampoInvalido = form.querySelector('.campo--invalido input, .campo--invalido select, .campo--invalido textarea');
      if (primeiroCampoInvalido) primeiroCampoInvalido.focus();
      return;
    }

    // Aqui entraria a integração real (fetch para API/e-mail).
    // Como ainda não há backend, simulamos o envio com sucesso.
    const nome = document.getElementById('nome').value.trim().split(' ')[0];
    status.textContent = `Obrigado, ${nome}! Recebemos sua solicitação e vamos responder em breve.`;
    status.className = 'formulario__status sucesso';
    form.reset();
  });

  /* ---------- Widget flutuante: Dúvidas + WhatsApp ---------- */
  const duvidasToggle = document.getElementById('duvidasToggle');
  const duvidasPainel = document.getElementById('duvidasPainel');
  const duvidasFechar = document.getElementById('duvidasFechar');
  const formDuvida = document.getElementById('formDuvida');

  const NUMERO_WHATSAPP = '5591985866132';

  const abrirPainelDuvidas = () => {
    duvidasPainel.hidden = false;
    duvidasToggle.setAttribute('aria-expanded', 'true');
    document.getElementById('duvidaNome').focus();
  };

  const fecharPainelDuvidas = () => {
    duvidasPainel.hidden = true;
    duvidasToggle.setAttribute('aria-expanded', 'false');
  };

  if (duvidasToggle && duvidasPainel) {
    duvidasToggle.addEventListener('click', () => {
      duvidasPainel.hidden ? abrirPainelDuvidas() : fecharPainelDuvidas();
    });
    duvidasFechar.addEventListener('click', fecharPainelDuvidas);

    document.addEventListener('keydown', (evento) => {
      if (evento.key === 'Escape' && !duvidasPainel.hidden) fecharPainelDuvidas();
    });

    document.addEventListener('click', (evento) => {
      const widget = document.getElementById('duvidas');
      if (!duvidasPainel.hidden && !widget.contains(evento.target)) fecharPainelDuvidas();
    });
  }

  if (formDuvida) {
    const validarDuvida = () => {
      let valido = true;

      const nome = document.getElementById('duvidaNome');
      const erroNome = document.getElementById('erro-duvidaNome');
      if (nome.value.trim().length < 2) {
        erroNome.textContent = 'Informe seu nome.';
        nome.closest('.campo').classList.add('campo--invalido');
        valido = false;
      } else {
        erroNome.textContent = '';
        nome.closest('.campo').classList.remove('campo--invalido');
      }

      const pergunta = document.getElementById('duvidaPergunta');
      const erroPergunta = document.getElementById('erro-duvidaPergunta');
      if (pergunta.value.trim().length < 5) {
        erroPergunta.textContent = 'Escreva sua pergunta (mínimo 5 caracteres).';
        pergunta.closest('.campo').classList.add('campo--invalido');
        valido = false;
      } else {
        erroPergunta.textContent = '';
        pergunta.closest('.campo').classList.remove('campo--invalido');
      }

      return valido;
    };

    formDuvida.addEventListener('submit', (evento) => {
      evento.preventDefault();
      if (!validarDuvida()) return;

      const nome = document.getElementById('duvidaNome').value.trim();
      const pergunta = document.getElementById('duvidaPergunta').value.trim();

      const mensagem = `Olá! Meu nome é ${nome}. Tenho uma dúvida: ${pergunta}`;
      const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

      window.open(link, '_blank', 'noopener');
      formDuvida.reset();
      fecharPainelDuvidas();
    });
  }
});
