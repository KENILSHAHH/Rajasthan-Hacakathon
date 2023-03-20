/** @format */

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  pageWrap: {
    textAlign: "center",
    color: "#000",
    backgroundImage: "url('hero.avif')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    textAlign: "center",
  },
  pageHeading: {
    textAlign: "center",
    margin: "15px auto",
    paddingTop: "40px",
    color: "#a57b44",
    // fontFamily: "Libre Baskerville",
    fontFamily: "Poppins",
  },
  media: {
    height: 140,
  },
  TableRoot: {
    width: "100%",
    maxWidth: 1200,
    margin: "5px auto",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #a57b44",
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 7,
  },
  AddressCell: {
    maxWidth: 150,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tableCount: {
    textAlign: "center",
    margin: "10px auto",
    padding: 0,
    color: "#000",
  },
  TableHead: {
    backgroundColor: "#000 !important",
    color: "#fff !important",
  },
  TableCell: {
    color: "#000 !important",
  },

  FormWrap: {
    maxWidth: 900,
    margin: "30px auto",
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #a57b44",
  },

  RoleForm: {
    display: "flex",
    alignItems: "center",
    margin: "20px auto",
  },

  //Explorer
  Explorerroot: {
    padding: "2px 4px",
    margin: "10px",
    width: "100%",
  },
  ProductPaper: {
    padding: 10,
    // borderRadius: 10,
    // boxShadow: "2px 2px 10px #a57b44",
    border: "2px solid #000",
  },
  ExplorerdRow: {
    width: "100%",
    borderBottom: `0px solid #222`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: "0 auto",
    fontWeight: 600,
    color: "#000",
  },
  TableRoot2: {
    width: "100%",
    maxWidth: 1300,
    margin: "5px auto",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #a57b44",
  },

  //Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    padding: 15,
    outline: "none",
    width: "min(90%, 650px)",
    height: "80%",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #a57b44",
    overflow: "scroll",
  },
  Reciptpaper: {
    backgroundColor: "#fff",
    border: "0px solid #000",
    padding: 15,
    outline: "none",
    width: "min(95%, 950px)",
    height: "500px",
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #a57b44",
    overflow: "scroll",
  },
  dRow: {
    width: "100%",
    borderBottom: `1px solid #222`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: "0 auto",
  },

  dCol1: {
    width: "30%",
    textAlign: "left",
    fontWeight: 600,
    color: "#000",
  },
  dCol2: {
    width: "70%",
    textAlign: "left",
    fontWeight: 600,
    color: "#000",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  //Home
  HomeBtn: {
    margin: 10,
    color: "#bbc7c7",
    backgroundColor: "black",
    fontWeight: "semibold",
    fontSize: "20px",
    borderRadius: "0",
    fontFamily: "Poppins",
    textTransform: "capitalize",
  },
  HomeCardWrap: {
    maxWidth: 500,
    width: "90%",
    padding: 20,
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "0 80px 80px rgba(0,0,0,.8)",
    // border: "1px solid #888",
    margin: "10px auto",
  },
});
