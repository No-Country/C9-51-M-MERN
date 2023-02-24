import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

// const initialDb = [
//   {
//     id: 1,
//     nombre: "viatmina A",
//     descripcion: "cansancio",
//   },
//   {
//     id: 2,
//     nombre: "viatmina B",
//     descripcion: "sueño",
//   },
//   {
//     id: 3,
//     nombre: "viatmina C",
//     descripcion: "depresion",
//   },
//   {
//     id: 4,
//     nombre: "viatmina D",
//     descripcion: "envejecimiento",
//   },
//   {
//     id: 5,
//     nombre: "viatmina E",
//     descripcion: "relax",
//   },
// ];

const CrudApi = () => {
  //Estado para la db(base de datos)
  const [db, setDb] = useState(null);
  //Estado para Editar elementos de la db
  const [dataToEdit, setDataToEdit] = useState(null);
  //Estado para Mensaje de Error
  const [error, setError] = useState(null);
  //Estado para Loader
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/products";

  useEffect(() => {
    setLoading(true);
    helpHttp().get(url).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    // crea un nuevo registro en la db.
    data.id = Date.now(); //crea un id aleatorio para la nueva data que estoy ingresando
    
    let options = {
      body:data, 
      headers:{"content-type":"application/json"}}
    
    //agrega la nueva data:
    api
    .post(url, options)
    .then((res) => {
      console.log(res);
      if(!res.err){
        setDb({...db, res});
      }else{
        setError(res);
      }
    });
  }; 

  const updateData = (data) => {
    //actualiza la db (el id de la db que quiero actualizar)
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    //elimina registros de la db
    let isDelete = window.confirm(
      //windows.confirm es como una alerta, son elementos del windows
      `¿Estas seguro de eliminar el registro con el id ${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
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
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}:${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
      {db && (
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </>
  );
};

export default CrudApi;
