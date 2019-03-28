import { PAGE_HTML_TAG } from '../constants/site-data'

export const pageOverflow = display => {
    PAGE_HTML_TAG.style.overflow = display;
};

export const removeLetters = string => (
    string.replace(/\D/g, '')
);
