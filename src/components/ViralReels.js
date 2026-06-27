import '../styles/viral-reels.css';

// ── Import local video assets (Vite handles these as URLs) ──
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';
import video9 from '../assets/videos/video9.mp4';
import video10 from '../assets/videos/video10.mp4';
import video11 from '../assets/videos/video11.mp4';
import video12 from '../assets/videos/video12.mp4';
import video13 from '../assets/videos/video13.mp4';
import video14 from '../assets/videos/video14.mp4';
import video15 from '../assets/videos/video15.mp4';
import video16 from '../assets/videos/video16.mp4';
import video17 from '../assets/videos/video17.mp4';

const reelsData = [
  { src: video1, client: '@ATREVIDAMODASLOJA', desc: 'Ensaio que elevou o padrão da marca', views: '280K', likes: '14K' },
  { src: video2, client: '@DRESS_BTB', desc: 'Reel que trouxe +3 mil seguidores', views: '420K', likes: '22K' },
  { src: video3, client: '@DUEFITNESSWEAR', desc: 'Campanha que gerou +165% em leads', views: '195K', likes: '9K' },
  { src: video4, client: '@DUEFITNESSWEAR', desc: 'Conteúdo que transformou seguidores em clientes', views: '310K', likes: '17K' },
  { src: video5, client: '@DRESS_BTB', desc: 'Vídeo que lotou a agenda em 48h', views: '510K', likes: '31K' },
  { src: video6, client: '@DRESS_BTB', desc: 'Campanha com +320% de crescimento orgânico', views: '390K', likes: '25K' },
  { src: video7, client: '@LOJAMARIABONITA.PTN', desc: 'Bastidores que viralizou no segmento', views: '670K', likes: '42K' },
  { src: video8, client: '@LOJAMARIABONITA.PTN', desc: 'Conteúdo ágil que manteve a presença ativa', views: '240K', likes: '12K' },
  { src: video9, client: '@MERIDIANO.GEO', desc: 'Autoridade técnica traduzida em conteúdo viral', views: '185K', likes: '8K' },
  { src: video10, client: '@MERIDIANO.GEO', desc: 'Produção que conectou marca e comunidade', views: '330K', likes: '19K' },
  { src: video11, client: '@MERIDIANO.GEO', desc: 'Conteúdo que posicionou a marca como referência', views: '150K', likes: '7K' },
  { src: video12, client: '@MYKANAFARM', desc: 'Conteúdo com alto engajamento', views: '1.1M', likes: '43,4 mil' },
  { src: video13, client: '@JUPOLIDOINDICA', desc: 'Conteúdo com alto engajamento', views: '689 mil', likes: '34 mil' },
  { src: video14, client: '@DRESS_BTB', desc: 'Conteúdo com alto engajamento', views: '2.6M', likes: '224,9 mil' },
  { src: video15, client: '@DRESS_BTB', desc: 'Conteúdo com alto engajamento', views: '329 mil', likes: '5,4 mil' },
  { src: video16, client: '@JUPOLIDOINDICA', desc: 'Conteúdo com alto engajamento', views: '229 mil', likes: '7,9 mil' },
  { src: video17, client: '@PROMONAFARM', desc: 'Conteúdo com alto engajamento', views: '194 mil', likes: '4,7 mil' },
];

export function ViralReels() {
  const dotsHTML = reelsData.map((_, i) =>
    `<div class="dot${i === 0 ? ' on' : ''}" data-reel-dot="${i}"></div>`
  ).join('');

  return `
  <section class="nv-section" id="viral-reels-section">
    <div class="reveal" style="text-align:center;margin-bottom:48px;">
      <p style="font-size:11px;font-weight:700;color:#E79032;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;">Conteúdo que converte</p>
      <h2 class="resp-h2" style="font-size:48px;font-weight:700;color:#1A1A1A;line-height:1.1;margin:0 0 16px;">
        Reels que <span style="font-family:'Playfair Display',serif;color:#E79032;font-style:italic;">viralizaram</span>
      </h2>
      <p style="font-size:16px;color:#666;line-height:1.6;margin:0;">Não fazemos posts bonitos. Fazemos conteúdo que para o scroll e converte.</p>
    </div>

    <div class="stage" id="reels-stage">
      <button class="side-arrow arr-left" id="reelBtnPrev" aria-label="Reel anterior">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="transform: translateX(-2px);"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <button class="side-arrow arr-right" id="reelBtnNext" aria-label="Próximo reel">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="transform: translateX(2px);"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>

    <div class="dots-row" id="reelsDotsRow">
      ${dotsHTML}
    </div>

    <div class="nv-cta">
      <span class="nv-cta-link">Ver todos os resultados →</span>
    </div>
  </section>
  `;
}

