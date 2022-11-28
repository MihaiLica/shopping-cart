export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    value: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE_PRODUCT",
    value: product,
  };
};
