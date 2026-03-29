export function Methodology() {
    const steps = [
        {
            num: '1',
            title: 'Diagnóstico Raio-X',
            desc: 'Analisamos suas métricas atuais, posicionamento, concorrentes e identificamos os gargalos exatos que estão travando seu crescimento.',
            deliverable: 'Relatório de diagnóstico completo',
        },
        {
            num: '2',
            title: 'Plano de Ataque',
            desc: 'Desenhamos a estratégia de marca, definimos a identidade visual e criamos o funil de tráfego que guiará desconhecidos a se tornarem fãs.',
            deliverable: 'Plano estratégico personalizado',
        },
        {
            num: '3',
            title: 'Execução & Aceleração',
            desc: 'Colocamos o plano em prática com produção de conteúdo cinematográfico, gestão agressiva de anúncios e otimização contínua para escalar seus resultados semana a semana.',
            deliverable: 'Execução completa + relatórios de performance',
        },
    ];

    const cards = steps.map((s, i) => `
    <div class="reveal" style="transition-delay:${i * 150}ms;position:relative;z-index:2;">
        <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
            <!-- Number circle -->
            <div style="width:48px;height:48px;border:2px solid #E79032;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                <span style="font-size:20px;font-weight:700;color:#E79032;">${s.num}</span>
            </div>
            <!-- Title -->
            <h3 style="font-size:18px;font-weight:700;color:#1A1A1A;text-align:center;margin:0 0 12px;">${s.title}</h3>
            <!-- Description -->
            <p style="font-size:14px;color:#666;line-height:1.7;text-align:center;margin:0 0 20px;">${s.desc}</p>
            <!-- Deliverable -->
            <div style="background:rgba(231, 144, 50,0.08);padding:12px;border-radius:8px;">
                <p style="font-size:13px;font-weight:600;color:#C47A08;margin:0;text-align:center;">
                    Você recebe: ${s.deliverable}
                </p>
            </div>
        </div>
    </div>
  `).join('');

    return `
    <!-- SEÇÃO 05 — MÉTODO DE ESCALA -->
    <section id="metodologia" class="section-padding" style="background:#F2EDE5;">
        <div class="container-nevss" style="text-align:center;">
            <!-- Header -->
            <div class="reveal" style="margin-bottom:48px;">
                <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Como Trabalhamos</p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                    Nosso Método de <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">ESCALA</span>
                </h2>
            </div>

            <!-- Cards with connector -->
            <div style="position:relative;">
                <!-- Connector line (desktop only) -->
                <div class="hidden lg:block" style="position:absolute;top:56px;left:15%;right:15%;height:2px;background:#E79032;z-index:1;"></div>

                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;" class="method-grid">
                    ${cards}
                </div>
            </div>

            <!-- CTA -->
            <div class="reveal" style="margin-top:48px;">
                <a href="#aplicacao" class="btn-primary" style="display:inline-flex;">
                    Quero iniciar meu diagnóstico
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </section>
  `;
}
