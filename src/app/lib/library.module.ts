import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [RatingsComponent, InputComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [RatingsComponent, InputComponent, ButtonComponent],
})
export class LibraryModule {}
