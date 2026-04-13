export function Marquee() {
  const faviconSquare = new URL('../assets/favicon-square1.png', import.meta.url).href;

  const logoModules = import.meta.glob('../assets/logos-empresas-carrossel/logo-*.png', {
    eager: true,
    import: 'default'
  });

  const logos = Object.entries(logoModules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src]) => {
      const fileName = path.split('/').pop() || '';
      const rawName = fileName.replace('.png', '').replace('logo-', '');
      const alt = rawName
        .split('-')
        .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
        .join(' ');

      return { src, alt, rawName };
    });

  const brandItems = logos
    .map(
      (logo) => `
        <div class="partner-logo-item" aria-label="${logo.alt}">
          <img class="partner-logo${logo.rawName === 'atrevidas' ? ' no-color-hover' : ''}" src="${logo.src}" alt="Logo ${logo.alt}" loading="lazy" decoding="async" />
        </div>
        <span class="logo-sep" aria-hidden="true"></span>
      `
    )
    .join('');

  return `
    <section class="partners-band">
        <div class="partners-head reveal">
            <div class="partners-kicker-wrap" aria-hidden="true">
                <span class="partners-kicker-line"></span>
                <span class="partners-kicker">CLIENTES</span>
                <span class="partners-kicker-line"></span>
            </div>
            <p class="partners-title">
              Empresas que confiam na
              <img class="partners-title-brand" src="${faviconSquare}" alt="Nevss" loading="lazy" decoding="async" />
            </p>
        </div>
        <div class="logo-marquee-wrapper">
            <div class="logo-marquee-scroller">
                <div class="marquee-track logo-marquee-track" aria-hidden="false">
                    ${brandItems}
                </div>
                <div class="marquee-track logo-marquee-track" aria-hidden="true">
                    ${brandItems}
                </div>
            </div>
        </div>
    </section>
  `;
}
