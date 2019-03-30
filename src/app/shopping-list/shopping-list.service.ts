import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  updatedIngredients = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatedIngredients.emit(this.ingredients.slice());
  }
}
