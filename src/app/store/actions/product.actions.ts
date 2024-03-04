import { createAction, props } from '@ngrx/store';
import { SingleProduct } from '../../shared/models/product.model';

export const loadAllProducts = createAction(
  '[Product Reducer] loadAllProducts',
);
export const productsLoaded = createAction(
  '[Product Effects] productsLoaded',
  props<{ products: SingleProduct[] }>(),
);
