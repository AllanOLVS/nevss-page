import '../styles/cases.css';

import imgAtrevida from '../assets/nevss-x-empresas/nevss-atrevidas.png';
import imgDue from '../assets/nevss-x-empresas/nevss-due.png';
import imgEcap from '../assets/nevss-x-empresas/nevss-ecapCont.png';
import imgLune from '../assets/nevss-x-empresas/nevss-lune.png';
import imgMeridiano from '../assets/nevss-x-empresas/nevss-meridian.png';
import imgMariaBonita from '../assets/nevss-x-empresas/nevss-mariaBonita.png';
import imgDress from '../assets/nevss-x-empresas/nevss-dress.png';
import imgTop20 from '../assets/nevss-x-empresas/nevss-top20.png';
import imgMaisVida from '../assets/nevss-x-empresas/nevss-maisVida.png';

const casesData = [
    {
        id: "dress",
        segmento: "MODA FEMININA PREMIUM",
        titulo: "Assessoria 360° & Posicionamento Premium",
        metrica: "Elevação do padrão visual da marca",
        logoEmpresa: "DRESS BY TAISE BRITO",
        img: imgDress,
        subtitulo: "Estratégia completa para potencializar uma marca já consolidada",
        desafio: "A Dress by Taise Brito já possuía audiência ampla e consolidada. O desafio não era começar — era elevar o nível de comunicação, produção e posicionamento, integrando conteúdo, vendas e posicionamento premium.",
        solucao: [
            "Assessoria completa 360° — atuação estratégica em todas as frentes do digital",
            "Planejamento de campanhas com foco em lançamentos e datas comerciais",
            "Produção de vídeo profissional com alto padrão estético valorizando as peças",
            "Edição de fotos e vídeos profissionais com tratamento visual premium",
            "Direcionamento estratégico contínuo para consistência e evolução da comunicação"
        ],
        resultados_numeros: [
            { valor: "360°", descricao: "cobertura completa de todas as frentes digitais" },
            { valor: "↑↑", descricao: "elevação do padrão visual e percepção de valor" },
            { valor: "Premium", descricao: "posicionamento fortalecido e coerente" }
        ],
        conclusao: "Quando a base já é forte, a estratégia certa leva a marca para outro nível. A Dress passou a comunicar com ainda mais autoridade e sofisticação."
    },
    {
        id: "due",
        segmento: "CLÍNICA DE ESTÉTICA",
        titulo: "Captação & Posicionamento Premium",
        metrica: "+3 mil Seguidores Qualificados",
        logoEmpresa: "DUÊ FITNESS WEAR",
        img: imgDue,
        subtitulo: "Agenda previsível e marca valorizada",
        desafio: "A marca começou do zero em setembro de 2025. O desafio era construir uma comunidade ativa, com identidade, posicionamento e desejo de marca — não apenas números de seguidores.",
        solucao: [
            "Estratégia de conteúdo focada em conexão e conversão",
            "Produção de Reels com linguagem atual e viral",
            "Humanização da marca com rostos, rotina e bastidores",
            "Campanhas comerciais com senso de urgência",
            "Construção de comunidade — não só audiência"
        ],
        resultados_numeros: [
            { valor: "+3 mil", descricao: "seguidores qualificados em poucos meses" },
            { valor: "3+", descricao: "cidades com presença ativa da marca" },
            { valor: "2025", descricao: "marca lançando e-commerce e linha própria" }
        ],
        conclusao: "Conteúdo estratégico não é sobre postar — é sobre construir marca, desejo e faturamento. A Duê saiu do zero para referência regional em moda fitness."
    },
    {
        id: "ecap",
        segmento: "PRODUTORA DE CONTEÚDO",
        titulo: "Autoridade & Conversão Digital",
        metrica: "+165% em leads qualificados",
        logoEmpresa: "ECAP CONTABILIDADE",
        img: imgEcap,
        subtitulo: "Transformando conhecimento técnico em autoridade digital",
        desafio: "A ECAP já tinha mais de 20 anos de experiência, mas enfrentava conteúdos pouco explorados em vídeo, baixa conexão com o público, dificuldade em transformar informação técnica em conteúdo atrativo e falta de posicionamento digital como referência.",
        solucao: [
            "Captação de conteúdo presencial com os próprios profissionais, trazendo proximidade e humanização",
            "Planejamento estratégico com temas relevantes para empresários",
            "Conteúdo educativo sobre Imposto de Renda, obrigações fiscais e atualizações legislativas",
            "Linguagem acessível com foco em retenção e alcance"
        ],
        resultados_numeros: [
            { valor: "20+", descricao: "anos de autoridade agora no digital" },
            { valor: "↑", descricao: "crescimento do perfil com público qualificado" },
            { valor: "Top", descricao: "referência digital em contabilidade" }
        ],
        conclusao: "Quando o conteúdo certo encontra a estratégia certa, empresas técnicas se tornam referências no digital. A ECAP transformou seu perfil em fonte de informação relevante para empresários."
    },
    {
        id: "mariabonita",
        segmento: "MODA FEMININA",
        titulo: "Estratégia de Conteúdo & Vendas",
        metrica: "Processo de conteúdo estruturado e funcional",
        logoEmpresa: "MARIA BONITA",
        img: imgMariaBonita,
        subtitulo: "Transformando dificuldade em conteúdo em estratégia de crescimento",
        desafio: "A Maria Bonita já possuía estrutura e produtos, mas tinha dificuldades em produzir conteúdo com constância, criar vídeos atrativos e estratégicos, direcionar postagens para alcance e venda e organizar ideias em conteúdo.",
        solucao: [
            "Planejamento estratégico de vídeos alinhado com comportamento do público e tendências",
            "Criação de roteiros para prender atenção, gerar identificação e estimular desejo de compra",
            "Direcionamento prático para produção de conteúdo de forma simples e funcional"
        ],
        resultados_numeros: [
            { valor: "✓", descricao: "processo de conteúdo organizado e estratégico" },
            { valor: "↑", descricao: "alcance e direcionamento para vendas" },
            { valor: "100%", descricao: "constância nas publicações" }
        ],
        conclusao: "Quando a produção de conteúdo vira um processo estratégico, a marca para de postar por obrigação e começa a postar com propósito."
    },
    {
        id: "meridiano",
        segmento: "GEOTECNOLOGIA / ENGENHARIA",
        titulo: "Autoridade Técnica & Geração de Demanda",
        metrica: "Referência no segmento geotécnico",
        logoEmpresa: "MERIDIANO GEOTECNOLOGIAS",
        img: imgMeridiano,
        subtitulo: "Transformando conteúdo técnico em comunicação que gera demanda",
        desafio: "O segmento de engenharia, topografia e regularização tem barreiras naturais: linguagem técnica de difícil entendimento, baixo conhecimento do público sobre os serviços e conteúdos pouco explorados no digital.",
        solucao: [
            "Planejamento estratégico com pautas baseadas em dúvidas reais do público",
            "Tradução do técnico para o simples — temas complexos em conteúdos claros",
            "Conteúdo educativo que desperta curiosidade: 'Você sabe a diferença entre escritura e matrícula?'",
            "Posicionamento como autoridade com domínio técnico e linguagem acessível"
        ],
        resultados_numeros: [
            { valor: "↑", descricao: "aumento no alcance de conteúdos técnicos" },
            { valor: "Ref.", descricao: "marca como referência no segmento" },
            { valor: "↓", descricao: "barreiras de entendimento do público" }
        ],
        conclusao: "Não existe conteúdo difícil — existe comunicação mal feita. Quando bem estruturado, até o tema mais técnico pode gerar interesse, engajamento e oportunidades."
    },
    {
        id: "lune",
        segmento: "MODA FEMININA",
        titulo: "Escala Comercial de Marca",
        metrica: "Crescimento contínuo por 120 dias",
        logoEmpresa: "LUNE BY INGRID",
        img: imgLune,
        subtitulo: "Construindo presença digital com estratégia desde o início",
        desafio: "Por ser uma marca nova no mercado, o desafio era construir presença digital do zero, criar conexão com o público, gerar alcance sendo marca nova e posicionar com identidade e propósito.",
        solucao: [
            "Planejamento estratégico de conteúdo alinhado com o universo da marca",
            "Conteúdo voltado para comunidade e alcance — identificação, proximidade, audiência engajada",
            "Edição de vídeos estratégica com foco em retenção e valorização das peças",
            "Estratégia adaptada ao momento da Lune, respeitando estrutura e crescimento gradual"
        ],
        resultados_numeros: [
            { valor: "0→", descricao: "presença construída do zero com consistência" },
            { valor: "120", descricao: "dias de crescimento contínuo" },
            { valor: "✓", descricao: "público qualificado desde o início" }
        ],
        conclusao: "Quem começa certo, cresce mais rápido e com mais consistência. A Lune é uma marca nova que já nasce com estratégia e direção no digital."
    },
    {
        id: "atrevida",
        segmento: "E-COMMERCE DE MODA",
        titulo: "Rebranding & Posicionamento Digital",
        metrica: "Primeiras vendas realizadas no online",
        logoEmpresa: "ATREVIDA MODAS",
        img: imgAtrevida,
        // Os dados abaixo continuam para popular o modal
        subtitulo: "Do zero digital à marca com presença e vendas",
        desafio: "A marca não tinha presença estruturada no digital. O perfil não tinha direção estratégica, constância no feed nem nos Stories. Ausência de posicionamento, falta de constância nas postagens e conteúdos sem estratégia definida.",
        solucao: [
            "Acompanhamento estratégico do perfil com estruturação completa do posicionamento",
            "Planejamento de conteúdo com linha editorial alinhada ao público e proposta da marca",
            "Criação de roteiros para vídeos focados em conexão, elegância e desejo",
            "Edição de vídeos estratégica com estética que valoriza e eleva a percepção da marca",
            "Presença ativa nos Stories para gerar proximidade e oportunidades de venda"
        ],
        resultados_numeros: [
            { valor: "Feed", descricao: "chamativo e alinhado ao posicionamento" },
            { valor: "100%", descricao: "de constância nas postagens" },
            { valor: "1ª venda", descricao: "realizada no digital" }
        ],
        conclusao: "Transformação de um perfil sem direção em uma marca que comunica e vende no digital. Não é preciso começar grande — é preciso começar certo."
    },
    {
        id: "top20",
        segmento: "VAREJO / MODA",
        titulo: "Produção Ágil de Conteúdo",
        metrica: "Conteúdo constante no ritmo da loja",
        logoEmpresa: "TOP 20",
        img: imgTop20,
        subtitulo: "Conteúdo estratégico com velocidade de execução",
        desafio: "O perfil precisava produzir conteúdo com frequência, mostrar produtos de forma prática, manter presença ativa no Instagram e gerar alcance sem depender de grandes produções.",
        solucao: [
            "Captação de conteúdo prática — gravações no dia a dia da loja",
            "Estratégia de vídeos para rotina mostrando peças reais e aproveitando tendências",
            "Edição rápida e dinâmica com cortes objetivos e foco em retenção",
            "Entrega ágil permitindo constância nas postagens"
        ],
        resultados_numeros: [
            { valor: "↑", descricao: "frequência de conteúdo no perfil" },
            { valor: "Ágil", descricao: "entrega e edição em curto prazo" },
            { valor: "Ativo", descricao: "presença digital constante" }
        ],
        conclusao: "O melhor conteúdo não é o mais produzido — é o que é postado. Menos perfeição, mais constância. Menos produção, mais presença."
    },
    {
        id: "maisvida",
        segmento: "VAREJO / MODA",
        titulo: "Produção Ágil de Conteúdo",
        metrica: "Conteúdo constante no ritmo da loja",
        logoEmpresa: "MAIS VIDA",
        img: imgMaisVida,
        subtitulo: "Conteúdo estratégico com velocidade de execução",
        desafio: "O perfil precisava produzir conteúdo com frequência, mostrar produtos de forma prática, manter presença ativa no Instagram e gerar alcance sem depender de grandes produções.",
        solucao: [
            "Captação de conteúdo prática — gravações no dia a dia da loja",
            "Estratégia de vídeos para rotina mostrando peças reais e aproveitando tendências",
            "Edição rápida e dinâmica com cortes objetivos e foco em retenção",
            "Entrega ágil permitindo constância nas postagens"
        ],
        resultados_numeros: [
            { valor: "↑", descricao: "frequência de conteúdo no perfil" },
            { valor: "Ágil", descricao: "entrega e edição em curto prazo" },
            { valor: "Ativo", descricao: "presença digital constante" }
        ],
        conclusao: "O melhor conteúdo não é o mais produzido — é o que é postado. Menos perfeição, mais constância. Menos produção, mais presença."
    }
];

