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

const EmpActivity = (props) => (
    <Paper className="pap">
        <div className='ti'>
            <p>
                Employee Activity
            </p>
        </div>
        <Table>
            <TableHead>
                <TableCell padding="none">Sales Rep</TableCell>
                <TableCell align="right" padding="dense">Ups</TableCell>
                <TableCell align="right" padding="dense">Calls</TableCell>
                <TableCell align="right" padding="dense">Emails</TableCell>
                <TableCell align="right" padding="dense">Texts</TableCell>
                <TableCell align="right" padding="dense">Tasks</TableCell>
                <TableCell align="right" padding="dense">ODue Tasks</TableCell>
                <TableCell align="right" padding="dense">Sold</TableCell>
                <TableCell align="right" padding="dense">Login Time</TableCell>
            </TableHead>
            <TableBody>
                {props.rows.map(row => (
                    <TableRow>
                        <TableCell align="center" padding="none">{row.name}</TableCell>
                        <TableCell align="center" padding="none">{row.Ups}</TableCell>
                        <TableCell align="center" padding="none">{row.Calls}</TableCell>
                        <TableCell align="center" padding="none">{row.Emails}</TableCell>
                        <TableCell align="center" padding="none">{row.Texts}</TableCell>
                        <TableCell align="center" padding="none">{row.Tasks}</TableCell>
                        <TableCell align="center" padding="none">{row.ODueTasks}</TableCell>
                        <TableCell align="center" padding="none">{row.Sold}</TableCell>
                        <TableCell align="center" padding="none">{row.LoginTime}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
        </Paper>
);

export default withStyles(styles)(EmpActivity);