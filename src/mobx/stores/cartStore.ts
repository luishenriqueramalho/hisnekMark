import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems: Array<{
    id: string;
    title: string;
    price: number;
    quantity: number;
  }> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item: { id: string; title: string; price: number }) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...item, quantity: 1 });
    }
  }

  removeItem(id: string) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  clearCart() {
    this.cartItems = [];
  }

  get totalItems() {
    return this.cartItems.length;
  }

  get totalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

export default new CartStore();
