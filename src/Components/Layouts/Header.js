import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  root: {
    backgroundColor: "#00897B",
    color: "#B2EBF2",
    alignItems: 'center'
    
  },
};

const Header = props => {
  const { classes } = props;
  return (
      <AppBar className={classes.root} position="static" color="default">
        <Toolbar>
        <CssBaseline />
          <Typography variant="display1" color="inherit">
            What are we eating today :) :D xD
          </Typography>
        </Toolbar>
      </AppBar>
  );
}



export default withStyles(styles)(Header);