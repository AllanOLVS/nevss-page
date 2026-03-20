export function Navbar() {
  return `
    <!-- Logo Dinâmico (Começa no centro e voa para a esquerda) -->
    <a href="#" id="dynamic-logo" class="text-white font-display text-5xl tracking-widest flex items-center gap-1 group drop-shadow-2xl">
        NEVSS<span class="text-nevss-orange transition-transform group-hover:scale-125">.</span>
    </a>

    <!-- Navbar Dinâmica Estilo Pílula (Começa no centro-topo e voa para a direita) -->
    <nav id="dynamic-navbar" class="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-5 md:px-6 py-2 flex items-center gap-4 md:gap-6 shadow-2xl w-[90%] md:w-auto justify-between md:justify-center">
        
        <!-- Links Desktop -->
        <div class="hidden md:flex items-center space-x-6">
            <a href="#servicos" class="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-white transition-colors whitespace-nowrap">Ecossistema</a>
            <a href="#metodologia" class="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-white transition-colors whitespace-nowrap">Método</a>
            <a href="#cases" class="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-white transition-colors whitespace-nowrap">Resultados</a>
            <a href="#estrategista" class="text-xs font-semibold tracking-widest uppercase text-gray-300 hover:text-white transition-colors whitespace-nowrap">A Estrategista</a>
        </div>

        <!-- Botão Call to Action -->
        <a href="#aplicacao" class="bg-transparent border border-nevss-orange text-white px-5 py-2 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-nevss-orange hover:border-transparent transition-all uppercase tracking-wider group whitespace-nowrap">
            Iniciar Aplicação <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </a>

        <!-- Botão Mobile Menu -->
        <button id="mobile-menu-btn" class="md:hidden text-white hover:text-nevss-orange text-xl">
            <i class="fa-solid fa-bars"></i>
        </button>
    </nav>

    <!-- Menu Mobile Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-nevss-dark/95 backdrop-blur-xl z-[100] hidden flex-col items-center justify-center space-y-8 h-screen border-t border-white/10">
        <button id="close-menu-btn" class="absolute top-8 right-8 text-white text-3xl hover:text-nevss-orange">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <a href="#servicos" class="mobile-link text-3xl font-display uppercase tracking-wider hover:text-nevss-orange">Ecossistema</a>
        <a href="#metodologia" class="mobile-link text-3xl font-display uppercase tracking-wider hover:text-nevss-orange">Método</a>
        <a href="#cases" class="mobile-link text-3xl font-display uppercase tracking-wider hover:text-nevss-orange">Resultados</a>
        <a href="#estrategista" class="mobile-link text-3xl font-display uppercase tracking-wider hover:text-nevss-orange">A Estrategista</a>
    </div>
  `;
}

export function initNavbar() {
  const btnMenu = document.getElementById('mobile-menu-btn');
  const btnClose = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
      document.body.classList.toggle('overflow-hidden');
  };

  btnMenu.addEventListener('click', toggleMenu);
  btnClose.addEventListener('click', toggleMenu);
  mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

  // Lógica Central do Logo e Navbar (Scroll Animation)
  const dynamicNavbar = document.getElementById('dynamic-navbar');
  const dynamicLogo = document.getElementById('dynamic-logo');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          dynamicNavbar.classList.add('scrolled');
          dynamicLogo.classList.add('scrolled');
      } else {
          dynamicNavbar.classList.remove('scrolled');
          dynamicLogo.classList.remove('scrolled');
      }
  });
}
