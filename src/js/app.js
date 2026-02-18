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

        // Search functionality
        $('#search-input').on('input', function () {
            const searchTerm = $(this).val().toLowerCase();
            const difficulty = $('#difficulty-filter').val();
            const filteredRecipes = allRecipesData.filter(recipe => {
                const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                    recipe.description.toLowerCase().includes(searchTerm);
                const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;
                return matchesSearch && matchesDifficulty;
            });
            renderRecipes(filteredRecipes);
        });

        // Difficulty filter
        $('#difficulty-filter').on('change', function () {
            const searchTerm = $('#search-input').val().toLowerCase();
            const difficulty = $(this).val();
            const filteredRecipes = allRecipesData.filter(recipe => {
                const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                    recipe.description.toLowerCase().includes(searchTerm);
                const matchesDifficulty = difficulty === 'all' || recipe.difficulty === difficulty;
                return matchesSearch && matchesDifficulty;
            });
            renderRecipes(filteredRecipes);
        });

        // Reset filters
        $('#reset-filters').on('click', function () {
            $('#search-input').val('');
            $('#difficulty-filter').val('all');
            renderRecipes(allRecipesData);
        });
    }

    // Render recipe details on recipe detail page
    if ($('#recipe-detail-container').length > 0) {
        loadRecipeDetail();
    }

    // Render favorites on favorites page
    if ($('#favorites-grid').length > 0) {
        loadFavorites();
    }

    // Contact Form Logic
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        const form = $(this)[0];

        if (form.checkValidity()) {
            $('#contact-success').removeClass('d-none');
            form.reset();
            $(this).removeClass('was-validated');
        } else {
            e.stopPropagation();
            $(this).addClass('was-validated');
        }
    });

    // Favorite button click handler (Event Delegation for Detail Button)
    $(document).on('click', '#btn-favorite', function () {
        const id = $(this).data('id');
        if (typeof toggleFavorite === 'function') {
            toggleFavorite(id);
        }
    });
});
