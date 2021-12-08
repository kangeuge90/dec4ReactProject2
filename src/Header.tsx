import './Header.css'
import { useState } from 'react'
import DisplayAllergies from './DisplayAllergies'
import DisplayDiet from './DisplayDiet'
// import DisplayMeal from './DisplayMeal'
import DisplayCuisine from './DisplayCuisine'
import favoritesHeart from './assets/rmfavselected2.png'
// import american from '../public/americanFood.jpg';
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import ReciMeTitle from './assets/rmheader2.png'
import ReciMeLogo from './assets/rmlogo2.png'
import HomeButton from './assets/rmhome2.png'
import SearchText from './assets/rmsearch2.png'
// import FullRecipeButton from './assets/fullrecipe.png'
// import MoreDetailsButton from './assets/moredetails.png'
import CuisineButton from './assets/cuisinetype.png'
import DietButton from './assets/diettype.png'
import AllergiesButton from './assets/allergies.png'

function Header() {
    let [searchParams, setSearchParams] = useSearchParams();
    const setQuery = (q: string) => {
        setSearchParams({ 'query': q })
    }

    let [searchQuery, setSearchQuery] = useState('')
    // searchParams.get('query') default state

    const [cuisine, setCuisineOn] = useState(false)
    // const [meal, setMealOn] = useState(false)
    const [diet, setDietOn] = useState(false)
    const [allergies, setAllergiesOn] = useState(false)

    function clickCuisine() {
        // setMealOn(false)
        setDietOn(false)
        setAllergiesOn(false)
        setCuisineOn(true)
    }

    // function clickMeal() {
    //     setDietOn(false)
    //     setAllergiesOn(false)
    //     setCuisineOn(false)
    //     // setMealOn(true)
    // }
    
    function clickDiet() {
        // setMealOn(false)
        setAllergiesOn(false)
        setCuisineOn(false)
        setDietOn(true)
    }
    
    function clickAllergies() {
        // setMealOn(false)
        setDietOn(false)
        setCuisineOn(false)
        setAllergiesOn(true)
    }

    return (
        <div className="headerContainer">
            <div className='titleContainer'>
                <div className='recimeTitle'><img src={ReciMeTitle}></img></div>
                <div className='recimeLogo'><img src={ReciMeLogo}></img></div>
            </div>
            <form className="searchBarContainer" onSubmit={(e) => 
            {
                e.preventDefault()
                setQuery(searchQuery)
            }

            }>
                <div className="searchBar">
                    <section className='favoritesSection'>
                        <div className='favoritesInnerSection'>
                            <Link to='/'><img src={HomeButton}></img></Link>
                            <Link to='/favorites'><img src={favoritesHeart}></img></Link>
                        </div>
                    </section>
                    <img src={SearchText}></img><input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>
                {/* Style adjustments needed here, to make appearance of favorites icon + text more cohesive */}
            </form>
            <div className="categoriesContainer">
                {/* <h2 className="sortText">Sort by: </h2> */}
                <ul className="categoryButtons">
                    <img src={CuisineButton}onClick={clickCuisine}></img>
                    {/* <button onClick={clickMeal}>Meal Type</button> */}
                    <img src={DietButton} onClick={clickDiet}></img>
                    <img src={AllergiesButton} onClick={clickAllergies}></img>
                </ul>
            </div>
            <div className="subCategoriesContainer">
                {cuisine===true && <DisplayCuisine />}
                {/* {meal===true && <DisplayMeal />} */}
                {diet===true && <DisplayDiet />}
                {allergies===true && <DisplayAllergies />}
            </div>
        </div>
    )
}

export default Header;