export function Marquee() {
  const brands = [
    'MARCA PREMIUM', 'STUDIO DESIGN', 'ELITE MODA', 'CLÍNICA ESTÉTICA', 
    'TECH SOLUTIONS', 'GOURMET HOUSE', 'BEAUTY CONCEPT', 'FIT ACADEMY',
    'MARCA PREMIUM', 'STUDIO DESIGN', 'ELITE MODA', 'CLÍNICA ESTÉTICA', 
    'TECH SOLUTIONS', 'GOURMET HOUSE', 'BEAUTY CONCEPT', 'FIT ACADEMY'
  ];

  const brandItems = brands.map(name => `
    <span style="font-size:15px;font-weight:600;letter-spacing:0.08em;color:rgba(255,255,255,0.5);white-space:nowrap;">${name}</span>
    <span style="color:rgba(255,255,255,0.2);font-size:20px;">✦</span>
  `).join('');

  return `
    <!-- BAND DE LOGOS — #1A1A1A -->
    <section style="background:#1A1A1A;padding:24px 0;overflow:hidden;">
        <p class="reveal" style="text-align:center;font-size:13px;color:rgba(255,255,255,0.4);margin:0 0 16px;font-weight:400;">
            Marcas que confiam na Nevss
        </p>
        <div style="overflow:hidden;position:relative;">
            <div class="marquee-track" style="display:flex;gap:32px;align-items:center;">
                ${brandItems}
            </div>
        </div>
    </section>
  `;
}
