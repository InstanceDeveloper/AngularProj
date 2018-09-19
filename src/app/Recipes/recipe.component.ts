import { Component } from "@angular/core";
import { Recipe } from "src/app/Recipes/recipe.model";


@Component({
    selector: "recipe",
    templateUrl: "./recipe.component.html"
})

export class RecipeComponent{
    selectedRecipe: Recipe;
    
    constructor(){}

}