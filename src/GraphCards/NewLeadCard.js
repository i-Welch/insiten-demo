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
      minWidth: 300,
    },
  });

const NewLeads = (props) => (
    <Paper className="pap">
        <div className='ti'>
            <p>
                Lead Activity
            </p>
        </div>
        <Table>
            <TableHead>
                <TableCell padding="none">Time</TableCell>
                <TableCell align="right" padding="dense">Event Type</TableCell>
                <TableCell align="right" padding="dense">Customer</TableCell>
                <TableCell align="right" padding="dense">Sales Rep</TableCell>
                <TableCell align="right" padding="dense">Lead Source</TableCell>
            </TableHead>
            <TableBody>
                {props.rows.map(row => (
                    <TableRow>
                        <TableCell align="center" padding="none">{row.Time}</TableCell>
                        <TableCell align="center" padding="none">{row.Event}</TableCell>
                        <TableCell align="center" padding="none">{row.Customer}</TableCell>
                        <TableCell align="center" padding="none">{row.Rep}</TableCell>
                        <TableCell align="center" padding="none">{row.Source}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
        </Paper>
);

export default withStyles(styles)(NewLeads);