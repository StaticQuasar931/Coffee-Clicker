function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatNumber };
} else {
    window.formatNumber = formatNumber;
}
