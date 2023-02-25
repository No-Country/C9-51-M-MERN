import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CardContainer() {
  return (
    <>
      <CartTitle>CARRITO DE COMPRAS</CartTitle>
      <CartItems>3 PRODUCTOS</CartItems>
      <DivContainer>
        <CartDivcontainer>
          <CartDiv>
            <CartContainer>
              <CartImagen src="" alt="">
                imagen
              </CartImagen>
              <CartInfo>
                <h3>Alga Spirulina</h3>
                <p>60 capsulas de 500 mg</p>
              </CartInfo>

              <CartPriceDiv>
                <CartCount>
                  <CartRest>-</CartRest>
                  <CartCountDiv>0</CartCountDiv>
                  <CartAdd>+</CartAdd>
                </CartCount>
                <CartPrice>$1860</CartPrice>
              </CartPriceDiv>

              <CartDelete>
                <img src="../../img/Eliminar.jpg" alt="" />
              </CartDelete>
            </CartContainer>
          </CartDiv>
        </CartDivcontainer>

        <CartTotalDiv>
          <CartTotal>Total: $3000</CartTotal>
        </CartTotalDiv>
        <CartFinish>
          <Link to="/cargatarjeta">
          <CartContinue>
            <p>Continuar Compra</p>
          </CartContinue>
          </Link>
        </CartFinish>
      </DivContainer>
    </>
  );
}

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
    font-weight: 300px;
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
  font-weight: 400px;
  font-line: 170%;
  background: white;
  border: none;
`;

const CartCountDiv = styled.div`
  width: 7px;
  height: 34px;
  font-family: "poppins";
  font-size: 20px;
  font-weight: 400px;
  font-line: 170%;
  display: flex;
  align-items: center;
`;

const CartAdd = styled.button`
  width: 8px;
  height: 34px;
  font-size: 20px;
  font-weight: 400px;
  font-line: 170%;
  background: white;
  border: none;
`;

const CartPrice = styled.div`
  width: 69px;
  height: 36px;
  color: #e16913;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 15px;
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
  margin-bottom: 30px;
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
