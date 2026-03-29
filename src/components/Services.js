export function Services() {
  const services = [
    {
      num: '01',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
      title: 'Assessoria Estratégica',
      desc: 'Desenvolvimento completo de linha editorial, posicionamento de marca e estratégia de conteúdo focado em conversão de alto valor.',
    },
    {
      num: '02',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      title: 'Tráfego & E-commerce',
      desc: 'Gestão de anúncios com inteligência de dados para escalar vendas e atrair um público qualificado para sua loja virtual.',
    },
    {
      num: '03',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
      title: 'Captação Audiovisual',
      desc: 'Direção de arte, roteiro e captação cinematográfica para reels, institucionais e campanhas que vendem pela percepção de valor.',
    },
    {
      num: '04',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'Strategic Branding',
      desc: 'Design de marca, identidade visual e manual de tom de voz. Criamos a alma e a estética para que sua marca seja inconfundível.',
    },
  ];

  const cards = services.map((s, i) => `
    <div class="service-card reveal" style="transition-delay:${i * 100}ms;">
        <!-- Icon + Number -->
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
            <div style="width:48px;height:48px;background:rgba(231, 144, 50,0.1);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                ${s.icon}
            </div>
            <span style="font-size:48px;font-weight:700;color:rgba(231, 144, 50,0.2);line-height:1;font-family:'Inter',sans-serif;">${s.num}</span>
        </div>
        <!-- Title -->
        <h3 style="font-size:18px;font-weight:700;color:#1A1A1A;margin:0 0 12px;">${s.title}</h3>
        <!-- Description -->
        <p style="font-size:14px;color:#666;line-height:1.7;margin:0 0 16px;">${s.desc}</p>
        <!-- Link -->
        <a href="#aplicacao" class="link-orange">Saiba mais →</a>
    </div>
  `).join('');

  return `
    <!-- SEÇÃO 04 — ECOSSISTEMA / SERVIÇOS -->
    <section id="servicos" class="section-padding" style="background:#FFFFFF;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="display:flex;flex-direction:column;gap:8px;margin-bottom:48px;">
                <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px;">
                    <div>
                      <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Nossas Armas Estratégicas</p>
                        <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                        O Arsenal <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">NEVSS</span>
                        </h2>
                    </div>
                    <p style="font-size:16px;color:#666;line-height:1.6;max-width:420px;margin:0;text-align:right;">
                        Soluções integradas de ponta a ponta para elevar o ticket médio e o desejo pela sua marca.
                    </p>
                </div>
            </div>

            <!-- Grid Responsivo -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                ${cards}
            </div>
        </div>
    </section>
  `;
}
