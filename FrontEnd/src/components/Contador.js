import styled from 'styled-components'
import {useContext} from "react"
import {ProductsContext} from "../context/ProductsProvider"

const Contador = () => {

  const {state} = useContext(ProductsContext);

  let count = 0;

  state.cart.forEach(item => {
    count += item.quantity
  })

  return (
    <CounterI >{count !== 0 ? count : null}</CounterI>
  )
}

export default Contador

const CounterI = styled.div`
  position: relative;
  top: -43px;
  z-index: 99999;
  right: 200px;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background-color:var(--orange);
  padding: .5rem;
  font-size: 1rem;
  /* visibility: hidden; */
`;