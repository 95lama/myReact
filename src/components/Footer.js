import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3f51b5",
    color: "white",
    height: "30vh",
    position: "absolute",
    paddingTop: theme.spacing(4),
    
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    paddingLeft: 0,
    "& li": {
      color: "white",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      width="100%"
      justifyContent="space-evenly"
    >
      <Box maxWidth="33%">
        <h3>Social</h3>
        <ul className={classes.list}>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              <TwitterIcon style={{ color: "white" }}></TwitterIcon> @SpiderTech
            </Link>
          </li>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              <FacebookIcon style={{ color: "white" }}></FacebookIcon>{" "}
              @SpiderTech
            </Link>
          </li>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              <InstagramIcon style={{ color: "white" }}></InstagramIcon>{" "}
              @SpiderTech
            </Link>
          </li>
        </ul>
      </Box>
      <Box maxWidth="33%">
        <h3>Quick Links</h3>
        <ul className={classes.list}>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              Home
            </Link>
          </li>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              About Us
            </Link>
          </li>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              FAQs
            </Link>
          </li>
          <li>
            <Link color="inherit" href="#" onClick={(e) => e.preventDefault}>
              Clients
            </Link>
          </li>
        </ul>
      </Box>
      <Box maxWidth="33%">
        <h3>Contact Us</h3>
        <p>
          Address: 2357, Alrawdah, 95547 - 3776, Jeddah, SA.
        </p>
        <p>
          TEL: 055.XXX.XXXX
        </p>
        <p>
          EMAIL: info@spidertech.com
        </p>
      </Box>
    </Box>
  );
}

export default Footer;
