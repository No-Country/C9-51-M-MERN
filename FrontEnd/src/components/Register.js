import React, {useState} from 'react'
import styled from "styled-components";
import Visible from "../assets/images/Vector.png";
import Hidden from "../assets/images/Vector2.png";
import { Link } from "react-router-dom";
// import { helpHttp } from '../helpers/helpHttp';

const Register = ({onClose}) => {
  const [eyeType, setEyeTipe] = useState(false);
  const [eyeTypeTwo, setEyeTipeTwo] = useState(false);

   //Estado para la db(base de datos)
   const [db, setDb] = useState(null);
   //Estado para Editar elementos de la db
   const [dataToEdit, setDataToEdit] = useState(null);
   //Estado para Mensaje de Error
   const [error, setError] = useState(null);
   //Estado para Loader
   const [loading, setLoading] = useState(false);
 

  // let api = helpHttp();
  // let url = "https://e-commerce-backend-70bp.onrender.com/users/";


  // const createData = (data) => {
  //   let options = {
  //     body:data, 
  //     headers:{"content-type":"application/json"}}
    
  //   //agrega la nueva data:
  //   api
  //   .post(url, options)
  //   .then((res) => {
  //     console.log(res)
  //     //console.log(res);
  //     // if(!res.err){
  //     //   setDb({ res});
  //     // }else{
  //     //   setError(res);
  //     // }
  //   });
  // }; 


  return (
    <Container>
      <FormField>
        {/* <ButtonClose onClick={onClose} >X</ButtonClose> */}
        <Title>Registro</Title>
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
        <InputField>
          <Label>Confirmar contraseña</Label>
          <InputPassword
            placeholder="Debe ser identica"
            type={eyeTypeTwo ? "text" : "password"}
          />
          <IconEye
            src={eyeTypeTwo ? Visible : Hidden}
            onClick={() => setEyeTipeTwo(!eyeTypeTwo)}
          />
        </InputField>
        <ButtonField>
          <Link to="/">
          <ButtonSession>Iniciar sesión</ButtonSession>
          </Link>
          <Link to="/registro">
          <ButtonRegister>Registrarme</ButtonRegister>
          </Link>
        </ButtonField>
        <Link to="/nopassword" style={{ textDecoration: "none" }}>

        <TextPassword>¿Olvidaste tu contraseña?</TextPassword>
        </Link>
      </FormField>
    </Container>
  )
}

export default Register;

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
  bottom: 20%;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  min-height: 100vh;
  justify-content: center;
  width: 100%;
`;

const FormField = styled.div`
  background: white;
  border: 1px solid burlywood;
  border-radius: 10px;
  height: auto;
  margin: 20px 0;
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