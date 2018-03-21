import { Component } from '@angular/core';
import { CartItem } from './model/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public telephones: CartItem[] = [
    {
      name: 'samsung s9+',
      price: 300,
    },
    {
      name: 'lg v30',
      price: 301,
    }
  ];

  public itStuff: CartItem[] = [
    {
      name: 'magic mouse',
      price: 200,
    },
    {
      name: 'ram 600 gb',
      price: 50,
    },
  ];

  public other: CartItem[] = [
    {
      name: 'potatoes',
      price: 10,
    }
  ];
}
