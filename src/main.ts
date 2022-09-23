import observableElementsOnScroll from './ts/handleAnimations';
import handleContactInput from './ts/handleContactInput';
import handleMenuActions from './ts/handleMenuActions';
import { hanldeDraggableSlider } from './ts/hanldeDraggableSlider';
import onScrollHandler from './ts/onScrollHandler';

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const navList = nav?.firstElementChild;
const menuButton = document.getElementById('menu-btn');
const form = document.getElementById('footer-form');
const email: any = document.getElementById('email-contact');
const message: any = document.getElementById('input-msg');

const elementsToAnimate = document.querySelectorAll(
  '[data-animate-while-scroll]'
);

onScrollHandler(header);
handleMenuActions(menuButton, nav, navList);
handleContactInput(form, email, message);
hanldeDraggableSlider();

observableElementsOnScroll(elementsToAnimate);
