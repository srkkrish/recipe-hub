import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './RecipeHome.css';

const RecipeHome = () => {
    const [toggleView, setToggleView] = useState('list_view');
    const [recipeData, setRecipeData] = useState({ recipes: [] });
    const navigate = useNavigate(); // Get the navigate function from useNavigate

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes?limit=0');
                const data = await response.json();
                data.recipes[0]['rating'] = 5
                setRecipeData(data); // Store the fetched recipes in state
                console.log(data);
            } catch (error) {
                console.log(error); // If there's an error, log the error message
            }
        }
        fetchRecipes();
    }, [])

    const handleToggleView = () => {
        // Toggle between 'list_view' and 'grid_view'
        setToggleView((prevView) => (prevView === 'list_view' ? 'grid_view' : 'list_view'));
    };

    const recipeClick = (recipe: any) => {
        console.log(recipe);
        navigate('/recipe', { state: recipe }); // Navigate to DetailedRecipe page with the recipe as parameter
    }

    return (
        <div className='recipe-home'>
            <div className='view-icons'>
                <h4>View Recipes ({toggleView === 'list_view' ? "List view" : "Grid view"})</h4>
                <span
                    className={`fa ${toggleView === 'list_view' ? 'fa-list' : 'fa-table'} ${toggleView === 'list_view' ? 'active' : ''}`}
                    title="Toggle both List view & Grid view"
                    onClick={handleToggleView}
                ></span>
                {/* title={toggleView === 'list_view' ? "List view" : "Grid view"} */}
            </div>
            <div className='info'>
                <div className='note'><strong>Note:</strong>&nbsp;<span className='fa fa-info-circle'></span></div>
                Please click on the recipe to view detailed information
            </div>

            {toggleView === 'list_view' && (
                <div className='list-view'>
                    <ul>
                        {recipeData.recipes.map((recipe: any, index: number) => (
                            <li key={index} className='recipe-item' onClick={() => recipeClick(recipe)}>
                                <div className='recipe-image'>
                                    <img loading='lazy' src={recipe.image} alt={recipe.name} />
                                </div>
                                <div className='recipe-content'>
                                    <div className='recipe-name'>{recipe.name}</div>
                                    <div className='recipe-info'>Cuisine: {recipe.cuisine}</div>
                                    <div className='recipe-info'>Difficulty: {recipe.difficulty}</div>
                                    <div className='recipe-info'>Calories per serving: {recipe.caloriesPerServing}</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {toggleView === 'grid_view' && (
                <div className='grid-view'>
                    <table>
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Cuisine</th>
                                <th>Difficulty</th>
                                <th>Calories per Serving</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeData.recipes.map((recipe: any, index: number) => (
                                <tr key={index} onClick={() => recipeClick(recipe)}>
                                    <td className='recipe-name'>{recipe.name}</td>
                                    <td>{recipe.cuisine}</td>
                                    <td>{recipe.difficulty}</td>
                                    <td>{recipe.caloriesPerServing}</td>
                                    <td>
                                        <img loading='lazy' src={recipe.image} alt={recipe.name} style={{ width: '60px', height: '60px' }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecipeHome;
