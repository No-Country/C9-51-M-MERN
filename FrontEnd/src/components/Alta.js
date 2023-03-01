import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Alta = () => {
  return (
    <Container>
    <FormField>
      <Title>¡Listo! ya sos parte de Nutrilboost</Title>
         <TextPassword>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TextPassword> 
         <Link to="/products">
      <ButtonField>
        <ButtonPassword>Volver a la tienda</ButtonPassword>
      </ButtonField>
         </Link>
    </FormField>
  </Container>
  )
}

export default Alta;

const ButtonField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-top: 60px;
`;

const ButtonPassword = styled.button`
  background: #E16913;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  font-family: 'Poppins';
  height: 40px;
  width: 60%;
  margin-top: 50px;

  @media (max-width: 500px) {
    height: 40px;
    width: 90%;
  }
`;

const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const FormField = styled.div`
  background: white;
  border: 1px solid burlywood;
  border-radius: 10px;
  height: 440px;
  margin-bottom: 80px;
  padding: 40px;
  width: 420px;

  @media (max-width: 500px) {
    height: auto;
    padding: 25px 15px;
    width: 90%;
  }
`;

const TextPassword = styled.p`
 border: none;
 font-family: 'Poppins';
 font-style: normal;
 font-weight: 300;
 font-size: 14px;
 text-decoration: none;
 margin: 60px 20px 0;
`

const Title = styled.p`
 color: #000000;
 font-size: 18px;
 font-weight: bold;
 width: 100%;

 @media (max-width: 500px) {
   text-align: center;
  }

 `