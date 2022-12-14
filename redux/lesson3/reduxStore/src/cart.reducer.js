import { ADDPRODUCT, DELETEPRODUCT } from './cart.actions';

const initialState = {
  cart: {
    products: [],
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        cart: {
          products: state.cart.products.concat(action.payload.productData),
        },
      };
    case DELETEPRODUCT:
      const newState = state.cart.products.filter(
        product => product.id !== action.payload.productId,
      );
      return {
        ...state,
        cart: {
          products: newState,
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
