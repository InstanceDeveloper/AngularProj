import { Component, Input } from "@angular/core";
import { Recipe } from "src/app/Recipes/recipe.model";

@Component({
    selector: "recipe-detail",
    templateUrl: "./recipe-detail.component.html"
})

export class RecipedetailComponent{
    @Input() recipe: Recipe;
}