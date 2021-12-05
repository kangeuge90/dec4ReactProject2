import './DisplayContainer.css'
import american from './assets/americanCuisine.jpg'
import indian from './assets/indianCuisine.jpg'
import mexican from './assets/mexicanCuisine.jpg';
import italian from './assets/italianCuisine.png';
import asian from './assets/asianCuisine.jpg';
// import {Link} from 'react-router-dom';
// import getRecipe from './GetRecipe';
import { useState } from 'react';
import Recipe from './recipe';

function DisplayCuisine() {
    const [query, setQuery] = useState('');

    return(
    <div className="categoryPicturesContainer">
        <div className="categoryPicture" onClick = {() => {setQuery('American')}}>
            <h3>American</h3>
            <img src={american} alt="american cuisine"> </img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('Asian')}}>
            <h3>Asian</h3>
            <img src={asian} alt="asian cuisine"></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('Indian')}}>
            <h3>Indian</h3>
            <img src={indian} alt="indian cuisine"></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('Italian')}}>
            <h3>Italian</h3>
            <img src={italian} alt="italian cuisine"></img>
        </div>
        <div className="categoryPicture" onClick = {() => {setQuery('Mexican')}}>
            <h3>Mexican</h3>
            <img src={mexican} alt="mexican cuisine"></img>
        </div>
        <hr></hr>
        <div className='recipeList'>
            <Recipe query={query}/>
        </div>
    </div>
    )
}

export default DisplayCuisine;