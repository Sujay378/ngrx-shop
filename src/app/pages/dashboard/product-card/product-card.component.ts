import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: {
    thumbnail: string;
    company: string;
    title: string;
    rating: number;
    description: string;
    price: number;
  } = {
    thumbnail: '/assets/images/product.jpg',
    company: 'Apple',
    title: 'Iphone Naam shuna nahi to mar ja',
    rating: 3.5,
    description: 'Bacha hi kya hein descride karneko jante hi hogey tum',
    price: 100000,
  };
}
