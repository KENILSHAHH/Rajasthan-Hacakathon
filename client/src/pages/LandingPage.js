import React from "react";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the World of Luxury</h1>
      <p style={styles.text}>
        We offer the finest luxury goods, crafted by skilled artisans and made
        from the highest quality materials. With our blockchain-based solution,
        you can trust that our products are authentic and have a provenance you
        can trace from creation to delivery.
      </p>
      <button style={styles.button}>Shop Now</button>
      {/* <div style={styles.hero}><img src="hero2.avif" alt="" /></div> */}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#1F1F1F",
    background: "url('hero2.avif') no-repeat",

    color: "#FFFFFF",
    padding: "50px",
  },
  heading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "24px",
    marginBottom: "40px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFFFFF",
    color: "#1F1F1F",
    fontSize: "18px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    border: "none",
    outline: "none",
    marginBottom: "40px",
  },
  hero: {
    width: "100%",
    height: "600px",
    backgroundImage: "url('hero2.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};

export default LandingPage;
