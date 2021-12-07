import { useState } from 'react';
import RecipeItem from './InterfaceRecipeItem';
// import PlayerForm from './PlayerForm';
// import players from './players';
import FavoritesListRow from './FavoritesListRow';

function FavoritesList() {

    const [recipeItems, setRecipeItems] = useState<RecipeItem[]>([
        { label: "Peyton Manning", healthLabels: 'healthy', cuisineType: "American" }
    ]);

    // function removeFavorite() {
    //     // slice out this entry
    // }

    return (
        <>
            <h2>Your Favorites</h2>

            <table>
                <thead><td>Label</td><td>Health Labels</td><td>Cuisine Type</td><td>Full Recipe Link</td><td>Remove Favorite</td></thead>
                {
                    recipeItems.map((recipeItem) => <FavoritesListRow recipeItem={recipeItem} />)
                }
            </table>


            {/* <PlayerForm onSubmit={(player) => {
                setPlayers([...players, player])
            }} /> */} 
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