import { PAGE_HTML_TAG } from '../constants/site-data'

export const pageOverflow = display => {
    PAGE_HTML_TAG.style.overflow = display;
};

export const removeLetters = string => (
    string.replace(/\D/g, '')
);

export const scrollTo = (scrollX, scrollY) => {
    window.scrollTo({
        left: scrollX,
        top: scrollY,
        behavior: "smooth"
    })
};

export const cartGoods = amount => {
    switch (amount) {
        case 1:
          return 'товар';
        case 2:
        case 3:
        case 4:
          return 'товара';
        default:
          return 'товаров';
    }
};