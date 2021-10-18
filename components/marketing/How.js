import { Typography, Container, Grid } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { Link as MuiLink } from "@material-ui/core";

function NewSolutionsSection() {
  return (
    <Container maxWidth="md" align="center">
      <Typography
        variant="h1"
        color="primary"
        style={{ fontWeight: 900, paddingTop: 40 }}
      >
        HOW IT WORKS
      </Typography>
      <Typography
        variant="h4"
        style={{ fontWeight: 500, paddingTop: 40, color: "#3d3d3d" }}
      >
        We help you sustainably recycle old chargers, earphones, cameras,
        phones, laptops, and batteries.
      </Typography>
      <div style={{ marginTop: 63 }}>
        <Grid container spacing={2}>
          <Grid item style={{ width: "70%" }} xs={12} lg={8}>
            <Typography variant="h3" color="primary" align="left">
              <span style={{ fontSize: 61, fontWeight: "bold" }}>1. </span>
              <span style={{ fontSize: 38, fontWeight: "bold" }}>
                Put your junk in a box
              </span>
            </Typography>
            <Typography align="left" style={{ color: "#3d3d3d", fontSize: 22 }}>
              Grab that old ecommerce box you've got lying around and give me
              your e-waste, hard to recycle items, and junk you just don't know
              how to deal with.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={4} style={{ marginBottom: 30 }}>
            <Image width="300" height="300" src="/images/box.png" />
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 90 }} spacing={2}>
          <Grid item style={{ width: "70%" }} xs={12} lg={8}>
            <Typography variant="h3" color="primary" align="left">
              <span style={{ fontSize: 61, fontWeight: "bold" }}>2. </span>
              <span style={{ fontSize: 38, fontWeight: "bold" }}>
                Put your box in the mail
              </span>
            </Typography>
            <Typography align="left" style={{ color: "#3d3d3d", fontSize: 22 }}>
              Tell us about the box, follow some simple rules to make everything
              safe, pay for your shipping label and then we'll email it to you
              along with some product discounts.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={4} style={{ marginBottom: 30 }}>
            <Image width="300" height="300" src="/images/mailbox.gif" />
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 90 }} spacing={2}>
          <Grid item style={{ width: "70%" }} xs={12} lg={8}>
            <Typography variant="h3" color="primary" align="left">
              <span style={{ fontSize: 61, fontWeight: "bold" }}>3. </span>
              <span style={{ fontSize: 38, fontWeight: "bold" }}>
                We sort & recycle your junk
              </span>
            </Typography>
            <Typography align="left" style={{ color: "#3d3d3d", fontSize: 22 }}>
              We'll make sure everything gets appropriately recycled at{" "}
              <MuiLink>
                {" "}
                <a href="www.e-stewards.org">e-stewards</a>
              </MuiLink>{" "}
              certified recycling centers across the U.S.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={4} style={{ marginBottom: 30 }}>
            <iframe
              src="https://giphy.com/embed/2dPo5eE97Aw5q"
              width="300"
              height="180"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default NewSolutionsSection;
