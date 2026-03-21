export function Marquee() {
  const brands = [
    'MARCA PREMIUM', 'STUDIO DESIGN', 'ELITE MODA', 'CLÍNICA ESTÉTICA', 
    'TECH SOLUTIONS', 'GOURMET HOUSE', 'BEAUTY CONCEPT', 'FIT ACADEMY',
    'MARCA PREMIUM', 'STUDIO DESIGN', 'ELITE MODA', 'CLÍNICA ESTÉTICA', 
    'TECH SOLUTIONS', 'GOURMET HOUSE', 'BEAUTY CONCEPT', 'FIT ACADEMY'
  ];

  const brandItems = brands.map(name => `
    <span style="font-size:15px;font-weight:600;letter-spacing:0.08em;color:#FFFFFF;white-space:nowrap;transition:color 0.3s ease;" onmouseover="this.style.color='#D4A017'" onmouseout="this.style.color='#FFFFFF'">${name}</span>
    <span style="color:#D4A017;font-size:20px;">✦</span>
  `).join('');

  return `
    <!-- BAND DE LOGOS — #1A1A1A -->
    <section style="background:#3d1e6e;padding:24px 0;overflow:hidden;">
        <p class="reveal" style="text-align:center;font-size:13px;color:#e8d5f5;margin:0 0 16px;font-weight:400;">
            Marcas que confiam na Nevss
        </p>
        <div style="overflow:hidden;position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0%,#3d1e6e 10%,#3d1e6e 90%,transparent 100%);mask-image:linear-gradient(to right,transparent 0%,#3d1e6e 10%,#3d1e6e 90%,transparent 100%);">
            <div class="marquee-track" style="display:flex;gap:32px;align-items:center;">
                ${brandItems}
            </div>
        </div>
    </section>
  `;
}
