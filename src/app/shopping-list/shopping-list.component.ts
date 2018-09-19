import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component({
    selector: "shopping-list",
    templateUrl: "./shopping-list.component.html"
})

export class ShoppinglistComponent implements OnInit{
    ingredients =[
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10)
    ];

    constructor(){}

    ngOnInit(){}

    onIngredientAdded(ingredient: Ingredient){

        this.ingredients.push(ingredient)

    }
}