// Recipes Data Logic
const API_URL = 'https://api.npoint.io/c06abd5f2746fc4e4785';
let allRecipesData = [];

function loadAllRecipes() {
    $.getJSON(API_URL, function (recipes) {
        allRecipesData = recipes;
        renderRecipes(allRecipesData);
    }).fail(function () {
        renderErrorMessage('recipes-grid', 'Error loading recipes from server.');
    });
}

function loadFeaturedRecipes() {
    $.getJSON(API_URL, function (recipes) {
        renderFeaturedRecipes(recipes);
    }).fail(function () {
        renderErrorMessage('featured-recipes', 'Error loading recipes. Please try again later.');
    });
}

function loadRecipeDetail() {
    const id = getQueryParam('id');

    if (!id) {
        renderErrorMessage('recipe-detail-container', 'No recipe ID specified. <a href="recipes.html">Go back</a>');
        return;
    }

    $.getJSON(API_URL, function (recipes) {
        const recipe = recipes.find(r => r.id == id);
        renderRecipeDetail(recipe);
    }).fail(function () {
        renderErrorMessage('recipe-detail-container', 'Error loading data from server.');
    });
}

function loadFavorites() {
    const favorites = getFavorites();
    const grid = $('#favorites-grid');

    if (favorites.length === 0) {
        grid.html('<div class="col-12 text-center"><p class="lead">You haven\'t added any favorites yet.</p><a href="recipes.html" class="ui-btn ui-btn-primary mt-3">Browse Recipes</a></div>');
        return;
    }

    $.getJSON(API_URL, function (recipes) {
        const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));
        grid.empty();
        favoriteRecipes.forEach(function (recipe) {
            const card = renderRecipeCard(recipe);
            grid.append(card);
        });
    }).fail(function () {
        renderErrorMessage('favorites-grid', 'Error loading favorites.');
    });
}
