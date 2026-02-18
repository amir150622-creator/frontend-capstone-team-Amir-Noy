function renderRecipeCard(recipe) {
    return `
        <div class="col-md-4 mb-4">
            <div class="ui-card shadow-sm">
                <img src="${recipe.image}" class="ui-card-img" alt="${recipe.title}">
                <div class="ui-card-body">
                    <h2 class="h5 mb-2">${recipe.title}</h2>
                    <p class="text-truncate flex-grow-1">${recipe.description}</p>
                    <div class="mt-3 d-flex justify-content-between align-items-center">
                        <span class="ui-badge ui-badge-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                        <small class="text-muted"><i class="bi bi-clock"></i> ${recipe.time}</small>
                    </div>
                    <a href="recipe-detail.html?id=${recipe.id}" class="ui-btn ui-btn-outline mt-3">View Details</a>
                </div>
            </div>
        </div>
    `;
}

function renderRecipes(recipes) {
    const grid = $('#recipes-grid');
    grid.empty();
    if (recipes.length === 0) {
        grid.html('<div class="col-12 text-center">No recipes found matching your criteria.</div>');
        return;
    }
    recipes.forEach(function (recipe) {
        const card = $(renderRecipeCard(recipe)).hide();
        grid.append(card);
        card.fadeIn(500);
    });
}

function renderFeaturedRecipes(recipes) {
    const featuredContainer = $('#featured-recipes');
    featuredContainer.empty();
    const featuredRecipes = recipes.slice(0, 3);
    if (!featuredRecipes.length) {
        featuredContainer.html('<p class="text-center w-100">No recipes found.</p>');
        return;
    }
    featuredRecipes.forEach(function (recipe) {
        const card = $(renderRecipeCard(recipe)).hide();
        featuredContainer.append(card);
        card.fadeIn(500);
    });
}
