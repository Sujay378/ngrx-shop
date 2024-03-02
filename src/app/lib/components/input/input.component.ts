import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ControlEvent, InputEvent } from '../../models/input.type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit, AfterViewInit {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formControl: FormControl = new FormControl('');
  @Input() parentForm: FormGroup = new FormGroup({
    default: this.formControl,
  });
  @Input() formControlName: string = 'default';
  @Input() validators: ValidatorFn[] = [];

  @Output() controlReady = new EventEmitter<ControlEvent>();
  @Output() changeEvent = new EventEmitter<InputEvent>();
  @Output() focusEvent = new EventEmitter<InputEvent>();
  @Output() blurEvent = new EventEmitter<InputEvent>();

  ngOnInit(): void {
    const parentValidator = this.parentForm.get(
      this.formControlName,
    )?.validator;
    parentValidator && this.validators.push(parentValidator);
    this.formControl.addValidators(this.validators);
  }

  ngAfterViewInit(): void {
    this.controlReady.emit({
      id: this.id,
      label: this.label,
      formControlName: this.formControlName,
      formControl: this.formControl,
    });
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
