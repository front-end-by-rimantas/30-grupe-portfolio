function services(selector, data) {
    const nonEmptyString = (str) => {
        return typeof str === 'string' && str !== '';
    }

    // input validation
    if (!nonEmptyString(selector)) {
        console.error('ERROR: nevalidus selector');
        return false;
    }

    if (!Array.isArray(data) ||
        data.length === 0) {
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
            nonEmptyString(item.title) &&
            nonEmptyString(item.description) &&
            nonEmptyString(item.icon)) {
            HTML += `<div class="col-12 col-md-6 col-lg-4">${item.title}</div>`;
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