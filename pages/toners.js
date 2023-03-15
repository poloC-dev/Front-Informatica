import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";

import axios from "axios";

export default function Toners() {
  const initialDb = [];
  const [db, setDb] = useState(initialDb); // db = DataBase
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/api/toner"),
      json = await res.data;
    setDb(json);
  };
  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  const createData = async (newToner) => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(newToner),
    };
    let res = await axios("http://localhost:8080/api/toner", options),
      toner = await res.data;
    getData();
  };

  const updateData = async (tonerToUpdate) => {
    let { _id } = tonerToUpdate;
    console.log("toner", tonerToUpdate);
    let endpoint = `http://localhost:8080/api/toner/${_id}`;

    let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(tonerToUpdate),
      },
      res = await axios(endpoint, options),
      toner = await res.data;
    getData();
  };

  const deleteData = async (tonerToDelete) => {
    let { _id, brand, model } = tonerToDelete;
    let isDelete = window.confirm(
      `Estás seguro que deseas eliminar el toner ${brand} ${model} ?`
    );

    if (isDelete) {
      console.log("se ejecuto el delete");
      let endpoint = `http://localhost:8080/api/toner/${_id} `;

      let options = {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        },
        res = await axios(endpoint, options),
        toner = await res.data;
      getData();
    } else {
      return;
    }
  };

  return (
    <>
      <PageLayout>
        <div>
          <h2>CRUD App</h2>
          <div>
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </div>
          <div>
            {loading && <Loader />}
            {db && (
              <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}
