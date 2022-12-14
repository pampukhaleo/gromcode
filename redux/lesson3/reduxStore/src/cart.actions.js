export const ADDPRODUCT = 'PRODUCT_ADD';
export const DELETEPRODUCT = 'PRODUCT_DELETE';

export const addProduct = productData => ({
  type: ADDPRODUCT,
  payload: {
    productData,
  },
});

export const removeProduct = productId => ({
  type: DELETEPRODUCT,
  payload: {
    productId,
  },
});
