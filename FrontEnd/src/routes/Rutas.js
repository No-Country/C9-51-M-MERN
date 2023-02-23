import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation"
// import ProductsSearch from "../components/ProductsSearch"  /* Sacar de las rutas, colocar buscador en navbar y resultados aqui luego de navigation */
import CardList from "../components/CardList"
import Description from "../components/Description"
import CargaTarjeta from "../components/CargaTarjeta"
import TarjetaCD from "../components/TarjetaCD"
import Main from "../components/Main"
import Login from "../components/Login"
// import Nosotros from "../components/Nosotros"
// import Contacto from "../components/Contacto"
// import ShoppingCart from "../components/shopping/ShoppingCart"
// import Error404 from "../components/Error404"
// import Footer from "../components/Footer";
import Register from "../components/Register"


const Rutas = () => {

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/products" element={<CardList/>}/>
                <Route path="/description" element={<Description/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tarjetacd" element={<TarjetaCD/>}/>
                <Route path="/cargatarjeta" element={<CargaTarjeta/>}/>
                {/* 
                <Route path="/carro" element={<ShoppingCart/>}/>              
                <Route path="/compra" element={</>}/>
                <Route path="/endCompra" element={</>}/>
                <Route path="/detalleProducto" element={</>}/>            
                <Route path="*" element={<Error404/>}/>
            <Route path="*" element={<Error404/>}/>  */}
            </Routes>
            {/* <Footer />  */}
        </Router>
    )
}

export default Rutas