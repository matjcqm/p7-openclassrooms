import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Acommodation from "./pages/Accommodation/Accommodation"
import NotFound from "./pages/NotFound/NotFound"
import NavBar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
    return(
        <div className="Routes">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/acommodation/:id' element={<Acommodation />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App