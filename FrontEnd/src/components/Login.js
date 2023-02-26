import React from 'react'
import styled from "styled-components";
import Visible from "../assets/images/Vector.png";
import Hidden from "../assets/images/Vector2.png";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Login = ({onClose}) => {
  const [eyeType, setEyeTipe] = useState(false);

  return (
    <>
      <Container>
        <FormField>
          {/* <ButtonClose onClick={onClose}>X</ButtonClose> */}
          <Title>No has iniciado sesión</Title>
          <InputField>
            <Label>Mail de usuario</Label>
            <InputEmail placeholder="ejemplo@naturalboost.com" />
          </InputField>
          <InputField>
            <Label>Contraseña</Label>
            <InputPassword
              placeholder="Debe tener al menos 8 caracteres"
              type={eyeType ? "text" : "password"}
            />
            <IconEye
              src={eyeType ? Visible : Hidden}
              onClick={() => setEyeTipe(!eyeType)}
            />
          </InputField>
          <ButtonField>
            <Link to="">
              <ButtonSession>Iniciar sesión</ButtonSession>
            </Link>
            <Link to="/register">
              <ButtonRegister>Registrarme</ButtonRegister>
            </Link>
          </ButtonField>
          <Link style={{ textDecoration: "none" }} to="/nopassword">
            <TextPassword className="textItem">
              ¿Olvidaste tu contraseña?
            </TextPassword>
          </Link>
        </FormField>
      </Container>
    </>
  );    
}

export default Login;

// const ButtonClose = styled.button`
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-family: "Poppins";
//   font-size: 20px;
//   float: right;
//   margin-left: -30px;
//   margin-right: -25px ;
//   margin-top: -30px;
//   position: relative;
//   width: 30px;
//   z-index: 2;

//   &:hover {
//   background: #747474;  
//   color: #fff;
//   }

//   @media (max-width: 500px) {
//     margin-left: -10px;
//     margin-right: -10px ;
//     margin-top: -20px;
//     width: 20px;
//   }
// `;

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
  width: 220px;
`;

const ButtonRegister = styled.button`
  background: #E16913;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 20px;
  font-family: 'Poppins';
  height: 46px;
  width: 220px;
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
  /* margin-top: -40px; */
  margin-bottom: 80px;
  padding: 40px;
  width: 420px;

  @media (max-width: 500px) {
    height: auto;
    padding: 25px 15px;
    width: 90%;
  }
`;

const IconEye = styled.img`
  cursor: pointer;
  margin-top: 24px;
  margin-left: 300px;
  position: absolute;
  width: 2rem;

  @media (max-width: 400px) {
   margin-right: 35px;
  }

  @media (max-width: 360px) {
   margin-right: 70px;
  }

  @media (max-width: 320px) {
   margin-right: 90px;
  }

  @media (max-width: 320px) {
   margin-right: 110px;
  }
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

const TextPassword = styled.h6`
 color: #747474;
 cursor: pointer;
 font-size: 14px;
 font-weight: bold;
 margin-top: 25px;
 text-align: center;
 text-decoration: none;
 border: none;
 
 
 .textItem {
          text-decoration: none;
          background: green;
      
 }

`

const Title = styled.p`
 color: #000000;
 font-size: 24px;
 font-weight: bold;
 `