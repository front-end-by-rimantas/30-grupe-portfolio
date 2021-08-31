import { Valid } from "../validation/Valid.js";

function nav(selector) {
    const formatText = (str) => {
        const parts = str.split('_');
        const firstWord = parts[0];
        const firstUp = firstWord[0].toUpperCase() + firstWord.slice(1);
        parts[0] = firstUp;
        return parts.join(' ');
    }

    if (!Valid.nonEmptyString(selector)) {
        return false;
    }

    const DOM = document.querySelector(selector);
    if (!DOM) {
        return false;
    }

    const bodyChildrenDOM = document.querySelectorAll('body > *');
    let HTML = '<a href="#">Home</a>';

    for (const sectionDOM of bodyChildrenDOM) {
        if (sectionDOM.id) {
            sectionDOM.id = sectionDOM.id.toLowerCase();
            HTML += `<a href="#${sectionDOM.id}">${formatText(sectionDOM.id)}</a>`;
        }
    }

    return DOM.innerHTML = HTML;
}

export { nav }