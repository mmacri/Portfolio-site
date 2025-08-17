// ScrollSpy module: highlights navigation links based on section visibility
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#sideNav a[href^="#"]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`#sideNav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        if (link) {
          link.classList.add('active');
        }
      }
    });
  },
  { rootMargin: '0px 0px -60% 0px' }
);

sections.forEach(section => observer.observe(section));
