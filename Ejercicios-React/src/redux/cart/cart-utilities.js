export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const resetShippingCost = (cartItems, shippingCost) => {
  if (cartItems.length === 1 && cartItems[0].quantity === 1) {
    return 0;
  }
  return shippingCost;
};
