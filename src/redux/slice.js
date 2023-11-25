import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "addData",
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            state.push(action.payload)
        },
        removeToCart: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { addTocart, removeToCart } = dataSlice.actions;
export default dataSlice.reducer