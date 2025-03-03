import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './DetailedRecipe.css';

const DetailedRecipe = () => {
    const location = useLocation();
    const recipe = location.state; // Access the recipe object from state

    useEffect(() => {
        console.log(recipe);
    })

    return (
        <div className="recipe-card">
            <h4>{recipe.name}</h4>

            <div className="recipe-info">
                {/* Image Section */}
                <div className="recipe-image">
                    <img loading='lazy' src={recipe.image} alt={recipe.name} />
                </div>

                {/* Recipe Details Section */}
                <div className="recipe-details">
                    <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing} kcal</p>
                    <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
                    <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Meal Type:</strong> [{recipe.mealType.join(', ')}]</p>
                    <p className='rating'><strong>Rating <span style={{ color: 'gold' }}>&#9733;</span>:</strong> <span>{recipe.rating} ({recipe.reviewCount} reviews)</span></p>
                </div>
            </div>

            <h2>Ingredients</h2>

            <div>
                {recipe.ingredients.join(' ; ')}
            </div>

            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((instruction: any, index: any) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>

            <h3>Tags #</h3>
            <ul>
                {recipe.tags.map((tag: any, index: any) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default DetailedRecipe;
