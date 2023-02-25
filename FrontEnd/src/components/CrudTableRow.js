import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
  let { id,nombre, descripcion } = el;

  return (
    <div>
      <tr>
        <td style={{ padding: "10px" }}>{nombre}</td>
        <td style={{ padding: "10px" }}>{descripcion}</td>
        <td>
          <button onClick={()=>setDataToEdit(el)} style={{ margin: "10px" }}>Editar</button>
          <button onClick={()=>deleteData(id)} style={{ margin: "10px" }}>Eliminar</button>
        </td>
      </tr>
    </div>
  );
};

export default CrudTableRow;
