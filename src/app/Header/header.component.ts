import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent{

    @Output() featureSelected = new EventEmitter<string>();

    public onSelect(feature: string){
        this.featureSelected.emit(feature)

    }
    
}