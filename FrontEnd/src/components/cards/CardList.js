import styled, { keyframes } from "styled-components";
import Card from "./Card";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsProvider"


const CardList = () => {

    // const { products } = useContext(ProductsContext);

    let products = [
        {
          id:1,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        },
        {
          id:2,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        },
        {
          id:3,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        },
        {
          id:4,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        },
        {
          id:5,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        },
        {
          id:6,
          nombre: "vitamina A",
          descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat autem blanditiis.",
          precio: 2000
        }
    ]

    return (
        <CardsContainer>
            {products.map((product) => (
                <Card key={product.id} product={product} />))}
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
    animation: ${fadeIn} 0.8s ease-out;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;