function createRecipeCard(recipe) {
    const cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="ui-card h-100 shadow-sm border-0">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}" style="height: 200px; object-fit: cover;">
                <div class="ui-card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h3 class="h5 mb-0">${recipe.title}</h3>
                    </div>
                    <p class="text-muted small mb-3">${recipe.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-light text-dark border">${recipe.difficulty}</span>
                        <a href="recipe-detail.html?id=${recipe.id}" class="ui-btn ui-btn-outline ui-btn-sm">View Recipe</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return cardHTML;
}

function renderRecipes(recipes) {
    const grid = $('#recipes-grid');
    if (grid.length) {
        grid.empty();
        recipes.forEach(recipe => {
            grid.append(createRecipeCard(recipe));
        });
    }
}

function renderFeaturedRecipes(recipes) {
    const featuredSection = $('#featured-recipes');
    if (featuredSection.length) {
        featuredSection.empty();
        // Just show first 3 as featured
        const featured = recipes.slice(0, 3);
        featured.forEach(recipe => {
            featuredSection.append(createRecipeCard(recipe));
        });
    }
}
