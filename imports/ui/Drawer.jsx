import React from 'react';
import { AppBar, CssBaseline, Divider, Drawer as MUIDrawer, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useHistory, withRouter } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    color: 'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbarProps: {
    backgroundColor: 'white',
    color: 'black'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

const Drawer = () => {
  const classes = useStyles();
  const history = useHistory();

  const itemsList = [
    {
      text: "Pastoral",
      onClick: () => history.push("/pastoral")
    },
    {
      text: "Agenda",
      onClick: () => history.push("/agenda")
    },
    {
      text: "Ao Vivo",
      onClick: () => history.push("/aovivo")
    },
    {
      text: "Comunidade",
      onClick: () => history.push("/comunidade")
    },
    {
      text: "Contato",
      onClick: () => history.push("/contato")
    },
    {
      text: "Contribua",
      onClick: () => history.push("/contribua")
    },
    {
      text: "Missão",
      onClick: () => history.push("/missao")
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarProps}>
          <Typography variant="h6" noWrap>
            Ip Mosaico
          </Typography>
        </Toolbar>
      </AppBar>
       <MUIDrawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {
            itemsList.map((item) => {
              const { text, onClick } = item;

              return (
                <ListItem button key={text} onClick={onClick}>
                  <ListItemText primary={text} />
                </ListItem>
              );
            })
          }
        </List>
      </MUIDrawer>
    </div>
  );
};

export default withRouter(Drawer);
