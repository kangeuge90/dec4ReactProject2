import { useState, useEffect } from "react";
import getRecipe from "./GetRecipe";
import { RecipeItem } from "./GetRecipe";
import {Link} from 'react-router-dom';
import favoritesHeart from './assets/favoritesHeart.png'
import './recipe.css'

export interface Props {
query: string;
}

function Recipe({query}: Props) {
    useEffect(() => {
        getRecipe(query).then(data => setRecipe(data));
        }, [query])

    const [recipe, setRecipe] = useState<RecipeItem[]>([])
    
    return (
        <ul>
            {
           recipe.map((item, index) => 
           <div className="recipeContainer" key={index}>
               <p>{item.hits}</p>
               <p>{item.label}</p>
               <p>Cuisine Type: {item.cuisineType}</p>
               <p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p>
               <img src={item.thumbNail}></img>
               <div className="detailsContainer">
                    <Link to={item.label}>More Details</Link>
                    <p>  </p>

                    {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}
                    {/* <Link to={item.url}>Full Recipe</Link> */}
                    <a href=''>Full recipe  </a>
                    <p>  </p>
                    {/* PLACEHOLDER UNTIL URL LINK MADE---------*/}

                    <img src={favoritesHeart} ></img>
                    {/* May Move favoritesHeart next to the recipe title, for ease of use */}
               </div>
           </div>)
          
            
           }
            
        </ul>
    )
}

export default Recipe;