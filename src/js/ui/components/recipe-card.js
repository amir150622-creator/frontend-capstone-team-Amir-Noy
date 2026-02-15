function createRecipeCard(recipe) {
    const cardHTML = `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="ui-card h-100 shadow border-0 transition-all hover-transform">
                <div class="position-relative overflow-hidden">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}" style="height: 220px; object-fit: cover;">
                </div>
                <div class="ui-card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h3 class="h5 fw-bold mb-0">${recipe.title}</h3>
                    </div>
                    <p class="text-muted small mb-3 line-clamp-2">${recipe.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                        <span class="badge bg-light text-primary border">${recipe.difficulty}</span>
                        <a href="recipe-detail.html?id=${recipe.id}" class="ui-btn ui-btn-outline ui-btn-sm rounded-pill">View Recipe</a>
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
        const featured = recipes.slice(0, 3);
        featured.forEach(recipe => {
            featuredSection.append(createRecipeCard(recipe));
        });
    }
}
