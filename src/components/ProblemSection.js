import img1Src from '../assets/img1.jpeg';
import img2Src from '../assets/img2.jpeg';
import img3Src from '../assets/img3.jpeg';

export function ProblemSection() {
    return `
    <!-- SEÇÃO 03 — DOR / PROBLEMA -->
    <section class="section-padding" style="background:#F5F0EB;">
        <div class="container-nevss">
            <div class="problem-layout">

                <!-- COLUNA ESQUERDA: Texto -->
                <div class="problem-text reveal">
                    <p style="font-size:11px;font-weight:700;color:#F97316;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:16px;">
                        Por que sua marca está travada?
                    </p>

                    <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0 0 20px;">
                        Sem tempo para cuidar das<br>
                        <span style="font-family:'Playfair Display',serif;color:#F97316;font-style:italic;">redes sociais?</span>
                    </h2>

                    <p style="font-size:16px;color:#555;line-height:1.7;margin-bottom:28px;max-width:520px;">
                        Enquanto você tenta fazer tudo sozinho, seus concorrentes já investem em estratégia real. Cada dia sem posicionamento é um dia que afasta o cliente ideal da sua marca.
                    </p>

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

                    <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:28px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2.5" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style="font-size:15px;color:#1A1A1A;font-weight:700;">É hora de construir um ecossistema magnético.</span>
                    </div>

                    <a href="#metodologia" class="link-orange">
                        Entenda o método →
                    </a>
                </div>

                <!-- COLUNA DIREITA: Galeria — 3 fotos empilhadas em cascata -->
                <div class="problem-gallery reveal">
                    <div class="photo-stack">
                        <div class="photo-stack__item photo-stack__item--1">
                            <span class="collage-tag">BASTIDORES REAIS ✦</span>
                            <img src="${img1Src}" alt="Mulher sendo filmada por duas câmeras em estúdio" loading="lazy" decoding="async" />
                        </div>
                        <div class="photo-stack__item photo-stack__item--2">
                            <span class="collage-badge">produção profissional</span>
                            <img src="${img2Src}" alt="Câmera em close filmando mulher ao fundo" loading="lazy" decoding="async" />
                        </div>
                        <div class="photo-stack__item photo-stack__item--3">
                            <img src="${img3Src}" alt="Vista geral do set com câmeras, luzes e mulher ao centro" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
