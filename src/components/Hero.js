export function Hero() {
  return `
    <!-- Hero Section Wrapper para o efeito "Estático" (Scroll Hijacking) -->
    <div class="h-[150vh] w-full relative z-10">
        <!-- Hero Section (Sticky) -->
        <section class="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden" id="hero">
            <!-- Blobs de Fundo (z-0) -->
            <div class="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-nevss-purpleLight rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-blob z-0"></div>
            <div class="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-nevss-orange rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-blob z-0" style="animation-delay: 2s"></div>

            <!-- Imagens em PNG (Sem fundo) nas extremidades -->
            <div class="absolute left-0 bottom-0 h-[70%] md:h-[85%] w-[40%] md:w-[30%] z-10 parallax-layer flex justify-start items-end pointer-events-none" data-speed="0.03">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fotografando" class="h-full w-full object-contain object-left-bottom opacity-60 md:opacity-80 transform rotate-2 mix-blend-lighten" style="-webkit-mask-image: linear-gradient(to top, black 80%, transparent);">
            </div>

            <div class="absolute right-0 bottom-0 h-[75%] md:h-[90%] w-[40%] md:w-[30%] z-20 parallax-layer flex justify-end items-end pointer-events-none" data-speed="0.06">
                <img src="https://images.unsplash.com/photo-1512316664532-15f18c21a4fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Estrategista" class="h-full w-full object-contain object-right-bottom opacity-90 transform -rotate-2 drop-shadow-[0_0_30px_rgba(255,69,0,0.15)]" style="-webkit-mask-image: linear-gradient(to top, black 80%, transparent);">
            </div>

            <!-- Conteúdo Central -->
            <div class="relative z-30 max-w-2xl mx-auto px-6 text-center mt-[35vh] md:mt-[40vh] flex flex-col items-center">
                
                <h1 class="text-6xl md:text-8xl lg:text-[9rem] font-display text-white leading-[0.9] uppercase tracking-tight reveal drop-shadow-2xl" style="transition-delay: 100ms;">
                    Agência de<br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Marcas</span>
                </h1>
                
                <div class="relative inline-block reveal w-full flex justify-center" style="transition-delay: 200ms;">
                    <h2 class="text-6xl md:text-[7rem] lg:text-[10rem] font-hand text-nevss-orange transform -rotate-3 mt-[-10px] md:mt-[-30px] drop-shadow-2xl whitespace-nowrap">Inesquecíveis</h2>
                </div>
                
                <p class="mt-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed reveal bg-nevss-dark/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xl" style="transition-delay: 300ms;">
                    Quer um marketing que funcione, mas não quer dar tempo pra ele? <br>
                    <strong class="text-white font-semibold">O jogo mudou.</strong> E as marcas genéricas estão ficando para trás.
                </p>
                
                <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 reveal w-full" style="transition-delay: 400ms;">
                    <a href="#aplicacao" class="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-bold text-white bg-nevss-orange rounded-full hover:bg-nevss-orangeHover hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,69,0,0.4)] uppercase tracking-wider">
                        Dominar meu mercado
                    </a>
                </div>

            </div>
        </section>
    </div>
  `;
}
