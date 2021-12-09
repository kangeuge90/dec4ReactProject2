import { useContext } from 'react';
import FavoritesContext from './FavoritesContext';
import RecipeItem from './InterfaceRecipeItem'

function FavoritesListRow({ recipeItem: recipeItem, index }: { recipeItem: RecipeItem, index: number }) {

   const {removeFavorite} = useContext(FavoritesContext);

    return (
        <tr className='favoriteRowContainer'>
            <td>{recipeItem.label}</td>
            <td>{recipeItem.healthLabels[0]}, {recipeItem.healthLabels[1]}, {recipeItem.healthLabels[2]}</td>
            <td>{recipeItem.cuisineType}</td>
            <td><a href={recipeItem.url}>{recipeItem.url}</a></td>
            <td><button onClick={ () => removeFavorite(index)}>Remove</button></td>
        </tr>
    )
}

export default FavoritesListRow;

// export default interface RecipeItem {
//     hits: string;
//     label: string;
//     healthLabels: string;
//     cuisineType: string;
//     thumbNail: string;
//     // favorite: boolean;
//     url: string;
// }