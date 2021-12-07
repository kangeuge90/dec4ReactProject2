import { useState, useEffect, useContext } from "react";
import getRecipe from "./GetRecipe";
import RecipeItem from "./InterfaceRecipeItem";
import {Link} from 'react-router-dom';
import favoritesHeart from './assets/favoritesHeart.png'
import './recipe.css'
import { useSearchParams } from "react-router-dom";
import FavoritesContext from "./FavoritesContext";

// export interface Props {
// query: string;
// }

function Recipe() {
    let [searchParams, setSearchParam] = useSearchParams();
    const query = searchParams.get('query') || '' ;

    useEffect(() => {
        getRecipe(query).then(data => setRecipe(data));
        }, [query])

    const [recipe, setRecipe] = useState<RecipeItem[]>([])
    const {addFavorite} = useContext(FavoritesContext);

    return (
        <ul>
            {
           recipe.map((item, index) => 
           <form className="recipeContainer" key={index} onSubmit={(e) => {
            e.preventDefault();
            // onSubmit({ name, score });
            // clear();
        }}>
               <p>{item.hits}</p>
               <p>{item.label}<button onClick={() => addFavorite(item)}className="favoritesButton"><img src={favoritesHeart} ></img></button></p>
               <p>Cuisine Type: {item.cuisineType}</p>
               <p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p>
               <img src={item.thumbNail}></img>
               <div className="detailsContainer">
                    <Link to={item.label}>More Details</Link>
                    <p></p>

                    {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}
                    {/* <Link to={item.url}>Full Recipe</Link> */}
                    <a target='_blank' href={item.url}>Full recipe</a>
                    <p></p>
                    {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}


                    {/* May Move favoritesHeart next to the recipe title, for ease of use */}
               </div>
           </form>)
          
            
           }
            
        </ul>
    )
}

export default Recipe;