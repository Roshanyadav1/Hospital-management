import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../Services/post";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
    middleware: (curryGetDefaultMiddleware) =>
      curryGetDefaultMiddleware().concat(postApi.middleware),
})
// 

setupListeners(store.dispatch)