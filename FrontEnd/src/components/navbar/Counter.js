import styled from 'styled-components'
import {useContext} from "react"
import {ProductsContext} from "../../context/ProductsProvider"

const Counter = () => {

  const {state} = useContext(ProductsContext);

  let count = 0;

  state.cart.forEach(item => {
    count += item.quantity
  })

  return (
    <CounterI className='badge'>{count !== 0 ? count : null}</CounterI>
  )
}

export default Counter

const CounterI = styled.div`
  position: relative;
  top: -20px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: black;
  padding: .5rem;
  font-size: 1rem;
  right: 10px;
  /* visibility: hidden; */
`;