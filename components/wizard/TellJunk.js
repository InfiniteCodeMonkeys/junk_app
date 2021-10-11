// The One Step wizard

import React, { useState } from "react";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  control,
  Typography,
} from "@material-ui/core";

function index({ data, setData }) {
  const [checked, setChecked] = useState({
    ewaste: false,
    cables: false,
    inkCartridges: false,
    clothing: false,
    batteries: false,
    junk: false,
  });

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
    setData({
      ...data,
      items: {
        ...checked,
        [event.target.name]: event.target.checked,
      },
    });
  };

  return (
    <div>
      <Section>
        <Container maxWidth="md">
          <SectionHeader
            title="Step Two: Let's talk about your junk"
            subtitle="Describe it for us."
            size="3"
            textAlign="center"
            textColor="#0e697b"
          />
          <Container maxWidth="sm">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.ewaste}
                        name="ewaste"
                        onChange={handleChange}
                      />
                    }
                    label="Electronics/ e-Waste"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.cables}
                        name="cables"
                        onChange={handleChange}
                      />
                    }
                    label="Cables & Wires"
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.batteries}
                        name="batteries"
                        onChange={handleChange}
                      />
                    }
                    label="Batteries"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.inkCartridges}
                        name="inkCartridges"
                        onChange={handleChange}
                      />
                    }
                    label="Ink Cartridges"
                  />
                  {/* <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.clothing}
                        name="clothing"
                        onChange={handleChange}
                      />
                    }
                    label="Clothing/ Textiles"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.junk}
                        name="junk"
                        onChange={handleChange}
                      />
                    }
                    label="Actual Junk"
                  /> */}
                </FormGroup>
              </div>
            </div>

            {checked.batteries && (
              <div style={{ marginTop: 20 }}>
                <Typography>
                  Great, you're shipping batteries! We like those. Here are some
                  ground rules:
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      Make sure the ends don't touch. This is very important.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Consider putting them in a bag or seperate container
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Make sure they don't move around in the box.
                    </Typography>
                  </li>
                </ul>
              </div>
            )}
          </Container>
        </Container>
      </Section>
    </div>
  );
}

export default index;
