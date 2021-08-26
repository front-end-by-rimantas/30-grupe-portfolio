import { Valid } from '../validation/Valid.js';

function featuresList(data) {
    // input validation
    if (!Valid.nonEmptyArray(data)) {
        console.error('ERROR: nevalidus data');
        return '';
    }

    // logic
    let HTML = '';
    for (const feature of data) {
        if (Valid.nonEmptyString(feature)) {
            HTML += `<li class="feature fa fa-check-circle-o">${feature}</li>`;
        }
    }

    // post logic validation
    if (HTML === '') {
        console.error('ERROR: data neturi nei vienos validzios reiksmes');
        return '';
    }

    // result return
    return `<ul class="features">
                ${HTML}
            </ul>`;
}

export { featuresList }