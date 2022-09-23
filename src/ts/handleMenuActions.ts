export default (
  menuButton: HTMLElement | null,
  nav: HTMLElement | null,
  navList: Element | any
) => {
  // Listen to toggle menu
  menuButton?.addEventListener('click', function () {
    this.ariaExpanded = `${!this.ariaExpanded ? true : false}`;
    toggleMenuElements(nav, this, navList);
  });

  // Listen to click menu items on small sizes
  const items = [...navList.children];
  let viewportWidth: number = window.innerWidth;

  window.addEventListener('resize', () => (viewportWidth = window.innerWidth));

  items.forEach((item: Element) => {
    item.addEventListener('click', () => {
      // return if not mobile sizes
      if (viewportWidth >= 768) return;
      toggleMenuElements(nav, menuButton, navList);
    });
  });
};

// Toggle menu elements active state
function toggleMenuElements(
  nav: HTMLElement | any,
  menuButton: HTMLElement | any,
  navList: Element | any
) {
  nav?.classList.toggle('active');
  menuButton?.classList.toggle('active');
  navList?.classList.toggle('active');
}
