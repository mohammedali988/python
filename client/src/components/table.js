import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#673ab7',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  idMember,
  status,
  firstName,
  lastName,
  country,
  gender,
  notes
) {
  return { idMember, status, firstName, lastName, country, gender, notes };
}

const Tables = (props) => {
  const data = props.data;
  console.log(data, 'hiiiiiiiiiiiiiiiiiiii');
  const rows = data.map((e) => {
    return createData(
      e.id,
      <Checkbox defaultChecked={e.active} />,
      e.firstName,
      e.lastName,
      e.country,
      e.gender,
      e.notes
    );
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">id Member</StyledTableCell>
            <StyledTableCell align="center">status</StyledTableCell>
            <StyledTableCell align="center">firstName</StyledTableCell>
            <StyledTableCell align="center">lastName</StyledTableCell>
            <StyledTableCell align="center">country</StyledTableCell>
            <StyledTableCell align="center">gender</StyledTableCell>
            <StyledTableCell align="center">notes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idMember}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.idMember}
              </StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.firstName}</StyledTableCell>
              <StyledTableCell align="center">{row.lastName}</StyledTableCell>
              <StyledTableCell align="center">{row.country}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">{row.notes}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;

// const rows = [
//   createData(
//     1,
//     <Checkbox />,
//     'mohammed',
//     'ali',
//     'country',
//     'male',
//     'Any thing if it is exist'
//   ),
//   createData(
//     2,
//     <Checkbox />,
//     'mohammed',
//     'sami',
//     'country',
//     'male',
//     'Any thing if it is exist'
//   ),
//   createData(
//     3,
//     <Checkbox />,
//     'mohammed',
//     'ahmed',
//     'country',
//     'male',
//     'Any thing if it is exist'
//   ),
//   createData(
//     4,
//     <Checkbox />,
//     'mohammed',
//     'jaber',
//     'country',
//     'male',
//     'Any thing if it is exist'
//   ),
//   createData(5, <Checkbox />, 'mohammed', 'memo', 'country', 'male', ''),
// ];
