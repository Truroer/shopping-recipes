import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() toShow: Recipe;

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.toShow.ingredients);
  }

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
}
