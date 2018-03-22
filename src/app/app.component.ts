import { Component } from '@angular/core';
import { CartItem } from './model/cart-item';
import { ViewService } from './services/view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public viewService: ViewService) {}
}
