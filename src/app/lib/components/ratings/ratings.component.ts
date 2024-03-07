import { Component, Input } from '@angular/core';
import {
  starRatingColor,
  starRatingLabelPosition,
  starRatingSizes,
  starRatingStarTypes,
} from 'angular-star-rating/lib/interfaces/star-rating-config.interface';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  @Input() starType: starRatingStarTypes = 'svg';
  @Input({ required: true }) rating: number = 0;
  @Input() max: number = 5;
  @Input() editable: boolean = false;
  @Input() step: number = 1;
  @Input() showHalfStars: boolean = true;
  @Input() staticColor: starRatingColor = 'ok';
  @Input() labelPosition: starRatingLabelPosition = 'left';
  @Input() hoverEnabled: boolean = false;
  @Input() labelVisible: boolean = true;
  @Input() size: starRatingSizes = 'medium';
  @Input() disabled: boolean = false;
  getHalfStarVisible = (rating: number) => true;
}
