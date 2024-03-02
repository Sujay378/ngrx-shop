import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';

enum Fills {
  yellow = '#yellow',
  partial = '#partial',
  white = '#white',
}

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent implements OnInit {
  @Input() rating: number = 0;
  @Input() max: number = 5;
  stars: string[] = [];

  ngOnInit(): void {
    const absolutePortion = Math.floor(this.rating);

    Array.from({ length: absolutePortion }, () =>
      this.stars.push(Fills.yellow),
    );

    if (absolutePortion === this.max) return;

    if (this.rating - absolutePortion !== 0) this.stars.push(Fills.partial);

    Array.from({ length: this.max - this.stars.length }, () =>
      this.stars.push(Fills.white),
    );
  }
}
