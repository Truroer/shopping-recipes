import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { NgModule } from "@angular/core";

const recipesRoutes: Routes = [
  {
    path: "",
    component: RecipesComponent,
    children: [
      { path: "", component: SelectRecipeComponent, pathMatch: "full" },
      { path: "new", component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ":id", component: RecipeDetailComponent },
      {
        path: ":id/edit",
        component: RecipeEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
