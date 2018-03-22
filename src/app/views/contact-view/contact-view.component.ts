import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ViewService } from '../../services/view.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit, OnDestroy {
  @Output() public changeView: EventEmitter<string> = new EventEmitter<string>();
  public count = 0;
  private intervalId;

  constructor(public viewService: ViewService) { }

  ngOnInit() {
    console.log('ContactViewComponent', 'ngOnInit');
    this.intervalId = setInterval(() => {
      console.log('Licze', this.count++);
    }, 200);
  }

  ngOnDestroy(): void {
    console.log('ContactViewComponent', 'ngOnDestroy');
    clearInterval(this.intervalId);
  }

  openBlogView(): void {
    this.viewService.currentView = 'blogView';
  }

}
