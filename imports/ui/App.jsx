import { AppBar, CssBaseline, Divider, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';


export const App = () => {
  const classes = useStyles();

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
       <Drawer
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
          {['Pastoral', 'Agenda', 'Ao Vivo', 'Comunidade', 'Contato', 'Contribua', 'Missão'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};


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

