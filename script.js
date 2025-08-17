const nav = document.getElementById('sideNav');
const toggle = document.getElementById('navToggle');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('#sideNav a[href^="#"]');

function setNavOpen(isOpen) {
  nav.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
  nav.setAttribute('aria-hidden', !isOpen);
  overlay.hidden = !isOpen;
}

if (nav && toggle && overlay) {
  toggle.addEventListener('click', () => {
    setNavOpen(!nav.classList.contains('open'));
  });

  overlay.addEventListener('click', () => setNavOpen(false));

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        setNavOpen(false);
      }
    });
  });
}
