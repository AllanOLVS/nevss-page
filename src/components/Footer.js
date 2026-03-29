import logoImg from '../assets/logo-nevss-sFundo1.png';

export function Footer() {
    return `
    <!-- FOOTER -->
    <footer style="background:#3d1e6e;padding-top:80px;padding-bottom:0;border-top:1px solid #6b35a8;">
        <div class="container-nevss">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding-bottom:48px;" class="footer-grid">

                <!-- Coluna 1: Marca -->
                <div>
                    <a href="#" style="display:inline-block;margin-bottom:20px;">
                        <img src="${logoImg}" alt="Logotipo da Agência NEVSS no rodapé" loading="lazy" decoding="async" style="height:36px;width:auto;filter:brightness(1.1);">
                    </a>
                    <p style="font-size:13px;color:#e8d5f5;line-height:1.7;margin:0 0 20px;">
                        A agência de marketing e branding focada em criar marcas inesquecíveis e posicionamento premium de alto valor.
                    </p>
                    <div style="display:flex;gap:10px;">
                        <a href="#" style="width:40px;height:40px;background:#2a1250;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#D4A017'" onmouseout="this.style.background='#2a1250'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="#" style="width:40px;height:40px;background:#2a1250;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#D4A017'" onmouseout="this.style.background='#2a1250'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9.02a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.66a8.17 8.17 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.09z"/></svg>
                        </a>
                        <a href="#" style="width:40px;height:40px;background:#2a1250;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none;transition:background 0.2s ease;" onmouseover="this.style.background='#D4A017'" onmouseout="this.style.background='#2a1250'">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                    </div>
                </div>

                <!-- Coluna 2: Mapa do Site -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Mapa do Site</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
                        <li><a href="#servicos" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#D4A017';this.style.transform='translateX(4px)'" onmouseout="this.style.color='#e8d5f5';this.style.transform=''">Nosso Ecossistema</a></li>
                        <li><a href="#metodologia" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#D4A017';this.style.transform='translateX(4px)'" onmouseout="this.style.color='#e8d5f5';this.style.transform=''">Metodologia Nevss</a></li>
                        <li><a href="#cases" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#D4A017';this.style.transform='translateX(4px)'" onmouseout="this.style.color='#e8d5f5';this.style.transform=''">Resultados & Cases</a></li>
                        <li><a href="#estrategista" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.color='#D4A017';this.style.transform='translateX(4px)'" onmouseout="this.style.color='#e8d5f5';this.style.transform=''">Emily Nevss (CEO)</a></li>
                        <li><a href="#aplicacao" style="font-size:14px;color:#D4A017;font-weight:700;text-decoration:none;transition:all 0.2s ease;display:inline-block;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform=''">Aplicar para Assessoria</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Fale Conosco -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Fale Conosco</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;">
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <a href="mailto:contato@agencianevss.com" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#D4A017'" onmouseout="this.style.color='#e8d5f5'">contato@agencianevss.com</a>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A017" style="flex-shrink:0;margin-top:2px;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                            <a href="#" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#D4A017'" onmouseout="this.style.color='#e8d5f5'">+55 (00) 00000-0000</a>
                        </li>
                        <li style="display:flex;align-items:flex-start;gap:10px;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span style="font-size:14px;color:#e8d5f5;">Atendimento 100% Digital.<br>Para marcas do Brasil e do Mundo.</span>
                        </li>
                    </ul>
                </div>

                <!-- Coluna 4: Políticas -->
                <div>
                    <h4 style="font-size:11px;font-weight:700;color:#fff;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 20px;">Políticas</h4>
                    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px;">
                        <li><a href="#" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#D4A017'" onmouseout="this.style.color='#e8d5f5'">Política de Privacidade</a></li>
                        <li><a href="#" style="font-size:14px;color:#e8d5f5;text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#D4A017'" onmouseout="this.style.color='#e8d5f5'">Termos de Uso</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- Bottom bar -->
        <div style="background:#2a1250;padding:20px 0;border-top:1px solid #6b35a8;">
            <div class="container-nevss" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <p style="font-size:12px;color:#c9a8e8;margin:0;">
                    © <span id="year"></span> Agência Nevss | Estratégia e Branding. Todos os direitos reservados.
                </p>
                <p style="font-size:12px;color:#c9a8e8;margin:0;">
                    CNPJ: XX.XXX.XXX/XXXX-XX
                </p>
            </div>
        </div>
    </footer>
  `;
}

export function initFooter() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}
