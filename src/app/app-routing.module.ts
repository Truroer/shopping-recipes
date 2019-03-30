import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes: Routes = [
  { path: "shoppinglist", component: ShoppingListComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "**", redirectTo: "/recipes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
