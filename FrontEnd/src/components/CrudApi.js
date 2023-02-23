import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    nombre: "viatmina A",
    descripcion: "cansancio",
  },
  {
    id: 2,
    nombre: "viatmina B",
    descripcion: "sueño",
  },
  {
    id: 3,
    nombre: "viatmina C",
    descripcion: "depresion",
  },
  {
    id: 4,
    nombre: "viatmina D",
    descripcion: "envejecimiento",
  },
  {
    id: 5,
    nombre: "viatmina E",
    descripcion: "relax",
  },
];

const CrudApi = () => {
  //Estado para la db(base de datos falsa)
  const [db, setDb] = useState(initialDb);
  //Estado para Editar elementos de la db
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    // crea un nuevo registro en la db.
    data.id = Date.now(); //crea un id aleatorio para la nueva data que estoy ingresando
    setDb([...db, data]); //agrega la nueva data
  };

  const updateData = (data) => {
    //actualiza la db (el id de la db que quiero actualizar)
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    //elimina registros de la db
    let isDelete = window.confirm(  //windows.confirm es como una alerta, son elementos del windows 
      `¿Estas seguro de eliminar el registro con el id ${id}?`
    );

    if(isDelete){
      let newData=db.filter(el=>el.id!==id);
      setDb(newData);
    }else{
      return;
    }

  };

  return (
    <>
      <h2>CRUD Api</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CrudApi;
