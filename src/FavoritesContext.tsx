import RecipeItem from './InterfaceRecipeItem'
import { createContext } from 'react'

interface FavoritesContextModel {
    favorites: RecipeItem[];
    addFavorite: (item: RecipeItem) => void;
}

const defaultValue: FavoritesContextModel = {
    favorites: [],
    addFavorite: () => {}
}



const FavoritesContext = createContext(defaultValue);

export default FavoritesContext;