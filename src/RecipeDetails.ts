import  { RecipeItem } from "./GetRecipe";

export interface RecipeDetails extends RecipeItem {
    calories: number;
    dishType: string;
    ingredients: string;
}
