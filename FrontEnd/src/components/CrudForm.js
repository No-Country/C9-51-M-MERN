import React, { useEffect, useState } from "react";

const initialForm = {
  nombre: "",
  descripcion: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm); ///actualiza el estado del formulario

  useEffect(() => {
    //efecto que esta evaluando cualquier cambio que tenga la variable dataToEdit.
    if (dataToEdit) {
      //Al apretar el boton "Editar", pasa esos datos a los inputs para editarlos luego.
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    //lo que hace es actualizar los datos del formulario
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //-->para que no se Autoprocese el formulario

    if (!form.nombre || !form.descripcion) {
      alert("Datos Incompletos!"); //-->cdo apretamos "Enviar" sin datos el formulario
      return;
    }

    if (form.id === null) {
      //--> si el id del formulario esta nulo, no tiene datos:
      createData(form); //se ejecuta createData() -crea un nuevo elemento-
    } else {
      //si tiene elementos, el form va a tener datos cdo el usuario aprete el boton"Editar"
      updateData(form); //se ejecuta updateData() - edita ese elemento-.
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Producto"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="descripcion"
          onChange={handleChange}
          value={form.descripcion}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
