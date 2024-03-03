import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnTypes } from '../../models/button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() id: string = '';
  @Input() type: BtnTypes = 'primary';
  @Input() text: string = '';
  @Input() classList: string = '';

  @Output() buttonClicked = new EventEmitter<Event>();
  @Output() buttonPressed = new EventEmitter<Event>();

  classNames: string = '';

  ngOnInit(): void {
    switch (this.type) {
      case 'primary':
        this.classNames =
          'w-full rounded-xl bg-blue-800 px-4 py-1 text-center text-white hover:bg-blue-500 ' +
          this.classList;
        break;
      case 'secondary':
        this.classNames =
          'w-full rounded-xl border-2 border-blue-800 bg-white px-4 py-1 text-center text-blue-800 hover:bg-blue-800 hover:text-white ' +
          this.classList;
        break;
      case 'rounded':
        this.classNames =
          'w-full rounded-full bg-blue-800 px-4 py-1 text-center text-white hover:bg-blue-500 ' +
          this.classList;
        break;
      case 'goback':
        this.classNames = '' + this.classList;
        break;
      default:
        this.classNames = '' + this.classList;
    }
  }

  onClick(event: Event) {
    this.buttonClicked.emit(event);
  }
  onKeyPress(event: Event) {
    this.buttonPressed.emit(event);
  }
}
