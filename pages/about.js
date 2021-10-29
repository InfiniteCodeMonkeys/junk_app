import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Section from "components/primitives/Section";
import SectionHeader from "components/primitives/SectionHeader";

export default function About() {
  return (
    <>
      <Head>
        <title>Junk Drawr | About</title>
        <link rel="icon" href="/images/drawr_icon.svg" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. Here's why we got into business and what we're trying to do."
        />
      </Head>
      <Section bg="light" textColor="text" style={{ height: "100%" }}>
        <Container style={{ marginTop: 80 }} maxWidth="md">
          <SectionHeader
            title="Who the hell are we?"
            subtitle=" Environmentalists with en enterpreneurial bent"
            size={3}
            textAlign="center"
          />

          <div className="">
            <Typography>
              We are eco-conscious entrepreneurs in Denver, CO who believe there
              is a lot of junk sitting in people's houses, apartments, garages,
              and of course junk drawers. We believe people don't do anything
              with because they either don't know what to do, don't have a place
              to recycle it near them, or it's just too hard to deal with
              responsibly.
            </Typography>
            <br />
            <Typography>
              A lot of that junk doesn't have value on the open market. Good
              luck selling a 10 year old digital camera on ebay or that old
              smart phone charger that doesn't fit any of the new phones.
            </Typography>
            <br />
            <Typography>
              But the minerals and metals inside it are often valuable to
              society if you can bundle enough of it together. That's what we're
              trying to do: sort and bundle your junk so it can be responsibly
              recycled and those valuable minerals and metals are reclaimed.
            </Typography>
            <br />
            <Typography>
              We're trying to prove the concept that people will mail us their
              junk for the price of shipping and handling instead of sending it
              the landfill. Help us out! Put your junk in a box.
            </Typography>
          </div>
        </Container>
      </Section>
    </>
  );
}
