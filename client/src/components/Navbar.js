/** @format */

import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#000",
    // backgroundColor: "#292826",
    opacity: "0.6",
    color: "#000",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    // fontSize: "10px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    color: "#000",
    // fontSize: "20px",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft({
  pageTitle,
  navItems,
  children,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ backgroundColor: "#000000" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "20px",
              padding: "10px 20px",
            }}
          >
            <img
              alt="."
              src="/icon-n.png"
              style={{ height: "90px", width: "100%", padding: "15px 25px" }}
            />
            <img
              alt="."
              src="/logo5.png"
              style={{ height: "75px", width: "100%", padding: "15px 25px" }}
            />

            {/* &nbsp;DecentSupply. */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItemText>
            <b style={{ fontSize: "50px" }}>{pageTitle}</b>
          </ListItemText>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon style={{ color: "#fff" }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Libre Baskerville",
              // fontSize: "130px",
            }}
          >
            <ListItem>
              <ListItemText>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Home
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/explorer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <ListItem>
              <ListItemText>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Product Details
                </span>
              </ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/roleAdmin"
            style={{
              textDecoration: "none",
              color: "#fff",
              fontFamily: "Libre Baskerville",
              // fontSize: "130px",
            }}
          >
            <ListItem>
              <ListItemText>
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  Assign Roles
                </span>
              </ListItemText>
            </ListItem>
          </Link>
        </List>
        <List>
          {navItems.length !== 0 ? (
            navItems.map((item) => (
              <Link
                to={item[1]}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <ListItem button key={item[0]}>
                  <ListItemText primary={item[0]} />
                </ListItem>
              </Link>
            ))
          ) : (
            <> </>
          )}
        </List>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        ></div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ maxWidth: 1300 }}>{children}</div>
      </main>
    </div>
  );
}
