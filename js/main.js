/* NIGHT COFFEE — small interactions only. Keep it quiet. */

// nav: solidify on scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// reveal-on-scroll for sections
const revealTargets = document.querySelectorAll('section, .menu__col, .hours__table li');
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// gentle parallax on ambient blobs
const blobs = document.querySelectorAll('.blob');
if (blobs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        blobs.forEach((b, i) => {
          const depth = (i + 1) * 0.03;
          b.style.transform = `translateY(${y * depth}px)`;
        });
        ticking = false;
      });
    },
    { passive: true }
  );
}
