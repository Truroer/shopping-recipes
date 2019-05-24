import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { DataStorageService } from "./shared/data-storage.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { ENV } from "env";

// import { RecipesModule } from "./recipes/recipes.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    // RecipesModule,
    AuthModule,
    ShoppingListModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    ENV
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
