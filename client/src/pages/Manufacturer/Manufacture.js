import React,{useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRole } from "../../context/RoleDataContext";
import Navbar from "../../components/Navbar";
import { useStyles } from "../../components/Styles";
import Grid from "@material-ui/core/Grid";
import Loader from "../../components/Loader";
import  create  from "ipfs-http-client";
import {Buffer} from 'buffer'


const projectId = '2MCR81xh4vPrqI0y4SQtv09NTnb' ;
const projectSecret = '1db9edb0249dd358814ccfd8f9dfc26d';
const auth = 'Basic '  + Buffer.from(projectId +':' + projectSecret).toString('base64');
console.log("done");
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

// const onSubmitHandler = async (event) => {
//   // event.preventDefault();
//   const form = event.target;
//   const files = (form[0]).files;

//   if (!files || files.length === 0) {
//     return alert("No files selected");
//   }

//   const file = files[0];
//   // upload files
//   const result = await client.add(file);

//   setImages([
//     ...images,
//     {
//       cid: result.cid,
//       path: result.path,
//     },
//   ]);

//   // form.reset();
// };


export default function Manufacture(props) {
  const supplyChainContract = props.supplyChainContract;
  const classes = useStyles();
  const { roles } = useRole();
  const [loading, setLoading] = React.useState(false);
  const [images, setImages] = useState([])
  const [fvalid, setfvalid] = React.useState(false);
  const navItem = [
    ["Add Product", "/manufacturer/manufacture"],
    ["Ship Product", "/manufacturer/ship"],
    ["All Products", "/manufacturer/allManufacture"],
  ];
  
  const [manuForm, setManuForm] = React.useState({
    id: 0,
    manufacturerName: "",
    manufacturerDetails: "",
    manufacturerLongitude: "",
    manufacturerLatitude: "",
    productName: "",
    productCode: 0,
    productPrice: 0,
    productCategory: "",
   image:""
  });

  const handleChangeManufacturerForm = async (e) => {
    setManuForm({
      ...manuForm,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = (form[0]).files;
    console.log(files)
    if (!files || files.length === 0) {
      return alert("No files selected");
    }
    const file = files[0];
    const result = await client.add(file);
    console.log(result)
    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);
    console.log(images)
    setManuForm({
      ...manuForm,
      image: result.path,
    });
    // form.reset();
  };
  const handleSubmitManufacturerForm = async () => {
    setLoading(true);

    if (
      manuForm.manufacturerName !== "" &&
      manuForm.manufacturerDetails !== "" &&
      manuForm.manufacturerLongitude !== "" &&
      manuForm.manufacturerLatitude !== "" &&
      manuForm.productName !== "" &&
      manuForm.productCode !== 0 &&
      manuForm.productPrice !== 0 &&
      manuForm.productCategory !== ""
    ) {
      setfvalid(false);
      console.log(manuForm);
      await supplyChainContract.methods
        .manufactureProduct(
          manuForm.manufacturerName,
          manuForm.manufacturerDetails,
          manuForm.manufacturerLongitude,
          manuForm.manufacturerLatitude,
          manuForm.productName,
          parseInt(manuForm.productCode),
          parseInt(manuForm.productPrice),
          manuForm.productCategory,
          manuForm.image
        )
        .send({ from: roles.manufacturer, gas: 999999 })
        .on("transactionHash", function (hash) {
          handleSetTxhash(hash);
        });
      setManuForm({
        id: 0,
        manufacturerName: "",
        manufacturerDetails: "",
        manufacturerLongitude: "",
        manufacturerLatitude: "",
        productName: "",
        productCode: 0,
        productPrice: 0,
        productCategory: "",
        image:""
      });
    } else {
      setfvalid(true);
    }
    setLoading(false);
  };

  const handleSetTxhash = async (hash) => {
    await supplyChainContract.methods
      .setTransactionHashOnManufacture(hash)
      .send({ from: roles.manufacturer, gas: 900000 });
  };

  const createProduct = async () => {
    setLoading(true);
    for (var i = 0; i < 5; i++) {
      await supplyChainContract.methods
        .manufactureProduct(
          "product" + i,
          "manufacturer" + 1,
          "98",
          "89",
          "mi" + i,
          99 + i,
          12000,
          "electronics"
        )
        .send({ from: roles.manufacturer, gas: 999999 })
        .on("transactionHash", function (hash) {
          handleSetTxhash(hash);
        });
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar pageTitle={"Manufacturer"} navItems={navItem}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={classes.FormWrap}>
              <h1 className={classes.pageHeading}>Add Product</h1>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="manufacturerName"
                    variant="outlined"
                    value={manuForm.manufacturerName}
                    onChange={handleChangeManufacturerForm}
                    label="Manufacturer Name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="manufacturerDetails"
                    variant="outlined"
                    value={manuForm.manufacturerDetails}
                    onChange={handleChangeManufacturerForm}
                    label="Manufacturer Details"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="manufacturerLongitude"
                    variant="outlined"
                    value={manuForm.manufacturerLongitude}
                    onChange={handleChangeManufacturerForm}
                    label="Longitude"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="manufacturerLatitude"
                    variant="outlined"
                    value={manuForm.manufacturerLatitude}
                    onChange={handleChangeManufacturerForm}
                    label="Latitude"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="productName"
                    variant="outlined"
                    value={manuForm.productName}
                    onChange={handleChangeManufacturerForm}
                    label="Product Name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="productCode"
                    variant="outlined"
                    value={manuForm.productCode}
                    onChange={handleChangeManufacturerForm}
                    label="Product Code"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="productPrice"
                    variant="outlined"
                    value={manuForm.productPrice}
                    onChange={handleChangeManufacturerForm}
                    label="Product Price"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="productCategory"
                    variant="outlined"
                    value={manuForm.productCategory}
                    onChange={handleChangeManufacturerForm}
                    label="Product Category"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <form onSubmit={onSubmitHandler}>
                <input type="file" name="file"/>
                <button type="submit">Upload file</button>
          </form>
              </Grid>
              <br />
              <p>
                <b style={{ color: "red" }}>
                  {fvalid ? "Please enter all data" : ""}
                </b>
              </p>

              <Button
                type="submit"
                variant="contained"
                color="black"
                onClick={handleSubmitManufacturerForm}
                style={{
                  fontFamily: "Libre Baskerville",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Submit
              </Button>

              <br />
              <br />
            </div>
          </>
        )}
      </Navbar>
      {images.map((image, index) => (
          <img
          alt={`Uploaded #${index + 1}`}
          src={"ipfs.io/ipfs/" + image.path}
            style={{ maxWidth: "400px", margin: "15px" }}
            key={image.cid.toString() + index}
          />
        ))}
    </>
  );
}
