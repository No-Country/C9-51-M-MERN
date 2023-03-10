import styled, { keyframes } from "styled-components";
import Card from "./Card";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider"
import Description from "./Description";


const CardList = () => {

    // const { products } = useContext(ProductsContext);

    let products = [
        {
          id:1,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,         
          image: "vitamin.webp"
        },
        {
          id:2,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,         
          image: "vitamin.webp"
        },
        {
          id:3,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,          
          image: "vitamin.webp"
        },
        {
          id:4,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,        
          image: "vitamin.webp"
        },
        {
          id:5,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,
          image: "vitamin.webp"
        },
        {
          id:6,
          nombre: "Alga Spirulina",
          descripcion: "60 cápsulas de 500 mgs",
          precio: 1650,
          image: "vitamin.webp"
        }
    ]

    return (
        <CardsContainer>
            {products.map((product) => (
                <Card key={product.id} product={product}  />))}
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
`

const CardsContainer = styled.section`
    /* position: absolute; */
    animation: ${fadeIn} 0.8s ease-out;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;