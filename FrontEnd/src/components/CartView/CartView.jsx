import React from "react";
import styled from "styled-components";
import imgcart from "../../assets/icons/cart.webp"
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider";
import CardContainer from "./CardContainer";
import { Link } from "react-router-dom";



const CartView = () =>{
  const {state} = useContext(ProductsContext);

    return (
      <CartContainerView>
        {!state.cart[0] 
          ? (
            <DivContainerVacio>
              <CartImg>
                <img src={imgcart} alt="" />
              </CartImg>
              <CartTitleView>
                <h4>Ups, este carrito esta vacío.</h4>
              </CartTitleView>
            </DivContainerVacio>)
          : state.cart.map((item) => <CardContainer key={item.id} item={item} />)
        }
        {!state.cart[0] 
              ? (<Link to="/products">
                  <CartButton> <h3>Ver Productos</h3></CartButton>
                </Link>)
              : (  
                <ButtonsContainer>
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
                </ButtonsContainer>)
            }
      </CartContainerView>
    )
}

export default CartView;



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

const ButtonsContainer = styled.div`
  
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

