import nevssDress from '../assets/nevss-dress.png';

const iconBase = 'width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4880B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0;"';

const icons = {
    alert: `<svg ${iconBase}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    check: `<svg ${iconBase}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L15.5 10"/></svg>`,
    trend: `<svg ${iconBase}><polyline points="22 7 13 16 9 12 2 19"/><polyline points="16 7 22 7 22 13"/></svg>`,
    quote: `<svg ${iconBase}><path d="M7 17h4l1-5H8V7h5v5l-1 5H7z"/><path d="M15 17h4l1-5h-4V7h5v5l-1 5h-5z"/></svg>`,
};

const cases = [
    {
        segment: 'E-COMMERCE DE MODA',
        title: 'Rebranding & Tráfego Pago',
        subtitle: 'De invisível a referência no segmento',
        metric: '+240% de alcance orgânico',
        gradient: 'linear-gradient(135deg, #3d1e6e 0%, #3d1e6e 100%)',
        heroMetrics: [
            { value: '+240%', label: 'Alcance Orgânico' },
            { value: '3x', label: 'Faturamento' },
            { value: '98%', label: 'Satisfação do cliente' },
        ],
        challenge:
            'A marca tinha identidade visual inconsistente, baixo alcance orgânico e um posicionamento genérico que não sustentava vendas recorrentes.',
        solutions: [
            'Reposicionamento de marca e identidade visual premium.',
            'Criação de funil de conteúdo para Instagram e TikTok.',
            'Gestão de tráfego pago com segmentação por lookalike.',
            'Otimização criativa semanal com análise de performance.',
        ],
        resultNumbers: [
            { value: '+240%', description: 'de crescimento orgânico em 90 dias' },
            { value: '3x', description: 'aumento no ticket médio' },
            { value: '+67%', description: 'mais leads qualificados no funil' },
        ],
        testimonial: {
            quote:
                'A NEVSS transformou nossa presença digital em autoridade real. Hoje vendemos com muito mais previsibilidade e margem.',
            name: 'Larissa Duarte',
            role: 'Fundadora',
            company: 'Atelier Lumi',
        },
    },
    {
        segment: 'CLÍNICA DE ESTÉTICA',
        title: 'Captação & Posicionamento Premium',
        subtitle: 'Agenda previsível e marca valorizada',
        metric: 'Agenda lotada por 3 meses',
        gradient: 'linear-gradient(135deg, #3d1e6e 0%, #3d1e6e 100%)',
        heroMetrics: [
            { value: '+180%', label: 'Leads Qualificados' },
            { value: '2.4x', label: 'Faturamento' },
            { value: '96%', label: 'Satisfação do cliente' },
        ],
        challenge:
            'A clínica dependia de indicações pontuais, tinha comunicação fragmentada e não conseguia converter interesse em agenda fechada.',
        solutions: [
            'Refino completo da proposta de valor e tom de comunicação.',
            'Estratégia de conteúdo com foco em autoridade médica.',
            'Campanhas de mídia paga para procedimentos de maior margem.',
            'Automação de contato para reduzir tempo de resposta comercial.',
        ],
        resultNumbers: [
            { value: '+180%', description: 'crescimento de leads em 60 dias' },
            { value: '2.4x', description: 'de aumento no faturamento mensal' },
            { value: '3 meses', description: 'de agenda fechada com antecedência' },
        ],
        testimonial: {
            quote:
                'Saímos de posts sem direção para um posicionamento forte. A agenda virou consequência de uma estratégia muito bem executada.',
            name: 'Dra. Camila Viana',
            role: 'Diretora Clínica',
            company: 'Vitta Estética',
        },
    },
];

function buildHeroMetrics(metrics) {
    return metrics
        .map(
            (item) => `
      <div class="case-modal-hero-metric">
        <p>${item.value}</p>
        <span>${item.label}</span>
      </div>
    `
        )
        .join('');
}

function buildSolutions(items) {
    return items
        .map(
            (item) => `
      <li>
        ${icons.check}
        <p>${item}</p>
      </li>
    `
        )
        .join('');
}

function buildResultNumbers(items) {
    return items
        .map(
            (item) => `
      <div class="metric-card">
        <span class="metric-value">${item.value}</span>
        <span class="metric-label">${item.description}</span>
      </div>
    `
        )
        .join('');
}

function blockHeader(iconSvg, title) {
    return `
      <div class="case-block-header">
        ${iconSvg}
        <h4 class="case-block-title">${title}</h4>
      </div>
    `;
}

