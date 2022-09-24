const animationsOnScroll = new IntersectionObserver(observer, {
  root: null,
  threshold: 0.45,
  rootMargin: '0px',
});

export default function observableElementsOnScroll(
  elementsToAnimate: HTMLAllCollection | any
) {
  elementsToAnimate.forEach((element: Element) =>
    animationsOnScroll.observe(element)
  );
}

function observer(entries: any) {
  entries.forEach(
    ({
      target,
      isIntersecting,
    }: {
      target: HTMLElement;
      isIntersecting: boolean;
    }) => {
      // While Scrolling..
      if (isIntersecting) {
        addAnimation(target, true);
      } else {
        // The below function will make the animation working with up & down scrolling
        // addAnimation(target, false);
        return;
      }
    }
  );
}

function addAnimation(target: HTMLElement, isIntersecting: boolean) {
  if (target.dataset['sequence']) {
    target.style.setProperty(
      'transition-delay',
      `${Number(target.dataset['sequence']) * 0.188}s`
    );

    toggleAnimateClass(target, isIntersecting);
  } else {
    toggleAnimateClass(target, isIntersecting);
  }
}

function toggleAnimateClass(target: Element, isIntersecting: boolean) {
  isIntersecting
    ? target.classList.add('animate')
    : target.classList.remove('animate');
}
