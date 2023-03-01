import {HiOutlineShoppingCart} from 'react-icons/hi';
import styled from "styled-components";
import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"
import CartView from './CartView/CartView';
import CardDetail from './CardDetail/CardDetail';




const Card = ({ product }) => {

    const { addToCart} = useContext(ProductsContext)

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    /* ***** Estados del ModalAddCart ***** */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const {_id, name , description, image, price} = product

    return (
        <>
            <CardContainer onClick={openModal}>
                <div onClick={()=><CardDetail/> }>
                    <img src={image} alt={name} style={{ width: '100%' }} />
                    <Nombres>
                        <Nombre>{name}</Nombre>
                        <Tipo>{description}</Tipo>
                    </Nombres>
                    <PrecioS>$ <p>{price}</p></PrecioS>
                </div>
                
                <ContainerButt>
                    <Link to="/form" className='link' > Comprar</Link>
                    <AddProduct onClick={()=>{<CartView/>; addToCart(_id); handleShow()}}> Agregar al Carrito</AddProduct>
                </ContainerButt>  
            </CardContainer>

            <Modal key={_id} show={show} onHide={handleClose} backdrop="static" keyboard={false} 
                style={{height: '370px', zIndex: 9999}}>
                    <ModHeader  closeButton>
                    ¡El producto fue añadido con éxito!
                    </ModHeader>
                    <Modal.Body>
                        <ModBody>
                            <ModImg src={image} alt={name} />
                            <ModText>
                                <Nombre><ModText>{name}</ModText></Nombre>
                                <Tipo><ModText>{description}</ModText></Tipo>
                                <ModPrecio>$<p>{price} x 1</p></ModPrecio>
                            </ModText>
                        </ModBody>
                    </Modal.Body>
                    <Modal.Footer >
                        <Link to="/cart" className="modCart" onClick={handleClose} >
                            <ButtonCart variant="secondary" >
                                VER CARRITO
                            </ButtonCart>
                        </Link>
                        <Link to="/products" className="modCart" onClick={handleClose} >
                            <ButtonShop variant="primary" >
                                CONTINUAR COMPRANDO
                            </ButtonShop>
                        </Link>
                    </Modal.Footer>
            </Modal>
        </>
    )
}
export default Card



/**** Styles Container ****/
const CardContainer = styled.figure`
    width: 310px;
    height: 423px;
    background: #FFFFFF;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 20px;
    padding: 35px 20px 20px 20px;
    cursor: pointer;
`

/**** Styles Cards ****/
// const CardFigcaption = styled.figcaption`
// position: relative;
// top:-20px;
// width:100%;
// height: 35rem;
// display: flex;
// flex-direction: column;
// align-items: center;
// font-weight: bold;
// padding-bottom: 0.1rem;


// &:hover svg{
//     fill: var(--orange);
// }
// `

// const Favorito = styled.div`
//     fill: transparent;
//     cursor: pointer;
//     height: 45px;
//     width: 45px;
//     padding-top: 10px;
//     position: relative;
//     left: 100px;
//     top: 30px;
//     z-index: 30;
//     transition: all 300ms;

//     &:active {
//         transform: scale(1.25, 1.25);
//         transition: transform .2s;
//     }
// `
const Nombres = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`
const Nombre = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #181818;
`
const Tipo = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #181818;

`
const PrecioS = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 45px;
text-align: center;
color: #181818;
top: -10px;
display: flex;
justify-content: center;
    

  p{
    font-weight: 400;
    font-size: 28px;
    padding-top: -28px;

  }
    /* color: var(--orange);
    font-family: 'Righteous', cursive;
    font-size: 15px;
    display: flex;
    align-items: center;
    position: relative;
     */
`

// const Precio = styled.p`
//     font-weight: 600;
//     font-size: 28px;
//     padding-top: 5px;
// `


/**** Styles Modal *****/
const ModalArticle = styled.article`
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: var(--dark35);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.div`
    position: relative;
    background-color: white;
    box-sizing: content-box;
    width: 35rem;
    height: 83vh;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.15rem solid var(--orange);
    border-radius: 1rem;
    justify-content: space-evenly;
    background-color: ${props => props.bgColor};
`

const ModalClose = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--beige);
    border-radius: 5px;
    border-color: var(--orange75);
    color: var(--orange75);
    font-weight: bold;
`
const Img = styled.img`
    width: 250px;
`
const PrecioModS = styled.p`
    color: ${props => props.colorPrecio};
    font-family: 'Righteous', cursive;
    font-size: 15px;
    display: flex;
    align-items: center;
    position: relative;
    top: -10px;

    p{
        font-weight: 600;
        font-size: 28px;
        padding-top: 5px;
  }
`
const Info = styled.p`
    position: relative;
    top: -30px;
    font-size: 16px;
    font-family: 'Satisfy', cursive;
    margin: 0px 30px;
`
const ContainerButt= styled.div`
    display: flex;
    flex-direction: row;

    .link{
        text-decoration: none;
        background: #D9D9D9;
        border-radius: 5px;
        color:white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #000000; 
        padding: 7px 0; 
        margin-right:7px;
        position: relative;
        top: -10px;
        border: none;
        width: 99px;
        height:36px;
        text-align: center;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);

        @media screen and (min-width: 1024px){
        &:hover{background-color: #999898 !important;}}

        &:active {
            background-color: var(--orange) !important;
            box-shadow: none;
            transform: translateY(4px);}
        }
`
const AddProduct= styled.button`
    background: var(--orange);
    border-radius: 5px;
    color:white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff; 
    margin-left:7px;
    position: relative;
    top: -10px;
    border: none;
    width: 162px;
    height:36px;
    text-align: center;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.2), 0 3px 3px 0 rgba(0,0,0,0.19);

    @media screen and (min-width: 1024px){
    &:hover{background-color: var(--liOrange) !important;}}

    &:active {
        background-color: var(--orange) !important;
        box-shadow: none;
        transform: translateY(4px);}
`

/**** Styles ModalAddCart ****/
const ModHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 15px;
    color: var(--dark80);
    font-family: 'poppins';
    font-size: 20px;
    font-weight: 800;
    
`
const ModBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    text-align: center;
    margin: 0px 30px;
`
const ModText = styled.p`
    text-align: center;
    padding: auto;
    margin: auto;
    color: var(--dark65);
`
const ModPrecio = styled.p`
    font-family:'Satisfy', cursive;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;

   p{
    font-size: 18px;
    padding: 5px;
    position: relative;
    top: -5px;
   }
`
const ModImg = styled.img`
    width: 180px;
    height: auto;
` 
const ButtonCart = styled.button`
    color:white;
    background-color: var(--orange);
    margin: 10px;
    padding: 5px;
    border-radius: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    text-align: center;
    width:auto;
    height: 28px;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:hover{background-color: #999898 !important;}}

  &:active {
    background-color: var(--orange) !important;
    box-shadow: none;
    transform: translateY(4px);}
`
const ButtonShop = styled.button`
    margin: 10px;
    padding: 5px;
    border-radius: 0.5rem;
    border: 1px solid var(--orange);
    color: var(--orange) ;
    background-color: var(--beige);
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    text-align: center;
    width:auto;
    height: 28px;
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 12px 0 rgba(0,0,0,0.19);

  @media screen and (min-width: 1024px){
  &:hover{background-color: #999898 !important;
   color: var(--beige) ;
   border: 1px solid #999898;}

  &:active {
    background-color: var(--orange) !important;
    box-shadow: none;
    transform: translateY(2px)}
  }
`

