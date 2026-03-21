import logoImg from '../assets/logo-nevss-sFundo.png';

export function Navbar() {
  return `
    <!-- HEADER — Sticky Orange -->
    <header id="site-header">
        <div class="nav-inner">
            <!-- Logo à esquerda -->
            <a href="#" class="flex items-center shrink-0" style="z-index:10">
                <img src="${logoImg}" alt="Agência Nevss" style="height:52px;width:auto;filter:brightness(0) invert(1);">
            </a>

            <!-- Nav Desktop — ao centro -->
            <nav class="hidden lg:flex items-center gap-8" id="desktop-nav">
                <a href="#servicos" class="nav-link">Ecossistema</a>
                <span class="text-white/30">·</span>
                <a href="#metodologia" class="nav-link">Método</a>
                <span class="text-white/30">·</span>
                <a href="#cases" class="nav-link">Resultados</a>
                <span class="text-white/30">·</span>
                <a href="#estrategista" class="nav-link">A Estrategista</a>
            </nav>

            <!-- CTA à direita (Desktop) -->
            <a href="#aplicacao" class="nav-cta hidden lg:inline-flex">
                INICIAR APLICAÇÃO
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>

            <!-- Hamburger Mobile -->
            <button id="mobile-menu-btn" class="lg:hidden flex flex-col gap-[5px] w-8 justify-center items-end" aria-label="Abrir menu" style="z-index:10">
                <span class="hamburger-line w-8 h-[2px] bg-white rounded-full transition-all duration-300"></span>
                <span class="hamburger-line w-6 h-[2px] bg-white rounded-full transition-all duration-300"></span>
                <span class="hamburger-line w-8 h-[2px] bg-white rounded-full transition-all duration-300"></span>
            </button>
        </div>
    </header>

    <!-- Mobile Overlay -->
    <div id="mobile-overlay"></div>

    <!-- Mobile Drawer — #1A1A1A lateral -->
    <div id="mobile-drawer">
        <!-- Close Button -->
        <button id="close-drawer-btn" style="position:absolute;top:24px;right:24px;color:#fff;font-size:24px;background:none;border:none;cursor:pointer;" aria-label="Fechar menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <a href="#servicos" class="mobile-nav-link drawer-link">Ecossistema</a>
        <a href="#metodologia" class="mobile-nav-link drawer-link">Método</a>
        <a href="#cases" class="mobile-nav-link drawer-link">Resultados</a>
        <a href="#estrategista" class="mobile-nav-link drawer-link">A Estrategista</a>

        <a href="#aplicacao" class="drawer-link btn-primary" style="margin-top:auto;text-align:center;justify-content:center;">
            Iniciar Aplicação
        </a>
    </div>
  `;
}

export function initNavbar() {
  const header = document.getElementById('site-header');
  const btnMenu = document.getElementById('mobile-menu-btn');
  const btnClose = document.getElementById('close-drawer-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // Scroll: compact header
  const handleScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer
  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  btnMenu.addEventListener('click', openDrawer);
  btnClose.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}
