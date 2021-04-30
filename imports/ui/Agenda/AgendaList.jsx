import React, { useState } from "react";
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
import { CustomTableCell } from "../utils/CustomTableCell";

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

const createData = (horario, atividade, isEditMode, isNew) => ({
  idAtividade: isNew ? 'isNew' : atividade.replace(" ", "_"),
  horario,
  atividade,
  isEditMode
});

export const AgendaList = ({id, dia, atividades}) => {
  const classes = useStyles();
  const [rows, setRows] = useState(atividades.map(a => createData(a.horario, a.atividade, false, false)));
  const [creating, setCreating] = useState(false);
  const [previous, setPrevious] = useState({});
  const [error, setError] = useState('');

  const onCreate = () => {
    const newRow = createData('', '', true, true);

    setRows([...rows, newRow]);
    setCreating(true);
  }

  const onUpdate = (e, idAtividade) => {
    e.stopPropagation();
    const data = rows.map((row) => {
      return {
        horario: row.horario,
        atividade: row.atividade,
      }
    })
    
    Meteor.call('agenda.update', id, dia, data, (error) => {
      if (error) {
        setError('Preencha todos os campos obrigatórios!');
      } else {
        setError('');
        onToggleEditMode(idAtividade);
        setCreating(false);
      }
    });
  }

  const onDelete = (e, idAtividade) => {
    e.stopPropagation();
    const newRows = rows
      .filter(row => row.idAtividade !== idAtividade)

    const data = newRows
        .map((row) => {
          return {
            horario: row.horario,
            atividade: row.atividade,
          }
        })
    
    Meteor.call('agenda.update', id, dia, data, (error) => {
      if (error) {
        setError('Preencha todos os campos obrigatórios!');
      } else {
        setError('');
        setRows(newRows);
        setCreating(false);
      }
    });
  }

  const onToggleEditMode = idAtividade => {
    setRows(() => {
      return rows.map(row => {
        if (row.idAtividade === idAtividade) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.idAtividade]) {
      setPrevious(state => ({ ...state, [row.idAtividade]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { idAtividade } = row;
    const newRows = rows.map(row => {
      if (row.idAtividade === idAtividade) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = idAtividade => {
    const newRows = rows.map(row => {
      if (row.idAtividade === idAtividade) {
        return previous[idAtividade] ? previous[idAtividade] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[idAtividade];
      return state;
    });
    onToggleEditMode(idAtividade);
  };

  return (
    <TableContainer component={Paper}>
      <div className={classes.toolbar} />
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Horario</TableCell>
            <TableCell align="left">Atividade</TableCell>
            <TableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.idAtividade}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={e => onUpdate(e, row.idAtividade)}
                      disabled={!row.horario.length && !row.atividade.length}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.idAtividade)}
                      disabled={!row.horario.length && !row.atividade.length}
                    >
                      <RevertIcon />
                    </IconButton>
                    {error}
                  </>
                ) : (
                  <IconButton
                    aria-label="toggle"
                    onClick={() => onToggleEditMode(row.idAtividade)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "horario", onChange }} />
              <CustomTableCell {...{ row, name: "atividade", onChange }} />
              <TableCell className={classes.selectTableCell}>
                <IconButton
                    aria-label="delete"
                    onClick={e => onDelete(e, row.idAtividade)}
                    disabled={!row.horario.length && !row.atividade.length}
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

AgendaList.propTypes = {
  id: PropTypes.string.isRequired,
  dia: PropTypes.string.isRequired,
  atividades: PropTypes.array.isRequired,
}
