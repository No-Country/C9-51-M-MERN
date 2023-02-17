import styled from "styled-components"
//import CardList from "./cards/CardList"
// import OwlCarrousel from "./OwlCarrousel"
// import Nosotros from "./Nosotros"
// import Oportunidades from "./Oportunidades"
import Home from "./Home"
import ProductsSearch from "./ProductsSearch"


const Main = () => {
    return (
        <MainDiv>
            <Home />
            {/* <CardList /> */}
            {/* <Nosotros /> */}
            {/* <OwlCarrousel />
            <Oportunidades/> */}
        </MainDiv>
        
    )
}

export default Main


const MainDiv = styled.main`
max-width: 100vw;

`