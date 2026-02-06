function loadFooter() {
    const footerHTML = `
        <footer class="bg-dark text-white text-center py-4 mt-auto">
            <div class="container">
                <p class="mb-0">The Bakery Student Project</p>
            </div>
        </footer>
    `;
    const footerPlaceholder = $('#footer-placeholder');
    if (footerPlaceholder.length) {
        footerPlaceholder.replaceWith(footerHTML);
    }
}
