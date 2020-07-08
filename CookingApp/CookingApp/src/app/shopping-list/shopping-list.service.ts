import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShopplinglistService{

   ingredientCahnged = new EventEmitter<Ingredient[]>();

   private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }   

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.emitChanged();
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.emitChanged();

    }

    private emitChanged(){
        this.ingredientCahnged.emit(this.ingredients.slice());
    }


}