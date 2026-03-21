export function Cases() {
  const cases = [
    {
      segment: 'E-COMMERCE DE MODA',
      title: 'Rebranding & Tráfego',
      metric: '+240% de alcance orgânico',
      gradient: 'linear-gradient(135deg, #1A1A1A 0%, #333 100%)',
    },
    {
      segment: 'CLÍNICA DE ESTÉTICA',
      title: 'Captação & Posicionamento',
      metric: 'Agenda lotada por 3 meses',
      gradient: 'linear-gradient(135deg, #2A2015 0%, #1A1A1A 100%)',
    },
  ];

  const caseCards = cases.map((c, i) => `
    <div class="case-card reveal" style="transition-delay:${i * 200}ms;height:400px;">
        <!-- Background visual (gradient placeholder for real images) -->
        <div style="position:absolute;inset:0;background:${c.gradient};"></div>
        <!-- Mock content overlay to simulate project visual -->
        <div style="position:absolute;top:40px;left:40px;right:40px;bottom:120px;display:grid;grid-template-columns:repeat(2,1fr);gap:8px;opacity:0.15;">
            <div style="background:#E8900A;border-radius:8px;"></div>
            <div style="background:#fff;border-radius:8px;"></div>
            <div style="background:#fff;border-radius:8px;"></div>
            <div style="background:#E8900A;border-radius:8px;"></div>
        </div>
        <!-- Overlay -->
        <div class="overlay"></div>
        <!-- Tag -->
        <div style="position:absolute;top:20px;left:20px;z-index:2;">
            <span style="display:inline-block;padding:6px 14px;background:#E8900A;color:#fff;font-size:11px;font-weight:700;border-radius:20px;letter-spacing:0.04em;">
                ${c.segment}
            </span>
        </div>
        <!-- Content bottom -->
        <div style="position:absolute;bottom:0;left:0;right:0;padding:24px;z-index:2;">
            <h3 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 8px;">${c.title}</h3>
            <p style="font-size:15px;font-weight:700;color:#E8900A;margin:0 0 12px;">${c.metric}</p>
            <a href="#" style="font-size:13px;color:#fff;text-decoration:underline;text-underline-offset:3px;">Ver case completo →</a>
        </div>
    </div>
  `).join('');

  return `
    <!-- SEÇÃO 06 — RESULTADOS / CASES -->
    <section id="cases" class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 16px;">
                    A Ideia VS <span style="font-family:'Playfair Display',serif;color:#E8900A;font-style:italic;">O Resultado</span>
                </h2>
                <p style="font-size:16px;color:rgba(255,255,255,0.6);max-width:560px;margin:0 auto;line-height:1.6;">
                    Não vendemos posts, vendemos percepção de valor. Veja como transformamos negócios genéricos em líderes de segmento.
                </p>
            </div>

            <!-- Grid -->
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;" class="cases-grid">
                ${caseCards}
            </div>

            <!-- Bottom line -->
            <div class="reveal" style="text-align:center;margin-top:48px;">
                <p style="font-size:16px;color:rgba(255,255,255,0.7);margin:0 0 12px;">
                    Mais de <strong style="color:#fff;">20 marcas</strong> transformadas em líderes de segmento
                </p>
                <a href="#" class="link-orange" style="color:#E8900A;">Ver todos os resultados →</a>
            </div>
        </div>
    </section>
  `;
}
