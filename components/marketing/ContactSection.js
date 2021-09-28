import React from "react";
import Section from "../primitives/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "../primitives/SectionHeader";
import Contact from "./Contact";

function ContactSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
        <SectionHeader
          style={{ marginTop: 40 }}
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <div style={{ marginBottom: 40 }}>
          <Contact
            showNameField={props.showNameField}
            buttonText={props.buttonText}
            buttonColor={props.buttonColor}
          />
        </div>
      </Container>
    </Section>
  );
}

export default ContactSection;