function getModalContent(caseData) {
    return `
    <div class="case-modal-header">
      <span class="case-modal-category">${caseData.segment}</span>
      <div class="case-modal-brand">NEVSS × ${caseData.testimonial.company}</div>
    <button type="button" class="case-modal-close" data-case-close aria-label="Fechar modal">✕</button>
    </div>

    <div class="case-modal-hero">
      <h3>${caseData.title}</h3>
      <p>${caseData.subtitle}</p>
      <div class="case-modal-hero-metrics">
        ${buildHeroMetrics(caseData.heroMetrics)}
      </div>
    </div>

    <div class="case-modal-content">
      <section class="case-block">
        ${blockHeader(icons.alert, 'O Desafio')}
        <p>${caseData.challenge}</p>
      </section>

      <section class="case-block">
        ${blockHeader(icons.check, 'A Solução Aplicada')}
        <ul class="case-modal-solution-list">
          ${buildSolutions(caseData.solutions)}
        </ul>
      </section>

      <section class="case-block">
        ${blockHeader(icons.trend, 'Resultados em números')}
        <div class="case-modal-results-grid">
          ${buildResultNumbers(caseData.resultNumbers)}
        </div>
      </section>

      <section class="case-block">
        ${blockHeader(icons.quote, 'Depoimento do Cliente')}
        <div class="testimonial-card">
          <p class="testimonial-text">${caseData.testimonial.quote}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar">${caseData.testimonial.name.charAt(0)}</div>
            <div>
              <p class="testimonial-name">${caseData.testimonial.name}</p>
              <p class="testimonial-role">${caseData.testimonial.role} • ${caseData.testimonial.company}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="case-modal-footer modal-footer-cta">
      <p>Quer resultados como esses?</p>
      <a href="#aplicacao">Iniciar minha aplicação →</a>
    </div>
  `;
}

export function Cases() {
    const caseCards = cases
        .map(
            (c, i) => `
    <article class="case-card reveal js-case-card" data-case-index="${i}" role="button" tabindex="0" aria-label="Abrir case ${c.segment}" style="transition-delay:${i * 200}ms;height:400px;border:1px solid #6b35a8;">
        <div style="position:absolute;inset:0;background:${c.gradient};"></div>
        <div style="position:absolute;top:30px;left:30px;right:30px;bottom:110px;overflow:hidden;border-radius:12px;">
            <img src="${nevssDress}" alt="Case de sucesso da NEVSS para ${c.segment}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;opacity:0.7;transition:opacity 0.4s ease,transform 0.4s ease;">
        </div>
        <div class="overlay"></div>
        <div style="position:absolute;top:20px;left:20px;z-index:2;">
            <span style="display:inline-block;padding:6px 14px;background:#D4A017;color:#FFFFFF;font-size:11px;font-weight:700;border-radius:20px;letter-spacing:0.04em;">
                ${c.segment}
            </span>
        </div>
        <div style="position:absolute;bottom:0;left:0;right:0;padding:24px;z-index:2;">
            <h3 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 8px;">${c.title}</h3>
            <p style="font-size:15px;font-weight:700;color:#D4A017;margin:0 0 12px;">${c.metric}</p>
            <span style="font-size:13px;color:#e8d5f5;text-decoration:underline;text-underline-offset:3px;">Ver case completo →</span>
        </div>
    </article>
  `
        )
        .join('');

    return `
    <!-- SEÇÃO 06 — RESULTADOS / CASES -->
    <section id="cases" class="section-padding" style="background:#512888;">
        <div class="container-nevss">
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 16px;">
                    A Ideia VS <span style="font-family:'Playfair Display',serif;color:#D4A017;font-style:italic;">O Resultado</span>
                </h2>
                <p style="font-size:16px;color:#e8d5f5;max-width:560px;margin:0 auto;line-height:1.6;">
                    Não vendemos posts, vendemos percepção de valor. Veja como transformamos negócios genéricos em líderes de segmento.
                </p>
            </div>

            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;" class="cases-grid">
                ${caseCards}
            </div>

            <div class="reveal" style="text-align:center;margin-top:48px;">
                <p style="font-size:16px;color:#e8d5f5;margin:0 0 12px;">
                    Mais de <strong style="color:#fff;">20 marcas</strong> transformadas em líderes de segmento
                </p>
                <a href="#" class="link-orange" style="color:#D4A017;">Ver todos os resultados →</a>
            </div>
        </div>
    </section>

    <div id="case-modal-overlay" class="case-modal-overlay" aria-hidden="true">
      <div class="case-modal-sheet" role="dialog" aria-modal="true" aria-label="Detalhes do case" tabindex="-1">
        <div class="modal-scroll-content" id="case-modal-content"></div>
      </div>
    </div>
  `;
}

export function initCases() {
    const overlay = document.querySelector('#case-modal-overlay');
    const content = document.querySelector('#case-modal-content');
    const cards = document.querySelectorAll('.js-case-card');

    if (!overlay || !content || !cards.length) return;

    const closeModal = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const openModal = (index) => {
        const caseData = cases[index];
        if (!caseData) return;

        content.innerHTML = getModalContent(caseData);
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const closeButton = content.querySelector('[data-case-close]');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        content.scrollTop = 0;
    };

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            const index = Number(card.getAttribute('data-case-index'));
            openModal(index);
        });

        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                const index = Number(card.getAttribute('data-case-index'));
                openModal(index);
            }
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('open')) {
            closeModal();
        }
    });
}
