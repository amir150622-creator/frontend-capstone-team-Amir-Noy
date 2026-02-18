function renderRecipeDetail(recipe) {
    if (!recipe) {
        renderErrorMessage('recipe-detail-container', 'Recipe not found. <a href="recipes.html">Go back</a>');
        return;
    }

    const detailHtml = `
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="text-center">
                        <img src="${recipe.image}" class="recipe-detail-thumb shadow" alt="${recipe.title}" id="open-lightbox" title="Click to enlarge">
                        <small class="text-muted d-block text-center mt-2">Click image to enlarge</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1 class="mb-3">${recipe.title}</h1>
                    <p class="lead text-muted">${recipe.description}</p>
                    <div class="d-flex gap-3 mb-4">
                        <span class="ui-badge ui-badge-${recipe.difficulty.toLowerCase()}">${recipe.difficulty}</span>
                        <span class="ui-badge bg-secondary text-white"><i class="bi bi-clock"></i> ${recipe.time}</span>
                    </div>
                    <button id="btn-favorite" class="ui-btn ui-btn-outline mb-4" data-id="${recipe.id}">
                        Add to Favorites
                    </button>
                    <h2 class="h4 mb-3">Ingredients</h2>
                    <ul class="list-unstyled mb-4">
                        ${recipe.ingredients.map(ing => `<li class="py-2 border-bottom">${ing}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="row mt-4"><div class="col-12"><h2 class="h4 mb-3">Instructions</h2><ol class="ps-3">${recipe.instructions.map(inst => `<li class="py-2">${inst}</li>`).join('')}</ol></div></div>
            <div class="row mt-5"><div class="col-12 text-center"><a href="recipes.html" class="ui-btn ui-btn-secondary">Back to Recipes</a></div></div>
            <div id="custom-lightbox" class="ui-modal" onclick="if(event.target === this) $(this).hide()">
                <div class="ui-modal-content">
                    <button class="ui-modal-close" onclick="$('#custom-lightbox').hide()">&times;</button>
                    <img src="${recipe.image}" class="img-fluid rounded" alt="${recipe.title}">
                </div>
            </div>
        `;
    $('#recipe-detail-container').html(detailHtml);
    $('#open-lightbox').on('click', () => $('#custom-lightbox').css('display', 'flex'));
    updateFavoriteButton(recipe.id);
}

function updateFavoriteButton(id) {
    let favorites = getFavorites();
    id = Number(id);
    const btn = $('#btn-favorite');
    if (favorites.includes(id)) {
        btn.text('Remove from Favorites').addClass('ui-btn-primary').removeClass('ui-btn-outline');
    } else {
        btn.text('Add to Favorites').addClass('ui-btn-outline').removeClass('ui-btn-primary');
    }
}

function toggleFavorite(id) {
    let favorites = getFavorites();
    id = Number(id);
    const index = favorites.indexOf(id);
    if (index === -1) {
        favorites.push(id);
    } else {
        favorites.splice(index, 1);
    }
    saveFavorites(favorites);
    updateFavoriteButton(id);
}
