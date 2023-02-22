import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "../components/Navigation"
import ProductsSearch from "../components/ProductsSearch"  /* Sacar de las rutas, colocar buscador en navbar y resultados aqui luego de navigation */
import Main from "../components/Main"
import CardList from "../components/CardList"
//import Login from "../components/Login"


// import Nosotros from "../components/Nosotros"
// import Gift from "../components/Gift"
// import Contacto from "../components/Contacto"
// import ShoppingCart from "../components/shopping/ShoppingCart"
// import Error404 from "../components/Error404"
// import Footer from "../components/Footer/Footer"
// import CardList from "../components/CardList"




const Rutas = () => {


    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/products" element={<CardList/>}/>
                {/* <Route path="/login" element={<Login/>}/> */}

                {/* 
                <Route path="/carro" element={<ShoppingCart/>}/>
                <Route path="/compra" element={</>}/>
                <Route path="/endCompra" element={</>}/>
                <Route path="/detalleProducto" element={<Nosotros/>}/>
                <Route path="*" element={<Error404/>}/>  */}
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}


export default Rutas