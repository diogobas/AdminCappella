import React from "react";
import PropTypes from 'prop-types';
import Input from "@material-ui/core/Input";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tableCell: {
    width: 130,
    height: 40
  },
  input: {
    width: 130,
    height: 40
  }
}));

export const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

CustomTableCell.propTypes = {
  row: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}