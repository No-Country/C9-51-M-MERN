import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation"
// import ProductsSearch from "../components/ProductsSearch"  /* Sacar de las rutas, colocar buscador en navbar y resultados aqui luego de navigation */
import CardList from "../components/CardList"
import CargaTarjeta from "../components/CargaTarjeta"
import TarjetaCD from "../components/TarjetaCD"
import Main from "../components/Main"
import Login from "../components/Login"
import Register from "../components/Register"
import Footer from "../components/Footer"
// import ShoppingCart from "../components/shopping/ShoppingCart"
// import Error404 from "../components/Error404"


const Rutas = () => {

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/products" element={<CardList/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tarjetacd" element={<TarjetaCD/>}/>
                <Route path="/cargatarjeta" element={<CargaTarjeta/>}/>              
               {/*<Route path="/description" element={<Description/>}/>*/}
                {/* <Route path="/carro" element={<ShoppingCart/>}/> */}
                {/* <Route path="*" element={<Error404/> */}
            </Routes>            
            <Footer />
        </Router>
    )
}

export default Rutas