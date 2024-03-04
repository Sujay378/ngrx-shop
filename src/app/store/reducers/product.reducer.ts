import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { SingleProduct } from '../../shared/models/product.model';
import { createReducer, on } from '@ngrx/store';
import { productsLoaded } from '../actions/product.actions';

export interface ProductState extends EntityState<SingleProduct> {
  // additional entities state properties
}

export const adapter: EntityAdapter<SingleProduct> =
  createEntityAdapter<SingleProduct>();

const intialState = adapter.getInitialState();

export const productReducer = createReducer(
  intialState,
  on(productsLoaded, (state, action) => {
    return adapter.setAll(action.products, state);
  }),
);
