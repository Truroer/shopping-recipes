import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  saveRecipesToServer() {
    this.http
      .put(
        "https://ng-http-a95a7.firebaseio.com/data.json",
        this.recipeService.getRecipes()
      )
      .subscribe(
        (response: Response) => {
          console.log(response);
        },
        err => console.log(err)
      );
  }
  fetchRecipesFromServer() {
    this.http.get("https://ng-http-a95a7.firebaseio.com/data.json").subscribe(
      (response: Response) => {
        let recipes = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe.ingredients = [];
          }
        }
        this.recipeService.updateRecipes(recipes);
        console.log(recipes);
      },
      err => console.log(err)
    );
  }
}
