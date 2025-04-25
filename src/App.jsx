import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import PageNotFound from "./componenten/pages/pageNotFound.jsx";
import Home from "./componenten/pages/home.jsx";
import Layout from "./componenten/layout.jsx";
import Contact from "./componenten/pages/contact.jsx";
import Welcome from "./componenten/pages/welcome.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Welcome/>,
            },
            {
                path: '/home',
                element: <Home/>,
            },

            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '*',
                element: <PageNotFound/>,
            },
        ]
    }
]);


function App() {
    return <RouterProvider router={router}/>;
}

export default App
