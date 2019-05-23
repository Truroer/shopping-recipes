import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { ENV } from "../../../env";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private env: ENV,
    private authService: AuthService
  ) {}

  saveRecipesToServer() {
    const token = this.authService.getToken();
    this.http
      .put(
        this.env.DATABASE + "data.json" + "?auth=" + token,
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
    const token = this.authService.getToken();
    this.http.get(this.env.DATABASE + "data.json" + "?auth=" + token).subscribe(
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
