import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsProvider";
import {IoIosAdd} from 'react-icons/io';
import {IoMdRemove} from 'react-icons/io';



const CardContainer = ({ item }) => {
  const { clearCart, delFromCart, addToCart, state } = useContext(ProductsContext);
  //const { name, description, image, price, quantity } = item;

  let count = 0;

  state.cart.forEach((item) => {
    count += item.quantity;
  });

  return (
    <>
      <Container key={item?.id}>
        <ContainerTitle>
          <CartTitle>CARRITO DE COMPRAS</CartTitle>
          <CartItems>{count} PRODUCTOS</CartItems>
        </ContainerTitle>
        <Link to="">
          <ButtonLimpiarCarro onClick={() => clearCart()}>
            Limpiar Carrito
          </ButtonLimpiarCarro>
        </Link>
      </Container>

      <DivContainer>
        <CartDivcontainer>
          <CartDiv>
            <CartContainer>
              <CartImagen>
                <img src={item?.image} alt={item?.name} />
              </CartImagen>
              <CartInfo>
                <h3>{item?.name}</h3>
                <p>{item?.description}</p>
              </CartInfo>

              <CartPriceDiv>
                <CartCount>
                  <CartRest><IoMdRemove style={{ paddingTop:"13px", fontWeight: "bold" , color:"#ef8557"}} onClick={()=>delFromCart(item?.id)} /></CartRest>
                  <CartCountDiv>{`${item?.quantity}`}</CartCountDiv>
                  <CartAdd><IoIosAdd style={{ position:"relative", color:"#ef8557"}} onClick={()=>addToCart(item?.id)}/></CartAdd>
                </CartCount>

                {/* <CartPrice>${`${price*quantity}`}</CartPrice> */}
              </CartPriceDiv>

             <div>
              <Link to="/cart" className="modCart">
                  <CartDelete onClick={(all)=>delFromCart(item?.id, all)}>
                    <img src="../../img/Eliminar.jpg" alt="" />
                  </CartDelete>
                </Link>
             </div>

            </CartContainer>
          </CartDiv>
        </CartDivcontainer>
      </DivContainer>
    </>
  );
};
export default CardContainer;

const Container = styled.div``;

const ContainerTitle = styled.div``;

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

const ButtonLimpiarCarro = styled.button``;

const DivContainer = styled.div``;

const CartDivcontainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
  font-family: poppins;
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
