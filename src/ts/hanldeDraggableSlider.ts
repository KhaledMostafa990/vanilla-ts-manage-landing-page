const sliderList: HTMLDivElement | any = document.getElementById('slider');
const slides = [...sliderList?.children];
const sliderGap = 24;

let dragging: boolean = false;
let startPosition: number;
let transformAmount: number = 0;
let latestTransformAmount: number = 0;
let animationID: number;
let movementAmount: number = 0;

let viewportWidth: number = window.innerWidth;
let defaultTransformed = viewportWidth < 768 ? 194.4 : 240;

const onRezising = () => {
  viewportWidth = window.innerWidth;
  defaultTransformed = viewportWidth < 768 ? 194.4 : 240;
  setSliderPosition(transformAmount);
};
window.addEventListener('resize', onRezising);

export function hanldeDraggableSlider(): void {
  // Listen to dragging the slides with mobile touch and mouse events

  slides.forEach((slide: HTMLElement | any): void => {
    slide?.addEventListener('touchstart', touchStart, { passive: true });
    slide?.addEventListener('touchend', touchEnd(slide), { passive: true });
    slide?.addEventListener('touchmove', touchMove, { passive: true });

    slide?.addEventListener('mousedown', touchStart);
    slide?.addEventListener('mousemove', touchMove);
    slide?.addEventListener('mouseup', touchEnd(slide));
    slide?.addEventListener('mouseleave', touchEnd(slide));
    slide?.parentElement?.addEventListener('mouseup', touchEnd(slide));
    slide?.parentElement?.addEventListener('mouseleave', touchEnd(slide));
  });
}

// Define the start X axis position and excute requestAnimationFrame
function touchStart(event: any) {
  dragging = true;
  startPosition = getPositionX(event);
  animationID = requestAnimationFrame(animateSlider);
  event.target.style.cursor = 'grabbing';
  event.target.style.userSelect = 'none';
}

/**
 * Get the postion X while moving event running to get the transformed value that used simultaneously in animateSlider function until touch end.
 */
function touchMove(event: any) {
  if (dragging) {
    const whileMovePos = getPositionX(event);
    transformAmount = latestTransformAmount + whileMovePos - startPosition;
  }
}

/**
 * Get the postion X while moving event running to get the transformed value that used simultaneously in animateSlider function until touch end.
 */

function touchEnd(slide: HTMLElement) {
  return () => {
    const latestMoveLength = transformAmount - latestTransformAmount;
    cancelAnimationFrame(animationID);
    slide.style.cursor = 'grab';
    dragging = false;

    if (latestMoveLength < -150 && slide.nextElementSibling !== null) {
      movementAmount++;

      transformAmount = (-slide.offsetWidth - sliderGap) * movementAmount;
      latestTransformAmount = transformAmount;
      handleActiveTab(slide, latestMoveLength);
    } else if (
      latestMoveLength > 150 &&
      slide.previousElementSibling !== null
    ) {
      movementAmount--;

      transformAmount = slide.offsetWidth + sliderGap + latestTransformAmount;
      latestTransformAmount = transformAmount;
      handleActiveTab(slide, latestMoveLength);
    } else {
      transformAmount = latestTransformAmount;
    }
  };
}

function getPositionX(event: any) {
  // get the clientX in case of using touch and page x on mouse
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animateSlider() {
  //  slider will moving until touch end based on the transform amount value that generated while moving slider event.
  setSliderPosition(transformAmount);
  if (dragging) requestAnimationFrame(animateSlider);
}

function setSliderPosition(transformAmount: number) {
  sliderList.style.setProperty(
    'transform',
    `translateX(${transformAmount + defaultTransformed}px)`
  );
}

function handleActiveTab(slide: Element | any, latestMoveLength: number) {
  if (latestMoveLength > 150) {
    slide = slide.previousElementSibling;
  }
  if (latestMoveLength < -150) {
    slide = slide.nextElementSibling;
  }

  const tab: Element | any = document?.querySelector(`[data-${slide.id}]`);
  const tabs: Element | any = [...tab?.parentElement?.children];

  tabs.forEach((tab: Element | any) => {
    tab.classList.remove('active');
  });

  tab.classList.add('active');
}
