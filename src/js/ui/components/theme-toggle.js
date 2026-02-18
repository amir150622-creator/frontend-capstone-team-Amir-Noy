function initThemeToggle() {
    const themeToggleBtn = $('#theme-toggle');
    const body = $('body');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.addClass('dark-mode');
        themeToggleBtn.text('Light Mode');
    }

    themeToggleBtn.off('click').on('click', function () {
        body.toggleClass('dark-mode');
        if (body.hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            $(this).text('Light Mode');
        } else {
            localStorage.setItem('theme', 'light');
            $(this).text('Dark Mode');
        }
    });
}
