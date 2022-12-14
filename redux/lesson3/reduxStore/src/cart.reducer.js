import { ADDPRODUCT, DELETEPRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };
    case DELETEPRODUCT:
      const newState = state.products.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        products: newState,
      };
    default:
      return state;
  }
};

export default cartReducer;
