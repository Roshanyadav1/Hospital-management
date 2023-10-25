"use client";

import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user";

const Store = configureStore({
    reducer: {
        userInfo: user,
    },
});

export default Store;