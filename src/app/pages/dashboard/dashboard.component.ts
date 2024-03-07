import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../../shared/models/product.model';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  productsObservable$: Observable<SingleProduct[]>;
  control = new FormControl('');

  constructor(private activatedRoute: ActivatedRoute) {
    this.productsObservable$ = this.activatedRoute.data.pipe(
      map((data) => data['products']),
    );
  }

  ngOnInit() {
    //this.productServ.fetchAllProducts().subscribe((res) => console.log(res));
  }
}
