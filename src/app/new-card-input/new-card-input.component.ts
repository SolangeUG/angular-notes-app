import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {debounceTime, filter, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.scss'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {
  private alive = true;
  newCardForm: FormGroup;

  @Output()
  onCardAdd = new EventEmitter<string>();

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'Enter' && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])]
    });

    this.newCardForm.valueChanges.pipe(
      filter(() => this.newCardForm.valid),
      debounceTime(500),
      takeWhile(() => this.alive)
    ).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }

}
