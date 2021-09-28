import { Typography, Container } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
                Measure your impact
              </span>
            </Typography>
            <Typography
              align="left"
              style={{ color: "#3d3d3d", fontSize: 22, width: "60%" }}
            >
              Take our 20min assessment and get a breakdown of your carbon
              footprint, product suggestions, and financial incentives available
              to you.
            </Typography>
            <div style={{ display: "flex", alignItems: "left", width: "60%" }}>
              <Link href="/measure" passHref={true}>
                <Button
                  style={{
                    cursor: "pointer",
                    marginTop: 15,
                    borderRadius: 7,
                    width: 300,
                    backgroundColor: "#fcca46",
                    color: "#0e697b",
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                  variant="contained"
                  size="large"
                >
                  Take the Assessment <ChevronRightIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 73, alignItems: "left", display: "flex" }}>
          <div style={{ marginLeft: 60, marginRight: 47, marginTop: 60 }}>
            <Image
              src={"/images/increasing-chart.png"}
              height="190px"
              width="190px"
              alt="Increasing Chart"
            />
          </div>
          <div style={{ width: "60%" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>2. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Set reachable goals
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
                Choose from an array of reduction goals like reducing carbon
                emissions by 30% by 2025, or recycling 50% of waste from
                operations.
              </Typography>
              <div style={{ display: "flex", alignItems: "left" }}>
                <Link href="/beta" passHref={true}>
                  <Button
                    style={{
                      cursor: "pointer",
                      marginTop: 15,
                      borderRadius: 7,
                      width: 300,
                      backgroundColor: "#fcca46",
                      color: "#0e697b",
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                    variant="contained"
                    size="large"
                  >
                    View our Plans <ChevronRightIcon />
                  </Button>
                </Link>
              </div>
              <Link href="/beta">
                <Typography
                  align="left"
                  style={{ color: "#7a7a7a", fontSize: 18 }}
                >
                  <u>Or get inspired by success stories.</u>
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 73, alignItems: "left" }}>
          <div style={{ width: "70%", display: "flex" }}>
            <div>
              <Typography variant="h3" color="primary" align="left">
                <span style={{ fontSize: 61, fontWeight: "bold" }}>3. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Find sustainable products
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
                Search the Carbone Undone marketplace to find the sustainability
                solutions you’ve been looking for, from biodegradable cups to
                solar installers.
              </Typography>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  <div>
                    {" "}
                    <Link href="/marketplace" passHref={true}>
                      <Button
                        style={{
                          cursor: "pointer",
                          marginTop: 15,
                          borderRadius: 7,
                          width: 400,
                          backgroundColor: "#fcca46",
                          color: "#0e697b",
                          fontSize: 18,
                          fontWeight: 600,
                          marginBottom: 10,
                        }}
                        variant="contained"
                        size="large"
                      >
                        Go to the Marketplace <ChevronRightIcon />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/vendors">
                      <Typography
                        align="left"
                        style={{ color: "#7a7a7a", fontSize: 18 }}
                      >
                        <u>Or sell your products</u>
                      </Typography>
                    </Link>
                  </div>
                </div>
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
                <span style={{ fontSize: 61, fontWeight: "bold" }}>4. </span>
                <span style={{ fontSize: 38, fontWeight: "bold" }}>
                  Get noticed!
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
                We’ll help you apply to any state, local, utilitiy-based, or
                non-profit green certification programs.
              </Typography>
              <div style={{ display: "flex", alignItems: "left" }}>
                <Link href="/beta" passHref={true}>
                  <Button
                    style={{
                      cursor: "pointer",
                      marginTop: 15,
                      borderRadius: 7,
                      width: 300,
                      backgroundColor: "#fcca46",
                      color: "#0e697b",
                      fontSize: 18,
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                    variant="contained"
                    size="large"
                  >
                    Get certified <ChevronRightIcon />
                  </Button>
                </Link>
              </div>
              <Link href="/beta">
                <Typography
                  align="left"
                  style={{ color: "#7a7a7a", fontSize: 18 }}
                >
                  <u>Or view our certified businesses.</u>
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewSolutionsSection;
