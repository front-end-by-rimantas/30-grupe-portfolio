import { Valid } from '../validation/Valid.js';

function services(selector, data) {
    // input validation
    if (!Valid.nonEmptyString(selector)) {
        console.error('ERROR: nevalidus selector');
        return false;
    }

    if (!Valid.nonEmptyArray(data)) {
        console.error('ERROR: nevalidus data');
        return false;
    }

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: pagal pateikta selector, nepavyko rasti norimo DOM elemento');
        return false;
    }

    let HTML = '';

    for (const item of data) {
        if (item.isActive &&
            Valid.nonEmptyString(item.title) &&
            Valid.nonEmptyString(item.description) &&
            Valid.nonEmptyString(item.icon)) {
            HTML += `<div class="col-12 col-md-6 col-lg-4 service">
                        <i class="icon fa fa-${item.icon}"></i>
                        <h3 class="title">${item.title}</h3>
                        <p class="description">${item.description}</p>
                    </div>`;
        }
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: tarp duomenu nera nei vieno validaus irasu, todel nebuvo sugeneruota jokio turinio');
        return false;
    }

    // result return
    DOM.innerHTML = HTML;
    return true;
}

export { services }