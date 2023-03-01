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
import CardContainer from "../components/CartView/CardContainer"
import Nopassword from "../components/Nopassword"
import CardDetail from "../components/CardDetail/CardDetail.jsx"
import Form from "../components/Form"
import Alta from "../components/Alta"

const Rutas = () => {

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/products" element={<CardList/>}/>
                <Route path="/registro" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tarjetacd" element={<TarjetaCD/>}/>
                <Route path="/cargatarjeta" element={<CargaTarjeta/>}/>
                <Route path="/cart" element={<CardContainer/>}/>
                <Route path="/nopassword" element={<Nopassword/>}/>
                <Route path="/nopassword" element={<Nopassword/>}/>
                <Route path="/carddetail" element={<CardDetail />}/>
                <Route path="/form" element={<Form />}/>
                <Route path="/alta" element={<Alta />}/>
                {/* 
                <Route path="/carro" element={<ShoppingCart/>}/>              
                <Route path="/compra" element={</>}/>
                <Route path="/endCompra" element={</>}/>
                <Route path="/detalleProducto" element={</>}/>            
                {/* <Route path="/carro" element={<ShoppingCart/>}/> */}
                {/* <Route path="*" element={<Error404/> */}
            </Routes>
            <Footer />
            </Router>            
)}

export default Rutas