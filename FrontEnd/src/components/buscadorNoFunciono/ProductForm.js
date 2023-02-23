import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import React, { useState } from "react";

const initialForm = {
  vitamin: "",
};

const ProductForm = ({handleSearch}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.vitamin){
      alert("Debes ingresar un producto!");
      return;
    }

    handleSearch(form);
    setForm(initialForm)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Search
          type="text"
          name="vitamin"
          placeholder="Nombre del Producto"
          onChange={handleChange}
          value={form.vitamin}
        />
        <ButtomForm>
          <BiSearchAlt style={{ fontSize: "20px", margin: "0px 8px" }} />
        </ButtomForm>
      </Form>
    </>
  );
};

export default ProductForm;

const Form = styled.form`
  display: flex;
`;

const Search = styled.input`
  background-color: #181818;
  border: solid 2px white ;
  height: 30px;
  font-size: 15px;
  font-family: var(--title-font);
`;
const ButtomForm = styled.button`
  height: 30px;
  font-size: 20px;
  background-color: #181818;
`;
