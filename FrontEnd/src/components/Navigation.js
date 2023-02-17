import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logoNav from "../assets/images/LogoNav.webp"
import {BsBoxSeam} from "react-icons/bs"
import {IoPersonOutline} from "react-icons/io5"
import {FiShoppingCart} from "react-icons/fi"
import ProductsSearch from './ProductsSearch'
// import BotonHamburguesa from "./BotonHamburguesa"
// import Contador from "./Contador"



const Navigation = () => {

    const [expand, setExpand] = useState(false)
  

    return (
      <NavContainer>
  
        <LogoContainer>
          <NavLink to="/" className="navItem">
            <img src={logoNav} alt="Nutril Boost" />
          </NavLink>
        </LogoContainer>
  
        <LinksContenedor open={expand}>

          <ProductsSearch /> 
  
          <NavLink to="/bebidas" className="navItem" onClick={() => setExpand(!expand)}>
            <BsBoxSeam/> Productos</NavLink>
  
          <NavLink to="/nosotros" className="navItem" onClick={() => setExpand(!expand)}>
            <IoPersonOutline/> Mi cuenta</NavLink>
  
          <NavLink to="/gift" className="navItem" onClick={() => setExpand(!expand)}>
            <FiShoppingCart/> Carrito</NavLink>
  
        </LinksContenedor>
  
  
        <IconosContenedor >
          <NavLink to="/login"><i className="fa-solid fa-user" ></i></NavLink>
          <div>
          <NavLink to="/carro"><i className="fa-solid fa-cart-shopping carrito" ></i></NavLink>
            {/* <Contador></Contador> */}
          </div>
          
          <div onClick={()=> setExpand (!expand)}>
            {/* <BotonHamburguesa /> */}
          </div>
        </IconosContenedor>

      </NavContainer>
    )
  }
  
  export default Navigation
  
  const NavContainer = styled.nav`
      background-color: #181818;
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      width: 1440px;
      height: 140px;
      
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 1%;
     
    `;
  
  const LogoContainer = styled.div`
      width: 207px;
      height: 90px;
      position: absolute;
      left: 10px;
      top: 25px;
      
  
      img{
        object-fit: scale-down;
        position: relative;
        left: 30%;    
        top: 5%;
      }
    `;
  
  const LinksContenedor = styled.div`
      position: relative;
      left: ${({ open }) => (open ? "0" : "-100%")};
      display: flex;
      align-items: flex-end; 
      gap: 35px ;
      transition: 0.5s all ease;
      z-index:9999;

        .navItem {
          text-decoration: none;
          font-family: var(--title-font);
          text-transform: uppercase;
          font-weight: bold;
          color: var(--beige);
          text-align: center;
          font-size: 20px;
          /* padding: 15px 0; */
          z-index: 2;
          transition: all 1s ease-in-out ;
        }
        
        @media (min-width:768px){
          .navItem{
            /* padding: 25px 0; */
            font-size: 2rem;
          }
        }
          @media (min-width: 1200px){
            .navItem{
              /* padding: 25px 0; */
              font-size: 2.3rem;
          }
        }

        .navItem:hover{
          color: var(--beige);
          text-decoration: underline;
        }

        .active{
          text-decoration: underline;
        }
        
        @media (min-width:768px){
          .navItem{
            /* padding: 25px 0; */
            
          }
        }
              
      @media screen and (min-width: 768px){
        position: initial;
        height: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        /* padding: 0.5rem; */
        top: 0vh;
        background-color: transparent; 
       
      }
  
      @media screen and (min-width: 1200px){
        /* padding: 0.8rem; */
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
  