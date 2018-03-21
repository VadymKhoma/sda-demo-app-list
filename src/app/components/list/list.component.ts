import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public shopingList: CartItem[];
  @Input() public listName: string;
  @Input() public magicNumber = 42;

  constructor() { }

  ngOnInit() {
  }

  removeElement(element: CartItem): void {
    this.shopingList = this.shopingList.filter((item) => {
      return item !== element;
    });
  }
}
