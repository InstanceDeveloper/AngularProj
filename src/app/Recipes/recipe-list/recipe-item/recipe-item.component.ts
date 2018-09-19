import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: "recipe-item",
    templateUrl: "./recipe-item.component.html"
})

export class RecipeitemComponent{

 @Input() recipe: Recipe;
 @Output() recipeSelected = new EventEmitter<void>();

 constructor(){

 }

 public onSelected(){
     this.recipeSelected.emit();
 }

    

}