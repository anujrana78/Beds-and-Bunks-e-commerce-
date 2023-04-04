import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : []
}
const wishlistSlice = createSlice({
    name : "wishlist",
    initialState,
    reducers : {
        addToWishlist : (state,action) => {
            state.items = state.items.concat(action.payload)
            console.log(state.items)
        },
        removeFromWishlist : (state,action) => {
            // state.items = state.items.findIndex((item) => item.id === action.payload)
            // console.log(state.items)
        }
    }

})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions 
export const wishlistReducer = wishlistSlice.reducer