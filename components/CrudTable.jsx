import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from '@mui/material';

import CrudTableRow from "../components/CrudTableRow"


export default function CrudTable({data,setDataToEdit,deleteData,setQuantity,quantity}) {
  

  return (
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Marca</TableCell>
            <TableCell align="right">Modelo</TableCell>
            <TableCell align="right">Impresora</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Ubicacion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        data.length === 0 && (
        <TableRow>
            <TableCell>Sin datos</TableCell>
        </TableRow>
        )
        }
        {
        data.length !== 0 && (
        data.map( toner =>
            <CrudTableRow  
            key={toner._id} 
            toner={toner} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData} 
            setQuantity={setQuantity}
            quantity={quantity}/> 
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
