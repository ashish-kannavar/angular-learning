import { Component } from '@angular/core';
import {Menuitem} from './menuitem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';
  menu = ['Taco', 'Pasta', 'Pizza', 'Fries', 'Waffle', 'Pancake']
  mnu :Menuitem[]=[
    {
      dish:'taco',
      category: 'lunch',
      price: 4
    },
    {
      dish:'Pasta',
      category: 'dinner',
      price: 12
    },
    {
      dish:'pizza',
      category: 'dinner',
      price: 5
    },
    {
      dish:'pancake',
      category: 'breakfast',
      price: 8
    },
    {
      dish:'ice cream',
      category: 'dessert',
      price: 3
    },
    {
      dish:'soda',
      category: 'drink',
      price: 2
    }
]
}
