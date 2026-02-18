// Helper functions
function getBadgeColor(difficulty) {
    if (difficulty === 'Easy') return 'success';
    if (difficulty === 'Medium') return 'warning';
    return 'danger';
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderErrorMessage(containerId, message) {
    $(`#${containerId}`).html(`<div class="ui-alert ui-alert-error">${message}</div>`);
}
