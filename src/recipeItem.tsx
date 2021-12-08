import { useState, useContext } from "react";
import RecipeItem from "./InterfaceRecipeItem";
import FavoritesContext from "./FavoritesContext";
import favoritesHeartFalse from './assets/rmfavunselected.png'
import favoritesHeartTrue from './assets/rmfavselected.png'
import './recipe.css';
import FullRecipeButton from './assets/fullrecipe.png'
import MoreDetailsButton from './assets/moredetails.png'


interface IProps {
    recipe: RecipeItem
    }



const RecipeDetailItem = ({recipe}: IProps) => {
    const [areDetailsOpen, setDetailsOpen] = useState(false);
    const showMoreClickHandler = () => {setDetailsOpen(!areDetailsOpen)};
    const details = (<div>Health Labels: {recipe.healthLabels[3]},{recipe.healthLabels[4]},{recipe.healthLabels[5]}<p>Calories: {recipe.calories}</p></div>); 
    const {addFavorite} = useContext(FavoritesContext);

    function coupledFavoriteFunction() {
        addFavorite(recipe); 
        toggleFavorites();
    }

    const [favorites, setFavoritesTrue] = useState(false)

    function toggleFavorites() {
        setFavoritesTrue(!favorites);
    }


    return (
        <div>
            <div className="recipeContainer">
            <p>{recipe.hits}</p>
                <p>{recipe.label}
                {favorites===false ? 
                    <button onClick={coupledFavoriteFunction} className="favoritesButton"><img src={favoritesHeartFalse} ></img></button> :
                    <button onClick={coupledFavoriteFunction} className="favoritesButton"><img src={favoritesHeartTrue} ></img></button>
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