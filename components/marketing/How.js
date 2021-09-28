import { Typography, Container } from "@material-ui/core";
import Image from "next/image";
import React from "react";

function NewSolutionsSection() {
  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <Container maxWidth="md" align="center">
        <Typography
          variant="h1"
          color="primary"
          style={{ fontWeight: 900, marginTop: 69 }}
        >
          HOW IT WORKS
        </Typography>
        <div style={{ marginTop: 63, alignItems: "left" }}>
          <Image
            src={"/images/speedometer.png"}
            height="160px"
            width="180px"
            alt="Speedometer"
          />
          <div>
            <Typography
              variant="h3"
              color="primary"
              align="left"
              style={{ width: "60%" }}
            >
              <span style={{ fontSize: 61, fontWeight: "bold" }}>1. </span>
              <span style={{ fontSize: 38, fontWeight: "bold" }}>
                Put your junk in a box
              </span>
            </Typography>
            <Typography
              align="left"
              style={{ color: "#3d3d3d", fontSize: 22, width: "60%" }}
            >
              Grab that old ecommerce box you've got lying around and give me
              your e-waste, hard to recycle items, and junk you just don't know
              how to deal with.
            </Typography>
          </div>
        </div>

        <div style={{ marginTop: 73, alignItems: "left" }}>
          <div style={{ width: "70%", display: "flex" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>2. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Print off your shipping label
                </span>
              </Typography>
              <Typography
                align="left"
                style={{
                  color: "#3d3d3d",
                  fontSize: 22,
                  marginLeft: 0,
                }}
              >
                Tell us about the box, follow some simple rules to make
                everything safe, and then pay for your shipping label.We'll
                email it to you along with some simple instructions.
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 73,
            alignItems: "left",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              marginLeft: 60,
              marginRight: 47,
              marginTop: 40,
            }}
          >
            <Image
              src={"/images/new_badge.png"}
              height="190px"
              width="160px"
              alt="Achievement Badge"
            />
          </div>
          <div style={{ width: "60%" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>3. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Mail us that box
                </span>
              </Typography>
              <Typography
                align="left"
                style={{
                  color: "#3d3d3d",
                  fontSize: 22,
                  marginLeft: 0,
                }}
              >
                Afix the shipping labels and throw it in the mail at your
                leisure!
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 73, alignItems: "left" }}>
          <div style={{ width: "70%", display: "flex" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>4. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  We donate, upcycle, and recycle
                </span>
              </Typography>
              <Typography
                align="left"
                style={{
                  color: "#3d3d3d",
                  fontSize: 22,
                  marginLeft: 0,
                }}
              >
                We'll make sure everything gets appropriately donated, upcycled,
                and recycled at responsible recycling centers in the U.S.
              </Typography>
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: 35, marginTop: -27 }}>
                  <Image
                    src={"/images/trolley.png"}
                    height="220px"
                    width="260px"
                    alt="Shopping Cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 73,
            alignItems: "left",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              marginLeft: 60,
              marginRight: 47,
              marginTop: 40,
            }}
          >
            <Image
              src={"/images/new_badge.png"}
              height="190px"
              width="160px"
              alt="Achievement Badge"
            />
          </div>
          <div style={{ width: "60%" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>5. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Get a pat on the back
                </span>
              </Typography>
              <Typography
                align="left"
                style={{
                  color: "#3d3d3d",
                  fontSize: 22,
                  marginLeft: 0,
                }}
              >
                We’ll send you some coupons and discounts you can use at leading
                retailers to make all this worth it! Thanks for putting your
                junk in a box!
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewSolutionsSection;
