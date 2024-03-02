import { FormControl } from '@angular/forms';

export type InputEvent = Event & { target: HTMLInputElement };
export type ControlEvent = {
  id: string;
  label: string;
  formControlName: string;
  formControl: FormControl;
};
