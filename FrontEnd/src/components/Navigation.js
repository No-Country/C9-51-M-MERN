import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logoNav from "../assets/images/LogoNav.webp"
// import Modal from "./Modal"
// import Login from "./Login"

// import BotonHamburguesa from "./BotonHamburguesa"
// import Contador from "./Contador"



const Navigation = () => {
  // const [show, setShow] = useState(false);
    const [expand, setExpand] = useState(false)
  

    return (
      <NavContainer>
        <LogoContainer>
          <NavLink to="/" className="navItem">
            <img src={logoNav} alt="Nutril Boost" />
          </NavLink>
        </LogoContainer>
  
        <LinksContenedor open={expand}>
          {/* <ProductsSearch />  */}
  
          <NavLink to="/products" className="navItem" onClick={() => {setExpand(!expand); }}>
            <svg width="30" height="30" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.3999 0L24.3999 5.78087V20.233L12.3999 26L0.399902 20.233V5.78087L12.3999 0ZM21.4143 6.33672L12.3999 2.00107L8.92394 3.66863L17.8807 8.03207L21.4143 6.33672ZM12.3999 10.6724L15.8326 9.0326L6.86144 4.66916L3.38548 6.33672L12.3999 10.6724ZM2.24606 7.78194V19.1213L11.4768 23.5681V12.2288L2.24606 7.78194ZM13.323 23.5681L22.5537 19.1213V7.78194L13.323 12.2288V23.5681Z" fill="black"/>
            </svg> Productos</NavLink>
  
          <NavLink to="/login" className="navItem" onClick={() => setExpand(!expand)}>
            <svg width="30" height="30" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.2 14.625C17.6055 14.625 26.4 16.8025 26.4 21.125V26H0V21.125C0 16.8025 8.7945 14.625 13.2 14.625ZM13.2 0C14.9504 0 16.6292 0.684819 17.8669 1.90381C19.1046 3.12279 19.8 4.77609 19.8 6.5C19.8 8.22391 19.1046 9.87721 17.8669 11.0962C16.6292 12.3152 14.9504 13 13.2 13C11.4496 13 9.77083 12.3152 8.53309 11.0962C7.29535 9.87721 6.6 8.22391 6.6 6.5C6.6 4.77609 7.29535 3.12279 8.53309 1.90381C9.77083 0.684819 11.4496 0 13.2 0ZM13.2 17.7125C8.2995 17.7125 3.135 20.085 3.135 21.125V22.9125H23.265V21.125C23.265 20.085 18.1005 17.7125 13.2 17.7125ZM13.2 3.0875C12.281 3.0875 11.3997 3.44703 10.7499 4.087C10.1001 4.72697 9.735 5.59495 9.735 6.5C9.735 7.40505 10.1001 8.27303 10.7499 8.913C11.3997 9.55297 12.281 9.9125 13.2 9.9125C14.119 9.9125 15.0003 9.55297 15.6501 8.913C16.2999 8.27303 16.665 7.40505 16.665 6.5C16.665 5.59495 16.2999 4.72697 15.6501 4.087C15.0003 3.44703 14.119 3.0875 13.2 3.0875Z" fill="black"/>
            </svg> Mi Cuenta</NavLink>

            {/* <Modal show={show} onClose={() => setShow(false)}>
              <Login show={show} onClose={() => setShow(false)} />
            </Modal> */}
  
          <NavLink to="/cart" className="navItem" onClick={() => setExpand(!expand)}>
            <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.80721 26C7.09155 26 6.47912 25.7456 5.96992 25.2369C5.45984 24.7273 5.20481 24.115 5.20481 23.4C5.20481 22.685 5.45984 22.0727 5.96992 21.5631C6.47912 21.0544 7.09155 20.8 7.80721 20.8C8.52287 20.8 9.13531 21.0544 9.64451 21.5631C10.1546 22.0727 10.4096 22.685 10.4096 23.4C10.4096 24.115 10.1546 24.7273 9.64451 25.2369C9.13531 25.7456 8.52287 26 7.80721 26ZM20.8192 26C20.1036 26 19.4911 25.7456 18.9819 25.2369C18.4719 24.7273 18.2168 24.115 18.2168 23.4C18.2168 22.685 18.4719 22.0727 18.9819 21.5631C19.4911 21.0544 20.1036 20.8 20.8192 20.8C21.5349 20.8 22.1478 21.0544 22.6578 21.5631C23.167 22.0727 23.4216 22.685 23.4216 23.4C23.4216 24.115 23.167 24.7273 22.6578 25.2369C22.1478 25.7456 21.5349 26 20.8192 26ZM6.70119 5.2L9.82408 11.7H18.9325L22.5108 5.2H6.70119ZM5.46505 2.6H24.6578C25.1566 2.6 25.5361 2.82187 25.7963 3.2656C26.0566 3.7102 26.0674 4.16 25.8289 4.615L21.2096 12.935C20.971 13.3683 20.6509 13.7042 20.2493 13.9425C19.8485 14.1808 19.4096 14.3 18.9325 14.3H9.23854L7.80721 16.9H23.4216V19.5H7.80721C6.83131 19.5 6.09396 19.0719 5.59517 18.2156C5.09638 17.3602 5.07469 16.51 5.53011 15.665L7.28673 12.48L2.6024 2.6H0V0H4.22891L5.46505 2.6Z" fill="black"/>
            </svg> Carrito</NavLink>  
        </LinksContenedor>
  
  
        <IconosContenedor >
          <NavLink to="/login"><i className="fa-solid fa-user" ></i></NavLink>
          <div>
          <NavLink to="/cart"><i className="fa-solid fa-cart-shopping carrito" ></i></NavLink>
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
      background-color: var(--dark);
      position: sticky;
      z-index: 999;
      /* left: 0%;
      right: 0%; */
      top: 0%;
      /* bottom: 0%; */
      width: 1440px;
      height: 140px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 1%;
      border-bottom: solid 0.3px var(--grey);
    `
  
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
          font-family: var(--poppins);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--grey);
          text-align: center;
          font-size: 20px;
          /* padding: 15px 0; */
          z-index: 2;
          transition: all 0.5s ease-in-out ;
          position: relative;
          top: -20px;

          svg{
            background-color: var(--dark);
            padding-right: 5px;
            position: relative;
            bottom: 3px;
            
          }
          
          svg path{
            size: 55px;
            fill: #ffffff;
          }
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
          text-decoration: dotted;
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
  