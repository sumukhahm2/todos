import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../reduxstore/todoListSlice'
const store=configureStore({
    reducer:{todos:todoReducer}
})

export default store