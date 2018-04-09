import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: any;

  /* Use the constructor for constants, like
   * values that are hard-coded into the componenent
   */
  constructor() { }

  /* Use the init method for everything that
   *  depends on external data
   */
  ngOnInit() {
  }

}
