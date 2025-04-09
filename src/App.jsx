import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import PageNotFound from "./componenten/pages/PageNotFound.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
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
