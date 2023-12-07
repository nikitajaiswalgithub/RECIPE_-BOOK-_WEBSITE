document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipe-list');

    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        if (name && ingredients && instructions) {
            addRecipe(name, ingredients, instructions);
            recipeForm.reset();
        }
    });

    function addRecipe(name, ingredients, instructions) {
        const recipeDiv = document.createElement('div');
        recipeDiv.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
            <button onclick="deleteRecipe(this)">Delete</button>
        `;
        recipeList.appendChild(recipeDiv);
    }
});

function deleteRecipe(button) {
    const recipeDiv = button.parentElement;
    recipeDiv.remove();
}
