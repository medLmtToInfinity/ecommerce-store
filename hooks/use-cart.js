import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware"

const useCart = create(
        persist((set, get) => ({
        items: [],
        addItem: (data) => {
            const currentItems = get().items;
            const existingItem = currentItems.find(item => item.id === data.id);
            if(existingItem) toast("Product Already in Cart!");
            else {set({items: [...get().items, data]}); toast.success("Item added to Cart")}
        },
        removeItem: (id) => {
            set({items: [...get().items.filter(item => item.id !== id)]})
            toast.success("Item Removed from Cart.");
        },
        removeAll: () => set({items: []})
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
}));

export default useCart;