function buildSlot(reelIdx) {
  const r = reelsData[reelIdx];
  const slot = document.createElement('div');
  slot.className = 'reel-slot hidden-right'; // Initial hidden state
  slot.dataset.idx = reelIdx;

  // Create the video element
  const video = document.createElement('video');
  video.className = 'reel-video';
  video.src = r.src;
  video.playsInline = true;
  video.loop = true;
  video.muted = true;
  video.preload = 'metadata';

  // Tag for viral badge
  const viralTag = document.createElement('div');
  viralTag.className = 'viral-tag';
  viralTag.textContent = 'viral';

  // Cover overlay with client info
  const cover = document.createElement('div');
  cover.className = 'reel-cover';
  cover.innerHTML =
    '<p class="reel-client">' + r.client + '</p>' +
    '<p class="reel-desc">' + r.desc + '</p>' +
    '<div class="reel-stats">' +
    '<span class="reel-stat">▶ ' + r.views + ' views</span>' +
    '<span class="reel-stat">♥ ' + r.likes + '</span>' +
    '</div>';

  const soundBtn = document.createElement('button');
  soundBtn.className = 'reel-sound-btn';
  soundBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>'; // Muted icon
  soundBtn.style.display = 'none';

  soundBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent slot click
    video.muted = !video.muted;
    if (video.muted) {
      soundBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    } else {
      soundBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
      video.play().catch(() => { });
    }
  };

  slot.appendChild(viralTag);
  slot.appendChild(video);
  slot.appendChild(cover);
  slot.appendChild(soundBtn);

  return slot;
}

export function initViralReels() {
  const stage = document.getElementById('reels-stage');
  const dotsRow = document.getElementById('reelsDotsRow');
  if (!stage || !dotsRow) return;

  let cur = 0;
  let isSectionVisible = false;
  let userHasInteracted = false;

  // Global interaction listener to bypass browser autoplay policies
  function handleUserInteraction() {
    userHasInteracted = true;

    // If section is visible and we just gained interaction rights, try unmuting
    if (isSectionVisible) {
      updateCenterVideoState();
    }

    // Clean up listeners
    document.removeEventListener('click', handleUserInteraction);
    document.removeEventListener('touchstart', handleUserInteraction, { passive: true });
    document.removeEventListener('keydown', handleUserInteraction);
    document.removeEventListener('pointerdown', handleUserInteraction, { passive: true });
  }

  document.addEventListener('click', handleUserInteraction);
  document.addEventListener('touchstart', handleUserInteraction, { passive: true });
  document.addEventListener('keydown', handleUserInteraction);
  document.addEventListener('pointerdown', handleUserInteraction, { passive: true });

  // Create all slots once and keep references
  const slotElements = reelsData.map((r, i) => {
    const slot = buildSlot(i);
    slot.addEventListener('click', () => {
      if (!slot.classList.contains('center')) {
        goTo(i);
      }
    });
    stage.appendChild(slot);
    return slot;
  });

  function updateCenterVideoState() {
    slotElements.forEach((slot, i) => {
      const video = slot.querySelector('video');
      const soundBtn = slot.querySelector('.reel-sound-btn');
      if (!video) return;

      const iconMuted = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
      const iconUnmuted = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';

      if (i === cur) {
        if (isSectionVisible) {
          video.muted = false;
          const p = video.play();
          if (p !== undefined) {
            p.then(() => { if (soundBtn) soundBtn.innerHTML = iconUnmuted; })
              .catch(() => {
                video.muted = true;
                video.play().catch(() => { });
                if (soundBtn) soundBtn.innerHTML = iconMuted;
              });
          }
        } else {
          video.pause();
          video.muted = true;
          if (soundBtn) soundBtn.innerHTML = iconMuted;
        }
      } else {
        // Stop playing background videos
        video.pause();
        video.muted = true;
      }
    });
  }

  function render() {
    slotElements.forEach((slot, i) => {
      // Calculate offset and wrap it for infinite carousel effect
      let offset = i - cur;
      const half = Math.floor(reelsData.length / 2);
      if (offset > half) offset -= reelsData.length;
      if (offset < -half) offset += reelsData.length;

      // Assign the correct position class
      slot.className = 'reel-slot';
      let isCenter = false;

      if (offset === 0) { slot.classList.add('center'); isCenter = true; }
      else if (offset === -1) slot.classList.add('side-1', 'left-1');
      else if (offset === 1) slot.classList.add('side-1', 'right-1');
      else if (offset === -2) slot.classList.add('side-2', 'left-2');
      else if (offset === 2) slot.classList.add('side-2', 'right-2');
      else if (offset < 0) slot.classList.add('hidden-left');
      else slot.classList.add('hidden-right');

      // Update sound button visibility
      const soundBtn = slot.querySelector('.reel-sound-btn');
      if (isCenter) {
        soundBtn.style.display = 'flex';
      } else {
        soundBtn.style.display = 'none';
      }
    });

    // Update dots
    dotsRow.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('on', i === cur));

    // Play/Mute logic based on visibility
    updateCenterVideoState();
  }

  function goTo(idx) {
    cur = (idx + reelsData.length) % reelsData.length;
    render();
  }

  function shift(dir) {
    goTo(cur + dir);
  }

  // Arrow button listeners
  document.getElementById('reelBtnPrev').addEventListener('click', () => shift(-1));
  document.getElementById('reelBtnNext').addEventListener('click', () => shift(1));

  // Dot click listeners (event delegation)
  dotsRow.addEventListener('click', (e) => {
    const dot = e.target.closest('.dot');
    if (dot && dot.dataset.reelDot !== undefined) {
      goTo(parseInt(dot.dataset.reelDot));
    }
  });

  // Initial render
  render();

  // Intersection Observer for scroll detection
  const section = document.getElementById('viral-reels-section');
  if (section) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isSectionVisible = entry.isIntersecting;
        updateCenterVideoState();
      });
    }, { threshold: 0.4 }); // Trigger when at least 40% of the section is visible

    observer.observe(section);
  }
}
