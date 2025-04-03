import { createSlice } from "@reduxjs/toolkit";
const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addIteam:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    }

    });
    export const {addIteam,removeItem,clearCart}=CartSlice.actions;
    export default CartSlice.reducer;
