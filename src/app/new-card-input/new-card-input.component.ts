import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {

  public newCard: any = {text: ''};

  @Output()
  onCardAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCard.text.length > 0) {
      this.addCard(this.newCard.text);
    }
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCard.text = '';
  }

}
