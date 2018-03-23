import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit {
  @ViewChild('itemNameInput') public inputFromHtml: ElementRef;

  public isSubmitButtonDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  addItem(name: string): void {
    console.log(name);
  }

  checkButton() {
    this.isSubmitButtonDisabled = this.inputFromHtml.nativeElement.value.length === 0;
  }


}
