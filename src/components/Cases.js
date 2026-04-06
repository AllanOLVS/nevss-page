import nevssAtrevidas from '../assets/nevss-x-empresas/nevss-atrevidas.png';
import nevssDue from '../assets/nevss-x-empresas/nevss-due.png';
import nevssEcapCont from '../assets/nevss-x-empresas/nevss-ecapCont.png';
import nevssLune from '../assets/nevss-x-empresas/nevss-lune.png';
import nevssMaisVida from '../assets/nevss-x-empresas/nevss-maisVida.png';
import nevssMariaBonita from '../assets/nevss-x-empresas/nevss-mariaBonita.png';
import nevssMeridian from '../assets/nevss-x-empresas/nevss-meridian.png';

const iconBase = 'width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4880B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0;"';

const icons = {
    alert: `<svg ${iconBase}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    check: `<svg ${iconBase}><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L15.5 10"/></svg>`,
    trend: `<svg ${iconBase}><polyline points="22 7 13 16 9 12 2 19"/><polyline points="16 7 22 7 22 13"/></svg>`,
    quote: `<svg ${iconBase}><path d="M7 17h4l1-5H8V7h5v5l-1 5H7z"/><path d="M15 17h4l1-5h-4V7h5v5l-1 5h-5z"/></svg>`,
};

const caseTemplates = [
    {
        subtitle: 'De invisivel a referencia no segmento',
        gradient: 'linear-gradient(135deg, #3d1e6e 0%, #3d1e6e 100%)',
        heroMetrics: [
            { value: '+240%', label: 'Alcance Organico' },
            { value: '3x', label: 'Faturamento' },
            { value: '98%', label: 'Satisfacao do cliente' },
        ],
        challenge:
            'A marca tinha identidade visual inconsistente, baixo alcance organico e um posicionamento generico que nao sustentava vendas recorrentes.',
        solutions: [
            'Reposicionamento de marca e identidade visual premium.',
            'Criacao de funil de conteudo para Instagram e TikTok.',
            'Gestao de trafego pago com segmentacao por lookalike.',
            'Otimizacao criativa semanal com analise de performance.',
        ],
        resultNumbers: [
            { value: '+240%', description: 'de crescimento organico em 90 dias' },
            { value: '3x', description: 'aumento no ticket medio' },
            { value: '+67%', description: 'mais leads qualificados no funil' },
        ],
        testimonial: {
            quote:
                'A NEVSS transformou nossa presenca digital em autoridade real. Hoje vendemos com muito mais previsibilidade e margem.',
            name: 'Larissa Duarte',
            role: 'Fundadora',
            company: 'Atelier Lumi',
        },
    },
    {
        subtitle: 'Agenda previsivel e marca valorizada',
        gradient: 'linear-gradient(135deg, #3d1e6e 0%, #3d1e6e 100%)',
        heroMetrics: [
            { value: '+180%', label: 'Leads Qualificados' },
            { value: '2.4x', label: 'Faturamento' },
            { value: '96%', label: 'Satisfacao do cliente' },
        ],
        challenge:
            'A clinica dependia de indicacoes pontuais, tinha comunicacao fragmentada e nao conseguia converter interesse em agenda fechada.',
        solutions: [
            'Refino completo da proposta de valor e tom de comunicacao.',
            'Estrategia de conteudo com foco em autoridade medica.',
            'Campanhas de midia paga para procedimentos de maior margem.',
            'Automacao de contato para reduzir tempo de resposta comercial.',
        ],
        resultNumbers: [
            { value: '+180%', description: 'crescimento de leads em 60 dias' },
            { value: '2.4x', description: 'de aumento no faturamento mensal' },
            { value: '3 meses', description: 'de agenda fechada com antecedencia' },
        ],
        testimonial: {
            quote:
                'Saimos de posts sem direcao para um posicionamento forte. A agenda virou consequencia de uma estrategia muito bem executada.',
            name: 'Dra. Camila Viana',
            role: 'Diretora Clinica',
            company: 'Vitta Estetica',
        },
    },
];

const caseVisuals = [
    {
        segment: 'E-COMMERCE DE MODA',
        title: 'Rebranding & Trafego Pago',
        metric: '+240% de alcance organico',
        image: nevssAtrevidas,
        company: 'Atrevidas',
    },
    {
        segment: 'CLINICA DE ESTETICA',
        title: 'Captacao & Posicionamento Premium',
        metric: 'Agenda lotada por 3 meses',
        image: nevssDue,
        company: 'Due',
    },
    {
        segment: 'PRODUTORA DE CONTEUDO',
        title: 'Autoridade & Conversao Digital',
        metric: '+165% em leads qualificados',
        image: nevssEcapCont,
        company: 'Ecap Cont',
    },
    {
        segment: 'MODA FEMININA',
        title: 'Escala Comercial de Marca',
        metric: 'Crescimento continuo por 120 dias',
        image: nevssLune,
        company: 'Lune',
    },
    {
        segment: 'SAUDE E BEM-ESTAR',
        title: 'Posicionamento de Valor',
        metric: '+210% no alcance estrategico',
        image: nevssMaisVida,
        company: 'Mais Vida',
    },
    {
        segment: 'BELEZA PREMIUM',
        title: 'Percepcao & Performance',
        metric: 'ROI validado em 90 dias',
        image: nevssMariaBonita,
        company: 'Maria Bonita',
    },
    {
        segment: 'SERVICOS ESPECIALIZADOS',
        title: 'Branding para Escala',
        metric: '+188% em oportunidades comerciais',
        image: nevssMeridian,
        company: 'Meridian',
    },
    {
        segment: 'PARCERIA ESTRATEGICA',
        title: 'Execucao de Marca e Trafego',
        metric: '+4.1x em retorno de midia',
        image: nevssAtrevidas,
        company: 'Dress',
    },
];

