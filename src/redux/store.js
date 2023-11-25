import { configureStore } from "@reduxjs/toolkit"
import dataSlice from "./slice"
const store = configureStore({
    reducer: {
        custom: dataSlice
    }
})

export default store;