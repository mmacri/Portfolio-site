const nav = document.getElementById('sideNav');
const toggle = document.getElementById('navToggle');

if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
