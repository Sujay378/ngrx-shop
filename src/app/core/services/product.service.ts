import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { HttpHeaders } from '@angular/common/http';
import { AllProductResponse } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpService) {}

  fetchAllProducts() {
    return this.http.get<AllProductResponse>('product', 'fetchAll');
  }

  fetchSingleProduct(id: string) {
    return this.http.get('product', 'fetchSingle', new HttpHeaders({}), { id });
  }
}
