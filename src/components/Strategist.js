export function Strategist() {
  return `
    <!-- Autoridade (Emily Nevss) -->
    <section id="estrategista" class="py-32 bg-nevss-purple relative overflow-hidden bg-pattern border-t border-white/5">
        <!-- Detalhe geométrico de fundo -->
        <div class="absolute right-0 top-0 w-[40%] h-full bg-nevss-dark transform -skew-x-12 translate-x-20 shadow-2xl z-0"></div>
        
        <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                
                <!-- Imagem da Emily com estilo editorial/revista -->
                <div class="w-full lg:w-5/12 relative reveal">
                    <div class="absolute -inset-4 bg-gradient-to-r from-nevss-orange to-purple-600 opacity-30 blur-2xl rounded-2xl"></div>
                    <img src="https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Emily Nevss - Estrategista" class="relative z-10 w-full h-[650px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                    
                    <!-- Selo Profissional -->
                    <div class="absolute -bottom-8 -right-8 z-20 bg-nevss-dark border border-nevss-orange text-white p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-32 h-32 animate-spin-slow">
                        <i class="fa-solid fa-star text-nevss-orange mb-1"></i>
                        <span class="font-display uppercase text-sm tracking-widest text-center leading-tight">Founder<br>CEO</span>
                    </div>
                </div>

                <!-- Copy da Autoridade -->
                <div class="w-full lg:w-7/12 reveal">
                    <p class="text-nevss-orange font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-4">
                        <span class="w-12 h-px bg-nevss-orange"></span> A Estrategista por trás do jogo
                    </p>
                    <h2 class="text-5xl md:text-7xl font-display uppercase text-white mb-8 leading-[0.9]">Emily Nevss</h2>
                    
                    <blockquote class="text-2xl md:text-3xl font-hand text-gray-300 leading-relaxed mb-8 relative z-10">
                        <i class="fa-solid fa-quote-left text-4xl text-nevss-orange/30 absolute -top-4 -left-6 -z-10"></i>
                        "Não existe concorrência para quem sabe se posicionar. Consistência e estratégia não geram apenas vendas momentâneas, constroem impérios."
                    </blockquote>
                    
                    <p class="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                        Sou a mente estratégica que tira marcas da invisibilidade. Meu foco não é te dar métricas de vaidade ou posts bonitinhos. Minha agência atua com um único propósito: te dar posicionamento de líder de mercado, autoridade inquestionável e atrair clientes que compram pelo seu valor, e não pelo preço.
                    </p>

                    <div class="grid grid-cols-2 gap-6 mt-10">
                        <div class="glass-panel p-6 rounded-xl border border-white/10">
                            <h4 class="font-display text-4xl text-white mb-2">Visão <span class="text-nevss-orange">360º</span></h4>
                            <p class="text-sm text-gray-400 font-light">Estratégia, Copywriting, Design e Tráfego alinhados.</p>
                        </div>
                        <div class="glass-panel p-6 rounded-xl border border-white/10">
                            <h4 class="font-display text-4xl text-white mb-2">Alta <span class="text-nevss-orange">Demanda</span></h4>
                            <p class="text-sm text-gray-400 font-light">Atendimento seleto para garantir foco total nos resultados.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
