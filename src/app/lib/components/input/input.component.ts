import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlEvent, InputEvent } from '../../models/input.type';

export type InputTypes = 'form-control' | 'rounded-control';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() type: InputTypes = 'rounded-control';
  @Input({ required: true }) id!: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() formControl: FormControl = new FormControl('');
  @Input() formControlName: string = '';
  @Input() masked: boolean = false;

  @Output() controlReady = new EventEmitter<ControlEvent>();
  @Output() changeEvent = new EventEmitter<InputEvent>();
  @Output() focusEvent = new EventEmitter<InputEvent>();
  @Output() blurEvent = new EventEmitter<InputEvent>();

  classList: string = '';

  ngOnInit(): void {
    this.formControlName = this.formControlName || this.id;
    if (!this.parentForm.contains(this.formControlName))
      this.parentForm.addControl(this.formControlName, this.formControl);

    switch (this.type) {
      case 'form-control':
        this.classList =
          'w-full rounded-md border-[1px] border-stone-900 px-4 py-1 text-base outline-none ring-blue-200 ring-offset-2 ring-offset-white placeholder:text-stone-400 placeholder:text-sm focus:ring-1';
        break;
      default:
        this.classList =
          'w-full rounded-full border-[1px] border-stone-900 px-4 py-1 text-center text-base outline-none ring-blue-200 ring-offset-2 ring-offset-white placeholder:text-center placeholder:text-stone-400 placeholder:text-sm focus:ring-1';
    }
  }

  onChange(event: Event) {
    this.changeEvent.emit(event as InputEvent);
  }

  onFocus(event: Event) {
    this.focusEvent.emit(event as InputEvent);
  }

  onBlur(event: Event) {
    this.focusEvent.emit(event as InputEvent);
  }
}
