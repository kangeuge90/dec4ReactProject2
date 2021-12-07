import { useState } from 'react';
import RecipeItem from './InterfaceRecipeItem';
// import PlayerForm from './PlayerForm';
// import players from './players';
import FavoritesListRow from './FavoritesListRow';
import Recipe from './recipe';

function FavoritesList() {
    const [recipeItems, setRecipeItems] = useState<RecipeItem[]>([
        { label: "Peyton Manning", healthLabels: 'healthy', cuisineType: "American" }
    ]);

    return (
        <>
            <h2>Your Favorites</h2>

            <table>
                <thead><td>Label</td><td>Health Labels</td><td>Cuisine Type</td><td>Full Recipe Link</td><td>Remove Favorite</td></thead>
                {
                    recipeItems.map((recipeItem) => <FavoritesListRow recipeItem={recipeItem} />)
                }
            </table>

            <Recipe onSubmit={(recipeItem) => {
                setRecipeItems([...recipeItems, recipeItem])
            }} /> 
        </>
    )
}

export default FavoritesList;

// export default interface RecipeItem {
//     hits: string;
//     label: string;
//     healthLabels: string;
//     cuisineType: string;
//     thumbNail: string;
//     // favorite: boolean;
//     url: string;
// }