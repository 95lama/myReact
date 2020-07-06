import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
mapboxgl.accessToken =
  "pk.eyJ1IjoibW9oc2VuOTQiLCJhIjoiY2p5am5wZnV6MDFodDNjdDVhOWJ3NHI3byJ9.RXuC69eS0VpZAAW8ClR1Og";

const useStyles = makeStyles((theme) => ({
  map: {
    width: "500px",
    height: "500px",
    borderRadius: "2px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),
      padding: "1em",
      placeItems: "center",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
    justifyContent: "center",
  },
  text: {
    justifyItems: "center",
    textAlign: "center",
    padding: "0 8em 0 8em",
  },
}));
const Map = () => {
  const classes = useStyles();
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [39.1925, 21.4858],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.container}>
      <h1 id="location">Main Office</h1>
      <p className={classes.text}>
        Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        temporibus cupiditate nisi veritatis quod consequuntur cum nesciunt
        blanditiis voluptas pariatur
      </p>
      <div className={classes.root}>
        <Paper elevation={3}>
          <HelpOutlineIcon></HelpOutlineIcon>
          <p>055.XXX.XXXX </p>
          <p>CALL FOR CONSULTATION</p>
        </Paper>
        <Paper elevation={3}>
          <HelpOutlineIcon></HelpOutlineIcon>
          <p>Mon - Fri : 9am - 6pm </p>
          <p>WORKING HOURS</p>
        </Paper>
        <Paper elevation={3}>
          <HelpOutlineIcon></HelpOutlineIcon>
          <p>055.XXX.XXXX</p>
          <p>FAX</p>
        </Paper>
        <Paper elevation={3}>
          <HelpOutlineIcon></HelpOutlineIcon>
          <p>info@spidertech.com </p>
          <p>EMAIL ADDRESS</p>
        </Paper>
      </div>
      <div className={classes.map} ref={mapContainerRef} />
    </div>
  );
};

export default Map;
