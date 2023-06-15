import Cursor from './cursor2.js';
import {preloader} from './preloader2.js';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu2.js';

// menu (<nav> element)
const menuEl = document.querySelector('.menu5');

// preload the images set as data attrs in the menu items
preloader('.menu5__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({el: menuEl, smooth: true});

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor2'));

    // initialize menu
    new Menu(menuEl);
});