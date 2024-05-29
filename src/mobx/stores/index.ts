import cartStore, { CartStore } from "@/mobx/stores/cartStore";

export type RootStore = {
  cartStore: CartStore;
};

const rootStore: RootStore = {
  cartStore,
};

export default rootStore;
