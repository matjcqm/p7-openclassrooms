import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Acommodation from "./pages/Accommodation/Accommodation"
import NotFound from "./pages/NotFound/NotFound"
import NavBar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

export default function App() {
    return(
        <>
        <div className={styles.container}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/accommodation/:id' element={<Acommodation />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>
        </div>
        <Footer />
        </>
    )
}