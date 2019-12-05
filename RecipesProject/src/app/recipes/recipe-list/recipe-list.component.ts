import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','this is simply a test','https://live.staticflickr.com/5636/21308906279_bbfd0609f3_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
