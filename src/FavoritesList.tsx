import { useState } from 'react';
import RecipeItem from './InterfaceRecipeItem';
// import PlayerForm from './PlayerForm';
// import players from './players';
import FavoritesListRow from './FavoritesListRow';
import Recipe from './recipe';
import { useContext } from 'react';
import FavoritesContext from './FavoritesContext';



function FavoritesList() {
    const [recipeItems, setRecipeItems] = useState<RecipeItem[]>([
        { label: "Peyton Manning", healthLabels: 'healthy', cuisineType: "American" }
    ]);
    const context = useContext(FavoritesContext);
    

    return (
        <>
            <h2>Your Favorites</h2>

            <table>
                <thead><td>Label</td><td>Health Labels</td><td>Cuisine Type</td><td>Full Recipe Link</td><td>Remove Favorite</td></thead>
                {
                    context.favorites.map((recipeItem, i) => <FavoritesListRow recipeItem={recipeItem} index={i}/>)
                    
                }
                {/* {context.favorites} */}
            </table>


        </>
    )
}

export default FavoritesList;

            {/* <Recipe onSubmit={(recipeItem) => {
                setRecipeItems([...recipeItems, recipeItem])
            }} />  */}

// export default interface RecipeItem {
//     hits: string;
//     label: string;
//     healthLabels: string;
//     cuisineType: string;
//     thumbNail: string;
//     // favorite: boolean;
//     url: string;
// }