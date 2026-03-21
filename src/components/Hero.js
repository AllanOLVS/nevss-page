import fotoHero from '../assets/foto-hero1.png';

export function Hero() {
    return `
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
                        <img src="${fotoHero}" alt="Estrategista Emily Nevss" class="hero-founder-img" style="position:absolute;bottom:90%;left:50%;transform:translateX(-40%);height:420px;width:auto;z-index:1;pointer-events:none;">

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
  `;
}
