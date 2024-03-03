// Define the Spoonacular API key as a constant
const API_KEY = "f5414560ee9d4395b3487ce2ee900ce4";

// Get the HTML element with the ID "recipe-list" and assign it to the recipeListEL variable
const recipeListEL = document.getElementById("recipe-list");

// Function to display recipes on the webpage
function displayRecipes(recipes) {
recipeListEL.innerHTML = ""
recipes.forEach((recipe) => {

    const recipeItemEL = document.createElement("li");
    recipeItemEL.classList.add("recipe-item");
    recipeImageEL = document.createElement("img");
    recipeImageEL.src = recipe.image;
    recipeImageEL.alt = "recipe image";

    recipeTitleEL = document.createElement("h2");
    recipeTitleEL.innerText = recipe.title;

    recipeIngredientsEL = document.createElement("p");
    recipeIngredientsEL.innerHTML = `
    
    <strong>Inggredients:</strong> ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(", ")}
    
    `;

    recipeLinkEL = document.createElement("a");
    recipeLinkEL.href = recipe.sourceUrl;
    recipeLinkEL.innerText = "View Recipe";

    recipeItemEL.appendChild(recipeImageEL)
    recipeItemEL.appendChild(recipeTitleEL)
    recipeItemEL.appendChild(recipeIngredientsEL)
    recipeItemEL.appendChild(recipeLinkEL)

    recipeListEL.appendChild(recipeItemEL);

});

}
// Asynchronous function to fetch recipes from the Spoonacular API
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()

    return data.recipes;

}

// Asynchronous function to initialize the application
async function init(){

    const recipes = await getRecipes();
    displayRecipes(recipes)
   

}
// Call the init function to start the application
init() ;
