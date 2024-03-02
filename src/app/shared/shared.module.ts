import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { LibraryModule } from '../lib/library.module';
import { BubbleWrapperComponent } from './components/bubble-wrapper/bubble-wrapper.component';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BubbleWrapperComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    LibraryModule,
    NgIconsModule.withIcons({}),
  ],
  exports: [HeaderComponent, FooterComponent, BubbleWrapperComponent],
})
export class SharedModule {}
