import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "src/app/Header/header.component";
import { RecipeComponent } from "src/app/Recipes/recipe.component";
import { ShoppinglistComponent } from "src/app/shopping-list/shopping-list.component";
import { RecipedetailComponent } from "src/app/Recipes/recipe-detail/recipe-detail.component";
import { RecipelistComponent } from "src/app/Recipes/recipe-list/recipe-list.component";
import { RecipeitemComponent } from "src/app/Recipes/recipe-list/recipe-item/recipe-item.component";
import { ShoppingeditComponent } from "src/app/shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppinglistComponent,
    RecipedetailComponent,
    RecipelistComponent,
    RecipeitemComponent,
    ShoppingeditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
