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

const reelsData = [
  { src: video1,  client: 'Dress — Moda Feminina',    desc: 'Ensaio que elevou o padrão da marca',             views: '280K', likes: '14K' },
  { src: video2,  client: 'Duê Fitness',               desc: 'Reel que trouxe +3 mil seguidores',               views: '420K', likes: '22K' },
  { src: video3,  client: 'ECAP — Produtora',          desc: 'Campanha que gerou +165% em leads',               views: '195K', likes: '9K'  },
  { src: video4,  client: 'Maria Bonita — Moda',       desc: 'Conteúdo que transformou seguidores em clientes',  views: '310K', likes: '17K' },
  { src: video5,  client: 'Lune — Estética',           desc: 'Vídeo que lotou a agenda em 48h',                 views: '510K', likes: '31K' },
  { src: video6,  client: 'Atrevida Modas',            desc: 'Campanha com +320% de crescimento orgânico',      views: '390K', likes: '25K' },
  { src: video7,  client: 'Studio Fashion',            desc: 'Bastidores que viralizou no segmento',             views: '670K', likes: '42K' },
  { src: video8,  client: 'Top 20 — Varejo',           desc: 'Conteúdo ágil que manteve a presença ativa',       views: '240K', likes: '12K' },
  { src: video9,  client: 'Meridiano Geotecnologias',  desc: 'Autoridade técnica traduzida em conteúdo viral',   views: '185K', likes: '8K'  },
  { src: video10, client: 'Mais Vida',                 desc: 'Produção que conectou marca e comunidade',         views: '330K', likes: '19K' },
  { src: video11, client: 'NEVSS — Agência',           desc: 'Conteúdo que posicionou a marca como referência',  views: '150K', likes: '7K'  },
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
        <span class="arr l"></span>
      </button>
      <button class="side-arrow arr-right" id="reelBtnNext" aria-label="Próximo reel">
        <span class="arr r"></span>
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

function buildSlot(reelIdx, posClass, isCenter) {
  const r = reelsData[reelIdx];
  const slot = document.createElement('div');
  slot.className = 'reel-slot ' + posClass;
  slot.dataset.idx = reelIdx;

  // Create the video element
  const video = document.createElement('video');
  video.className = 'reel-video';
  video.src = r.src;
  video.playsInline = true;
  video.loop = true;
  video.muted = true;
  video.preload = isCenter ? 'auto' : 'metadata';

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
  
  if(isCenter) {
      soundBtn.style.display = 'flex';
  } else {
      soundBtn.style.display = 'none';
  }

  soundBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent slot click
    video.muted = !video.muted;
    if (video.muted) {
        soundBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    } else {
        soundBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';
    }
  };


  slot.appendChild(viralTag);
  slot.appendChild(video);
  slot.appendChild(cover);
  slot.appendChild(soundBtn);

  // We no longer play here. Playback is controlled by IntersectionObserver in initViralReels.

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

  function updateCenterVideoState() {
    const centerSlot = stage.querySelector('.reel-slot.center');
    if (!centerSlot) return;
    
    const centerVideo = centerSlot.querySelector('video');
    const soundBtn = centerSlot.querySelector('.reel-sound-btn');
    if (!centerVideo) return;

    const iconMuted = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
    const iconUnmuted = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>';

    if (isSectionVisible) {
      centerVideo.muted = false;
      centerVideo.play().then(() => {
        // Successfully playing with sound
        if (soundBtn) soundBtn.innerHTML = iconUnmuted;
      }).catch((err) => {
        // Browser blocked autoplay with sound (requires user interaction first)
        // Fallback to muted autoplay
        centerVideo.muted = true;
        centerVideo.play().catch(() => {});
        if (soundBtn) soundBtn.innerHTML = iconMuted;
      });
    } else {
      // Scrolled out of view
      centerVideo.pause();
      centerVideo.muted = true;
      if (soundBtn) soundBtn.innerHTML = iconMuted;
    }
  }

  function render() {
    // Pause all existing videos before removing them
    stage.querySelectorAll('.reel-slot video').forEach(v => {
      v.pause();
      v.removeAttribute('src');
      v.load();
    });
    // Remove existing reel slots (keep the arrow buttons)
    stage.querySelectorAll('.reel-slot').forEach(s => s.remove());

    const positions = [
      { offset: -2, cls: 'side-2 left-2'  },
      { offset: -1, cls: 'side-1 left-1'  },
      { offset:  0, cls: 'center'          },
      { offset:  1, cls: 'side-1 right-1' },
      { offset:  2, cls: 'side-2 right-2' },
    ];

    positions.forEach(pos => {
      const idx = (cur + pos.offset + reelsData.length) % reelsData.length;
      const isCenter = pos.offset === 0;
      const slot = buildSlot(idx, pos.cls, isCenter);

      // Click on side slots to navigate
      if (!isCenter) {
        slot.addEventListener('click', () => {
          goTo(parseInt(slot.dataset.idx));
        });
      }

      stage.appendChild(slot);
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
