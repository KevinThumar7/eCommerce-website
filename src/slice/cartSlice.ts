import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface CartProduct {
    id: number;
    price: number;
    quantity: number;
    totalPrice: number;
    image: string;
    title: string
}

export interface CartState {
    products: CartProduct[];
    totalPrice: number;
    totalQuantity: number;
}

const initialState: CartState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ id: number; price: number; thumbnail: string; title: string }>) => {
            const newItem = action.payload;
            const existingItem = state.products.find(item => (item.id) === newItem.id);

            state.totalQuantity++;

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.thumbnail,
                    title: newItem.title
                });
            }

            state.totalPrice += newItem.price;
        },
        increase: (state, action: PayloadAction<{ id: number;}>) => {
            const { id } = action.payload;
            const item = state.products.find(p => p.id === id)
                if(item){
                    item.quantity++;
                    item.totalPrice += item.price;
                    state.totalPrice += item.price;
                    state.totalQuantity++;
                }

        },
        decrease: (state, action: PayloadAction<{ id: number;}>)=>{
            const {id} = action.payload;
            const item = state.products.find(p => p.id === id)
            if(item){
                item.quantity--;
                item.totalPrice -= item.price;
                state.totalPrice -= item.price;
                state.totalQuantity--;
            }
        },
        deleteItem: (state, action: PayloadAction<{ id: number;}>) => {
            const {id} = action.payload;
            const item = state.products.find(p => p.id === id)
            if(item){
                const newArray = state.products.filter(item=>item.id !== id)
                state.totalQuantity -= item.quantity
                state.totalPrice -= item.totalPrice
                state.products = newArray;
                item.quantity = 0
                item.totalPrice = 0;
            }
        },
        clearCart: (state)=>{
            state.totalQuantity = 0;
            state.totalPrice = 0;
            state.products = [];
        }
    },
});

export const { addToCart, increase , decrease , deleteItem , clearCart } = cartSlice.actions;

export default cartSlice.reducer;
