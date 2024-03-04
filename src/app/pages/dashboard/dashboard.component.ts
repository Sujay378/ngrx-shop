import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { SingleProduct } from '../../shared/models/product.model';
import { Observable, map } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  productsObservable$: Observable<SingleProduct[]>;
  form = new FormGroup({ search_query: new FormControl('') });
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
