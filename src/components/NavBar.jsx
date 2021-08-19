import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: 25,
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#232f3e" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" exact className={classes.title}>
            Home
          </NavLink>
          <NavLink to="/all" exact className={classes.title}>
            All User
          </NavLink>{" "}
          <NavLink to="/add" exact className={classes.title}>
            Add User
          </NavLink>
          <NavLink to="/form" exact className={classes.title}>
            form
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
