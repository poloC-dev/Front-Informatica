import { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

const initialForm = {
  brand: "",
  model: "",
  printer: "",
  quantity:"",
  _id: null,
};

export default function CrudForm ({createData, updateData, setDataToEdit, dataToEdit,quantity, setQuantity}) {
    
  const [form, setForm] = useState(initialForm);
  
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    } else {
      setForm(initialForm)
    }
  }, [dataToEdit])


  const handleChange = (e) => {
    // console.log('ejecutando el set form en onchange');
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.brand || !form.model || !form.printer) {
      alert("Datos incompletos");
      return;
    }
    if (form.quantity<0) {
      alert("Ingrese una cantidad mayor a 0");
      return;
    }
    if (form._id === null) {
      createData(form);
    } else {
      updateData(form);
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
          name="brand"
          placeholder="Marca"
          onChange={handleChange}
          value={form.brand}
        />
        <input
          type="text"
          name="model"
          placeholder="Modelo"
          onChange={handleChange}
          value={form.model}
        />
        <input
        type="text"
        name="printer"
        placeholder="Impresora"
        onChange={handleChange}
        value={form.printer}
        />
        {dataToEdit ?         
            <input
              type="number"
              name="quantity"
              placeholder="0"
              onChange={handleChange}
              value={form.quantity}
        /> : ""}
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

