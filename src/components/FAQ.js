export function FAQ() {
  return `
    <!-- Nova Seção: FAQ (Profissionalismo) -->
    <section class="py-24 bg-nevss-dark relative border-t border-white/5">
        <div class="max-w-4xl mx-auto px-6 lg:px-8 reveal">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-display uppercase">Dúvidas <span class="text-nevss-orange">Frequentes</span></h2>
            </div>

            <div class="space-y-4">
                <!-- FAQ Item 1 -->
                <div class="glass-panel rounded-lg overflow-hidden border border-white/10">
                    <button class="faq-btn w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                        <span class="font-bold text-lg text-white">Vocês atendem empresas de qual segmento?</span>
                        <i class="fa-solid fa-chevron-down text-nevss-orange transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-6 pb-5 hidden">
                        <p class="text-gray-400 font-light">Atendemos marcas que possuem alto potencial de escala e buscam um posicionamento premium, independentemente do nicho. Nossos maiores cases estão em e-commerces, clínicas, saúde, moda e infoprodutos.</p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="glass-panel rounded-lg overflow-hidden border border-white/10">
                    <button class="faq-btn w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                        <span class="font-bold text-lg text-white">Qual o investimento mínimo?</span>
                        <i class="fa-solid fa-chevron-down text-nevss-orange transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-6 pb-5 hidden">
                        <p class="text-gray-400 font-light">Não trabalhamos com "pacotes de posts". Nossos projetos são personalizados após uma reunião de diagnóstico. Preencha a aplicação abaixo para entendermos seu momento e apresentarmos uma proposta financeira adequada.</p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="glass-panel rounded-lg overflow-hidden border border-white/10">
                    <button class="faq-btn w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                        <span class="font-bold text-lg text-white">O que significa o processo de "Aplicação"?</span>
                        <i class="fa-solid fa-chevron-down text-nevss-orange transition-transform duration-300"></i>
                    </button>
                    <div class="faq-content px-6 pb-5 hidden">
                        <p class="text-gray-400 font-light">Como entregamos um serviço extremamente focado e de alta qualidade, limitamos nosso número de clientes. O formulário abaixo serve para entendermos se a sua empresa tem o perfil (fit) ideal para escalar com a nossa metodologia no momento atual.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}

export function initFAQ() {
  // FAQ Accordion
  const faqBtns = document.querySelectorAll('.faq-btn');
  faqBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('i');
          
          document.querySelectorAll('.faq-content').forEach(c => {
              if(c !== content) {
                  c.classList.add('hidden');
                  c.previousElementSibling.querySelector('i').classList.remove('rotate-180');
              }
          });

          content.classList.toggle('hidden');
          icon.classList.toggle('rotate-180');
      });
  });
}
