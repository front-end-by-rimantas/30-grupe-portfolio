class Valid {
    static nonEmptyString(str) {
        return typeof str === 'string' && str !== '';
    }

    static nonEmptyArray(arr) {
        return Array.isArray(arr) && arr.length > 0;
    }

    static price(price) {
        return typeof price === 'number' && isFinite(price) && price >= 0;
    }
}

export { Valid }