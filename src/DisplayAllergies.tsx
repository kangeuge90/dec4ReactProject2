import './DisplayContainer.css'
import nut from './assets/peanutAllergy.jpg';
import gluten from './assets/glutenFree.jpg';
import fish from './assets/seafoodAllergy.png';
import dairy from './assets/dairyFree.png'; 
import soy from './assets/soyFree.png'
import Recipe from './recipe' ;
import {useState} from 'react';

function DisplayAllergies() {
    const [query, setQuery] = useState('');

    return(
        <div>
            <div className="categoryPicturesContainer">
                <div className="categoryPicture" onClick = {() => {setQuery('dairy-free')}}>
                    <h3>Dairy Allergy</h3>
                    <img src={dairy} alt="dairy allergy"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('gluten-free')}}>
                    <h3>Gluten Free</h3>
                    <img src={gluten} alt="gluten free"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('nut-free')}}>
                    <h3>Nut Allergies</h3>
                    <img src={nut} alt="nut allergies"/>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('shellfish-free')}}>
                    <h3>Seafood Allergy</h3>
                    <img src={fish} alt="seafood allergy"></img>
                </div>
                <div className="categoryPicture" onClick = {() => {setQuery('soy-free')}}>
                    <h3>Soy Allergy</h3>
                    <img src={soy} alt="soy allergy"></img>
                </div>
            </div>
            <hr></hr>
            <div className='recipeList'>
                <Recipe query={query}/>
            </div>
        </div>
    )
}

export default DisplayAllergies;