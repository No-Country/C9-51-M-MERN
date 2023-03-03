import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"
import styled from 'styled-components'
import { Link } from "react-router-dom"
import {IoTrashOutline} from 'react-icons/io5';




const CartItem = ({item}) => {

  const {delFromCart, addToCart } = useContext(ProductsContext)

  const {id, nombre, precio, quantity, tipo, image} = item


    return (
        <ItemCarrito>              

              <Image>
                  <img src={image} alt={nombre} height="110px" width="auto"/>
              </Image>
              <Text>
                <Nombre><Tit>{nombre} </Tit></Nombre>
                <Tipo><Text>{tipo}</Text></Tipo>
              </Text>
              <ContentTwo>
                <Cantidad>
                  <Precio > <p>$ {`${precio}`} un.</p></Precio>
                  <ButtonContainer>
                    <ButtonMenos  className="count" onClick={()=>delFromCart(id)}> - </ButtonMenos>
                    <ButtonCount className="count" >{`${quantity}`} </ButtonCount>
                    <ButtonMas className="count" onClick={()=>addToCart(id)}> + </ButtonMas>
                  </ButtonContainer>
                </Cantidad>

                <CounterContainer>
                  {/* <Link to="/cart" className="modCart"> */}
                      <ButtonClear onClick={(all)=>delFromCart(id, all)}>
                        <IoTrashOutline style={{fontSize:30, margin:"0px 40px", position:"relative", right:"-70px", color: "var(--dark80)"}} />
                          {/* Eliminar Todos */}
                      </ButtonClear>
                  {/* </Link> */}
                  <Precio>
                    <div> Total: ${`${precio*quantity}`}</div>
                </Precio>
                </CounterContainer>
              </ContentTwo>
            
        </ItemCarrito>
    )
}

export default CartItem



const ItemCarrito = styled.div`
  width: 53vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  border-bottom: 1px solid grey;
  margin-bottom: 0.1rem;
  padding: 3%;
  position: relative;
  bottom: 35px;
  padding-right: 10%;

  @media screen and (max-width: 768px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
@media screen and (max-width: 576px){
  position: relative;
  bottom: 20px;
}
  `
 const Image = styled.div`
  width: 25%;
  height: 25%;

  @media screen and (max-width: 768px){
   padding-right: 30%;
   padding-top: 30px;
}
 `;
 const Tit= styled.h3`
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
color: #000000;
 `

const Text = styled.div`
    text-align: start;
    color: var(--dark80);
    font-family: "poppins";
    font-size: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
  /* @media screen and (max-width: 768px){
   padding-left: 10%;
}
  @media screen and (max-width: 576px){
   padding-left: 15%;
   } */
`
  const Nombre = styled.h3`
  width: 180px;
  color: var(--dark);
  font-family: 'Carter One', cursive;
  font-size: 21px;

  @media screen and (max-width: 576px){
  position: relative;
   top: 10px ;
}
  `

  const Tipo = styled.p`
  color: var(--dark);
  font-family:'Satisfy', cursive;
  font-size: 18px;
  font-weight: 200;

  @media screen and (max-width: 768px){
   width: 100%;
  }
  `

  const ContentTwo = styled.div`
    display: flex;
    position: relative;
    right: 80px;
    bottom: 10px;


   @media screen and (max-width: 768px){
   padding-left: 25%;
   gap:45px
  }
  @media screen and (max-width: 576px){
    position: relative;
    top: 30px;
    right: 40%;
  }
  `
  const Cantidad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  position: relative;
  left: 40px;
  bottom: 10px;

  @media screen and (max-width: 576px){
    align-items: center;
    justify-content: center;
    left: 120px;
    gap: 0px;
    padding: 0px;
    margin: 0px;
    position: relative;
    bottom: 100px;
}
`
  const Precio = styled.p`
  width: 100%;
  font-family:'poppins';
  font-size: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--dark65);
  margin: 15px;

  div {
  width: 150px;
  font-weight: 400;
  position: relative;
  right: -110px;

  }
  p{
    position: relative;
    left: 25px;
    top: -10px;

    @media screen and (max-width: 576px){
      position: relative;
      top: 10px;
      left: 38px;
    }
  }
  `

const CounterContainer = styled.div`
  height: 20%;
  text-align: center;
  display: flex;
  flex-direction: column;
     align-items: flex-end;
  gap: 0.3px;
  position: relative;
  left: 105px;
  top:20px;
  div {
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 768px){
   padding-right: 15%;
  }
  @media screen and (max-width: 576px){
   position: relative;
   top: -20px;
   align-items: center;

  }
`

const ButtonContainer = styled.div`
    position: relative;
    padding-top: 8px;
    left: 35px;
    display: flex;
    border-radius: 0.6rem;
    border: solid 0.8px var(--dark80) ;
    height: 33px;
    width: 100px;
   
   
    @media screen and (max-width: 576px){
      position: relative;
      bottom: 8px;
    }

    .count{
        padding: 10px;
        color:#181818;
        background: transparent;
    border: none ;
    cursor: pointer;
    font-size: 17px;
    position: relative;
    bottom: 14px;
    left: 7px;
    gap: 10px;
    text-align: center;
    

    @media screen and (max-width: 1024px){
    &:active {
    color: var(--dark65);
    transform: translate(1.5px, 1.5px);
    transition: 0.15s;
    }
    }
}`
const ButtonMenos = styled.button`
    background: transparent;
    border: none ;
    cursor: pointer;
    font-size: 25px;
    position: relative;
    bottom: 14px;
    left: 5px;
    text-align: center;

    @media screen and (max-width: 1024px){
    &:active {
    color: var(--dark65);
    transform: translate(1.5px, 1.5px);
    transition: 0.15s;
  }
}
`
const ButtonCount = styled.button`
    /* background: transparent;
    color: var(--dark65);
    font-size: 2rem;
    font-weight: bold;
    width: 25px;
    height: 25px;
    margin: 5px;
    border: none ;
    font-family: var(--subtitle-font);
    font-size: 15px;
    position: relative;
    bottom: 3px;
    left: 5px;
    text-align: center; */

`
const ButtonMas = styled.button`
    /* background: transparent;
    border: none ;
    font-size: 25px;
    position: relative;
    bottom: 8px;
    left: 6px;
    text-align: center;

    @media screen and (max-width: 1024px){
    &:active {
    color: var(--dark65);
    transform: translate(1.5px, 1.5px);
    transition: 0.15s;
  }
} */
`

const ButtonClear = styled.div`
    color:var(--orange);
    cursor: pointer;
    background-color: transparent;
    padding: 5px 10px;
    padding-top: 10px;
    position: relative;
    top: 15px;
    left: 30px;
    border-radius: 0.5rem;
    border: none;
    font-family: "Nunito", sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 576px){
      position: relative;
      left: -45px;
    }

  &:active {
    
    color: var(--beige);
    box-shadow: none;
    transform: translateY(4px);
    transition: 0.15s;


  }
`






