import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import photo from "../img/1.jpg";

const useStyles = makeStyles((theme) => ({
  placeholder: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    display: "block",
    marginTop: "4em",
    borderRadius: "2px",
  },
}));

function Body() {
  const classes = useStyles();
  return (
    <img id="home" className={classes.placeholder} alt="" src={photo}></img>
  );
}

export default Body;
