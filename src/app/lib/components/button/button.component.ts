import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnTypes } from '../../enums/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() id: string = '';
  @Input() type: BtnTypes = BtnTypes.PRIMARY;
  @Input() text: string = '';
  @Input() classList: string = '';

  @Output() buttonClicked = new EventEmitter<Event>();
  @Output() buttonPressed = new EventEmitter<Event>();

  primarySet: string = '';
  classNames: string = '';

  ngOnInit(): void {
    switch (this.type) {
      case BtnTypes.PRIMARY:
        this.classNames =
          'w-full rounded-xl bg-blue-800 px-4 py-1 text-center ' +
          this.classList;
        break;
      case BtnTypes.SECONDARY:
        this.classNames = '' + this.classList;
        break;
      case BtnTypes.ROUNDED:
        this.classNames =
          'w-full rounded-full bg-blue-800 px-4 py-1 text-center ' +
          this.classList;
        break;
      case BtnTypes.GOBACK:
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
