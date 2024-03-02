import { Component } from '@angular/core';
import { BtnTypes } from '../../lib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  btnTypes = BtnTypes;
}
