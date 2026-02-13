$(document).ready(function () {
    loadNavbar();
    loadFooter();

    // Render featured recipes on home page
    if ($('#featured-recipes').length > 0) {
        loadFeaturedRecipes();
    }
});