const cases = caseVisuals.map((visual, index) => {
    const template = caseTemplates[index % caseTemplates.length];
    return {
        ...template,
        ...visual,
        id: index,
        testimonial: {
            ...template.testimonial,
            company: visual.company,
        },
    };
});

const mainCases = cases.slice(0, 4);
const allCases = cases;

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
        <div class="case-modal-cover">
            <img src="${caseData.image}" alt="Imagem principal do case ${caseData.segment}" loading="lazy" decoding="async">
            <div class="case-modal-cover-overlay"></div>

            <div class="case-modal-header case-modal-header--overlay">
                <span class="case-modal-category">${caseData.segment}</span>
                <div class="case-modal-brand">NEVSS x ${caseData.testimonial.company}</div>
                <button type="button" class="case-modal-close" data-case-close aria-label="Fechar modal">✕</button>
            </div>

            <div class="case-modal-cover-copy">
                <h3>${caseData.title}</h3>
                <p>${caseData.subtitle}</p>
            </div>
        </div>

        <div class="case-modal-hero">
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
        ${blockHeader(icons.check, 'A Solucao Aplicada')}
        <ul class="case-modal-solution-list">
          ${buildSolutions(caseData.solutions)}
        </ul>
      </section>

      <section class="case-block">
        ${blockHeader(icons.trend, 'Resultados em numeros')}
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
      <a href="#aplicacao">Iniciar minha aplicacao →</a>
    </div>
  `;
}

function buildCaseCards(items, options = {}) {
    const { reveal = true, delayStep = 200 } = options;

    return items
        .map(
            (c, i) => `
    <article class="case-card ${reveal ? 'reveal' : ''} js-case-card" data-case-index="${c.id}" role="button" tabindex="0" aria-label="Abrir case ${c.segment}" style="transition-delay:${delayStep * i}ms;height:400px;border:1px solid #6b35a8;">
        <div style="position:absolute;inset:0;background:${c.gradient};"></div>
        <div style="position:absolute;top:30px;left:30px;right:30px;bottom:110px;overflow:hidden;border-radius:12px;">
            <img src="${c.image}" alt="Case de sucesso da NEVSS para ${c.segment}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;opacity:0.7;transition:opacity 0.4s ease,transform 0.4s ease;">
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
}

export function Cases() {
    const caseCards = buildCaseCards(mainCases);
    const allCaseCards = buildCaseCards(allCases, { reveal: false, delayStep: 0 });

    return `
    <!-- SECAO 06 - RESULTADOS / CASES -->
    <section id="cases" class="section-padding" style="background:#512888;">
        <div class="container-nevss cases-main-content">
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 16px;">
                    A Ideia VS <span style="font-family:'Playfair Display',serif;color:#D4A017;font-style:italic;">O Resultado</span>
                </h2>
                <p style="font-size:16px;color:#e8d5f5;max-width:560px;margin:0 auto;line-height:1.6;">
                    Nao vendemos posts, vendemos percepcao de valor. Veja como transformamos negocios genericos em lideres de segmento.
                </p>
            </div>

            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;" class="cases-grid">
                ${caseCards}
            </div>

            <div class="reveal" style="text-align:center;margin-top:48px;">
                <p style="font-size:16px;color:#e8d5f5;margin:0 0 12px;">
                    Mais de <strong style="color:#fff;">20 marcas</strong> transformadas em lideres de segmento
                </p>
                <a href="#" class="link-orange js-open-all-cases" style="color:#D4A017;">Ver todos os resultados →</a>
            </div>
        </div>

        <div id="all-cases-mobile-page" class="all-cases-mobile-page" aria-hidden="true">
            <div class="all-cases-header">
                <div class="all-cases-header-copy">
                    <p>Portfolio NEVSS</p>
                    <h3>Portfolio Completo de Resultados e Parcerias</h3>
                </div>
                <button type="button" class="case-modal-close" data-all-cases-mobile-close aria-label="Fechar listagem de resultados">✕</button>
            </div>
            <div class="all-cases-content">
                <div class="all-cases-grid">
                    ${allCaseCards}
                </div>
            </div>
        </div>
    </section>

    <div id="all-cases-overlay" class="case-modal-overlay all-cases-overlay" aria-hidden="true">
      <div class="case-modal-sheet all-cases-sheet" role="dialog" aria-modal="true" aria-label="Portfolio completo de resultados" tabindex="-1">
        <div class="all-cases-header">
          <div class="all-cases-header-copy">
            <p>Portfolio NEVSS</p>
            <h3>Portfolio Completo de Resultados e Parcerias</h3>
          </div>
          <button type="button" class="case-modal-close" data-all-cases-close aria-label="Fechar resultados">✕</button>
        </div>
        <div class="all-cases-content">
          <div class="all-cases-grid">
            ${allCaseCards}
          </div>
        </div>
      </div>
    </div>

    <div id="case-modal-overlay" class="case-modal-overlay" aria-hidden="true">
      <div class="case-modal-sheet" role="dialog" aria-modal="true" aria-label="Detalhes do case" tabindex="-1">
        <div class="modal-scroll-content" id="case-modal-content"></div>
      </div>
    </div>
  `;
}

