export function Testimonials() {
  const starSVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#E8900A"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const stars = Array(5).fill(starSVG).join('');

  const testimonials = [
    {
      quote: 'A Nevss transformou completamente a forma como nos posicionamos. Passamos de um perfil esquecível para uma referência no nosso nicho.',
      result: '+180% de vendas em 60 dias',
      name: 'Marina Costa',
      role: 'CEO, Studio Fashion',
      initial: 'MC',
    },
    {
      quote: 'Investir na assessoria da Nevss foi a melhor decisão que tomamos. O retorno foi quase imediato e consistente mês após mês.',
      result: 'Agenda lotada em 45 dias',
      name: 'Dr. Ricardo Almeida',
      role: 'Diretor, Clínica Estética Premium',
      initial: 'RA',
    },
    {
      quote: 'Eles não entregam apenas posts bonitos, entregam estratégia real. Minha marca nunca teve tanta autoridade quanto agora.',
      result: '+320% de crescimento orgânico',
      name: 'Fernanda Lopes',
      role: 'Fundadora, FitLife Academy',
      initial: 'FL',
    },
  ];

  const cards = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${i * 120}ms;">
        <!-- Aspas decorativas -->
        <div style="font-family:'Playfair Display',serif;font-size:48px;color:rgba(232,144,10,0.6);line-height:1;margin-bottom:8px;">"</div>
        
        <!-- Depoimento -->
        <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 16px;">${t.quote}</p>
        
        <!-- Resultado em destaque -->
        <div style="background:rgba(232,144,10,0.1);padding:8px 12px;border-radius:8px;margin-bottom:20px;display:inline-block;">
            <span style="font-size:14px;font-weight:700;color:#C47A08;">${t.result}</span>
        </div>
        
        <!-- Avatar + Info -->
        <div style="display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid #F2EDE5;">
            <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8900A,#F5B041);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span style="color:#fff;font-weight:700;font-size:14px;">${t.initial}</span>
            </div>
            <div>
                <p style="font-size:14px;font-weight:600;color:#1A1A1A;margin:0;">${t.name}</p>
                <p style="font-size:12px;color:#888;margin:0;">${t.role}</p>
            </div>
            <div style="margin-left:auto;display:flex;gap:2px;">
                ${stars}
            </div>
        </div>
    </div>
  `).join('');

  return `
    <!-- SEÇÃO 07 — DEPOIMENTOS -->
    <section class="section-padding" style="background:#FAF8F4;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <p style="font-size:11px;font-weight:700;color:#E8900A;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">
                    O que nossos clientes dizem
                </p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                    Resultados que <span style="font-family:'Playfair Display',serif;color:#E8900A;font-style:italic;">falam por si</span>
                </h2>
            </div>

            <!-- Grid -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;" class="testimonials-grid">
                ${cards}
            </div>
        </div>
    </section>
  `;
}
