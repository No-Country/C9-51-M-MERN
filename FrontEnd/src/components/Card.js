import styled from "styled-components";
import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom"


const Card = ({ product }) => {

    const { addToCart} = useContext(ProductsContext)

    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    /* ** Estados del ModalAddCart ** */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const {id, nombre, precio, tipo, image} = product

    return (
        <>
            <CardContainer onClick={openModal}>
                <div>
                    <img src={image} alt={nombre} />
                    <Nombres>
                        <Nombre>{nombre}</Nombre>
                        <Tipo>{tipo}</Tipo>
                    </Nombres>
                    <PrecioS>$ <p>{precio}</p></PrecioS>
                </div>
                <ContainerButt>
                    <Link to="/form" className='link' > Comprar</Link>
                    <button className='cart' onClick={()=>{ addToCart(id); handleShow()}}> Agregar al Carrito</button>
                </ContainerButt>  
            </CardContainer>
            
            <div style={{backgroundColor:"var(--dark35)", }}>
                <Modal key={id} show={show} onHide={handleClose} backdrop="static" keyboard={false} 
                    style={{position:'absolute', zIndex:9999, top:'180px', right:'350px', backgroundColor:"#fff", borderRadius:'7px',
                    border:'1px solid black'  }}>
                        <ModHeader  closeButton>
                        ¡El producto fue añadido con éxito!
                        </ModHeader>
                        <Modal.Body style={{display:'flex', flexDirection:'column', alignItems:'center', width:'500px'}}>
                            <ModBody>
                                <ModImg src={image} alt={tipo} />
                                <ModText>
                                    <Nombre><ModText>{nombre}</ModText></Nombre>
                                    <Tipo><ModText>{tipo} -750ml</ModText></Tipo>
                                    <ModPrecio>$<p>{`${precio} x 1`}</p></ModPrecio>
                                </ModText>
                            </ModBody>
                        </Modal.Body>
                        <Modal.Footer>
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
            </div>
            {/* <Modal key={id} show={show} onHide={handleClose} backdrop="static" keyboard={false} 
                style={{height: '370px', zIndex: 9999}}>
                    <ModHeader  closeButton>
                    ¡El producto fue añadido con éxito!
                    </ModHeader>
                    <Modal.Body>
                        <ModBody>
                            <ModImg src={image} alt={nombre} />
                            <ModText>
                                <Nombre><ModText>{nombre}</ModText></Nombre>
                                <Tipo><ModText>{tipo}</ModText></Tipo>
                                <ModPrecio>$<p>{precio} x 1</p></ModPrecio>
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
            </Modal> */}
        </>
    )
}
export default Card



/** Styles Container **/
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
    padding: 30px ;
    cursor: pointer;

    div {
        
        img {
            height: 200px;
            display: block;
  margin: auto;          
        }
    }
    
`

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
margin: 10px 0;
    

  p{
    font-weight: 400;
    font-size: 28px;
    padding-top: -28px;
  }
`


/** Styles Modal ***/

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
    .cart{
        background: var(--orange);
        border-radius: 5px;
        color:white;
        cursor: pointer;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff; 
        margin-left:7px;
        padding: 7px 0;
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
        }
`

/** Styles ModalAddCart **/
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
    margin-bottom: 10px;

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
    cursor: pointer;
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
    cursor: pointer;
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