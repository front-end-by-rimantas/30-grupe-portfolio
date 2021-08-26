import { Valid } from '../validation/Valid.js';

function mosaic(selector, data) {
    const allowedExtraClasses = ['mosaic-main', 'mosaic-success'];

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
    DOM.classList.add('mosaic-list');

    let leftHTML = '';
    let rightHTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        if (Valid.nonEmptyString(item.value) &&
            Valid.nonEmptyString(item.label)) {
            let extraClass = '';
            if (Valid.nonEmptyString(item.extraClass) &&
                allowedExtraClasses.includes(item.extraClass)) {
                extraClass = item.extraClass;
            }

            if (i < data.length / 2) {
                leftHTML += `<div class="mosaic ${extraClass}">
                                <span class="value">${item.value}</span>
                                <span class="label">${item.label}</span>
                            </div>`;
            } else {
                rightHTML += `<div class="mosaic ${extraClass}">
                                <span class="value">${item.value}</span>
                                <span class="label">${item.label}</span>
                            </div>`;
            }
        }
    }

    // post logic validation
    if (leftHTML === '' && rightHTML === '') {
        console.error('ERROR: tarp duomenu nera nei vieno validaus irasu, todel nebuvo sugeneruota jokio turinio');
        return false;
    }

    // result return
    DOM.innerHTML = `<div class="mosaic-col">
                       ${leftHTML}
                    </div>
                    <div class="mosaic-col">
                        ${rightHTML}
                    </div>`;
    return true;
}

export { mosaic }