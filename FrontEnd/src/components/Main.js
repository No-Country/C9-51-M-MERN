import styled from "styled-components"
import CardList from "./CardList"

import Home from "./Home"



const Main = () => {
    return (
        <MainDiv>
            <Home />
            <CardList />
        </MainDiv>
        
    )
}

export default Main


const MainDiv = styled.main`
max-width: 100vw;

`