export function Cases() {
    return `
    <section id="cases-section-container">
        <div class="cases-section-inner">
            <header class="cases-header reveal">
                <h2 class="cases-title">A Ideia VS <span>O Resultado</span></h2>
                <p class="cases-subtitle">Não vendemos posts, vendemos percepção de valor. Veja como transformamos negócios genéricos em líderes de segmento.</p>
            </header>

            <div class="cases-grid">
                ${casesData.map((c, i) => `
                <article class="case-card reveal ${c.id !== 'maisvida' ? 'js-open-modal' : ''} ${i >= 4 ? 'hidden-case' : ''}" data-id="${c.id}" ${c.id !== 'maisvida' ? 'role="button" tabindex="0"' : ''} aria-label="Ver case de ${c.logoEmpresa}" style="transition-delay: ${(i % 2) * 150}ms; ${c.id === 'maisvida' ? 'cursor: default;' : ''}">
                    <div class="case-image-area">
                        <span class="case-badge">${c.segmento}</span>
                        <img class="case-company-image" src="${c.img}" alt="Logo ${c.logoEmpresa}" loading="lazy" />
                    </div>
                    <div class="case-content">
                        <h3 class="case-title">${c.titulo}</h3>
                        <div class="case-metric">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                            ${c.metrica}
                        </div>
                        ${c.id !== 'maisvida' ? `
                        <div class="case-footer-area">
                            <div class="case-divider"></div>
                            <span class="case-card-link-text">Ver case completo &rarr;</span>
                        </div>
                        ` : ''}
                    </div>
                </article>
                `).join('')}
            </div>

            <footer class="cases-footer-section reveal" id="cases-footer-section">
                <p>Mais de 20 marcas transformadas em líderes de segmento</p>
                <a href="#" class="cases-footer-link" id="load-more-cases">Ver todos os resultados &rarr;</a>
            </footer>
        </div>

        <div id="case-modal-overlay" class="case-modal-overlay" aria-hidden="true">
            <div class="case-modal-container" role="dialog" aria-modal="true" tabindex="-1" aria-labelledby="modal-title">
                <div class="case-modal-sticky-bar">
                    <span class="case-modal-header-badge" id="modal-badge"></span>
                    <button type="button" class="case-modal-close" id="modal-close" aria-label="Fechar modal">✕</button>
                </div>

                <div class="case-modal-header">
                </div>
                
                <div class="case-modal-body">
                    <div class="case-modal-title-section">
                        <h3 class="case-modal-hero-title" id="modal-title"></h3>
                        <p class="case-modal-hero-subtitle" id="modal-subtitle"></p>
                    </div>

                    <div class="case-modal-section">
                        <h4 class="case-modal-section-title">⚠️ O DESAFIO</h4>
                        <p class="case-modal-section-text" id="modal-challenge"></p>
                    </div>
                    
                    <div class="case-modal-section">
                        <h4 class="case-modal-section-title">✅ A SOLUÇÃO APLICADA</h4>
                        <ul class="case-modal-list" id="modal-solutions"></ul>
                    </div>
                    
                    <div class="case-modal-section">
                        <h4 class="case-modal-section-title">📈 RESULTADOS EM NÚMEROS</h4>
                        <div class="case-modal-metrics-grid" id="modal-metrics"></div>
                    </div>
                    
                    <div class="case-modal-section">
                        <h4 class="case-modal-section-title">💬 DEPOIMENTO / CONCLUSÃO</h4>
                        <div class="case-modal-quote">
                            <p id="modal-conclusion"></p>
                        </div>
                    </div>
                </div>

                <div class="case-modal-cta">
                    <h4>Quer resultados como esses?</h4>
                    <a href="#aplicacao" class="case-modal-btn">Iniciar minha aplicação →</a>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initCases() {
    // Para Vanilla JS no Vite, HMR pode destruir os elementos do DOM.
    // Usar event delegation no document.body garante que os cliques funcionem mesmo após o Hot Reload.

    function closeModal() {
        const overlay = document.getElementById('case-modal-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function openModal(caseId) {
        const overlay = document.getElementById('case-modal-overlay');
        if (!overlay) return;

        const data = casesData.find(c => c.id === caseId);
        if (!data) return;


        // Populate Modal Data
        document.getElementById('modal-badge').textContent = data.segmento;
        document.getElementById('modal-title').textContent = data.titulo;
        document.getElementById('modal-subtitle').textContent = data.subtitulo;
        document.getElementById('modal-challenge').textContent = data.desafio;
        document.querySelector('.case-modal-header').style.setProperty('--case-modal-cover', `url('${data.img}')`);

        document.getElementById('modal-solutions').innerHTML = data.solucao.map(s => `<li>${s}</li>`).join('');
        document.getElementById('modal-metrics').innerHTML = data.resultados_numeros.map(r => `
            <div class="case-modal-metric-card">
                <span class="case-modal-metric-value">${r.valor}</span>
                <span class="case-modal-metric-label">${r.descricao}</span>
            </div>
        `).join('');
        document.getElementById('modal-conclusion').textContent = data.conclusao;

        // Show Modal
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Trap focus inside modal
        setTimeout(() => {
            const closeBtn = document.getElementById('modal-close');
            if (closeBtn) closeBtn.focus();
        }, 100);
    }

    // Removendo listener antigo para evitar duplicação em múltiplos HMRs
    document.removeEventListener('click', handleCasesClick);
    document.addEventListener('click', handleCasesClick);

    function handleCasesClick(e) {
        // Load more / less cases
        if (e.target.closest('#load-more-cases')) {
            e.preventDefault();
            const btn = e.target.closest('#load-more-cases');
            const isExpanded = btn.classList.contains('is-expanded');
            
            if (!isExpanded) {
                // Expand
                const hiddenCases = document.querySelectorAll('.hidden-case');
                hiddenCases.forEach(card => {
                    card.classList.remove('hidden-case');
                    // Add active class slightly after to allow display:block to apply and transition to work
                    setTimeout(() => card.classList.add('active'), 10);
                });
                btn.innerHTML = '&larr; Ver menos resultados';
                btn.classList.add('is-expanded');
            } else {
                // Collapse
                const allCases = document.querySelectorAll('.case-card');
                allCases.forEach((card, index) => {
                    if (index >= 4) {
                        card.classList.add('hidden-case');
                        card.classList.remove('active'); // reset animation
                    }
                });
                btn.innerHTML = 'Ver todos os resultados &rarr;';
                btn.classList.remove('is-expanded');
                
                // Scroll back to cases section smoothly
                const section = document.getElementById('cases-section-container');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
            return;
        }

        // Fechar pelo botão X
        if (e.target.closest('#modal-close')) {
            closeModal();
            return;
        }

        // Clicar no botão CTA dentro do modal
        if (e.target.closest('.case-modal-btn')) {
            closeModal();
            // Permite a ação padrão (ancorar para #aplicacao)
            return;
        }

        // Fechar pelo clique fora (overlay)
        if (e.target.id === 'case-modal-overlay') {
            closeModal();
            return;
        }

        // Abrir modal ao clicar num card
        const card = e.target.closest('.js-open-modal');
        if (card) {
            const id = card.getAttribute('data-id');
            openModal(id);
        }
    }

    // Keydown events
    document.removeEventListener('keydown', handleCasesKeydown);
    document.addEventListener('keydown', handleCasesKeydown);

    function handleCasesKeydown(e) {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('case-modal-overlay');
            if (overlay && overlay.classList.contains('active')) {
                closeModal();
            }
            return;
        }

        if (e.key === 'Enter' || e.key === ' ') {
            const card = e.target.closest('.js-open-modal');
            if (card && document.activeElement === card) {
                e.preventDefault();
                const id = card.getAttribute('data-id');
                openModal(id);
            }
        }
    }
}
