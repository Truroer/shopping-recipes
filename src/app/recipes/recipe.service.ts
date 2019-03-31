import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe #1",
      "this is a test",
      "https://images.media-allrecipes.com/images/58722.jpg?width=170&height=96",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A test recipe #2",
      "this is a test",
      "https://images.media-allrecipes.com/images/58722.jpg?width=170&height=96",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
