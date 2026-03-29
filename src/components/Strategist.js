import stratImg from '../assets/estrat-por-tras-do-jogo.jpg';

export function Strategist() {
    return `
    <!-- SEÇÃO 08 — A ESTRATEGISTA -->
    <section id="estrategista" class="section-padding" style="background:#FAF8F4;position:relative;overflow:hidden;">
        <!-- Diagonal sutil -->
        <div style="position:absolute;right:0;top:0;width:40%;height:100%;background:#F2EDE5;transform:skewX(-8deg) translateX(60px);z-index:0;" class="hidden lg:block"></div>

        <div class="container-nevss" style="position:relative;z-index:1;">
            <div style="display:grid;grid-template-columns:5fr 7fr;gap:48px;align-items:center;" class="strategist-grid">

                <!-- Foto -->
                <div class="reveal" style="max-width:420px;">
                    <div style="position:relative;">
                        <img src="${stratImg}" alt="Emily Neves em retrato profissional na seção A Estrategista da Agência NEVSS" loading="lazy" decoding="async" style="width:100%;height:auto;object-fit:cover;border-radius:20px;filter:grayscale(100%);transition:filter 0.5s ease;image-rendering:auto;" onmouseover="this.style.filter='grayscale(0%)'" onmouseout="this.style.filter='grayscale(100%)'">
                        
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
                        EMILY NEVES
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

                    <!-- Especialidades -->
                    <div style="background:#fff;border:0.5px solid #E5E0D8;border-radius:16px;padding:24px;box-shadow:0 6px 20px rgba(0,0,0,0.06);margin-bottom:32px;">
                        <h4 style="font-size:18px;font-weight:700;color:#1A1A1A;margin:0 0 16px;">Especialidades</h4>
                        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Marketing de Conteúdo</span>
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Marketing de Moda &amp; Lifestyle</span>
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Copywriting Estratégico</span>
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Identidade de Marca</span>
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Tráfego Pago (Meta &amp; Google)</span>
                            <span style="display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:rgba(232, 160, 32, 0.16);color:#B06B00;font-size:12px;font-weight:700;">Funil de Vendas</span>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:16px;">
                            <span style="font-size:13px;font-weight:600;color:#555;">🏆 +20 marcas transformadas</span>
                            <span style="font-size:13px;font-weight:600;color:#555;">📈 +3 anos de mercado</span>
                            <span style="font-size:13px;font-weight:600;color:#555;">🎯 Especialista em posicionamento de alto valor</span>
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
  `;
}
