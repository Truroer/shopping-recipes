import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

const routes: Routes = [
  { path: "shoppinglist", component: ShoppingListComponent },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: SelectRecipeComponent, pathMatch: "full" },
      { path: "new", component: RecipeEditComponent, pathMatch: "full" },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "**", redirectTo: "/recipes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
