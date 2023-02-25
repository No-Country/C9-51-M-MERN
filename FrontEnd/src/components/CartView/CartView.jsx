import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";




//Bueno aca estaria mostrando el carrito por sino tiene nada comprado y si tiene. falta pasar propiedades, los datos.




function CartView() {
  const context = useContext(CartContext);
  const { cart } = context;

  //Si el carrito esta vacio pasa esto
  if (cart.length === 0) {
    return (
      <CartContainerView>
        <DivContainerVacio>
          <CartImg>
            <img src="../../img/iconocart.png" alt="" />
          </CartImg>
          <CartTitleView>
            <h4>Ups, este carrito esta vacío.</h4>
          </CartTitleView>
          <CartButton>
            <h3>Ver Productos</h3>
          </CartButton>
        </DivContainerVacio>
      </CartContainerView>
    );
  } else {
    //sino, pasa esto
    return (
      <>
        <CartTitle>CARRITO DE COMPRAS</CartTitle>
        <CartItems>3 PRODUCTOS</CartItems>
        <DivContainer>
          {cart.map((data) => (
            <CartDivcontainer>
              <CartDiv>
                <CartContainer>
                  <CartImagen src="" alt="">{/* Mapear imagen */}
                    imagen
                  </CartImagen>
                  <CartInfo>
                    
                    <h3>Alga Spirulina{data.title} </h3> {/* Aca mapear el titulo dejo ejemplo */}
                    <p>60 capsulas de 500 mg</p>{/* Aca mapear el titulo */}
                  </CartInfo>
                  <CartPriceDiv>
                    <CartCount>
                      <CartRest>-</CartRest>{/* funcion add y rest */}
                      <CartCountDiv>0</CartCountDiv>{/* Aca mapear la cantidad */}
                      <CartAdd>+</CartAdd>{/* funcion add y rest */}
                    </CartCount>
                    <CartPrice>$1860</CartPrice>
                  </CartPriceDiv>
                  <CartDelete>
                    <img src="../../img/Eliminar.jpg" alt="" />
                  </CartDelete>
                </CartContainer>
              </CartDiv>
            </CartDivcontainer>
          ))}
          <CartTotalDiv>
            <CartTotal>Total: $3000</CartTotal> {/* contador total */}
          </CartTotalDiv>
          <CartFinish>
            <CartContinue>
            {/* <Link to="/cargatarjeta"> */}
              <p>Continuar Compra</p>
            {/* </Link> */}
            </CartContinue>
          </CartFinish>
        </DivContainer>
      </>
    );
  }
}

//const CardContainer = styled.div``;

const CartContainerView = styled.div`
  display: flex;
  justify-content: center;
`;

const DivContainerVacio = styled.div``;

const CartImg = styled.div`
  display: flex;
  margin: auto;
  height: 140px;
  width: 140px;

  img {
  }
`;

const CartTitleView = styled.div`
  width: 328px;
  height: 36px;

  h4 {
    font-family: poppins;
    font-size: 24px;
    font-weight: 36px;
    text-align: center;
  }
`;

const CartButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 56px;
  width: 211px;
  left: 614px;
  top: 495px;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;

  background-color: #e16913;
  color: #ffffff;
  border-radius: 10px;
  border: none;

  h3 {
    height: 36px;
    width: 171px;
    left: 20px;
    top: 10px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500px;
    line-height: 36px;
    margin: 0;
  }
`;

//Estilos del cart

const DivContainer = styled.div``;

const CartDivcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CartTitle = styled.h4`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0;
  text-align: center;
`;

const CartItems = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  text-align: center;
`;

const CartDiv = styled.div`
  width: 970px;
  height: 154px;
  margin-top: 25px;
  margin-right: 70px;
  border: 1px solid black;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-left: 12px solid black;

  @media (max-width: 581px) {
    margin-right: 2px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  margin: auto;
`;

const CartImagen = styled.div`
  width: 130px;
  height: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 5px;
  border-radius: 10px;
  border: 1px solid black;
`;

const CartInfo = styled.div`
  margin: auto;
  padding: 5px;
  h3 {
    width: auto;
    font-size: 24px;
    font-weight: 400px;
    font-line: 36px;
    font-family: Poppins;
  }

  p {
    width: auto;
    font-size: 16px;
    font-weigth: 300px;
    font-line: 24px;
    font-family: poppins;
  }
`;

const CartCount = styled.div`
  display: flex;
  width: 80px;
  height: 34px;
  padding: 0px 9px 0px 9px;
  gap: 18px;
  background: white;
  border: 0.5px solid #181818;
  margin-right: 20px;
`;
const CartRest = styled.button`
  width: 8px;
  height: 34px;
  font-size: 20px;
  font-weigth: 400px;
  font-line: 170%;
  background: white;
  border: none;
`;

const CartCountDiv = styled.div`
  width: 7px;
  heigth: 34px;
  font-family: "poppins";
  font-size: 20px;
  font-weigth: 400px;
  font-line: 170%;
  display: flex;
  align-items: center;
`;

const CartAdd = styled.button`
  width: 8px;
  height: 34px;
  font-size: 20px;
  font-weigth: 400px;
  font-line: 170%;
  background: white;
  border: none;
`;

const CartPrice = styled.div`
  width: 69px;
  heigth: 36px;
  color: #e16913;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-letf: 15px;
  @media (max-width: 581px) {
  }
`;

const CartDelete = styled.button`
  height: 28px;
  width: 24px;
  margin-top: 17px;
  margin-right: 15px;
  background: white;
  border: none;

  img {
    width: 24px;
    height: 28px;
    object-fit: cover;
  }
`;

const CartPriceDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: auto;

  @media (min-width: 581px) {
    flex-direction: row;
  }
`;

const CartTotalDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CartTotal = styled.div`
  width: 141px;
  height: 36px;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  margin-top: 35px;
  margin-right: 70px;
`;

const CartFinish = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  background: red;
`;

const CartContinue = styled.button`
  height: 49px;
  width: 241px;
  left: 0px;
  top: 44px;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  background: #e16913;
  border: none;
  margin-right: 70px;
  p {
    color: white;
    height: 29px;
    width: 201px;
    left: 20px;
    margin: auto;
    font-family: Inter;
    font-size: 24px;
    font-weight: 300;
    line-height: 29px;
  }
`;

export default CartView;
