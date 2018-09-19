import { Component, ViewChild, ElementRef, EventEmitter, Output } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: "shopping-edit",
    templateUrl: "./shopping-edit.component.html"
})

export class ShoppingeditComponent{
    
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    
    onAddItem(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;

        const newIngredient = new Ingredient(ingName, ingAmount);
        this.ingredientAdded.emit(newIngredient);
    }
}