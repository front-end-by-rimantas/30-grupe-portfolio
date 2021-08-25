function pricing(selector, data) {
    // <div class="col-12 col-md-4">Pricing 1</div>
    const nonEmptyString = (str) => {
        return typeof str === 'string' && str !== '';
    }

    const isValidPrice = (price) => {
        return typeof price === 'number' && isFinite(price) && price >= 0;
    }

    const nonEmptyArray = (arr) => {
        return Array.isArray(arr) && arr.length > 0;
    }

    // input validation
    if (!nonEmptyString(selector)) {
        console.error('ERROR: nevalidus selector');
        return false;
    }

    if (!nonEmptyArray(data)) {
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
        if (nonEmptyString(item.title) &&
            isValidPrice(item.price) &&
            nonEmptyArray(item.features) &&
            nonEmptyString(item.buttonText) &&
            nonEmptyString(item.link)) {
            let festuresHTML = '';
            for (const feature of item.features) {
                festuresHTML += `<li class="feature">${feature}</li>`;
            }

            let badgeHTML = '';
            if (nonEmptyString(item.badge)) {
                badgeHTML = `<div class="badge">${item.badge}</div>`;
            }

            HTML += `<div class="col-12 col-md-4 price">
                        ${badgeHTML}
                        <h3 class="title">${item.title}</h3>
                        <div class="monthly-price">
                            <span class="up">$</span>
                            <span class="value">${item.price}</span>
                            <span class="down">/mo</span>
                        </div>
                        <ul class="features">
                            ${festuresHTML}
                        </ul>
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