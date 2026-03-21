export function ApplicationForm() {
  return `
    <!-- SEÇÃO 10 — CTA FINAL / FORMULÁRIO -->
    <section id="aplicacao" class="section-padding" style="background:#1A1A1A;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:56px;">
                <p style="font-size:11px;font-weight:700;color:#E8900A;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">
                    Vagas Limitadas
                </p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 12px;">
                    Aplicação para <span style="font-family:'Playfair Display',serif;color:#E8900A;font-style:italic;">Parceria</span>
                </h2>
                <p style="font-size:16px;color:rgba(255,255,255,0.6);margin:0;">
                    Tome a decisão que vai mudar o rumo da sua marca.
                </p>
            </div>

            <!-- Layout -->
            <div style="display:grid;grid-template-columns:2fr 3fr;gap:48px;align-items:start;" class="form-layout">

                <!-- Coluna processo -->
                <div class="reveal">
                    <p style="font-size:13px;font-weight:600;color:#fff;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:32px;">
                        Dar o próximo passo leva menos de 1 minuto
                    </p>

                    <div style="display:flex;flex-direction:column;gap:24px;">
                        <!-- Step 1 -->
                        <div style="display:flex;gap:16px;align-items:flex-start;">
                            <div style="width:44px;height:44px;background:rgba(232,144,10,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8900A" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                            </div>
                            <div>
                                <h4 style="font-size:16px;font-weight:700;color:#fff;margin:0 0 4px;">Preencha o formulário</h4>
                                <p style="font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">Envie suas informações e detalhes do projeto para análise.</p>
                            </div>
                        </div>

                        <!-- Step 2 -->
                        <div style="display:flex;gap:16px;align-items:flex-start;">
                            <div style="width:44px;height:44px;background:rgba(232,144,10,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8900A" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <h4 style="font-size:16px;font-weight:700;color:#fff;margin:0 0 4px;">Receba uma ligação</h4>
                                <p style="font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">Em até 12h úteis, um especialista entra em contato para agendar.</p>
                            </div>
                        </div>

                        <!-- Step 3 -->
                        <div style="display:flex;gap:16px;align-items:flex-start;">
                            <div style="width:44px;height:44px;background:rgba(232,144,10,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8900A" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            </div>
                            <div>
                                <h4 style="font-size:16px;font-weight:700;color:#fff;margin:0 0 4px;">Reunião Estratégica</h4>
                                <p style="font-size:13px;color:rgba(255,255,255,0.5);margin:0;line-height:1.6;">Apresentamos uma proposta personalizada para escalar sua marca.</p>
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
                        <button type="submit" style="width:100%;padding:18px;background:#E8900A;color:#fff;font-size:16px;font-weight:700;border:none;border-radius:10px;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;transition:transform 0.2s ease,box-shadow 0.2s ease;display:flex;align-items:center;justify-content:center;gap:8px;" onmouseover="this.style.transform='scale(1.02)';this.style.boxShadow='0 8px 24px rgba(232,144,10,0.35)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
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
  `;
}
