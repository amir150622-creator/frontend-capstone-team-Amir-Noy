function loadNavbar() {
    const navbarLinks = [
        { href: 'index.html', text: 'Home' },
        { href: 'recipes.html', text: 'Recipes' },
        { href: 'about.html', text: 'About' },
        { href: 'contact.html', text: 'Contact' },
        { href: 'favorites.html', text: 'My Favorites' },
    ];
    const navbarHTML = `
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <a class="ui-logo" href="index.html">The Bakery</a>
            <button class="ui-toggler" id="nav-toggle" aria-label="Toggle navigation">
                <span class="bi bi-list fs-1"></span>
            </button>
            <nav class="ui-nav-menu" id="nav-menu">
                <ul class="d-flex flex-column flex-lg-row list-unstyled mb-0 w-100">
                    ${navbarLinks.map(link => `<li><a class="ui-nav-link" href="${link.href}">${link.text}</a></li>`).join('')}
                </ul>
            </nav>
        </div>
    `;

    const navbarPlaceholder = $('#navbar-placeholder');
    if (navbarPlaceholder.length) {
        navbarPlaceholder.addClass('ui-navbar sticky-top').html(navbarHTML);
        $('#nav-toggle').on('click', function () {
            $('#nav-menu').toggleClass('show');
        });

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        $('.ui-nav-link').each(function () {
            const linkPath = $(this).attr('href');
            if (linkPath === currentPath) {
                $(this).addClass('active');
            }
        });

        // NO initThemeToggle() here to avoid crashes in early steps
    }
}
