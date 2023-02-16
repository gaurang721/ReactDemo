import Home from '../Componets/Home'
import About from '../Componets/About'
import SiteHeader from '../Componets/SiteHeader'
import SiteFooter from '../Componets/SiteFooter'

import { Routes, Route } from 'react-router-dom';

function Router() {

    return (
        <>
            <SiteHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
            </Routes>
            <SiteFooter />
        </>
    )
}

export default Router