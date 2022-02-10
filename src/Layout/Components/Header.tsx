import {FC} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navLinkStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '7px 23px 0 23px',
    margin: "10px",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    transition: "all 0.7s"
  },
  active: {
    background: 'linear-gradient(45deg, #fa2d5a 30%, #ff6614 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '7px 23px 0 23px',
    margin: "10px",
    textDecoration: "none",
    textTransform: "uppercase",
    fontFamily: "Helvetica",
    transform: "translateY(15%)",
    transition: "all 0.7s"
  }
});

 const Header: FC = () => {
  const classes = useStyles();
  return (
      <AppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "center"}}>
          <Button><NavLink className={({isActive}) => isActive ? classes.active : classes.navLinkStyle} to="/main">Main</NavLink></Button>
          <Button><NavLink className={({isActive}) => isActive ? classes.active : classes.navLinkStyle} to="/exercises">Exercises</NavLink></Button>
          <Button><NavLink className={({isActive}) => isActive ? classes.active : classes.navLinkStyle} to="/create-exercise">Create exercise</NavLink></Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header;