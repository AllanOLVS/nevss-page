export function Footer() {
  return `
    <!-- Footer Premium e Corporativo -->
    <footer class="bg-[#040007] pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        <!-- Detalhe sutil -->
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-nevss-orange/50 to-transparent"></div>
        
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                <!-- Coluna 1: Marca -->
                <div>
                    <a href="#" class="font-display text-4xl tracking-widest text-white flex items-center gap-1 mb-6">
                        NEVSS<span class="text-nevss-orange">.</span>
                    </a>
                    <p class="text-gray-400 font-light text-sm leading-relaxed mb-6">
                        A agência de marketing e branding focada em criar marcas inesquecíveis e posicionamento premium de alto valor.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-nevss-orange transition-all duration-300"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-nevss-orange transition-all duration-300"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-nevss-orange transition-all duration-300"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                <!-- Coluna 2: Navegação -->
                <div>
                    <h4 class="text-white font-bold uppercase tracking-wider mb-6 text-sm">Mapa do Site</h4>
                    <ul class="space-y-3">
                        <li><a href="#servicos" class="text-gray-400 hover:text-nevss-orange text-sm transition-colors">Nosso Ecossistema</a></li>
                        <li><a href="#metodologia" class="text-gray-400 hover:text-nevss-orange text-sm transition-colors">Metodologia Nevss</a></li>
                        <li><a href="#cases" class="text-gray-400 hover:text-nevss-orange text-sm transition-colors">Resultados & Cases</a></li>
                        <li><a href="#estrategista" class="text-gray-400 hover:text-nevss-orange text-sm transition-colors">Emily Nevss (CEO)</a></li>
                        <li><a href="#aplicacao" class="text-gray-400 hover:text-white text-sm transition-colors font-medium">Aplicar para Assessoria</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Contato -->
                <div>
                    <h4 class="text-white font-bold uppercase tracking-wider mb-6 text-sm">Fale Conosco</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3 text-gray-400 text-sm">
                            <i class="fa-solid fa-envelope mt-1 text-nevss-orange"></i>
                            <a href="mailto:contato@agencianevss.com" class="hover:text-white transition-colors">contato@agencianevss.com</a>
                        </li>
                        <li class="flex items-start gap-3 text-gray-400 text-sm">
                            <i class="fa-brands fa-whatsapp mt-1 text-nevss-orange text-lg"></i>
                            <a href="#" class="hover:text-white transition-colors">+55 (00) 00000-0000</a>
                        </li>
                        <li class="flex items-start gap-3 text-gray-400 text-sm">
                            <i class="fa-solid fa-location-dot mt-1 text-nevss-orange"></i>
                            <span>Atendimento 100% Digital.<br>Para marcas do Brasil e do Mundo.</span>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 4: Legal -->
                <div>
                    <h4 class="text-white font-bold uppercase tracking-wider mb-6 text-sm">Políticas</h4>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidade</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Termos de Uso</a></li>
                    </ul>
                    <div class="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                        <i class="fa-solid fa-bolt text-nevss-orange text-xl mb-2"></i>
                        <p class="text-xs text-gray-400 uppercase tracking-widest font-bold">Inovação Diária</p>
                    </div>
                </div>

            </div>

            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-gray-500 font-light text-xs">
                    © <span id="year"></span> Agência Nevss | Estratégia e Branding. Todos os direitos reservados.
                </p>
                <p class="text-gray-600 text-xs font-mono">CNPJ: 00.000.000/0001-00</p>
            </div>
        </div>
    </footer>
  `;
}

export function initFooter() {
  document.getElementById('year').textContent = new Date().getFullYear();
}
