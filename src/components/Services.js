export function Services() {
  return `
    <!-- Ecossistema Nevss (Serviços Corporativos) -->
    <section id="servicos" class="py-32 bg-nevss-dark relative border-t border-white/5">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal gap-6">
                <div>
                    <h2 class="text-5xl md:text-7xl font-display uppercase leading-none">O Ecossistema <br><span class="text-nevss-orange">Nevss</span></h2>
                </div>
                <div class="md:text-right max-w-md">
                    <p class="text-xl text-gray-400 font-light">Soluções integradas de ponta a ponta para elevar o ticket médio e o desejo pela sua marca.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Card 1 -->
                <div class="glass-panel p-10 rounded-2xl hover:bg-white/5 transition-all duration-500 group reveal border-l-4 border-l-transparent hover:border-l-nevss-orange cursor-crosshair">
                    <div class="flex justify-between items-start mb-8">
                        <div class="w-16 h-16 bg-nevss-purpleLight/50 rounded-xl flex items-center justify-center text-white text-2xl group-hover:bg-nevss-orange group-hover:scale-110 transition-all duration-300">
                            <i class="fa-solid fa-chess-knight"></i>
                        </div>
                        <span class="text-gray-600 font-display text-4xl">01</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-4 uppercase font-display tracking-wide text-white">Assessoria Estratégica</h3>
                    <p class="text-gray-400 text-lg font-light leading-relaxed">Desenvolvimento completo de linha editorial, posicionamento de marca e estratégia de conteúdo focado em conversão de alto valor.</p>
                </div>

                <!-- Card 2 -->
                <div class="glass-panel p-10 rounded-2xl hover:bg-white/5 transition-all duration-500 group reveal border-l-4 border-l-transparent hover:border-l-nevss-orange cursor-crosshair" style="transition-delay: 100ms;">
                    <div class="flex justify-between items-start mb-8">
                        <div class="w-16 h-16 bg-nevss-purpleLight/50 rounded-xl flex items-center justify-center text-white text-2xl group-hover:bg-nevss-orange group-hover:scale-110 transition-all duration-300">
                            <i class="fa-solid fa-bullseye"></i>
                        </div>
                        <span class="text-gray-600 font-display text-4xl">02</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-4 uppercase font-display tracking-wide text-white">Tráfego & E-commerce</h3>
                    <p class="text-gray-400 text-lg font-light leading-relaxed">Gestão de anúncios (Ads) com inteligência de dados para escalar vendas e atrair um público qualificado para sua loja virtual.</p>
                </div>

                <!-- Card 3 -->
                <div class="glass-panel p-10 rounded-2xl hover:bg-white/5 transition-all duration-500 group reveal border-l-4 border-l-transparent hover:border-l-nevss-orange cursor-crosshair" style="transition-delay: 200ms;">
                    <div class="flex justify-between items-start mb-8">
                        <div class="w-16 h-16 bg-nevss-purpleLight/50 rounded-xl flex items-center justify-center text-white text-2xl group-hover:bg-nevss-orange group-hover:scale-110 transition-all duration-300">
                            <i class="fa-solid fa-camera-retro"></i>
                        </div>
                        <span class="text-gray-600 font-display text-4xl">03</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-4 uppercase font-display tracking-wide text-white">Captação Audiovisual</h3>
                    <p class="text-gray-400 text-lg font-light leading-relaxed">Vídeo marketing não é o futuro, é o agora. Direção de arte, roteiro e captação cinematográfica para reels, institucionais e campanhas.</p>
                </div>

                <!-- Card 4 -->
                <div class="glass-panel p-10 rounded-2xl hover:bg-white/5 transition-all duration-500 group reveal border-l-4 border-l-transparent hover:border-l-nevss-orange cursor-crosshair" style="transition-delay: 300ms;">
                    <div class="flex justify-between items-start mb-8">
                        <div class="w-16 h-16 bg-nevss-purpleLight/50 rounded-xl flex items-center justify-center text-white text-2xl group-hover:bg-nevss-orange group-hover:scale-110 transition-all duration-300">
                            <i class="fa-solid fa-fingerprint"></i>
                        </div>
                        <span class="text-gray-600 font-display text-4xl">04</span>
                    </div>
                    <h3 class="text-3xl font-bold mb-4 uppercase font-display tracking-wide text-white">Strategic Branding</h3>
                    <p class="text-gray-400 text-lg font-light leading-relaxed">Design de marca, identidade visual e manual de tom de voz. Criamos a alma e a estética para que sua marca seja inconfundível.</p>
                </div>
            </div>
        </div>
    </section>
  `;
}
