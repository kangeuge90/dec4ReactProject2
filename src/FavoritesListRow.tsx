import RecipeItem from './InterfaceRecipeItem'

function FavoritesListRow({ recipeItem: recipeItem }: { recipeItem: RecipeItem }) {

    function removeFavorite() {
        // slice out this entry
        // NEEDS TO BE PUT IN FAVORITESCONTEXTPROVIDER
    }


    return (
        <tr className='favoriteRowContainer'>
            <td>{recipeItem.label}</td>
            <td>{recipeItem.healthLabels[0]}, {recipeItem.healthLabels[1]}, {recipeItem.healthLabels[2]}</td>
            <td>{recipeItem.cuisineType}</td>
            <td>{recipeItem.url}</td>
            <td><button onClick={removeFavorite}>Remove</button></td>
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