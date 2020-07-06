import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      padding: "2em 8em 2em 8em",
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h1 id="who">Who We Are</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus
        cupiditate nisi veritatis quod consequuntur cum nesciunt blanditiis
        voluptas pariatur, alias rerum quisquam id exercitationem nemo deserunt
        accusantium dignissimos labore. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aut temporibus cupiditate nisi veritatis quod
        consequuntur cum nesciunt blanditiis voluptas pariatur, alias rerum
        quisquam id exercitationem nemo deserunt accusantium dignissimos labore.
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          temporibus cupiditate nisi veritatis quod consequuntur cum nesciunt
          blanditiis voluptas pariatur, alias rerum quisquam id exercitationem
          nemo deserunt accusantium dignissimos labore. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Aut temporibus cupiditate nisi
          veritatis quod consequuntur cum nesciunt blanditiis voluptas pariatur,
          alias rerum quisquam id exercitationem nemo deserunt accusantium
          dignissimos labore.
        </p>
      </Paper>
    </div>
  );
}
