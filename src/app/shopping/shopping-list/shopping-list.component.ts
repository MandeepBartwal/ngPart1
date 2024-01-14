import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/models/ingridents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingridents: Ingredient[] = [
    new Ingredient('Apples', '5'), 
    new Ingredient('Tomatoes', '5'),  ];
  ngOnInit(): void {

  }
}
