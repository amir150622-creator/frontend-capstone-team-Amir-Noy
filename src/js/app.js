$(document).ready(function () {
    loadNavbar();
    loadFooter();

    // Render featured recipes on home page
    if ($('#featured-recipes').length > 0) {
        loadFeaturedRecipes();
    }

    // Render all recipes on recipes page
    if ($('#recipes-grid').length > 0) {
        loadAllRecipes();
    }
});
