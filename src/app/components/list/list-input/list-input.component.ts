import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {
  @ViewChild('itemNameInput') public inputFromHtml: ElementRef;
  @Output() public newItem: EventEmitter<string> = new EventEmitter<string>();

  public isSubmitButtonDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  addItem(name: string): void {
    this.newItem.emit(name);
    this.inputFromHtml.nativeElement.value = '';
    this.checkButton();
  }

  checkButton() {
    this.isSubmitButtonDisabled = this.inputFromHtml.nativeElement.value.length === 0;
  }


}
