export function ProblemSection() {
  return `
    <!-- Problema / Quebra de Padrão (Scrapbook Profissional) -->
    <section class="py-32 bg-nevss-purple relative overflow-hidden bg-pattern">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                <div class="relative reveal order-2 lg:order-1">
                    <!-- Composição Fotográfica Profissional -->
                    <div class="relative h-[600px] w-full">
                        <!-- Imagem Principal -->
                        <div class="absolute top-10 right-0 z-20 transform rotate-3 hover:rotate-0 hover:z-50 transition-all duration-500 w-64 md:w-80 shadow-2xl rounded-sm">
                            <div class="tape"></div>
                            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Equipe trabalhando" class="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 border-8 border-white">
                        </div>
                        
                        <!-- Imagem Secundária -->
                        <div class="absolute bottom-10 left-0 z-30 transform -rotate-6 hover:rotate-0 hover:z-50 transition-all duration-500 w-56 md:w-72 shadow-2xl rounded-sm">
                            <div class="tape"></div>
                            <div class="polaroid">
                                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Captação" class="w-full h-auto object-cover">
                                <p class="text-black font-hand text-2xl text-center mt-4 font-bold">Captação que vende</p>
                            </div>
                        </div>

                        <!-- Card Glassmorphism -->
                        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 glass-panel p-6 rounded-xl w-64 text-center border border-white/20 animate-float">
                            <i class="fa-solid fa-clock text-4xl text-nevss-orange mb-3"></i>
                            <h4 class="font-display text-2xl text-white uppercase mb-1">Tempo esgotado</h4>
                            <p class="text-sm text-gray-300">As marcas já perderam 17% da lealdade do público este ano.</p>
                        </div>
                    </div>
                </div>

                <div class="relative reveal order-1 lg:order-2">
                    <h2 class="text-5xl md:text-7xl font-display uppercase leading-[0.9]">
                        Sem tempo <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">para cuidar das</span><br>
                        <span class="text-nevss-orange font-hand text-7xl md:text-[7rem] lowercase leading-none block mt-4">redes sociais?</span>
                    </h2>
                    
                    <div class="mt-10 space-y-6">
                        <p class="text-xl text-gray-300 font-light leading-relaxed">
                            Postar fotos genéricas dos seus produtos ou terceirizar para sobrinhos não vai te levar ao próximo nível. Steve Jobs te daria uma bronca se visse seu posicionamento atual.
                        </p>
                        <ul class="space-y-4 text-gray-400">
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-xmark text-red-500 mt-1"></i>
                                <span>Chega de posts que não geram conversas ou vendas.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-xmark text-red-500 mt-1"></i>
                                <span>Chega de depender apenas de promoções para atrair clientes.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <i class="fa-solid fa-check text-green-500 mt-1 text-xl"></i>
                                <span class="text-white font-medium">É hora de construir um ecossistema magnético.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
