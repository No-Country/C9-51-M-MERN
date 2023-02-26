import { NavLink } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
// import logoNav from "../assets/images/logoNav.webp"
import HamburgerButton from "./HamburgerButton"
// import Counter from "./Counter"




const NavBar = () => {

  const [expand, setExpand] = useState(false)

  return (
    <NavContenedor>

      <LogoContenedor>
        <NavLink to="/" className="navItem">
          <img src={logoNav} alt="Reight" height="90px" width="100px" /></NavLink>
      </LogoContenedor>

      <LinksContenedor open={expand}>

        <NavLink to="/bebidas" className="navItem" onClick={() => setExpand(!expand)}>
          Bebidas</NavLink>

        <NavLink to="/nosotros" className="navItem" onClick={() => setExpand(!expand)}>
          Nosotros</NavLink>

        <NavLink to="/gift" className="navItem" onClick={() => setExpand(!expand)}>
          Gift</NavLink>

        <NavLink to="/contacto" className="navItem" onClick={() => setExpand(!expand)}>
          Contacto</NavLink>

      </LinksContenedor>


      <IconosContenedor >
        <NavLink to="/login"><i className="fa-solid fa-user" ></i></NavLink>
        <div>
        <NavLink to="/carro"><i className="fa-solid fa-cart-shopping carrito" ></i></NavLink>
          {/* <Counter></Counter> */}
        </div>
        
        <div onClick={()=> setExpand (!expand)}>
          <HamburgerButton />
        </div>
      </IconosContenedor>

    </NavContenedor>
  )
}

export default NavBar

const NavContenedor = styled.nav`
    background-color: var(--orange);
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    position: relative;
  `;

const LogoContenedor = styled.div`
    width: 10rem;
    height: 7rem;

    img{
      object-fit: contain;
      height: 100%;
    }
  `;

const LinksContenedor = styled.div`

    background-color: var(--orange); 
    position: absolute;
    top: 10vh;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    padding: 10% 0;
    transition: 0.5s all ease;
    z-index:9999;
    
    @media screen and (min-width: 768px){
      position: initial;
      height: 100%;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 0.5rem;
      top: 0vh;
      background-color: transparent; 
     
    }

    @media screen and (min-width: 1200px){
      padding: 0.8rem;
    }
  `;


const IconosContenedor = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--dark);

  i{
    color: var(--beige);
    font-size: 2rem;

    @media screen and (min-width: 768px){
      font-size: 2rem;
    }

    @media screen and (min-width: 1200px){
      font-size: 2.3rem;
    }
  }

  `