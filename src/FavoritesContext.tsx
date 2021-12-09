import RecipeItem from './InterfaceRecipeItem'
import { createContext } from 'react'

interface FavoritesContextModel {
    favorites: RecipeItem[];
    addFavorite: (item: RecipeItem) => void;
    removeFavorite: (item: number) => void;
}

const defaultValue: FavoritesContextModel = {
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {}
}



const FavoritesContext = createContext(defaultValue);

export default FavoritesContext;