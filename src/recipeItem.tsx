import { useState, useContext } from "react";
import RecipeItem from "./InterfaceRecipeItem";
import FavoritesContext from "./FavoritesContext";
import favoritesHeart from './assets/favoritesHeart.png'
import './recipe.css';

interface IProps {
    recipe: RecipeItem
    }


const RecipeDetailItem = ({recipe}: IProps) => {
    const [areDetailsOpen, setDetailsOpen] = useState(false);
    const showMoreClickHandler = () => {setDetailsOpen(!areDetailsOpen)};
    const details = (<div>Health Labels: {recipe.healthLabels[3]},{recipe.healthLabels[4]},{recipe.healthLabels[5]}<p>Calories: {recipe.calories}</p></div>); 
    const {addFavorite} = useContext(FavoritesContext);

    return (
        <div>
            <div className="recipeContainer">
            <p>{recipe.hits}</p>
                <p>{recipe.label}<button onClick={() => addFavorite(recipe)}className="favoritesButton"><img src={favoritesHeart} ></img></button></p>
                <p>Cuisine Type: {recipe.cuisineType}</p>
            <p>{recipe.healthLabels[0]}, {recipe.healthLabels[1]}, {recipe.healthLabels[2]}</p>
              <img src={recipe.thumbNail}></img>
              <p><a target='_blank' href={recipe.url}>Full recipe</a></p>
                    
            <button type="button"  onClick={showMoreClickHandler}>Read more</button>
            {areDetailsOpen && details}
            </div>
        </div>
    )
};
export default RecipeDetailItem;