import { Component } from '@angular/core';
import { BtnTypes } from '../../lib';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../../shared/models/product.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  btnTypes = BtnTypes;
  productsObservable$: Observable<SingleProduct[]>;
  constructor(
    private productServ: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.productsObservable$ = this.activatedRoute.data.pipe(
      map((data) => data['products']),
    );
  }

  ngOnInit() {
    //this.productServ.fetchAllProducts().subscribe((res) => console.log(res));
  }
}
