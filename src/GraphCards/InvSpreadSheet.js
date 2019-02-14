import React from 'react';
import '../../css/EmpActivity.css'
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TableHead, TableBody, TableRow, Paper } from '@material-ui/core';
import { TableCell} from '@material-ui/core';

const styles = theme => ({
    root: {
      width: '50%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 850,
    },
  });

const InventorySheet = (props) => (
    <div className="cont">
    <Paper className="pip">
        <div className='ti'>
            <p>
                Inventory
            </p>
        </div>
        <Table>
            <TableHead>
                <TableCell padding="none">Photo</TableCell>
                <TableCell align="right" padding="dense">Stock#</TableCell>
                <TableCell align="right" padding="dense">Year</TableCell>
                <TableCell align="right" padding="dense">Make</TableCell>
                <TableCell align="right" padding="dense">Model</TableCell>
                <TableCell align="right" padding="dense">Trim</TableCell>
                <TableCell align="right" padding="dense">VIN</TableCell>
                <TableCell align="right" padding="dense">Age</TableCell>
                <TableCell align="right" padding="dense">Web Price</TableCell>
                <TableCell align="right" padding="dense">Lot Price</TableCell>
            </TableHead>
            <TableBody>
                {props.rows.map(row => (
                    <TableRow>
                        <TableCell align="none" padding="none">{row.Photo}</TableCell>
                        <TableCell align="right" padding="dense">{row.Stock}</TableCell>
                        <TableCell align="right" padding="dense">{row.Year}</TableCell>
                        <TableCell align="right" padding="dense">{row.Make}</TableCell>
                        <TableCell align="right" padding="dense">{row.Model}</TableCell>
                        <TableCell align="right" padding="dense">{row.Trim}</TableCell>
                        <TableCell align="right" padding="dense">{row.VIN}</TableCell>
                        <TableCell align="right" padding="dense">{row.Age}</TableCell>
                        <TableCell align="right" padding="dense">{row.WebPrice}</TableCell>
                        <TableCell align="right" padding="dense">{row.LotPrice}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
        </Paper>
        </div>
);

export default withStyles(styles)(InventorySheet);