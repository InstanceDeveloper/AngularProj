import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Recipe } from './../recipe.model';

@Component({
    selector: "recipe-list",
    templateUrl: "./recipe-list.component.html"
})

export class RecipelistComponent implements OnInit{

    @Output() recipeWasSelected = new EventEmitter<Recipe>();

      public recipe = [
        new Recipe("A Test Recipe", "This is simply a Test", "https://images.media-allrecipes.com/images/56589.png"),
        new Recipe("A Test Recipe", "This is simply a Test", "https://images.media-allrecipes.com/images/56589.png")
    ];
    constructor(){}

    ngOnInit(){}

    public onRecipeSelected(recipe: Recipe){
        this.recipeWasSelected.emit(recipe);
    }

}