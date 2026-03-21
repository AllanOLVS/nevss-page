export function ProblemSection() {
  return `
    <!-- SEÇÃO 03 — DOR / PROBLEMA -->
    <section class="section-padding" style="background:#FAF8F4;">
        <div class="container-nevss">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <!-- COLUNA ESQUERDA: Texto (55%) -->
                <div class="lg:col-span-7 order-2 lg:order-1 reveal">
                    <!-- Tag -->
                    <p style="font-size:11px;font-weight:700;color:#E8900A;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">
                        Por que sua marca está travada?
                    </p>

                    <!-- Headline -->
                    <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0 0 20px;">
                        Sem tempo para cuidar das<br>
                        <span style="font-family:'Playfair Display',serif;color:#E8900A;font-style:italic;">redes sociais?</span>
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
                    <div style="position:relative;">
                        <!-- Mockup: Celular com feed -->
                        <div style="background:#fff;border-radius:20px;border:0.5px solid #E5E0D8;padding:16px;box-shadow:0 8px 32px rgba(0,0,0,0.08);max-width:320px;margin:0 auto;">
                            <!-- Phone header -->
                            <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #F2EDE5;">
                                <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#E8900A,#F5B041);display:flex;align-items:center;justify-content:center;">
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
                            <p style="margin:0;font-size:18px;font-weight:700;color:#E8900A;">+240% alcance</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
