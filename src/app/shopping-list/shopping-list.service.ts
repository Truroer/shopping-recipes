import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  updatedIngredients = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }
  onAddIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.updatedIngredients.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatedIngredients.next(this.ingredients.slice());
  }
}
