import { useState, useContext } from "react";
import RecipeItem from "./InterfaceRecipeItem";
import FavoritesContext from "./FavoritesContext";
import favoritesHeartFalse from './assets/rmfavunselected.png'
import favoritesHeartTrue from './assets/rmfavselected2.png'
import './recipe.css';
import FullRecipeButton from './assets/fullrecipe.png'
import MoreDetailsButton from './assets/moredetails.png'

function float2int (value: any) {
    return value | 0;
}

interface IProps {
    recipe: RecipeItem
    }



const RecipeDetailItem = ({recipe}: IProps) => {
    const [areDetailsOpen, setDetailsOpen] = useState(false);
    const showMoreClickHandler = () => {setDetailsOpen(!areDetailsOpen)};
    const details = (<div>Health Labels: {recipe.healthLabels[3]},{recipe.healthLabels[4]},{recipe.healthLabels[5]}<p>Dish Type: {recipe.dishType}</p><p>Calories: {float2int(recipe.calories)}</p></div>); 
    const {addFavorite, removeFavorite, favorites} = useContext(FavoritesContext);

    // function coupledFavoriteFunction() {
    //     addFavorite(recipe); 
    //     toggleFavorites();
    // }

    // function resetFavoritesFunction() {
    //     for ()
    // }

    const isFavorited = favorites.some((favorite) => favorite.url===recipe.url)

    // const [isFavorited, setFavoritesTrue] = useState(favoritedDefault)

    function toggleFavorites() {
        // setFavoritesTrue(!favorites);
        if (isFavorited === true) {
            const index = favorites.findIndex((favorite) => favorite.url===recipe.url)
            removeFavorite(index)
        } else {
            addFavorite(recipe)
        }
    }


    console.log(favorites.some((favorite) => favorite.url===recipe.url))
    return (
        <div className="recipeListContainer">
            
            <div className="recipeContainer">
            <p>{recipe.hits}</p>
                <p>{isFavorited.toString()}</p>
                <p>{recipe.label}
                {isFavorited===false
                    ? <span onClick={toggleFavorites} className="favoritesButton"><img src={favoritesHeartFalse} ></img></span>
                    : <span onClick={toggleFavorites} className="favoritesButton"><img src={favoritesHeartTrue} ></img></span>
                }
                </p>
                <p>Cuisine Type: {recipe.cuisineType}</p>
            <p>{recipe.healthLabels[0]}, {recipe.healthLabels[1]}, {recipe.healthLabels[2]}</p>
              <img src={recipe.thumbNail}></img>
                <div className="detailsContainer">
                    <a target='_blank' href={recipe.url}><img src={FullRecipeButton}></img></a>
                    <img onClick={showMoreClickHandler} src={MoreDetailsButton}></img>
                    {areDetailsOpen && details}
                </div>
            </div>
        </div>
    )
};
export default RecipeDetailItem;