import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom'

import PageNotFound from "./componenten/pages/pageNotFound.jsx"
import Home from "./componenten/pages/home.jsx"
import Layout from "./componenten/layout.jsx"
import Contact from "./componenten/pages/contact.jsx"
import Welcome from "./componenten/pages/welcome.jsx"
import Projects from "./componenten/pages/projects.jsx"

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App
