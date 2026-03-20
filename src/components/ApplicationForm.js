export function ApplicationForm() {
  return `
    <!-- Formulário Dinâmico (Aplicação) -->
    <section id="aplicacao" class="py-32 bg-nevss-purple relative border-t-[8px] border-nevss-orange bg-pattern">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 reveal">
            <div class="text-center mb-16">
                <p class="text-nevss-orange font-bold tracking-widest uppercase mb-4">Vagas Limitadas</p>
                <h2 class="text-5xl md:text-7xl font-display uppercase text-white">Aplicação para <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Parceria</span></h2>
                <p class="mt-4 text-xl text-gray-300 font-light">Preencha os dados abaixo com precisão. Retornaremos em até 24 horas caso seu negócio tenha fit com nossa agência.</p>
            </div>

            <!-- Formulário Corporativo com toque moderno -->
            <div class="bg-nevss-dark/90 p-8 md:p-12 rounded-2xl shadow-2xl relative border border-white/10 backdrop-blur-xl">
                
                <form action="#" method="POST" class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label class="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">Nome do Responsável *</label>
                            <input type="text" required class="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-nevss-orange py-3 transition-colors font-sans text-lg placeholder-gray-600" placeholder="Seu nome completo">
                        </div>
                        <div>
                            <label class="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">Nome da Empresa / @Instagram *</label>
                            <input type="text" required class="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-nevss-orange py-3 transition-colors font-sans text-lg placeholder-gray-600" placeholder="@suamarca ou Nome da Empresa">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label class="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">WhatsApp para Contato *</label>
                            <input type="tel" required class="w-full bg-transparent border-b border-gray-600 text-white focus:outline-none focus:border-nevss-orange py-3 transition-colors font-sans text-lg placeholder-gray-600" placeholder="(00) 00000-0000">
                        </div>
                        <div>
                            <label class="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">Faturamento Médio Mensal (Opcional)</label>
                            <select class="w-full bg-transparent border-b border-gray-600 text-gray-400 focus:outline-none focus:border-nevss-orange py-3 transition-colors font-sans text-lg appearance-none cursor-pointer">
                                <option value="" disabled selected>Selecione uma faixa...</option>
                                <option value="1">Ainda não faturo</option>
                                <option value="2">Até R$ 10.000</option>
                                <option value="3">R$ 10.000 a R$ 50.000</option>
                                <option value="4">Acima de R$ 50.000</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label class="block text-gray-400 font-medium mb-2 text-sm uppercase tracking-wider">Qual o seu maior desafio hoje? Por que precisa da Nevss? *</label>
                        <textarea rows="4" required class="w-full bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-nevss-orange p-4 transition-colors font-sans text-lg resize-none placeholder-gray-600 mt-2" placeholder="Ex: 'Não consigo escalar as vendas', 'Meu Instagram não passa profissionalismo', 'Estou refém da concorrência' ..."></textarea>
                    </div>

                    <button type="submit" class="w-full bg-nevss-orange text-white font-display text-2xl uppercase py-5 rounded-lg hover:bg-nevss-orangeHover transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,69,0,0.3)] flex justify-center items-center gap-3">
                        Enviar Aplicação Estratégica <i class="fa-solid fa-paper-plane text-lg"></i>
                    </button>
                    <p class="text-center text-xs text-gray-500 font-light flex items-center justify-center gap-2">
                        <i class="fa-solid fa-lock"></i> Suas informações estão seguras e sob sigilo.
                    </p>
                </form>
            </div>
        </div>
    </section>
  `;
}
