import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar.jsx";
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import About from './pages/about.jsx';
import Footer from './components/footer.jsx';
import Cart from './pages/cart.jsx'
import Login from './pages/login.jsx';
import ProductDetail from './pages/product_detail.jsx';


const App = () => {
    return(
    <div className='px-4 sm:px-[5vw] md:px-[4vw] lg:px-[4vw]'>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart'  element={<Cart />} />
        <Route path='/login'  element={<Login/>} />
        <Route path='/shop/:id' element={<ProductDetail />} />
        </Routes>
        <Footer />
    </div>
    )
}
export default App
