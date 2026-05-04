window.handleNevssSubmit = async function(e) {
    e.preventDefault();
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
 
    btn.innerHTML = 'ENVIANDO... <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>';
    btn.style.opacity = '0.7';
    btn.style.pointerEvents = 'none';
 
    const subjectInput = form.querySelector('input[name="_subject"]');
    const empresaInput = form.querySelector('input[name="Empresa"]');
    if (subjectInput && empresaInput) {
        let empresaVal = empresaInput.value.trim();
        if (!empresaVal.startsWith('@') && !empresaVal.includes(' ')) {
            empresaVal = '@' + empresaVal;
        }
        subjectInput.value = `Nova Aplicação de Parceria - ${empresaVal} - Agência NEVSS`;
    }
 
    // Coletar dados do formulário para o e-mail HTML
    const nome      = form.querySelector('input[name="Nome"]').value;
    const empresa   = form.querySelector('input[name="Empresa"]').value;
    const whatsapp  = form.querySelector('input[name="WhatsApp"]').value;
    const email     = form.querySelector('input[name="Email"]').value;
    const faturamento = form.querySelector('select[name="Faturamento"]').value || 'Não informado';
    const desafio   = form.querySelector('textarea[name="Desafio"]').value;
    const agora     = new Date().toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' });
 
    // Injetar template HTML no campo oculto
    const htmlInput = form.querySelector('input[name="_html"]') || (() => {
        const el = document.createElement('input');
        el.type = 'hidden';
        el.name = '_html';
        form.appendChild(el);
        return el;
    })();
 
    htmlInput.value = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nova Aplicação – Agência Nevss</title>
</head>
<body style="margin:0;padding:0;background-color:#0e0520;font-family:Georgia,serif;">
 
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#0e0520;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
 
          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#2a0a5e 0%,#512888 50%,#3d1e6e 100%);border-radius:20px 20px 0 0;padding:40px 48px 32px;text-align:center;border-bottom:2px solid #D4A017;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#D4A017;font-family:Arial,sans-serif;">
                AGÊNCIA
              </p>
              <h1 style="margin:0 0 4px;font-size:42px;font-weight:700;color:#ffffff;font-family:Georgia,serif;letter-spacing:2px;">
                NEVSS
              </h1>
              <div style="width:48px;height:2px;background:#D4A017;margin:12px auto 20px;"></div>
              <p style="margin:0;font-size:13px;color:#e8d5f5;font-family:Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;">
                Nova Aplicação para Parceria
              </p>
            </td>
          </tr>
 
          <!-- BADGE DE ALERTA -->
          <tr>
            <td style="background:#1a0840;padding:0 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(90deg,rgba(212,160,23,0.15),rgba(212,160,23,0.05));border-left:3px solid #D4A017;border-radius:0 8px 8px 0;padding:16px 20px;margin-top:0;">
                    <p style="margin:0;font-size:13px;color:#D4A017;font-family:Arial,sans-serif;font-weight:700;letter-spacing:0.5px;">
                      ✦ &nbsp;Uma nova marca acaba de dar o primeiro passo.
                    </p>
                    <p style="margin:4px 0 0;font-size:12px;color:#b8a0d8;font-family:Arial,sans-serif;">
                      Recebido em ${agora}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
 
          <!-- CORPO PRINCIPAL -->
          <tr>
            <td style="background:#1a0840;padding:32px 48px 40px;">
 
              <!-- Dados do Lead -->
              <p style="margin:0 0 24px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D4A017;font-family:Arial,sans-serif;">
                Dados do Responsável
              </p>
 
              <!-- Nome -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background:#2a1152;border:1px solid #3d2070;border-radius:12px;padding:18px 22px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9b7ec8;font-family:Arial,sans-serif;">Nome</p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">${nome}</p>
                  </td>
                </tr>
              </table>
 
              <!-- Empresa -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="background:#2a1152;border:1px solid #3d2070;border-radius:12px;padding:18px 22px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9b7ec8;font-family:Arial,sans-serif;">Empresa / Instagram</p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">${empresa}</p>
                  </td>
                </tr>
              </table>
 
              <!-- WhatsApp + Email lado a lado -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td width="48%" style="background:#2a1152;border:1px solid #3d2070;border-radius:12px;padding:18px 22px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9b7ec8;font-family:Arial,sans-serif;">WhatsApp</p>
                    <p style="margin:0;font-size:16px;font-weight:700;color:#D4A017;font-family:Georgia,serif;">${whatsapp}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="background:#2a1152;border:1px solid #3d2070;border-radius:12px;padding:18px 22px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9b7ec8;font-family:Arial,sans-serif;">E-mail</p>
                    <p style="margin:0;font-size:14px;font-weight:700;color:#D4A017;font-family:Arial,sans-serif;word-break:break-all;">${email}</p>
                  </td>
                </tr>
              </table>
 
              <!-- Faturamento -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background:linear-gradient(135deg,#2a1152,#3d1e6e);border:1px solid #D4A017;border-radius:12px;padding:18px 22px;text-align:center;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9b7ec8;font-family:Arial,sans-serif;">Faturamento Médio Mensal</p>
                    <p style="margin:0;font-size:22px;font-weight:700;color:#D4A017;font-family:Georgia,serif;">${faturamento}</p>
                  </td>
                </tr>
              </table>
 
              <!-- Divisor -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="border-top:1px solid #3d2070;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
 
              <!-- Desafio -->
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#D4A017;font-family:Arial,sans-serif;">
                Maior Desafio Hoje
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#2a1152;border:1px solid #3d2070;border-left:3px solid #D4A017;border-radius:0 12px 12px 0;padding:20px 24px;">
                    <p style="margin:0;font-size:15px;color:#e8d5f5;font-family:Georgia,serif;line-height:1.7;font-style:italic;">"${desafio}"</p>
                  </td>
                </tr>
              </table>
 
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://wa.me/55${whatsapp.replace(/\D/g,'')}" style="display:inline-block;background:#D4A017;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;text-decoration:none;padding:16px 40px;border-radius:10px;">
                      Entrar em Contato via WhatsApp →
                    </a>
                  </td>
                </tr>
              </table>
 
            </td>
          </tr>
 
          <!-- FOOTER -->
          <tr>
            <td style="background:#0e0520;border-top:1px solid #2a1152;border-radius:0 0 20px 20px;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#D4A017;font-family:Georgia,serif;letter-spacing:2px;">AGÊNCIA NEVSS</p>
              <p style="margin:0 0 4px;font-size:11px;color:#6b4f8a;font-family:Arial,sans-serif;">Estratégia &amp; Branding · contato@agencianevss.com</p>
              <p style="margin:0;font-size:11px;color:#4a3366;font-family:Arial,sans-serif;">+55 75 9198-9954 · Atendimento 100% Digital</p>
            </td>
          </tr>
 
        </table>
      </td>
    </tr>
  </table>
 
</body>
</html>
    `.trim();
 
    const emailData = {
        service_id: 'service_0lusf7e',
        template_id: 'template_zioa7ma',
        user_id: 'XH8Wp8y3S0XhHfJIf',
        template_params: {
            Assunto: subjectInput ? subjectInput.value : 'Nova Aplicação',
            nome: nome,
            email: email,
            html: htmlInput.value
        }
    };
 
    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(emailData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
 
        if (response.ok) {
            document.getElementById('nevss-success-overlay').style.display = 'flex';
            form.reset();
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        } else {
            alert("Ocorreu um erro ao enviar. Tente novamente.");
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }
    } catch (error) {
        alert("Erro de conexão. Tente novamente.");
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }
};
 
window.closeNevssSuccess = function() {
    document.getElementById('nevss-success-overlay').style.display = 'none';
};
 
window.maskPhone = function(e) {
    let v = e.target.value.replace(/\D/g, '').substring(0, 11);
    if (v.length > 10) {
        v = v.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    }
    e.target.value = v;
};
 
export function ApplicationForm() {
    return `
    <!-- SEÇÃO 10 — CTA FINAL / FORMULÁRIO -->
    <section id="aplicacao" class="section-padding" style="background:#512888;">
        <div class="container-nevss">
            <!-- Header -->
            <div class="reveal" style="text-align:center;margin-bottom:56px;">
                <p style="font-size:11px;font-weight:700;color:#D4A017;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">
                    Vagas Limitadas
                </p>
                <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#fff;line-height:1.1;margin:0 0 12px;">
                    Aplicação para <span style="font-family:'Playfair Display',serif;color:#D4A017;font-style:italic;">Parceria</span>
                </h2>
                <p style="font-size:16px;color:#e8d5f5;margin:0;">
                    Tome a decisão que vai mudar o rumo da sua marca.
                </p>
            </div>
 
            <!-- Layout -->
            <div style="display:grid;grid-template-columns:2fr 3fr;gap:48px;align-items:start;" class="form-layout">
 
                <!-- Coluna processo -->
                <div class="reveal">
                    <p style="font-size:14px;font-weight:700;color:#e8d5f5;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:32px;text-align:center;">
                        Dar o próximo passo leva menos de <span style="font-family:'Playfair Display',serif;font-style:italic;color:#D4A017;font-size:16px;font-weight:bold;text-shadow:0 0 12px rgba(212, 160, 23,0.6);">um minuto</span>
                    </p>
 
                    <div class="steps-column">
                        <!-- Step 1 -->
                        <div class="step-card">
                            <span class="step-number">1</span>
                            <div class="step-card-body">
                                <div class="step-icon step-icon--red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2.2" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
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
                                <path d="M12 0 v32" stroke="#6b35a8" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
                                <polygon points="12,40 6,32 18,32" fill="#6b35a8"/>
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
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2.2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                            </div>
                        </div>
 
                        <!-- Connector 2→3 -->
                        <div class="step-connector">
                            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                                <path d="M12 0 v32" stroke="#6b35a8" stroke-width="2.5" stroke-dasharray="6 5" stroke-linecap="round"/>
                                <polygon points="12,40 6,32 18,32" fill="#6b35a8"/>
                            </svg>
                        </div>
 
                        <!-- Step 3 -->
                        <div class="step-card">
                            <span class="step-number">3</span>
                            <div class="step-card-body">
                                <div class="step-icon step-icon--red">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2.2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
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
                <div class="reveal" style="background:#3d1e6e;border:1px solid #6b35a8;border-radius:20px;padding:32px;position:relative;">
                    
                    <form id="nevss-application-form" action="https://formsubmit.co/ajax/agencianevss@gmail.com" method="POST" onsubmit="handleNevssSubmit(event)" style="display:flex;flex-direction:column;gap:20px;">
                        
                        <!-- Configurações Ocultas FormSubmit -->
                        <input type="hidden" name="_subject" value="Nova Aplicação de Parceria - Agência NEVSS">
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_template" value="box">
 
                        <!-- Nome -->
                        <div>
                            <label class="form-label">Nome do Responsável *</label>
                            <input type="text" name="Nome" required class="form-field" placeholder="Seu nome completo">
                        </div>
 
                        <!-- Empresa -->
                        <div>
                            <label class="form-label">Nome da Empresa / @Instagram *</label>
                            <input type="text" name="Empresa" required class="form-field" placeholder="@suamarca ou Nome">
                        </div>
 
                        <!-- WhatsApp -->
                        <div>
                            <label class="form-label">WhatsApp para Contato *</label>
                            <input type="tel" name="WhatsApp" required class="form-field" placeholder="(00) 00000-0000" oninput="maskPhone(event)" maxlength="15">
                        </div>
 
                        <!-- Email -->
                        <div>
                            <label class="form-label">Email *</label>
                            <input type="email" name="Email" required class="form-field" placeholder="seu@email.com">
                        </div>
 
                        <!-- Faturamento -->
                        <div>
                            <label class="form-label">Faturamento Médio Mensal</label>
                            <select name="Faturamento" class="form-field" style="cursor:pointer;appearance:none;background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999%22 stroke-width=%222%22 stroke-linecap=%22round%22><polyline points=%226 9 12 15 18 9%22/></svg>');background-repeat:no-repeat;background-position:right 16px center;">
                                <option value="" disabled selected>Selecione uma faixa...</option>
                                <option value="Até R$10k">Até R$10k</option>
                                <option value="R$10k – R$50k">R$10k – R$50k</option>
                                <option value="R$50k – R$100k">R$50k – R$100k</option>
                                <option value="Acima de R$100k">Acima de R$100k</option>
                            </select>
                        </div>
 
                        <!-- Desafio -->
                        <div>
                            <label class="form-label">Qual o seu maior desafio hoje? *</label>
                            <textarea name="Desafio" required rows="4" class="form-field form-textarea" placeholder="Ex: Meu Instagram não passa profissionalismo e não gera clientes qualificados..."></textarea>
                        </div>
 
                        <!-- Submit -->
                        <button type="submit" style="width:100%;padding:18px;background:#D4A017;color:#fff;font-size:16px;font-weight:700;border:none;border-radius:10px;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;transition:transform 0.2s ease,box-shadow 0.2s ease,background-color 0.2s ease;display:flex;align-items:center;justify-content:center;gap:8px;" onmouseover="this.style.transform='scale(1.02)';this.style.boxShadow='0 8px 24px rgba(212, 160, 23,0.35)';this.style.backgroundColor='#b8860b'" onmouseout="this.style.transform='';this.style.boxShadow='';this.style.backgroundColor='#D4A017'">
                            ENVIAR MINHA APLICAÇÃO
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </button>
 
                        <!-- Micro-copy -->
                        <p style="text-align:center;font-size:12px;color:#e8d5f5;margin:0;">
                            🔒 Seus dados estão 100% seguros e sob sigilo absoluto
                        </p>
                    </form>
                </div>
 
            </div>
        </div>
    </section>
 
    <!-- Overlay de Sucesso -->
    <div id="nevss-success-overlay" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(30, 10, 50, 0.85); backdrop-filter:blur(8px); z-index:9999; align-items:center; justify-content:center; animation: fadeInOverlay 0.4s ease;">
        <div style="background:#2a1152; border:1px solid #D4A017; border-radius:20px; padding:56px 32px; max-width:500px; width:90%; position:relative; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow: 0 24px 64px rgba(0,0,0,0.6);">
            
            <!-- Botão Fechar -->
            <button onclick="closeNevssSuccess()" style="position:absolute; top:16px; right:16px; background:transparent; border:none; color:#D4A017; cursor:pointer; padding:8px; display:flex; align-items:center; justify-content:center; transition: transform 0.2s ease, opacity 0.2s ease;" onmouseover="this.style.transform='scale(1.1)';this.style.opacity='0.8'" onmouseout="this.style.transform='scale(1)';this.style.opacity='1'">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
 
            <!-- Ícone Sucesso -->
            <div style="width:80px; height:80px; border-radius:50%; background:rgba(212,160,23,0.1); display:flex; align-items:center; justify-content:center; margin-bottom:24px; border: 2px solid #D4A017; box-shadow: 0 0 32px rgba(212, 160, 23, 0.25);">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4A017" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div>
            <h3 style="font-size:36px; font-weight:700; color:#fff; margin-bottom:20px; font-family:'Playfair Display', serif; font-style:italic;">
                Aplicação Recebida!
            </h3>
            <p style="font-size:16px; color:#e8d5f5; line-height:1.6; margin-bottom:32px; max-width: 400px;">
                Parabéns por dar este passo. Nossa equipe de especialistas fará uma análise inicial da sua marca e entraremos em contato em até <strong style="color:#D4A017;">12 horas</strong> via WhatsApp.
            </p>
            <div style="width: 100%; border-top: 1px solid rgba(255,255,255,0.08); margin-bottom: 24px;"></div>
            <p style="font-size:14px; font-weight:700; color:#fff; text-transform:uppercase; letter-spacing:0.08em; margin:0;">
                Prepare-se para o próximo nível.
            </p>
        </div>
    </div>
 
    <style>
        @keyframes fadeInOverlay {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(8px); }
        }
    </style>
  `;
}
