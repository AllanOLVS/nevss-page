export function FAQ() {
  const faqs = [
    {
      q: 'Vocês atendem empresas de qual segmento?',
      a: 'Atendemos marcas que possuem alto potencial de escala e buscam um posicionamento premium, independentemente do nicho. Nossos maiores cases estão em e-commerces, clínicas, saúde, moda, gastronomia e infoprodutos.'
    },
    {
      q: 'Qual o investimento mínimo para começar?',
      a: 'Não trabalhamos com "pacotes de posts". Nossos projetos são personalizados após uma reunião de diagnóstico. Preencha a aplicação abaixo para entendermos seu momento e apresentarmos uma proposta financeira adequada ao seu negócio.'
    },
    {
      q: 'Em quanto tempo vejo resultados reais?',
      a: 'Os primeiros indicadores de melhoria aparecem nos primeiros 30 dias (engajamento, posicionamento, qualidade do conteúdo). Resultados financeiros consistentes surgem entre 60 e 90 dias, dependendo do segmento e do investimento em tráfego.'
    },
    {
      q: 'Como funciona o processo de Aplicação?',
      a: 'O formulário de aplicação serve para entendermos se a sua empresa tem o perfil ideal para escalar com a nossa metodologia. Após preencher, nossa equipe analisará e entrará em contato em até 12 horas úteis para agendar uma reunião estratégica.'
    },
    {
      q: 'O contrato tem fidelidade? Posso cancelar?',
      a: 'Trabalhamos com contratos de 3 meses mínimos para garantir que a estratégia tenha tempo de maturar. Após esse período, o contrato renova mensalmente e pode ser cancelado com 30 dias de aviso prévio, sem multas.'
    },
    {
      q: 'Vocês garantem resultados?',
      a: 'Garantimos dedicação total, estratégia data-driven e execução de altíssimo nível. Resultados dependem de variáveis como investimento em tráfego e engajamento do cliente no processo, mas trabalhamos com metas claras e relatórios transparentes.'
    },
    {
      q: 'Como funciona o acompanhamento e os relatórios?',
      a: 'Você recebe relatórios quinzenais com métricas detalhadas de performance, além de reuniões mensais de alinhamento estratégico. Temos um canal direto de comunicação para dúvidas e aprovações de conteúdo.'
    },
    {
      q: 'Atendimento é presencial ou 100% digital?',
      a: 'Nosso atendimento é 100% digital, o que nos permite atender marcas do Brasil inteiro e do exterior. Usamos ferramentas profissionais de gestão de projetos e videoconferência para manter tudo organizado e transparente.'
    },
  ];

  const items = faqs.map((f, i) => `
    <div class="faq-item reveal" style="transition-delay:${i * 60}ms;" data-faq="${i}">
        <button class="faq-btn" aria-expanded="false">
            <span>${f.q}</span>
            <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
            <p>${f.a}</p>
        </div>
    </div>
  `).join('');

  return `
    <!-- SEÇÃO 09 — FAQ -->
    <section class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss" style="max-width:800px;">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#FFFFFF;line-height:1.1;margin:0;">
                    Dúvidas <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">Frequentes</span>
                </h2>
            </div>

            <!-- Accordion -->
            <div style="display:flex;flex-direction:column;gap:16px;">
                ${items}
            </div>
        </div>
    </section>
  `;
}

export function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq-open');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('faq-open');
          other.querySelector('.faq-content').classList.remove('open');
          other.querySelector('.faq-icon').textContent = '+';
          other.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('faq-open');
        content.classList.remove('open');
        icon.textContent = '+';
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('faq-open');
        content.classList.add('open');
        icon.textContent = '×';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
