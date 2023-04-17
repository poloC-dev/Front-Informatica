import { useEffect, useState } from "react";
import { Container } from '@mui/material';

const initialForm = {
  brand: "",
  model: "",
  printer: "",
  quantity:"",
  ubication: "",
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
    if (!form.brand || !form.model || !form.printer || !form.ubication) {
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
    <Container sx={{marginBottom: 5,marginTop: 5 }}>
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
          name="ubication"
          placeholder="Ubicacion"
          onChange={handleChange}
          value={form.ubication}
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
    </Container>
  );
};

