import styled, { keyframes } from "styled-components";
import Card from "./Card";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";



const CardList = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <CardsContainer>
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </CardsContainer>
  );
};

export default CardList;

const fadeIn = keyframes`
0% {
    opacity:0;
}
100% {
    opacity:1
}
`;

const CardsContainer = styled.section`
  /* position: absolute; */
  animation: ${fadeIn} 0.8s ease-out;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
