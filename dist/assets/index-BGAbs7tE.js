(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/logo-nevss-sFundo-CUGPPqL-.png`;function t(){return`
    <!-- HEADER — Sticky Orange -->
    <header id="site-header">
        <div class="nav-inner">
            <!-- Logo à esquerda -->
            <a href="#" class="flex items-center shrink-0" style="z-index:10">
                <img src="${e}" alt="Agência Nevss" style="height:52px;width:auto;filter:brightness(0) invert(1);">
            </a>

            <!-- Nav Desktop — ao centro -->
            <nav class="hidden lg:flex items-center gap-8" id="desktop-nav">
                <a href="#servicos" class="nav-link">Ecossistema</a>
                <span class="text-white/30">·</span>
                <a href="#metodologia" class="nav-link">Método</a>
                <span class="text-white/30">·</span>
                <a href="#cases" class="nav-link">Resultados</a>
                <span class="text-white/30">·</span>
                <a href="#estrategista" class="nav-link">A Estrategista</a>
            </nav>

            <!-- Wrapper para CTA e Hamburger -->
            <div class="flex items-center gap-4 lg:gap-8">
                <!-- CTA do Header -->
                <a href="#aplicacao" class="nav-cta mobile-hide">
                    INICIAR APLICAÇÃO
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>

            <!-- Hamburger Mobile -->
            <button id="mobile-menu-btn" class="lg:hidden flex flex-col gap-[5px] w-8 justify-center items-end" aria-label="Abrir menu" style="z-index:10">
                <span class="hamburger-line w-8 h-[2px] bg-white rounded-full transition-all duration-300"></span>
                <span class="hamburger-line w-6 h-[2px] bg-white rounded-full transition-all duration-300"></span>
                <span class="hamburger-line w-8 h-[2px] bg-white rounded-full transition-all duration-300"></span>
            </button>
            </div>
        </div>
    </header>

    <!-- Mobile Overlay -->
    <div id="mobile-overlay"></div>

    <!-- Mobile Drawer — #1A1A1A lateral -->
    <div id="mobile-drawer">
        <a href="#servicos" class="mobile-nav-link drawer-link">Ecossistema</a>
        <a href="#metodologia" class="mobile-nav-link drawer-link">Método</a>
        <a href="#cases" class="mobile-nav-link drawer-link">Resultados</a>
        <a href="#estrategista" class="mobile-nav-link drawer-link">A Estrategista</a>

        <a href="#aplicacao" class="drawer-link btn-primary desktop-hide" style="margin-top:8px;text-align:center;justify-content:center;">
            Iniciar Aplicação
        </a>
    </div>
  `}function n(){let e=document.getElementById(`site-header`),t=document.getElementById(`mobile-menu-btn`),n=document.getElementById(`mobile-drawer`),r=document.getElementById(`mobile-overlay`),i=document.querySelectorAll(`.drawer-link`),a=()=>{window.scrollY>80?(e.classList.add(`scrolled`),document.body.classList.add(`scrolled-body`)):(e.classList.remove(`scrolled`),document.body.classList.remove(`scrolled-body`))};window.addEventListener(`scroll`,a,{passive:!0}),a();let o=()=>{n.classList.add(`open`),r.classList.add(`open`),document.body.style.overflow=`hidden`},s=()=>{n.classList.remove(`open`),r.classList.remove(`open`),document.body.style.overflow=``};t.addEventListener(`click`,o),r.addEventListener(`click`,s),i.forEach(e=>e.addEventListener(`click`,s))}function r(){return`
    <!-- WhatsApp Flutuante — Laranja da marca -->
    <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Fale conosco no WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span class="tooltip">Fale conosco</span>
    </a>
  `}var i=`/assets/foto-hero1-CSSOl77T.png`;function a(){return`
    <!-- HERO — Two columns 50/50 -->
    <section id="hero" class="section-padding bg-white" style="padding-top:180px;min-height:auto;padding-bottom:60px;display:flex;align-items:center;">
        <div class="container-nevss">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <!-- COLUNA ESQUERDA: Conteúdo -->
                <div class="order-1 lg:order-1">

                    <!-- Tag credibilidade -->
                    <div class="reveal" style="margin-bottom:24px;">
                        <span style="display:inline-block;padding:6px 16px;background:rgba(231, 144, 50,0.12);color:#C47A08;font-size:13px;font-weight:600;border-radius:20px;">
                            #1 em posicionamento premium
                        </span>
                    </div>

                    <!-- Headline -->
                    <h1 class="reveal resp-h1" style="font-family:'Inter',sans-serif;font-size:56px;font-weight:700;line-height:1.08;color:#1A1A1A;margin:0 0 24px;text-transform:uppercase;">
                        TENHA UMA ESTRATÉGIA<br>
                        FEITA SOB MEDIDA:<br>
                        <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;text-transform:none;font-weight:700;">
                            da criação de conteúdo<br>à performance em tráfego.
                        </span>
                    </h1>

                    <!-- Subheadline -->
                    <p class="reveal" style="font-size:16px;color:#555;line-height:1.7;margin-bottom:32px;max-width:500px;">
                        Para negócios ambiciosos que querem sair da invisibilidade e se tornar referência absoluta no seu segmento.
                    </p>

                    <!-- CTAs -->
                    <div class="reveal" style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;margin-bottom:48px;">
                        <a href="#aplicacao" class="btn-primary">
                            Iniciar minha aplicação
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                        <a href="#cases" class="link-text">Ver resultados reais ↓</a>
                    </div>

                    <!-- Metrics Strip -->
                    <div class="reveal" style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
                        <div>
                            <p style="font-size:24px;font-weight:700;color:#E79032;margin:0;">+20</p>
                            <p style="font-size:13px;color:#777;font-weight:400;margin:0;">Segmentos atendidos</p>
                        </div>
                        <div style="width:1px;height:40px;background:#E5E0D8;"></div>
                        <div>
                            <p style="font-size:24px;font-weight:700;color:#E79032;margin:0;">+5</p>
                            <p style="font-size:13px;color:#777;font-weight:400;margin:0;">Anos de resultados</p>
                        </div>
                        <div style="width:1px;height:40px;background:#E5E0D8;"></div>
                        <div>
                            <p style="font-size:24px;font-weight:700;color:#E79032;margin:0;">100%</p>
                            <p style="font-size:13px;color:#777;font-weight:400;margin:0;">Dedicação ao cliente</p>
                        </div>
                    </div>
                </div>

                <!-- COLUNA DIREITA: Visual mockup -->
                <div class="order-2 lg:order-2 relative reveal">
                    <!-- Stack de cards com mockups -->
                    <div style="position:relative;min-height:420px;">

                        <!-- Imagem da fundadora emergindo por trás do card -->
                        <img src="${i}" alt="Estrategista Emily Nevss" class="hero-founder-img" style="position:absolute;bottom:90%;left:50%;transform:translateX(-40%);height:420px;width:auto;z-index:1;pointer-events:none;">

                        <!-- Card principal: Dashboard mockup -->
                        <div style="background:#fff;border-radius:16px;border:0.5px solid #E5E0D8;padding:20px;box-shadow:0 8px 40px rgba(0,0,0,0.08);position:relative;z-index:2;margin-top:180px;">
                            <!-- Mock Instagram Grid -->
                            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
                                <!-- Instagram -->
                                <div style="background:linear-gradient(135deg,#E79032,#F5B041);border-radius:8px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><rect x="2" y="2" width="20" height="20" rx="5" stroke="white" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="5" stroke="white" stroke-width="2" fill="none"/></svg>
                                </div>
                                <!-- Meta Ads -->
                                <div style="background:linear-gradient(135deg,#0668E1,#1877F2);border-radius:8px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">
                                    <svg width="26" height="16" viewBox="0 0 120 70" fill="white"><path d="M27.3 67.5c-7.2 0-13.1-3.3-17.2-8.8C6 53.1 3.5 44.5 3.5 35c0-9.5 2.5-18.1 6.6-23.7 4.1-5.5 10-8.8 17.2-8.8 5.8 0 10.4 2.2 14.5 6.5 3.3 3.5 6.5 8.5 9.7 15L60 42.7l8.5-17.7c3.2-6.5 6.4-11.5 9.7-15 4.1-4.3 8.7-6.5 14.5-6.5 7.2 0 13.1 3.3 17.2 8.8 4.1 5.6 6.6 14.2 6.6 23.7s-2.5 18.1-6.6 23.7c-4.1 5.5-10 8.8-17.2 8.8-5.8 0-10.4-2.2-14.5-6.5-3.3-3.5-6.5-8.5-9.7-15L60 27.3l-8.5 17.7c-3.2 6.5-6.4 11.5-9.7 15-4.1 4.3-8.7 6.5-14.5 6.5z" stroke="white" stroke-width="5" fill="none"/></svg>
                                    <span style="font-size:7px;font-weight:700;color:white;text-transform:uppercase;letter-spacing:0.05em;">Meta Ads</span>
                                </div>
                                <!-- Brand Strategy -->
                                <div style="background:linear-gradient(135deg,#1A1A1A,#333);border-radius:8px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-weight:700;text-align:center;padding:8px;">BRAND<br>STRATEGY</div>
                                <!-- Google Ads -->
                                <div style="background:linear-gradient(135deg,#4285F4,#34A853);border-radius:8px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.27 20.34l5.46-9.45c.13-.22.42-.3.64-.17l3.79 2.19c.22.13.3.42.17.64l-5.46 9.45c-.87 1.5-2.79 2.02-4.29 1.15s-2.02-2.79-1.15-4.29l.84-1.45z" fill="#FBBC04"/><path d="M20.73 20.34l-5.46-9.45c-.13-.22-.42-.3-.64-.17l-3.79 2.19c-.22.13-.3.42-.17.64l5.46 9.45c.87 1.5 2.79 2.02 4.29 1.15s2.02-2.79 1.15-4.29l-.84-1.45z" fill="#4285F4"/><circle cx="6" cy="18" r="3" fill="#34A853"/></svg>
                                    <span style="font-size:7px;font-weight:700;color:white;text-transform:uppercase;letter-spacing:0.05em;">Google Ads</span>
                                </div>
                                <!-- Nevss Logo -->
                                <div style="background:linear-gradient(135deg,#E79032,#D07E08);border-radius:8px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:white;font-size:19px;font-weight:800;">N</div>
                                <!-- TikTok -->
                                <div style="background:linear-gradient(135deg,#010101,#25F4EE);border-radius:8px;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 004.88 1.59v-3.45a4.85 4.85 0 01-.7-.05V6.7h1.4z"/></svg>
                                    <span style="font-size:7px;font-weight:700;color:white;text-transform:uppercase;letter-spacing:0.05em;">TikTok</span>
                                </div>
                            </div>
                            <!-- Mock metrics bar -->
                            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#FAF8F4;border-radius:10px;">
                                <div style="display:flex;align-items:center;gap:8px;">
                                    <div style="width:32px;height:32px;border-radius:50%;background:#E79032;display:flex;align-items:center;justify-content:center;">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="m22 12-4-4v3H3v2h15v3z"/></svg>
                                    </div>
                                    <span style="font-size:13px;font-weight:600;color:#1A1A1A;">Crescimento</span>
                                </div>
                                <span style="font-size:15px;font-weight:700;color:#E79032;">+240%</span>
                            </div>
                        </div>

                        <!-- Card flutuante topo-esquerda: Clientes -->
                        <div class="animate-float hero-float-card-1" style="position:absolute;top:-12px;left:-12px;z-index:3;background:#fff;border-radius:14px;padding:12px 16px;box-shadow:0 4px 20px rgba(0,0,0,0.1);display:flex;align-items:center;gap:10px;">
                            <div style="display:flex;">
                                <div style="width:28px;height:28px;border-radius:50%;background:#E5E0D8;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#888;">M</div>
                                <div style="width:28px;height:28px;border-radius:50%;background:rgba(231, 144, 50,0.2);border:2px solid #fff;margin-left:-8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#E79032;">R</div>
                                <div style="width:28px;height:28px;border-radius:50%;background:#F2EDE5;border:2px solid #fff;margin-left:-8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#888;">S</div>
                            </div>
                            <div>
                                <p style="font-size:12px;font-weight:700;color:#1A1A1A;margin:0;line-height:1.2;">+20 segmentos</p>
                                <p style="font-size:10px;color:#888;margin:0;">nossos clientes</p>
                            </div>
                        </div>

                        <!-- Card flutuante inferior-esquerda: Experiência -->
                        <div class="animate-float hero-float-card-2" style="position:absolute;bottom:60px;left:-20px;z-index:3;background:#1A1A1A;border-radius:14px;padding:14px 18px;box-shadow:0 4px 20px rgba(0,0,0,0.15);animation-delay:1.5s;">
                            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#E79032"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <span style="font-size:10px;font-weight:600;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.05em;">Experiência</span>
                            </div>
                            <p style="font-size:22px;font-weight:700;color:#fff;margin:0;">+5 Anos</p>
                            <p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0;">de resultados reais</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `}function o(){return`
    <!-- BAND DE LOGOS — #1A1A1A -->
    <section style="background:#1A1A1A;padding:24px 0;overflow:hidden;">
        <p class="reveal" style="text-align:center;font-size:13px;color:rgba(255,255,255,0.4);margin:0 0 16px;font-weight:400;">
            Marcas que confiam na Nevss
        </p>
        <div style="overflow:hidden;position:relative;">
            <div class="marquee-track" style="display:flex;gap:32px;align-items:center;">
                ${[`MARCA PREMIUM`,`STUDIO DESIGN`,`ELITE MODA`,`CLÍNICA ESTÉTICA`,`TECH SOLUTIONS`,`GOURMET HOUSE`,`BEAUTY CONCEPT`,`FIT ACADEMY`,`MARCA PREMIUM`,`STUDIO DESIGN`,`ELITE MODA`,`CLÍNICA ESTÉTICA`,`TECH SOLUTIONS`,`GOURMET HOUSE`,`BEAUTY CONCEPT`,`FIT ACADEMY`].map(e=>`
    <span style="font-size:15px;font-weight:600;letter-spacing:0.08em;color:rgba(255,255,255,0.5);white-space:nowrap;">${e}</span>
    <span style="color:rgba(255,255,255,0.2);font-size:20px;">✦</span>
  `).join(``)}
            </div>
        </div>
    </section>
  `}function s(){return`
    <!-- SEÇÃO 03 — DOR / PROBLEMA -->
    <section class="section-padding" style="background:#FAF8F4;">
        <div class="container-nevss">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <!-- COLUNA ESQUERDA: Texto (55%) -->
                <div class="lg:col-span-7 order-2 lg:order-1 reveal">
                    <!-- Tag -->
                    <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">
                        Por que sua marca está travada?
                    </p>

                    <!-- Headline -->
                    <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0 0 20px;">
                        Sem tempo para cuidar das<br>
                        <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">redes sociais?</span>
                    </h2>

                    <!-- Parágrafo -->
                    <p style="font-size:16px;color:#555;line-height:1.7;margin-bottom:28px;max-width:520px;">
                        Enquanto você tenta fazer tudo sozinho, seus concorrentes já investem em estratégia real. Cada dia sem posicionamento é um dia que afasta o cliente ideal da sua marca.
                    </p>

                    <!-- Lista de problemas -->
                    <ul style="list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:14px;">
                        <li style="display:flex;align-items:flex-start;gap:12px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            <span style="font-size:15px;color:#444;font-weight:500;">Posts sem estratégia que não geram vendas</span>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:12px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            <span style="font-size:15px;color:#444;font-weight:500;">Dependência de promoções para atrair clientes</span>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:12px;">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            <span style="font-size:15px;color:#444;font-weight:500;">Presença digital genérica e esquecível</span>
                        </li>
                    </ul>

                    <!-- Resolução -->
                    <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:28px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style="font-size:15px;color:#1A1A1A;font-weight:700;">É hora de construir um ecossistema magnético.</span>
                    </div>

                    <!-- CTA -->
                    <a href="#metodologia" class="link-orange">
                        Entenda o método →
                    </a>
                </div>

                <!-- COLUNA DIREITA: Visual (45%) -->
                <div class="lg:col-span-5 order-1 lg:order-2 reveal">
                    <div style="position:relative;max-width:320px;margin:0 auto;">
                        <!-- Mockup: Celular com feed -->
                        <div style="background:#fff;border-radius:20px;border:0.5px solid #E5E0D8;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.08);">
                            <!-- Phone header -->
                            <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #F2EDE5;">
                                <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#E79032,#F5B041);display:flex;align-items:center;justify-content:center;">
                                    <span style="color:#fff;font-weight:800;font-size:14px;">N</span>
                                </div>
                                <div>
                                    <p style="margin:0;font-size:13px;font-weight:700;color:#1A1A1A;">@suamarca</p>
                                    <p style="margin:0;font-size:10px;color:#999;">Antes da Nevss</p>
                                </div>
                            </div>
                            <!-- Feed items -->
                            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-bottom:12px;">
                                <div style="background:#E5E0D8;border-radius:4px;aspect-ratio:1;"></div>
                                <div style="background:#D9D4CC;border-radius:4px;aspect-ratio:1;"></div>
                                <div style="background:#E5E0D8;border-radius:4px;aspect-ratio:1;"></div>
                                <div style="background:#D9D4CC;border-radius:4px;aspect-ratio:1;"></div>
                                <div style="background:#E5E0D8;border-radius:4px;aspect-ratio:1;"></div>
                                <div style="background:#D9D4CC;border-radius:4px;aspect-ratio:1;"></div>
                            </div>
                            <!-- Stats -->
                            <div style="display:flex;justify-content:space-around;padding:8px 0;border-top:1px solid #F2EDE5;">
                                <div style="text-align:center;">
                                    <p style="margin:0;font-size:14px;font-weight:700;color:#DC2626;">124</p>
                                    <p style="margin:0;font-size:9px;color:#999;">seguidores</p>
                                </div>
                                <div style="text-align:center;">
                                    <p style="margin:0;font-size:14px;font-weight:700;color:#DC2626;">0.3%</p>
                                    <p style="margin:0;font-size:9px;color:#999;">engajamento</p>
                                </div>
                                <div style="text-align:center;">
                                    <p style="margin:0;font-size:14px;font-weight:700;color:#DC2626;">0</p>
                                    <p style="margin:0;font-size:9px;color:#999;">vendas</p>
                                </div>
                            </div>
                        </div>

                        <!-- Card flutuante: transformação -->
                        <div class="animate-float" style="position:absolute;bottom:-16px;right:-8px;background:#1A1A1A;color:#fff;border-radius:12px;padding:14px 18px;box-shadow:0 4px 20px rgba(0,0,0,0.15);z-index:3;animation-delay:1s;">
                            <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Depois da Nevss</p>
                            <p style="margin:0;font-size:18px;font-weight:700;color:#E79032;">+240% alcance</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `}function c(){return`
    <!-- SEÇÃO 04 — ECOSSISTEMA / SERVIÇOS -->
    <section id="servicos" class="section-padding" style="background:#FFFFFF;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="display:flex;flex-direction:column;gap:8px;margin-bottom:48px;">
                <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:24px;">
                    <div>
                        <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Nossas Soluções</p>
                        <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                            O Ecossistema <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">NEVSS</span>
                        </h2>
                    </div>
                    <p style="font-size:16px;color:#666;line-height:1.6;max-width:420px;margin:0;text-align:right;">
                        Soluções integradas de ponta a ponta para elevar o ticket médio e o desejo pela sua marca.
                    </p>
                </div>
            </div>

            <!-- Grid Responsivo -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                ${[{num:`01`,icon:`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,title:`Assessoria Estratégica`,desc:`Desenvolvimento completo de linha editorial, posicionamento de marca e estratégia de conteúdo focado em conversão de alto valor.`},{num:`02`,icon:`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,title:`Tráfego & E-commerce`,desc:`Gestão de anúncios com inteligência de dados para escalar vendas e atrair um público qualificado para sua loja virtual.`},{num:`03`,icon:`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,title:`Captação Audiovisual`,desc:`Direção de arte, roteiro e captação cinematográfica para reels, institucionais e campanhas que vendem pela percepção de valor.`},{num:`04`,icon:`<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,title:`Strategic Branding`,desc:`Design de marca, identidade visual e manual de tom de voz. Criamos a alma e a estética para que sua marca seja inconfundível.`}].map((e,t)=>`
    <div class="service-card reveal" style="transition-delay:${t*100}ms;">
        <!-- Icon + Number -->
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;">
            <div style="width:48px;height:48px;background:rgba(231, 144, 50,0.1);border-radius:8px;display:flex;align-items:center;justify-content:center;">
                ${e.icon}
            </div>
            <span style="font-size:48px;font-weight:700;color:rgba(231, 144, 50,0.2);line-height:1;font-family:'Inter',sans-serif;">${e.num}</span>
        </div>
        <!-- Title -->
        <h3 style="font-size:18px;font-weight:700;color:#1A1A1A;margin:0 0 12px;">${e.title}</h3>
        <!-- Description -->
        <p style="font-size:14px;color:#666;line-height:1.7;margin:0 0 16px;">${e.desc}</p>
        <!-- Link -->
        <a href="#aplicacao" class="link-orange">Saiba mais →</a>
    </div>
  `).join(``)}
            </div>
        </div>
    </section>
  `}function l(){return`
    <!-- SEÇÃO 05 — MÉTODO DE ESCALA -->
    <section id="metodologia" class="section-padding" style="background:#F2EDE5;">
        <div class="container-nevss" style="text-align:center;">
            <!-- Header -->
            <div class="reveal" style="margin-bottom:48px;">
                <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Como Trabalhamos</p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                    Nosso Método de <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">ESCALA</span>
                </h2>
            </div>

            <!-- Cards with connector -->
            <div style="position:relative;">
                <!-- Connector line (desktop only) -->
                <div class="hidden lg:block" style="position:absolute;top:56px;left:15%;right:15%;height:2px;background:#E79032;z-index:1;"></div>

                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;" class="method-grid">
                    ${[{num:`1`,title:`Diagnóstico Raio-X`,desc:`Analisamos suas métricas atuais, posicionamento, concorrentes e identificamos os gargalos exatos que estão travando seu crescimento.`,deliverable:`Relatório de diagnóstico completo`},{num:`2`,title:`Plano de Ataque`,desc:`Desenhamos a estratégia de marca, definimos a identidade visual e criamos o funil de tráfego que guiará desconhecidos a se tornarem fãs.`,deliverable:`Plano estratégico personalizado`},{num:`3`,title:`Execução Cinematográfica`,desc:`Produção de conteúdo de altíssima qualidade, gestão de anúncios agressiva e otimização constante de resultados para escalar.`,deliverable:`Conteúdo + campanhas ativas`}].map((e,t)=>`
    <div class="reveal" style="transition-delay:${t*150}ms;position:relative;z-index:2;">
        <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
            <!-- Number circle -->
            <div style="width:48px;height:48px;border:2px solid #E79032;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                <span style="font-size:20px;font-weight:700;color:#E79032;">${e.num}</span>
            </div>
            <!-- Title -->
            <h3 style="font-size:18px;font-weight:700;color:#1A1A1A;text-align:center;margin:0 0 12px;">${e.title}</h3>
            <!-- Description -->
            <p style="font-size:14px;color:#666;line-height:1.7;text-align:center;margin:0 0 20px;">${e.desc}</p>
            <!-- Deliverable -->
            <div style="background:rgba(231, 144, 50,0.08);padding:12px;border-radius:8px;">
                <p style="font-size:13px;font-weight:600;color:#C47A08;margin:0;text-align:center;">
                    Você recebe: ${e.deliverable}
                </p>
            </div>
        </div>
    </div>
  `).join(``)}
                </div>
            </div>

            <!-- CTA -->
            <div class="reveal" style="margin-top:48px;">
                <a href="#aplicacao" class="btn-primary" style="display:inline-flex;">
                    Quero iniciar meu diagnóstico
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </section>
  `}var u=`/assets/nevss-dress-DiqEQPjA.png`;function d(){return`
    <!-- SEÇÃO 06 — RESULTADOS / CASES -->
    <section id="cases" class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 16px;">
                    A Ideia VS <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">O Resultado</span>
                </h2>
                <p style="font-size:16px;color:rgba(255,255,255,0.6);max-width:560px;margin:0 auto;line-height:1.6;">
                    Não vendemos posts, vendemos percepção de valor. Veja como transformamos negócios genéricos em líderes de segmento.
                </p>
            </div>

            <!-- Grid -->
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;" class="cases-grid">
                ${[{segment:`E-COMMERCE DE MODA`,title:`Rebranding & Tráfego`,metric:`+240% de alcance orgânico`,gradient:`linear-gradient(135deg, #1A1A1A 0%, #333 100%)`},{segment:`CLÍNICA DE ESTÉTICA`,title:`Captação & Posicionamento`,metric:`Agenda lotada por 3 meses`,gradient:`linear-gradient(135deg, #2A2015 0%, #1A1A1A 100%)`}].map((e,t)=>`
    <div class="case-card reveal" style="transition-delay:${t*200}ms;height:400px;">
        <!-- Background visual (gradient placeholder for real images) -->
        <div style="position:absolute;inset:0;background:${e.gradient};"></div>
        <!-- Case image -->
        <div style="position:absolute;top:30px;left:30px;right:30px;bottom:110px;overflow:hidden;border-radius:12px;">
            <img src="${u}" alt="Case ${e.segment}" style="width:100%;height:100%;object-fit:cover;opacity:0.7;transition:opacity 0.4s ease,transform 0.4s ease;">
        </div>
        <!-- Overlay -->
        <div class="overlay"></div>
        <!-- Tag -->
        <div style="position:absolute;top:20px;left:20px;z-index:2;">
            <span style="display:inline-block;padding:6px 14px;background:#E79032;color:#fff;font-size:11px;font-weight:700;border-radius:20px;letter-spacing:0.04em;">
                ${e.segment}
            </span>
        </div>
        <!-- Content bottom -->
        <div style="position:absolute;bottom:0;left:0;right:0;padding:24px;z-index:2;">
            <h3 style="font-size:22px;font-weight:700;color:#fff;margin:0 0 8px;">${e.title}</h3>
            <p style="font-size:15px;font-weight:700;color:#E79032;margin:0 0 12px;">${e.metric}</p>
            <a href="#" style="font-size:13px;color:#fff;text-decoration:underline;text-underline-offset:3px;">Ver case completo →</a>
        </div>
    </div>
  `).join(``)}
            </div>

            <!-- Bottom line -->
            <div class="reveal" style="text-align:center;margin-top:48px;">
                <p style="font-size:16px;color:rgba(255,255,255,0.7);margin:0 0 12px;">
                    Mais de <strong style="color:#fff;">20 marcas</strong> transformadas em líderes de segmento
                </p>
                <a href="#" class="link-orange" style="color:#E79032;">Ver todos os resultados →</a>
            </div>
        </div>
    </section>
  `}function f(){let e=[,,,,,].fill(`<svg width="16" height="16" viewBox="0 0 24 24" fill="#E79032"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join(``);return`
    <!-- SEÇÃO 07 — DEPOIMENTOS -->
    <section class="section-padding" style="background:#FAF8F4;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">
                    O que nossos clientes dizem
                </p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0;">
                    Resultados que <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">falam por si</span>
                </h2>
            </div>

            <!-- Grid -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;" class="testimonials-grid">
                ${[{quote:`A Nevss transformou completamente a forma como nos posicionamos. Passamos de um perfil esquecível para uma referência no nosso nicho.`,result:`+180% de vendas em 60 dias`,name:`Marina Costa`,role:`CEO, Studio Fashion`,initial:`MC`},{quote:`Investir na assessoria da Nevss foi a melhor decisão que tomamos. O retorno foi quase imediato e consistente mês após mês.`,result:`Agenda lotada em 45 dias`,name:`Dr. Ricardo Almeida`,role:`Diretor, Clínica Estética Premium`,initial:`RA`},{quote:`Eles não entregam apenas posts bonitos, entregam estratégia real. Minha marca nunca teve tanta autoridade quanto agora.`,result:`+320% de crescimento orgânico`,name:`Fernanda Lopes`,role:`Fundadora, FitLife Academy`,initial:`FL`}].map((t,n)=>`
    <div class="testimonial-card reveal" style="transition-delay:${n*120}ms;">
        <!-- Aspas decorativas -->
        <div style="font-family:'Playfair Display',serif;font-size:48px;color:rgba(231, 144, 50,0.6);line-height:1;margin-bottom:8px;">"</div>
        
        <!-- Depoimento -->
        <p style="font-size:15px;color:#333;line-height:1.7;margin:0 0 16px;">${t.quote}</p>
        
        <!-- Resultado em destaque -->
        <div style="background:rgba(231, 144, 50,0.1);padding:8px 12px;border-radius:8px;margin-bottom:20px;display:inline-block;">
            <span style="font-size:14px;font-weight:700;color:#C47A08;">${t.result}</span>
        </div>
        
        <!-- Avatar + Info -->
        <div style="display:flex;align-items:center;gap:12px;padding-top:16px;border-top:1px solid #F2EDE5;">
            <div style="width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E79032,#F5B041);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span style="color:#fff;font-weight:700;font-size:14px;">${t.initial}</span>
            </div>
            <div>
                <p style="font-size:14px;font-weight:600;color:#1A1A1A;margin:0;">${t.name}</p>
                <p style="font-size:12px;color:#888;margin:0;">${t.role}</p>
            </div>
            <div style="margin-left:auto;display:flex;gap:2px;">
                ${e}
            </div>
        </div>
    </div>
  `).join(``)}
            </div>
        </div>
    </section>
  `}var p=`/assets/estrat-por-tras-do-jogo-3GlhDv77.jpg`;function m(){return`
    <!-- SEÇÃO 08 — A ESTRATEGISTA -->
    <section id="estrategista" class="section-padding" style="background:#FAF8F4;position:relative;overflow:hidden;">
        <!-- Diagonal sutil -->
        <div style="position:absolute;right:0;top:0;width:40%;height:100%;background:#F2EDE5;transform:skewX(-8deg) translateX(60px);z-index:0;" class="hidden lg:block"></div>

        <div class="container-nevss" style="position:relative;z-index:1;">
            <div style="display:grid;grid-template-columns:5fr 7fr;gap:48px;align-items:center;" class="strategist-grid">

                <!-- Foto -->
                <div class="reveal" style="max-width:420px;">
                    <div style="position:relative;">
                        <img src="${p}" alt="Emily Nevss - Estrategista" style="width:100%;height:auto;object-fit:cover;border-radius:20px;filter:grayscale(100%);transition:filter 0.5s ease;image-rendering:auto;" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
                        
                        <!-- Badge CEO -->
                        <div style="position:absolute;bottom:-16px;right:-16px;background:#1A1A1A;border:2px solid #E79032;border-radius:50%;width:80px;height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,0.2);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#E79032"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <span style="font-size:9px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;text-align:center;line-height:1.2;margin-top:2px;">CEO<br>Founder</span>
                        </div>
                    </div>
                </div>

                <!-- Conteúdo -->
                <div class="reveal">
                    <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">
                        A Estrategista por trás do jogo
                    </p>

                    <h2 class="resp-h2" style="font-size:48px;font-weight:800;color:#1A1A1A;margin:0 0 20px;text-transform:uppercase;">
                        EMILY NEVSS
                    </h2>

                    <!-- Citação -->
                    <p style="font-family:'Playfair Display',serif;font-size:22px;font-style:italic;color:#E79032;line-height:1.4;margin:0 0 24px;">
                        Não existe concorrência para quem sabe se posicionar.
                    </p>

                    <!-- Bio -->
                    <p style="font-size:16px;color:#555;line-height:1.7;margin:0 0 16px;">
                        Sou a mente estratégica que tira marcas da invisibilidade. Meu foco não é te dar métricas de vaidade ou posts bonitinhos — é te entregar posicionamento de líder de mercado e autoridade inquestionável.
                    </p>
                    <p style="font-size:16px;color:#555;line-height:1.7;margin:0 0 32px;">
                        Minha agência atua com um único propósito: atrair clientes que compram pelo seu valor, e não pelo preço. Cada estratégia é construída sob medida e com dedicação total.
                    </p>

                    <!-- Mini-cards -->
                    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-bottom:32px;">
                        <div style="background:#fff;border:0.5px solid #E79032;border-radius:12px;padding:20px;">
                            <h4 style="font-size:22px;font-weight:700;color:#1A1A1A;margin:0 0 8px;">Visão <span style="color:#E79032;">360°</span></h4>
                            <p style="font-size:13px;color:#666;line-height:1.6;margin:0;">Estratégia, Copywriting, Design e Tráfego alinhados.</p>
                        </div>
                        <div style="background:#fff;border:0.5px solid #E79032;border-radius:12px;padding:20px;">
                            <h4 style="font-size:22px;font-weight:700;color:#1A1A1A;margin:0 0 8px;">Alta <span style="color:#E79032;">Demanda</span></h4>
                            <p style="font-size:13px;color:#666;line-height:1.6;margin:0;">Atendimento seleto para garantir foco total nos resultados.</p>
                        </div>
                    </div>

                    <!-- CTA -->
                    <a href="#aplicacao" class="link-orange" style="font-size:15px;">
                        Quer trabalhar comigo? → Iniciar aplicação
                    </a>
                </div>

            </div>
        </div>
    </section>
  `}function h(){return`
    <!-- SEÇÃO 09 — FAQ -->
    <section class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss" style="max-width:800px;">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:48px;">
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#FFFFFF;line-height:1.1;margin:0;">
                    Dúvidas <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">Frequentes</span>
                </h2>
            </div>

            <!-- Accordion -->
            <div style="display:flex;flex-direction:column;gap:16px;">
                ${[{q:`Vocês atendem empresas de qual segmento?`,a:`Atendemos marcas que possuem alto potencial de escala e buscam um posicionamento premium, independentemente do nicho. Nossos maiores cases estão em e-commerces, clínicas, saúde, moda, gastronomia e infoprodutos.`},{q:`Qual o investimento mínimo para começar?`,a:`Não trabalhamos com "pacotes de posts". Nossos projetos são personalizados após uma reunião de diagnóstico. Preencha a aplicação abaixo para entendermos seu momento e apresentarmos uma proposta financeira adequada ao seu negócio.`},{q:`Em quanto tempo vejo resultados reais?`,a:`Os primeiros indicadores de melhoria aparecem nos primeiros 30 dias (engajamento, posicionamento, qualidade do conteúdo). Resultados financeiros consistentes surgem entre 60 e 90 dias, dependendo do segmento e do investimento em tráfego.`},{q:`Como funciona o processo de Aplicação?`,a:`O formulário de aplicação serve para entendermos se a sua empresa tem o perfil ideal para escalar com a nossa metodologia. Após preencher, nossa equipe analisará e entrará em contato em até 12 horas úteis para agendar uma reunião estratégica.`},{q:`O contrato tem fidelidade? Posso cancelar?`,a:`Trabalhamos com contratos de 3 meses mínimos para garantir que a estratégia tenha tempo de maturar. Após esse período, o contrato renova mensalmente e pode ser cancelado com 30 dias de aviso prévio, sem multas.`},{q:`Vocês garantem resultados?`,a:`Garantimos dedicação total, estratégia data-driven e execução de altíssimo nível. Resultados dependem de variáveis como investimento em tráfego e engajamento do cliente no processo, mas trabalhamos com metas claras e relatórios transparentes.`},{q:`Como funciona o acompanhamento e os relatórios?`,a:`Você recebe relatórios quinzenais com métricas detalhadas de performance, além de reuniões mensais de alinhamento estratégico. Temos um canal direto de comunicação para dúvidas e aprovações de conteúdo.`},{q:`Atendimento é presencial ou 100% digital?`,a:`Nosso atendimento é 100% digital, o que nos permite atender marcas do Brasil inteiro e do exterior. Usamos ferramentas profissionais de gestão de projetos e videoconferência para manter tudo organizado e transparente.`}].map((e,t)=>`
    <div class="faq-item reveal" style="transition-delay:${t*60}ms;" data-faq="${t}">
        <button class="faq-btn" aria-expanded="false">
            <span>${e.q}</span>
            <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
            <p>${e.a}</p>
        </div>
    </div>
  `).join(``)}
            </div>
        </div>
    </section>
  `}function g(){let e=document.querySelectorAll(`.faq-item`);e.forEach(t=>{let n=t.querySelector(`.faq-btn`),r=t.querySelector(`.faq-content`),i=t.querySelector(`.faq-icon`);n.addEventListener(`click`,()=>{let a=t.classList.contains(`faq-open`);e.forEach(e=>{e!==t&&(e.classList.remove(`faq-open`),e.querySelector(`.faq-content`).classList.remove(`open`),e.querySelector(`.faq-icon`).textContent=`+`,e.querySelector(`.faq-btn`).setAttribute(`aria-expanded`,`false`))}),a?(t.classList.remove(`faq-open`),r.classList.remove(`open`),i.textContent=`+`,n.setAttribute(`aria-expanded`,`false`)):(t.classList.add(`faq-open`),r.classList.add(`open`),i.textContent=`×`,n.setAttribute(`aria-expanded`,`true`))})})}function _(){return`
    <!-- SEÇÃO 10 — CTA FINAL / FORMULÁRIO -->
    <section id="aplicacao" class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:56px;">
                <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">
                    Vagas Limitadas
                </p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 12px;">
                    Aplicação para <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">Parceria</span>
                </h2>
                <p style="font-size:16px;color:rgba(255,255,255,0.6);margin:0;">
                    Tome a decisão que vai mudar o rumo da sua marca.
                </p>
            </div>

            <!-- Layout -->
            <div style="display:grid;grid-template-columns:2fr 3fr;gap:48px;align-items:start;" class="form-layout">

                <!-- Coluna processo -->
                <div class="reveal">
                    <p style="font-size:14px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:32px;text-align:center;">
                        Dar o próximo passo leva menos de <span style="font-family:'Playfair Display',serif;font-style:italic;color:#FFFFFF;font-size:16px;text-shadow:0 0 12px rgba(231, 144, 50,0.6);">um minuto</span>
                    </p>

                    <div class="steps-column">
                        <!-- Step 1 -->
                        <div class="step-card">
                            <span class="step-number">1</span>
                            <div class="step-card-body">
                                <div class="step-icon step-icon--red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="2.2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                                </div>
                                <div>
                                    <h4 class="step-title">Preencha o formulário</h4>
                                    <p class="step-desc">Envie suas informações de contato. Todos os seus dados estarão seguros, vamos cuidar bem deles.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Connector 1→2 -->
                        <div class="step-connector">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                                <path d="M12 0 v32" stroke="#4CAF50" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
                                <polygon points="12,40 6,32 18,32" fill="#4CAF50"/>
                            </svg>
                        </div>

                        <!-- Step 2 -->
                        <div class="step-card">
                            <span class="step-number">2</span>
                            <div class="step-card-body step-card-body--reverse">
                                <div>
                                    <h4 class="step-title">Receba uma ligação</h4>
                                    <p class="step-desc">Em até 12 horas, um dos nossos especialistas fará uma ligação para agendar a reunião mais importante com você.</p>
                                </div>
                                <div class="step-icon step-icon--red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="2.2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                            </div>
                        </div>

                        <!-- Connector 2→3 -->
                        <div class="step-connector">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                                <path d="M12 0 v32" stroke="#4CAF50" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
                                <polygon points="12,40 6,32 18,32" fill="#4CAF50"/>
                            </svg>
                        </div>

                        <!-- Step 3 -->
                        <div class="step-card">
                            <span class="step-number">3</span>
                            <div class="step-card-body">
                                <div class="step-icon step-icon--red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                </div>
                                <div>
                                    <h4 class="step-title">Reunião Estratégica</h4>
                                    <p class="step-desc">Apresentamos uma proposta personalizada para escalar sua marca de forma inteligente.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Formulário -->
                <div class="reveal" style="background:#fff;border-radius:20px;padding:32px;">
                    <form action="#" method="POST" style="display:flex;flex-direction:column;gap:20px;">
                        <!-- Nome -->
                        <div>
                            <label class="form-label">Nome do Responsável *</label>
                            <input type="text" required class="form-field" placeholder="Seu nome completo">
                        </div>

                        <!-- Empresa -->
                        <div>
                            <label class="form-label">Nome da Empresa / @Instagram *</label>
                            <input type="text" required class="form-field" placeholder="@suamarca ou Nome">
                        </div>

                        <!-- WhatsApp -->
                        <div>
                            <label class="form-label">WhatsApp para Contato *</label>
                            <input type="tel" required class="form-field" placeholder="(00) 00000-0000">
                        </div>

                        <!-- Faturamento -->
                        <div>
                            <label class="form-label">Faturamento Médio Mensal</label>
                            <select class="form-field" style="cursor:pointer;appearance:none;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>');background-repeat:no-repeat;background-position:right 16px center;">
                                <option value="" disabled selected>Selecione uma faixa...</option>
                                <option value="1">Até R$10k</option>
                                <option value="2">R$10k – R$50k</option>
                                <option value="3">R$50k – R$100k</option>
                                <option value="4">Acima de R$100k</option>
                            </select>
                        </div>

                        <!-- Desafio -->
                        <div>
                            <label class="form-label">Qual o seu maior desafio hoje? *</label>
                            <textarea required rows="4" class="form-field form-textarea" placeholder="Ex: Meu Instagram não passa profissionalismo e não gera clientes qualificados..."></textarea>
                        </div>

                        <!-- Submit -->
                        <button type="submit" style="width:100%;padding:18px;background:#E79032;color:#fff;font-size:16px;font-weight:700;border:none;border-radius:10px;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;transition:transform 0.2s ease,box-shadow 0.2s ease;display:flex;align-items:center;justify-content:center;gap:8px;" onmouseover="this.style.transform='scale(1.02)';this.style.boxShadow='0 8px 24px rgba(231, 144, 50,0.35)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
                            ENVIAR MINHA APLICAÇÃO
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>

                        <!-- Micro-copy -->
                        <p style="text-align:center;font-size:12px;color:#999;margin:0;">
                            🔒 Seus dados estão 100% seguros e sob sigilo absoluto
                        </p>
                    </form>
                </div>

            </div>
        </div>
    </section>
  `}var v=`/assets/logo-nevss-sFundo1-szFAM3RX.png`;function y(){return`
    <!-- FOOTER -->
    <footer style="background:#1A1A1A;padding-top:80px;padding-bottom:0;">
        <div class="container-nevss">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding-bottom:48px;" class="footer-grid">

                <!-- Coluna 1: Marca -->
                <div>
                    <a href="#" style="display:inline-block;margin-bottom:20px;">
                        <img src="${v}" alt="Agência Nevss" style="height:36px;width:auto;">
                    </a>
                    <p style="font-size:13px;color:rgba(255,255,255,0.6);line-height:1.7;margin:0 0 20px;">
                        A agência de marketing e branding focada em criar marcas inesquecíveis e posicionamento premium de alto valor.
                    </p>
                    <div style="display:flex;gap:10px;">
                        <a href="#" style="width:40px;height:40px;background:#2A2A2A;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#E79032'" onmouseout="this.style.background='#2A2A2A'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="#" style="width:40px;height:40px;background:#2A2A2A;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#E79032'" onmouseout="this.style.background='#2A2A2A'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9.02a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.66a8.17 8.17 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.09z"/></svg>
                        </a>
                        <a href="#" style="width:40px;height:40px;background:#2A2A2A;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#E79032'" onmouseout="this.style.background='#2A2A2A'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Mapa do Site -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Mapa do Site</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
                        <li><a href="#servicos" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#fff';this.style.transform='translateX(4px)'" onmouseout="this.style.color='rgba(255,255,255,0.6)';this.style.transform=''">Nosso Ecossistema</a></li>
                        <li><a href="#metodologia" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#fff';this.style.transform='translateX(4px)'" onmouseout="this.style.color='rgba(255,255,255,0.6)';this.style.transform=''">Metodologia Nevss</a></li>
                        <li><a href="#cases" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#fff';this.style.transform='translateX(4px)'" onmouseout="this.style.color='rgba(255,255,255,0.6)';this.style.transform=''">Resultados & Cases</a></li>
                        <li><a href="#estrategista" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#fff';this.style.transform='translateX(4px)'" onmouseout="this.style.color='rgba(255,255,255,0.6)';this.style.transform=''">Emily Nevss (CEO)</a></li>
                        <li><a href="#aplicacao" style="font-size:14px;color:#E79032;font-weight:700;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform=''">Aplicar para Assessoria</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Fale Conosco -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Fale Conosco</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;">
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <a href="mailto:contato@agencianevss.com" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">contato@agencianevss.com</a>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#E79032" style="flex-shrink:0;margin-top:2px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                            <a href="#" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">+55 (00) 00000-0000</a>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E79032" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span style="font-size:14px;color:rgba(255,255,255,0.6);">Atendimento 100% Digital.<br>Para marcas do Brasil e do Mundo.</span>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 4: Políticas -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Políticas</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
                        <li><a href="#" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Política de Privacidade</a></li>
                        <li><a href="#" style="font-size:14px;color:rgba(255,255,255,0.6);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='rgba(255,255,255,0.6)'">Termos de Uso</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- Bottom bar -->
        <div style="background:#0F0F0F;padding:20px 0;">
            <div class="container-nevss" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <p style="font-size:12px;color:rgba(255,255,255,0.4);margin:0;">
                    © <span id="year"></span> Agência Nevss | Estratégia e Branding. Todos os direitos reservados.
                </p>
                <p style="font-size:12px;color:rgba(255,255,255,0.4);margin:0;">
                    CNPJ: XX.XXX.XXX/XXXX-XX
                </p>
            </div>
        </div>
    </footer>
  `}function b(){let e=document.getElementById(`year`);e&&(e.textContent=new Date().getFullYear())}document.querySelector(`#app`).innerHTML=`
<div>
  ${t()}
  ${r()}
  <main>
    ${a()}
    ${o()}
    ${s()}
    ${c()}
    ${l()}
    ${d()}
    ${f()}
    ${m()}
    ${h()}
    ${_()}
  </main>
  ${y()}
</div>
`,n(),g(),b();var x=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`active`),x.unobserve(e.target))})},{threshold:.12});document.querySelectorAll(`.reveal`).forEach(e=>x.observe(e));