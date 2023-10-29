"use client";

import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";
import { Hospital } from "@/services/Hospital";

const Store = configureStore({
    reducer: {
        userInfo: user,
        [Hospital.reducerPath]: Hospital.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Hospital.middleware),
});

export default Store;