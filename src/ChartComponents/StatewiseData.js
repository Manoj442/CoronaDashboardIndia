import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './googleCharts.module.css';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'lightgray',
    color: 'dimgray',
    fontWeight:'bold'
  },
  body: {
    fontSize: 14,    
    color:'#6c757d'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    borderSpacing:'7px',
    borderCollapse:"separate"
  }  
});

export default function StateTable(props) {
 const classes = useStyles();
 const data = props.data.regionData;
 const headers=['State','Active','Deaths','Recovered','Confirmed']
 console.log(data.regionData);
  return (          
    <TableContainer className={styles.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {
                  headers.map((header,index)=>{
                  return <StyledTableCell align="center" style={{width:'15%'}} key={index}>{header}</StyledTableCell>})
              }           
          </TableRow>
        </TableHead>
        <TableBody>            
          {data.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.region}
              </StyledTableCell>
              <StyledTableCell align="center">{row.totalInfected}</StyledTableCell>
              <StyledTableCell align="center">{row.deceased}</StyledTableCell>
              <StyledTableCell align="center">{row.recovered}</StyledTableCell>
              <StyledTableCell align="center">{row.totalCases}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
  );
}