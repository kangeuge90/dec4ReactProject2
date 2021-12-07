function FavoritesButton() {
    return (
        <ul>
            Dummy Content
            
        </ul>
    )
}

export default FavoritesButton;

// {
//     recipe.map((item, index) => 
//     <form className="recipeContainer" key={index} onSubmit={(e) => {
//      e.preventDefault();
//      // onSubmit({ name, score });
//      // clear();
//  }}>
//         <p>{item.hits}</p>
//         <p>{item.label}<button onClick={() => addFavorite(item)}className="favoritesButton"><img src={favoritesHeart} ></img></button></p>
//         <p>Cuisine Type: {item.cuisineType}</p>
//         <p>{item.healthLabels[0]}, {item.healthLabels[1]}, {item.healthLabels[2]}</p>
//         <img src={item.thumbNail}></img>
//         <div className="detailsContainer">
//              <Link to={item.label}>More Details</Link>
//              <p></p>

//              <a target='_blank' href={item.url}>Full recipe</a>
//              <p></p>

//              {/* May Move favoritesHeart next to the recipe title, for ease of use */}
//         </div>
//     </form>)
 
     
//     }