import React from "react";
import Head from "next/head";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";
import Wizard from "components/wizard";

function WizardPage(props) {
  return (
    <>
      <Head>
        <title>Junk Drawr | Wizard</title>
        <link rel="icon" href="/images/drawr_icon.svg" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. Let's mail some junk."
        />
      </Head>
      <Section>
        <SectionHeader
          style={{ marginTop: 40 }}
          title="Let's mail some junk"
          subtitle={props.subtitle}
          size={1}
          textAlign="center"
        />
        <Wizard />
      </Section>
    </>
  );
}

export default WizardPage;
