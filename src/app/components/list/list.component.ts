import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public shopingList: CartItem[] = [
    {
      name: "samsung s9+",
      price: 300,
    }, 
    {
      name: "lg v30",
      price: 301,
    }, 
    {
      name: "magic mouse",
      price: 200,
    }, 
    {
      name: "ram 600 gb",
      price: 50,
    }, 
    {
      name: "potatoes",
      price: 10,
    }
  ];

  removeElement(element: CartItem): void {
    this.shopingList = this.shopingList.filter((item) => {
      return item !== element;
    })
  }
}
