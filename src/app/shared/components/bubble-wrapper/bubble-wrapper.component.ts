import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble-wrapper',
  templateUrl: './bubble-wrapper.component.html',
  styleUrl: './bubble-wrapper.component.scss',
})
export class BubbleWrapperComponent {
  @Input() classList: string = '';
}
