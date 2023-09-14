const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    else {
        return [];
    }
}
const saveCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);
}

const removeFromLS = (id) => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining);
}
export { addToLS, getStoredCart, removeFromLS }