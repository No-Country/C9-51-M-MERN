import React from 'react'
import styled from "styled-components";
import Eye from "../assets/images/Vector.png"

const Login = ({onClose}) => {

  return (
      <Container>
      <FormField>
       <ButtonClose onClick={onClose}>X</ButtonClose>
      <Title>No has iniciado sesión</Title>
      <InputField>
      <Label>Mail de usuario</Label> 
        <InputEmail placeholder='ejemplo@naturalboost.com'/>
      </InputField>
      <InputField>
        <Label>Contraseña</Label>
        <InputPassword placeholder='Debe tener al menos 8 caracteres'/>
      </InputField>
      <IconEye src={Eye}/>
       <ButtonField>
        <ButtonSession>Iniciar sesión</ButtonSession>
        <ButtonRegister>Registrarme</ButtonRegister>
       </ButtonField>  
      <TextPassword>¿Olvidaste tu contraseña?</TextPassword>
      </FormField>
    </Container>
    );    
}

export default Login;

const ButtonClose = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 20px;
  float: right;
  margin-left: -30px;
  margin-right: -25px ;
  margin-top: -30px;
  position: relative;
  width: 30px;
  z-index: 2;

  &:hover {
  background: #747474;  
  color: #fff;
  }
`;

const ButtonField = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin-top: 60px;
`;

const ButtonSession = styled.button`
  background: #747474;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 20px;
  height: 46px;
  width: 80%;
`;

const ButtonRegister = styled.button`
  background: #E16913;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 20px;
  font-family: 'Poppins';
  height: 46px;
  width: 80%;
`;

const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 20%;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  height: 100vh;
  justify-content: center;
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const FormField = styled.div`
  background: white;
  border: 1px solid burlywood;
  border-radius: 10px;
  height: 440px;
  margin-top: 20px;
  padding: 40px;
  width: 420px;
`;

const IconEye = styled.img`
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: -36px;
  position: relative;
  width: 2.5rem;
  z-index: 2;
`

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
 color: #747474;
 font-size: 14px;
 font-weight: bold;
 margin-top: 25px;
 text-align: center;
`

const Title = styled.p`
 color: #000000;
 font-size: 24px;
 font-weight: bold;
 `