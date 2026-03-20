export function Cases() {
  return `
    <!-- Nova Seção: Cases / Prova Visual -->
    <section id="cases" class="py-32 bg-nevss-dark relative border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="text-center mb-20 reveal">
                <h2 class="text-5xl md:text-7xl font-display uppercase">A Ideia vs <span class="text-nevss-orange">O Resultado</span></h2>
                <p class="mt-4 text-xl text-gray-400 font-light max-w-2xl mx-auto">Não vendemos posts, vendemos percepção de valor. Veja como transformamos negócios genéricos em líderes de segmento.</p>
            </div>

            <!-- Grid de Cases -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                <!-- Case 1 -->
                <div class="group relative overflow-hidden rounded-2xl reveal">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Case de Sucesso" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-50 group-hover:brightness-75">
                    <div class="absolute inset-0 bg-gradient-to-t from-nevss-dark via-nevss-dark/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-nevss-orange font-bold text-sm tracking-widest uppercase mb-2">E-commerce de Moda</p>
                                <h3 class="text-3xl font-display text-white uppercase">Rebranding & Tráfego</h3>
                                <p class="text-gray-300 mt-2 font-light hidden group-hover:block transition-all duration-300">+240% de aumento no faturamento mensal em 90 dias.</p>
                            </div>
                            <div class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-nevss-orange group-hover:border-transparent transition-all">
                                <i class="fa-solid fa-arrow-up-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Case 2 -->
                <div class="group relative overflow-hidden rounded-2xl reveal" style="transition-delay: 200ms;">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Case de Sucesso" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-50 group-hover:brightness-75">
                    <div class="absolute inset-0 bg-gradient-to-t from-nevss-dark via-nevss-dark/50 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <div class="flex justify-between items-end">
                            <div>
                                <p class="text-nevss-orange font-bold text-sm tracking-widest uppercase mb-2">Clínica de Estética</p>
                                <h3 class="text-3xl font-display text-white uppercase">Captação & Posicionamento</h3>
                                <p class="text-gray-300 mt-2 font-light hidden group-hover:block transition-all duration-300">Agenda lotada pelos próximos 3 meses focando em clientes Premium.</p>
                            </div>
                            <div class="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-nevss-orange group-hover:border-transparent transition-all">
                                <i class="fa-solid fa-arrow-up-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
