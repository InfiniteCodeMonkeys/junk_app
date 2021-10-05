//get size and dimensions
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import {
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  completeButton: {
    borderRadius: "0px",
    color: "white",
    letterSpacing: "1.666666px",
    fontSize: "16px",
    fontWeight: 600,
    backgroundColor: "#a1c181",
    "&:hover": {
      backgroundColor: "#a1c181",
    },
  },
}));

function Shipping({ data, setData, pending, contactEmail, contactName }) {
  const { register, errors, setValue, control } = useForm();
  const [address, setAddress] = useState({
    contactName: contactName || "",
    contactEmail: contactEmail || "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [dimensions, setDimensions] = useState({
    height: "",
    width: "",
    length: "",
    dimensionUnits: "",
    weight: "",
    weightUnits: "",
  });

  const classes = useStyles();

  const handleAddress = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
    setData({
      ...data,
      address: {
        ...address,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleDimensions = (event) => {
    setDimensions({ ...dimensions, [event.target.name]: event.target.value });
    setData({
      ...data,
      dimensions: {
        ...dimensions,
        [event.target.name]: event.target.value,
      },
    });
  };
  return (
    <div>
      <Section>
        <Container maxWidth="md">
          <SectionHeader
            title="Step Four: And now tell us about your box"
            subtitle="How big is it and where is it coming from? We need the dimensions and weight of the box you are shipping."
            size="3"
            textAlign="center"
            textColor="#0e697b"
          />

          <Grid container={true} spacing={2}>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Contact Name"
                name="contactName"
                value={address.contactName}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Contact Email"
                name="contactEmail"
                value={address.contactEmail}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Street Address"
                name="streetAddress"
                value={address.streetAddress}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="Street Address Line 2"
                name="streetAddress2"
                value={address.streetAddress2}
                onChange={handleAddress}
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="City"
                name="city"
                value={address.city}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="text"
                label="State"
                name="state"
                value={address.state}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <TextField
                variant="outlined"
                type="number"
                label="Zip Code"
                name="zipCode"
                value={address.zipCode}
                onChange={handleAddress}
                required
                fullWidth={true}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <InputLabel style={{ marginBottom: 10 }}>Country *</InputLabel>
              <Select
                variant="outlined"
                name="country"
                value={address.country}
                onChange={handleAddress}
                required
                fullWidth
              >
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Typography variant="h5" style={{ marginBottom: 10, marginTop: 20 }}>
            Dimensions
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <div style={{ marginRight: 15 }}>
              <TextField
                variant="outlined"
                type="number"
                label="Height"
                name="height"
                value={dimensions.height}
                onChange={handleDimensions}
                required
                fullWidth={true}
              />
            </div>
            <div style={{ marginRight: 15 }}>
              <TextField
                variant="outlined"
                type="number"
                label="Length"
                name="length"
                value={dimensions.length}
                onChange={handleDimensions}
                required
                fullWidth={true}
              />
            </div>
            <div>
              <TextField
                variant="outlined"
                type="number"
                label="Width"
                name="width"
                value={dimensions.width}
                onChange={handleDimensions}
                required
                fullWidth={true}
              />
            </div>
          </div>
          <div style={{ marginBottom: 10 }}>
            <InputLabel style={{ marginBottom: 10 }}>
              Dimension Units
            </InputLabel>

            <Select
              variant="outlined"
              name="dimensionUnits"
              value={dimensions.dimensionUnits}
              onChange={handleDimensions}
              required
              fullWidth
            >
              <MenuItem value="in">Inches</MenuItem>
              <MenuItem value="cm">Centimeters</MenuItem>
              <MenuItem value="ft">Feet</MenuItem>
              <MenuItem value="m">Meters</MenuItem>
            </Select>
          </div>

          <Typography variant="h5" style={{ marginBottom: 10 }}>
            Weight
          </Typography>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <TextField
              variant="outlined"
              type="number"
              label="Weight"
              name="weight"
              value={dimensions.weight}
              onChange={handleDimensions}
              required
              //   error={errors.name ? true : false}
              // helperText={errors.name && errors.name.message}
              fullWidth={true}
            />
          </div>
          <div>
            <InputLabel style={{ marginBottom: 10 }}>Weight Unit</InputLabel>

            <Select
              variant="outlined"
              name="weightUnits"
              value={dimensions.weightUnits}
              onChange={handleDimensions}
              required
              fullWidth
            >
              <MenuItem value="g">Grams</MenuItem>
              <MenuItem value="oz">Ounces</MenuItem>
              <MenuItem value="lb">Pounds</MenuItem>
              <MenuItem value="kg">Kilograms</MenuItem>
            </Select>
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              type="submit"
              className={classes.completeButton}
              size="large"
            >
              {!pending && <span>Calculate & Pay</span>}

              {pending && <CircularProgress size={28} color="white" />}
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default Shipping;
