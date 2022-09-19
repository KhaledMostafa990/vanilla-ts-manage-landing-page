let lastKnownScrollPosition: number = 0;
let scrolled: boolean = false;

export default (header: HTMLElement | null) => {
  window.addEventListener('scroll', () => {
    if (scrolled === false) {
      window.requestAnimationFrame(animatingHeader(header));
      scrolled = true;
    }
  });
};

function animatingHeader(header: HTMLElement | null) {
  return () => {
    const currentScrollPos = window.scrollY;
    transitionHeaderOnScroll(currentScrollPos, lastKnownScrollPosition, header);

    lastKnownScrollPosition = window.scrollY;
    scrolled = false;
  };
}

function transitionHeaderOnScroll(
  currentPositionY: number,
  lastPositionY: number,
  header: HTMLElement | null
) {
  if (header?.querySelector('#nav.active')) return;
  if (currentPositionY > lastPositionY) {
    header?.classList.remove('reset');
    header?.classList.remove('scroll-up');
    header?.classList.add('scroll-down');
  } else if (currentPositionY < lastPositionY) {
    header?.classList.remove('reset');
    header?.classList.remove('scroll-down');
    header?.classList.add('scroll-up');

    if (currentPositionY <= 1) header?.classList.add('reset');
  }
}
