import './styles/main.css';
import { Navbar, initNavbar } from './components/Navbar.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { Hero } from './components/Hero.js';
import { Marquee } from './components/Marquee.js';
import { ProblemSection } from './components/ProblemSection.js';
import { Services } from './components/Services.js';
import { Methodology } from './components/Methodology.js';
import { Cases } from './components/Cases.js';
import { Strategist } from './components/Strategist.js';
import { FAQ, initFAQ } from './components/FAQ.js';
import { ApplicationForm } from './components/ApplicationForm.js';
import { Footer, initFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
<div class="antialiased selection:bg-nevss-orange selection:text-white relative">
  ${Navbar()}
  ${WhatsAppButton()}
  ${Hero()}
  ${Marquee()}
  ${ProblemSection()}
  ${Services()}
  ${Methodology()}
  ${Cases()}
  ${Strategist()}
  ${FAQ()}
  ${ApplicationForm()}
  ${Footer()}
</div>
`;

// Inicialização dos scripts de componentes
initNavbar();
initFAQ();
initFooter();

// Scripts globais (scroll reveal e parallax)
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const xOffset = x * speed * 100;
        const yOffset = y * speed * 100;
        layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
    });
});

const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 120;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
