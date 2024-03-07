import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { NgIconsModule } from '@ng-icons/core';
import {} from '@ng-icons/heroicons';
import { StarRatingModule } from 'angular-star-rating';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  declarations: [
    RatingsComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule,
    StarRatingModule.forRoot(),
  ],
  exports: [
    RatingsComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
  ],
})
export class LibraryModule {}
