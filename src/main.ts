import handleContactInput from './js/handleContactInput';
import handleMenuActions from './js/handleMenuActions';
import { hanldeDraggableSlider } from './js/hanldeDraggableSlider';
import onScrollHandler from './js/onScrollHandler';

const header = document.getElementById('header');
const nav = document.getElementById('nav');
const navList = document.getElementById('nav')?.firstElementChild;
const menuButton = document.getElementById('menu-btn');
const form = document.getElementById('footer-form');
const email: any = document.getElementById('email-contact');
const message: any = document.getElementById('input-msg');

onScrollHandler(header);
handleMenuActions(menuButton, nav, navList);
handleContactInput(form, email, message);
hanldeDraggableSlider();
