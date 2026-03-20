export function Methodology() {
  return `
    <!-- Nova Seção: Metodologia -->
    <section id="metodologia" class="py-24 bg-nevss-purple relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p class="text-nevss-orange font-bold tracking-widest uppercase mb-4 reveal">Como Trabalhamos</p>
            <h2 class="text-5xl md:text-6xl font-display uppercase text-white mb-16 reveal">Nosso Método de <span class="text-transparent bg-clip-text bg-gradient-to-r from-nevss-orange to-yellow-500">Escala</span></h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                <!-- Linha conectora (Desktop) -->
                <div class="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 z-0 transform -translate-y-1/2"></div>

                <div class="relative z-10 bg-nevss-dark/80 p-8 rounded-2xl border border-white/5 reveal">
                    <div class="w-20 h-20 bg-nevss-dark border-2 border-nevss-orange rounded-full flex items-center justify-center text-3xl text-nevss-orange font-display mx-auto mb-6 shadow-[0_0_15px_rgba(255,69,0,0.3)]">1</div>
                    <h4 class="text-2xl font-bold text-white mb-3">Diagnóstico Raio-X</h4>
                    <p class="text-gray-400 font-light text-sm">Analisamos suas métricas atuais, posicionamento, concorrentes e identificamos os gargalos exatos que estão travando seu crescimento e vendas.</p>
                </div>

                <div class="relative z-10 bg-nevss-dark/80 p-8 rounded-2xl border border-white/5 reveal" style="transition-delay: 150ms;">
                    <div class="w-20 h-20 bg-nevss-dark border-2 border-nevss-orange rounded-full flex items-center justify-center text-3xl text-nevss-orange font-display mx-auto mb-6 shadow-[0_0_15px_rgba(255,69,0,0.3)]">2</div>
                    <h4 class="text-2xl font-bold text-white mb-3">Plano de Ataque</h4>
                    <p class="text-gray-400 font-light text-sm">Desenhamos a estratégia de marca, definimos a identidade visual e criamos o funil de tráfego que guiará desconhecidos a se tornarem fãs.</p>
                </div>

                <div class="relative z-10 bg-nevss-dark/80 p-8 rounded-2xl border border-white/5 reveal" style="transition-delay: 300ms;">
                    <div class="w-20 h-20 bg-nevss-dark border-2 border-nevss-orange rounded-full flex items-center justify-center text-3xl text-nevss-orange font-display mx-auto mb-6 shadow-[0_0_15px_rgba(255,69,0,0.3)]">3</div>
                    <h4 class="text-2xl font-bold text-white mb-3">Execução Cinematográfica</h4>
                    <p class="text-gray-400 font-light text-sm">A mágica acontece. Produção de conteúdo de altíssima qualidade, gestão de anúncios agressiva e otimização constante de resultados.</p>
                </div>
            </div>
        </div>
    </section>
  `;
}