export function initCases() {
    const casesSection = document.querySelector('#cases');
    const overlay = document.querySelector('#case-modal-overlay');
    const content = document.querySelector('#case-modal-content');
    const cards = document.querySelectorAll('.js-case-card');
    const allCasesOverlay = document.querySelector('#all-cases-overlay');
    const allCasesMobilePage = document.querySelector('#all-cases-mobile-page');
    const openAllCasesButton = document.querySelector('.js-open-all-cases');
    const closeAllCasesButton = document.querySelector('[data-all-cases-close]');
    const closeAllCasesMobileButton = document.querySelector('[data-all-cases-mobile-close]');
    let caseOpenContext = 'main';

    if (!overlay || !content || !casesSection) return;

    const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches;

    const setMobileListingState = (isOpen) => {
        if (!allCasesMobilePage) return;
        casesSection.classList.toggle('mobile-all-cases-active', isOpen);
        allCasesMobilePage.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        if (isOpen) {
            casesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const updateScrollLock = () => {
        const detailOpen = overlay.classList.contains('open');
        const listOpen = allCasesOverlay ? allCasesOverlay.classList.contains('open') : false;
        document.body.style.overflow = detailOpen || listOpen ? 'hidden' : '';
    };

    const closeModal = () => {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');

        if (caseOpenContext === 'all-cases') {
            if (isMobileViewport()) {
                setMobileListingState(true);
            } else if (allCasesOverlay) {
                allCasesOverlay.classList.add('open');
                allCasesOverlay.setAttribute('aria-hidden', 'false');
            }
        }

        caseOpenContext = 'main';
        updateScrollLock();
    };

    const openAllCases = () => {
        if (isMobileViewport()) {
            setMobileListingState(true);
            return;
        }
        if (!allCasesOverlay) return;
        allCasesOverlay.classList.add('open');
        allCasesOverlay.setAttribute('aria-hidden', 'false');
        updateScrollLock();
    };

    const closeAllCases = () => {
        if (isMobileViewport()) {
            setMobileListingState(false);
            return;
        }
        if (!allCasesOverlay) return;
        allCasesOverlay.classList.remove('open');
        allCasesOverlay.setAttribute('aria-hidden', 'true');
        updateScrollLock();
    };

    const openModal = (index, context = 'main') => {
        const caseData = cases[index];
        if (!caseData) return;
        caseOpenContext = context;

        content.innerHTML = getModalContent(caseData);
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        updateScrollLock();

        const closeButton = content.querySelector('[data-case-close]');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        content.scrollTop = 0;
    };

    if (cards.length) {
        cards.forEach((card) => {
            card.addEventListener('click', () => {
                const index = Number(card.getAttribute('data-case-index'));
                const inAllCasesList = Boolean(card.closest('#all-cases-overlay, #all-cases-mobile-page'));
                openModal(index, inAllCasesList ? 'all-cases' : 'main');
            });

            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    const index = Number(card.getAttribute('data-case-index'));
                    const inAllCasesList = Boolean(card.closest('#all-cases-overlay, #all-cases-mobile-page'));
                    openModal(index, inAllCasesList ? 'all-cases' : 'main');
                }
            });
        });
    }

    if (openAllCasesButton) {
        openAllCasesButton.addEventListener('click', (event) => {
            event.preventDefault();
            openAllCases();
        });
    }

    if (closeAllCasesButton) {
        closeAllCasesButton.addEventListener('click', closeAllCases);
    }

    if (closeAllCasesMobileButton) {
        closeAllCasesMobileButton.addEventListener('click', () => {
            setMobileListingState(false);
        });
    }

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeModal();
        }
    });

    if (allCasesOverlay) {
        allCasesOverlay.addEventListener('click', (event) => {
            if (event.target === allCasesOverlay) {
                closeAllCases();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (overlay.classList.contains('open')) {
                closeModal();
                return;
            }
            if (isMobileViewport()) {
                setMobileListingState(false);
                return;
            }
            if (allCasesOverlay && allCasesOverlay.classList.contains('open')) {
                closeAllCases();
            }
        }
    });

    window.addEventListener('resize', () => {
        if (!isMobileViewport() && allCasesMobilePage) {
            setMobileListingState(false);
        }
    });
}
