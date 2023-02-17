import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";
import ProductsFilters from "./ProductsFilters";
import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
          aria-describedby="basic-addon2"
          value={busqueda}
          maxLength={120}
          autoCapitalize="off"
          autoComplete="off"
          onChange={handleChange}
        />
        <Butt onClick={() => <ProductsFilters />}>
          <BiSearchAlt style={{ fontSize: "2rem" }} />
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
  align-items: end;
  right: 0;
  display: flex;
  justify-content: flex-end;
 
  border-radius: 3px;
  border: solid 1px #d3cfcf;

  input {
    font-size: 12px;
    font-family: poppins;
    width: 300px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  }
  input:focus {
    box-shadow:#e2955e 0px 2px 5px 0px;
    border-radius: 3px;
    background-color: transparent;
    color: #d3cfcf ;
    border: solid 1px #e2955e;
  }
`;
const Butt = styled.button`
  color: #d3cfcf;
  background-color: #faaa7292;
  border: none;
  border-radius: 3px;
  padding: 7px;

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: #f7a469f8 !important;
    }
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
