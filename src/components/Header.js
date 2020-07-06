import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: theme.spacing(2),
  },
  linkBox: {
    marginRight: theme.spacing(8),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            🕷 SpiderTech
          </Typography>
          <Box className={classes.linkBox}>
            <Link className={classes.link} href="#home" color="inherit">
              Home
            </Link>
            <Link className={classes.link} href="#who" color="inherit">
              Who We Are
            </Link>
            <Link className={classes.link} href="#location" color="inherit">
              Contact Us
            </Link>
          </Box>

          <Button color="inherit">Login</Button>

          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
