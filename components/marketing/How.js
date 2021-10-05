import { Typography, Container } from "@material-ui/core";
import Image from "next/image";
import React from "react";

function NewSolutionsSection() {
  return (
    <div>
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
          <div style={{ display: "flex" }}>
            <div style={{ width: "70%", marginTop: 30 }}>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>1. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Put your junk in a box
                </span>
              </Typography>
              <Typography
                align="left"
                style={{ color: "#3d3d3d", fontSize: 22 }}
              >
                Grab that old ecommerce box you've got lying around and give me
                your e-waste, hard to recycle items, and junk you just don't
                know how to deal with.
              </Typography>
            </div>

            <div style={{ marginLeft: 30, marginBottom: 30 }}>
              <Image width="300" height="300" src="/images/box.png" />
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 90 }}>
            <div style={{ width: "70%", marginTop: 30 }}>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>2. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Put your box in the mail
                </span>
              </Typography>
              <Typography
                align="left"
                style={{ color: "#3d3d3d", fontSize: 22 }}
              >
                Tell us about the box, follow some simple rules to make
                everything safe, pay for your shipping label and then we'll
                email it to you along with some product discounts.
              </Typography>
            </div>

            <div style={{ marginLeft: 30, marginBottom: 30 }}>
              <Image width="300" height="300" src="/images/mailbox.gif" />
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 90 }}>
            <div style={{ width: "70%" }}>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>3. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  We sort & recycle your junk
                </span>
              </Typography>
              <Typography
                align="left"
                style={{ color: "#3d3d3d", fontSize: 22 }}
              >
                We'll make sure everything gets appropriately donated, upcycled,
                and recycled at responsible recycling centers in the U.S.
              </Typography>
            </div>

            <div style={{ marginLeft: 30, marginBottom: 30 }}>
              <iframe
                src="https://giphy.com/embed/2dPo5eE97Aw5q"
                width="300"
                height="180"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              />
            </div>
          </div>

          <div>
            {/* <Typography
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
          ></div>
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
          <div style={{ display: "flex", flexDirection: "column" }}>
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
          </div>
        </div>
        <div
          style={{
            marginTop: 73,
            // alignItems: "left",
            display: "flex",
            marginBottom: 50,
          }}
        >
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
            </div>*/}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewSolutionsSection;
