import { ResolveFn } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { SingleProduct } from '../../shared/models/product.model';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';

export const productResolver: ResolveFn<Observable<SingleProduct[]>> = () => {
  const productServ = inject(ProductService);

  return productServ.fetchAllProducts().pipe(map((res) => res?.products || []));
};
