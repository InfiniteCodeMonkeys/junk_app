import Head from "next/head";
import Container from "@material-ui/core/Container";
import Section from "components/primitives/Section";
import FeaturesSection from "components/marketing/FeaturesSection";

const whyItems = [
  {
    title: "1. It's better for the environment",
    body: "Electronics sent to the landfill can leak toxins into the soil and at times the water supply. ",
    image: "/images/landfill.jpg",
    width: 4256,
    height: 2744,
  },
  {
    title: "2. E-waste contains valuable resources for the economy",
    body: "Lithium, nickel, cobalt, gold, silver, and carbon can all be found in modern e-waste. These materials are critical ",
    image: "/images/junkdrawer.jpg",
    width: 400,
    height: 400,
  },
  {
    title: "3. It's circular",
    body: "Recyclying more e-waste means less minerals need to be mined and processed.",
    image: "/images/circular.png",
    width: 400,
    height: 400,
  },
];

export default function WhyPage() {
  return (
    <>
      <Head>
        <title>Junk Drawr | Why Recycle</title>
        <link rel="icon" href="/images/drawr_icon.svg" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. Why should you recycle your e-waste?"
        />
      </Head>
      <Section bg="light" textColor="text">
        <Container style={{ marginTop: 80 }} maxWidth="md">
          <FeaturesSection
            bgColor="#a1c181"
            items={whyItems}
            title="Why Recycle my electronic waste?"
            subtitle="Three reasons really"
          />
        </Container>
      </Section>
    </>
  );
}
