// The One Step wizard

import React from "react";
import Image from "next/image";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";
import { Container } from "@material-ui/core";

function index() {
  return (
    <div>
      <Section>
        <Container maxWidth="md">
          <SectionHeader
            title="Step One: Put your junk in a box"
            subtitle="It will feel good we promise."
            size="3"
            textAlign="center"
            textColor="#0e697b"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src="/images/junk_in_box.png" height="200" width="600" />
          </div>
        </Container>
        {/* Some Image of an arrow and junk going into my cardboard box */}
      </Section>
    </div>
  );
}

export default index;
