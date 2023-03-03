import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";
import ProductsFilters from "./ProductsFilters";
import styled from "styled-components";
import Form from "react-bootstrap/Form";


import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";




const ProductsSearch = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [tablaUsuarios, setTablaUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const petitionGet = async () => {
    await axios
      .get("http://localhost:5000/vitamins")
      .then((res) => {
        setUsuarios(res.data);
        setTablaUsuarios(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filterSearch(e.target.value);
  };

  const filterSearch = (terminoBusqueda) => {
    // let inexistent = "No hay productos que coincidan con tu búsqueda."
    let resultadosBusqueda = tablaUsuarios.filter((elemento) => {
      if (
        elemento.vitamin
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.tipo
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setUsuarios(resultadosBusqueda);
  };

  useEffect(() => {
    petitionGet();
  }, []);

  return (
    <div calssName="App">
      <ContainerInput>
        <Form.Control
          placeholder="Buscar productos, marcas y más..."
          aria-label="Buscar productos, marcas y más..."
          value={busqueda}
          maxLength={120}
          autoCapitalize="off"
          autoComplete="off"
          onChange={handleChange}
        />
        <Butt onClick={() => <ProductsFilters />}>
          <svg width="22" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7871 13.6564 18.5836 11.5104 18.582 9.29103C18.582 7.45344 18.0371 5.65711 17.0162 4.12921C15.9953 2.60131 14.5443 1.41046 12.8465 0.707241C11.1488 0.00402566 9.28072 -0.179968 7.47844 0.178529C5.67616 0.537025 4.02065 1.42191 2.72128 2.72128C1.42191 4.02065 0.537025 5.67616 0.178529 7.47844C-0.179968 9.28072 0.00402566 11.1488 0.707241 12.8465C1.41046 14.5443 2.60131 15.9953 4.12921 17.0162C5.65711 18.0371 7.45344 18.582 9.29103 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233ZM9.29103 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29103C2.85878 5.73185 5.73185 2.85878 9.29103 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29103C15.7233 12.8502 12.8502 15.7233 9.29103 15.7233Z" fill="black"/>
          </svg>   
        </Butt>
      </ContainerInput>

      {/* <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Tel</th>
              <th>Nomb Usuario</th>
              <th>Correo</th>
            </tr>
          </thead>

          <tbody>
            {usuarios &&
              usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.vitamin}</td>
                  <td>{usuario.tipo}</td>
                  <td>{usuario.precio}</td>
                  <td>{usuario.info}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default ProductsSearch;

const ContainerInput = styled.form`
  width: 333px;
  height: 45px;
  align-items: end;
  color: #fff;
  right: 0;
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
  border: solid 1px var(--white);
  position: relative;
  top: -20px;

  input {
    font-size: 12px;
    font-family: poppins;
    width: 300px;
    height: 43px;
    padding: 10px 0px 10px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-color: transparent;
    color: #fff;
  }
`;

const Butt = styled.button`
  border: var(--dark);
  padding: 7px 14px;
  background-color: transparent ;
  font-size: 25px;

  
  svg{
     background-color: var(--dark);
  }
  
  svg path{
    size: 20px;
    fill: #ffffff;
  }
`;
