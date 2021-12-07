import './Header.css'
import { useState } from 'react'
import DisplayAllergies from './DisplayAllergies'
import DisplayDiet from './DisplayDiet'
// import DisplayMeal from './DisplayMeal'
import DisplayCuisine from './DisplayCuisine'
import favoritesHeart from './assets/favoritesHeart.png'
// import american from '../public/americanFood.jpg';
import { useSearchParams } from 'react-router-dom'

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
            <h1>ReciMe.com</h1>
            <form className="searchBarContainer" onSubmit={(e) => 
            {
                e.preventDefault()
                setQuery(searchQuery)
            }

            }>
                <label className="searchBar">Search: </label><input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
                <img src={favoritesHeart}></img> 
                <br />
                <span>Favorites List</span>
                {/* Style adjustments needed here, to make appearance of favorites icon + text more cohesive */}
            </form>
            <div className="categoriesContainer">
                <hr></hr>
                <h2 className="sortText">Sort by: </h2>
                <ul className="categoryButtons">
                    <button onClick={clickCuisine}>Cuisine Type</button>
                    {/* <button onClick={clickMeal}>Meal Type</button> */}
                    <button onClick={clickDiet}>Diet Type</button>
                    <button onClick={clickAllergies}>Allergies</button>
                </ul>
            </div>
            <div>
                {cuisine===true && <DisplayCuisine />}
                {/* {meal===true && <DisplayMeal />} */}
                {diet===true && <DisplayDiet />}
                {allergies===true && <DisplayAllergies />}
            </div>
        </div>
    )
}

export default Header;