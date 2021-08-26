import { featuresList } from '../features-list/featuresList.js';
import { Valid } from '../validation/Valid.js';

function pricing(selector, data) {
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
    DOM.classList.add('pricing-list');

    let HTML = '';

    for (const item of data) {
        if (Valid.nonEmptyString(item.title) &&
            Valid.price(item.price) &&
            Valid.nonEmptyArray(item.features) &&
            Valid.nonEmptyString(item.buttonText) &&
            Valid.nonEmptyString(item.link)) {

            let badgeHTML = '';
            if (Valid.nonEmptyString(item.badge)) {
                badgeHTML = `<div class="badge">${item.badge}</div>`;
            }

            HTML += `<div class="price">
                        ${badgeHTML}
                        <h3 class="title">${item.title}</h3>
                        <div class="monthly-price">
                            <span class="up">$</span>
                            <span class="value">${item.price}</span>
                            <span class="down">/mo</span>
                        </div>
                        ${featuresList(item.features)}
                        <a href="${item.link}" class="btn">${item.buttonText}</a>
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

export { pricing }