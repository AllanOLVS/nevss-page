import './styles/main.css';
import { Navbar, initNavbar } from './components/Navbar.js';
import { WhatsAppButton } from './components/WhatsAppButton.js';
import { Hero } from './components/Hero.js';
import { Marquee } from './components/Marquee.js';
import { ProblemSection } from './components/ProblemSection.js';
import { Services } from './components/Services.js';
import { Methodology } from './components/Methodology.js';
import { Cases } from './components/Cases.js';
import { Testimonials } from './components/Testimonials.js';
import { Strategist } from './components/Strategist.js';
import { FAQ, initFAQ } from './components/FAQ.js';
import { ApplicationForm } from './components/ApplicationForm.js';
import { Footer, initFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
<div>
  ${Navbar()}
  ${WhatsAppButton()}
  <main>
    ${Hero()}
    ${Marquee()}
    ${ProblemSection()}
    ${Services()}
    ${Methodology()}
    ${Cases()}
    ${Testimonials()}
    ${Strategist()}
    ${FAQ()}
    ${ApplicationForm()}
  </main>
  ${Footer()}
</div>
`;

// Initialize interactive components
initNavbar();
initFAQ();
initFooter();

// ─── Scroll Reveal with IntersectionObserver ───
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
