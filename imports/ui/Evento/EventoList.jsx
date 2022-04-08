import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import { TableContainer } from "@material-ui/core";
import { CustomTableCell } from '../utils/CustomTableCell';

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  selectTableCell: {
    width: 60
  },
  input: {
    width: 130,
    height: 40
  }
}));

const createData = (id, titulo, dataInicial, local, isEditMode) => ({
  id,
  titulo,
  dataInicial,
  local,
  isEditMode
});

export const EventoList = ({eventos}) => {
  const classes = useStyles();
  const [rows, setRows] = useState(eventos.map(m => createData(m._id, m.titulo, m.dataInicial, m.local, false)));
  const [creating, setCreating] = useState(false);
  const [previous, setPrevious] = useState({});
  const [error, setError] = useState('');

  const onCreate = () => {
    const newRow = createData(undefined, '', '', '', true);

    setRows([...rows, newRow]);
    setCreating(true);
  }

  const onUpdate = (e, id) => {
    e.preventDefault();

    const { titulo, dataInicial, local } = rows.find(row => row.id === id);

    if (id) {
      Meteor.call('missao.update', id, titulo, dataInicial, local, (error) => {
        if (error) {
          setError('Preencha todos os campos obrigatórios!');
        } else {
          setError('');
          onToggleEditMode(id);
        }
      });
    } else {
      Meteor.call('missao.insert', titulo, dataInicial, local, (error) => {
        if (error) {
          setError('Preencha todos os campos obrigatórios!');
        } else {
          setError('');
          onToggleEditMode(id);
          setCreating(false);
        }
      });
    }
  }

  const onDelete = (e, id) => {
    e.stopPropagation();
    const newRows = rows
      .filter(row => row.id !== id)
    
    Meteor.call('missao.delete', id);
    setRows(newRows);
  }

  const onToggleEditMode = id => {
    setRows(() => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };

  return (
    <TableContainer component={Paper}>
      <div className={classes.toolbar} />
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Titulo</TableCell>
            <TableCell align="left">Data Inicial</TableCell>
            <TableCell align="left">Local</TableCell>
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={e => onUpdate(e, row.id)}
                      disabled={!row.titulo.length && !row.dataInicial.length && !row.local.length}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                      disabled={!row.titulo.length && !row.dataInicial.length && !row.local.length}
                    >
                      <RevertIcon />
                    </IconButton>
                    {error}
                  </>
                ) : (
                  <IconButton
                    aria-label="toggle"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "titulo", onChange }} />
              <CustomTableCell {...{ row, name: "dataInicial", onChange }} />
              <CustomTableCell {...{ row, name: "local", onChange }} />
              <TableCell className={classes.selectTableCell}>
                <IconButton
                    aria-label="delete"
                    onClick={e => onDelete(e, row.id)}
                    disabled={!row.titulo.length && !row.dataInicial.length && !row.local.length}
                  >
                    <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <IconButton
        aria-label="create"
        onClick={onCreate}
        disabled={creating}
      >
        <AddIcon />
    </IconButton>
    </TableContainer>
  );
}

EventoList.propTypes = {
  eventos: PropTypes.array.isRequired,
}
