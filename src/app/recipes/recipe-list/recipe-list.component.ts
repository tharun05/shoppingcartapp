import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'digital-lync', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'flowers', 'https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg'),
    new Recipe('A Test Recipe', 'gachibowli', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    
  ];

  constructor() {
    console.log(this.recipes);
   }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
