import { Route } from '@mui/icons-material';
import React from 'react'
import {BrowserRouter, Router} from 'react-router-dom';
import Navbar from "/Navbar"
import login from "./login";
import Home from './dashboard/page';

const Home =() => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Route path="/login">
            <login/>
            </Route>
        
        </BrowserRouter>
    )
}

export default Home
