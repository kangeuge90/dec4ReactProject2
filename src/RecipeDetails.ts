import  RecipeItem from "./InterfaceRecipeItem";

export interface RecipeDetails extends RecipeItem {
    calories: number;
    dishType: string;
    ingredients: string;
}
