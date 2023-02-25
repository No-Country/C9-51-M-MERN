import React from 'react'
import styled from "styled-components";

const Nopassword = () => {
  return (
    <Container>
    <FormField>
      <Title>¿Olvidaste la contraseña?</Title>
      <InputField>
        <Label>Mail de usuario</Label>
        <InputEmail placeholder="ejemplo@naturalboost.com" />
      </InputField>
      <InputField>
        <Label>Confirmación de email</Label>
        <InputPassword
          placeholder="Debe ser idéntica"
        />
      </InputField>
         <TextPassword>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</TextPassword> 
      <ButtonField>
        <ButtonPassword>Recuperar Contraseña</ButtonPassword>
      </ButtonField>
    </FormField>
  </Container>
  )
}

export default Nopassword;

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
  font-size: 20px;
  font-family: 'Poppins';
  height: 46px;
  width: 100%;
  margin-top: -10px;
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

const InputEmail = styled.input`
  border: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 14px;
  font-style: italic;
  padding: 6px;
  width: 100%;
`;

const InputField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 12px;
`;

const InputPassword = styled.input`
  border: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 13px;
  font-style: italic;
  padding: 6px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-left: 1px;
  width: 100%;
`;

const TextPassword = styled.p`
 border: none;
 font-family: 'Poppins';
 font-style: normal;
 font-weight: 300;
 font-size: 15px;
 text-align: left;
 text-decoration: none;
`

const Title = styled.p`
 color: #000000;
 font-size: 24px;
 font-weight: bold;
 `