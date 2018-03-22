import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private viewService: ViewService) { }

  ngOnInit() {
  }

  handleChangeView(name: string): void {
    this.viewService.currentView = name;
  }

}
