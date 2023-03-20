/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Home() {
  const classes = useStyles();
  const navItem = [];

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <Grid
            container
            spacing={3}
            style={{ height: "100%", minHeight: "90vh", width: "100%" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "end",
                flexWrap: "wrap",
              }}
            >
              {/* <h1
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  opacity: "0.5",
                  fontFamily: "Bodoni",
                  fontWeight: "100",
                }}
              >
                Experience the epitome of luxury with our exquisite collection
                of Decent Supply. products.
              </h1> */}
              {/* <img
                alt="."
                src="/homeArt.png"
                style={{ width: "90%", height: "auto" }}
              /> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                minHeight: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <div className={classes.HomeCardWrap}>
                <br />
                <h1 className={classes.pageHeading}>Pick your role</h1>
                <Link
                  to="/manufacturer/manufacture"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                  >
                    Manufacturer
                  </Button>
                </Link>
                <Link
                  to="/ThirdParty/allProducts"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    style={{}}
                  >
                    Distributor
                  </Button>
                </Link>
                <Link
                  to="/DeliveryHub/receive"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    style={{}}
                  >
                    Delivery Portal
                  </Button>
                </Link>
                <Link
                  to="/Customer/buy"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    style={{}}
                  >
                    customer
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Navbar>
      </div>
    </>
  );
}
