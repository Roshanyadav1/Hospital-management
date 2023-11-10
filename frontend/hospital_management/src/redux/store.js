"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from "../service/user";

const store = configureStore({
    reducer: {
        // userInfo: user,
        [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});
setupListeners(store.dispatch)

export default store;

