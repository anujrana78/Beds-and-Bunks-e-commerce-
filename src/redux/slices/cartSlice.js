import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: null,
  totalQuantity: 0,
  deleteLater:null
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!exisitingItem) {
        state.items.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.image,
          category: newItem.category,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice =
          Number(exisitingItem.price) + Number(newItem.price);
      }
    state.totalAmount = state.items.reduce((total,item) => {
        return total + Number(item.price) * Number(item.quantity)
    },0)
    }, 
    remove : (state,action) => {

    const newItem = action.payload  
    const existingCartItemIndex = state.items.findIndex((item) => item.id === newItem)
    let exisitingItem = state.items[existingCartItemIndex]
      // let updatedItems


    if(exisitingItem.quantity === 1){
        state.items = state.items.filter((item) => item.id !== newItem)
        state.totalQuantity--
    }
    else{
      let updatedItem = {...exisitingItem, quantity : exisitingItem.quantity--}
      state.totalQuantity--
    }
    state.totalAmount = state.items.reduce((total,item) => {
      return total + Number(item.price) * Number(item.quantity)
  },0)
    
    
  }
  },
 
});

export const { add,remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
