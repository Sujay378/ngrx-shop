import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent implements OnInit {
  @Input({ required: true }) id: string = '';
  @Input() label: string = '';
  @Input() formControlName: string = 'default';
  @Input() parentForm: FormGroup = new FormGroup({});
  @Input() formControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.formControlName = this.formControlName || this.id;
    if (!this.parentForm.contains(this.formControlName))
      this.parentForm.addControl(this.formControlName, this.formControl);
  }
}
