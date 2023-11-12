"use client";
import React from "react";
import { Provider } from "react-redux";
import Store from "./store";

const CustomProvider = ({ children }) => {

    console.log("Store" , Store.getState())
    return <Provider store={Store}>{children}</Provider>;
};

export default CustomProvider;