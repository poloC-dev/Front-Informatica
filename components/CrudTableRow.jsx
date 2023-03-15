
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';

export default function CrudTableRow ({ toner, deleteData, setDataToEdit}) {
    return (
        <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="right">{toner.brand}</TableCell>
        <TableCell align="right">{toner.model}</TableCell>
        <TableCell align="right">{toner.printer}</TableCell>
        <TableCell align="right">{toner.quantity}</TableCell>
        <TableCell align="center">
          <Button onClick={()=>setDataToEdit(toner)} variant="outlined">Editar</Button>
        </TableCell>
        <TableCell align="center">
          <Button onClick={()=>deleteData(toner)} variant="outlined">Eliminar</Button>
        </TableCell>
      </TableRow>
    );
  };