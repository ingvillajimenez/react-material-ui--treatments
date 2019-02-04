
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import { ListItemText, Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
        open: false
    }
  }  
  //Toggle function (open/close Drawer)
  toggleDrawer = () =>  {
    this.setState({
        open: !this.state.open
    })
  }
    
  render() {
    const AppBarStyles = {
      flex: 1
    };

    const ListItemTextStyle = {
      width: 200
    }
    return(
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer} color='inherit' arial-label='Menu'>
              <MenuIcon />
            </IconButton>  
            <Typography variant='title' style={AppBarStyles} variant="h6" color="inherit">
              Muktek
            </Typography>
            <div className=''>
              <Link to='/'> 
                <Typography variant='title' style={AppBarStyles} variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
              <Link to='/login'> 
                <Typography variant='title' style={AppBarStyles} variant="h6" color="inherit">
                  Login
                </Typography>
              </Link>
            </div>
          </Toolbar>
        <Drawer open={this.state.open} onClose={this.toogleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >  
            <List>
              <ListItem>
                <ListItemText style={ListItemTextStyle} primary='Features' />
              </ListItem>
              <ListItem button>
                <Link to='/users'>Users</Link>
              </ListItem>
              <Divider />
              <ListItem button>
                <Link to='/treatments'>Treatments</Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
    </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar);