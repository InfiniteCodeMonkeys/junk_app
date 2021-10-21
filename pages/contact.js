import React from "react";
import Head from "next/head";
import ContactSection from "components/marketing/ContactSection";

function ContactPage(props) {
  return (
    <>
      <Head>
        <title>Junk Drawr | Contact</title>
        <link rel="icon" href="/images/drawr_icon.svg" />
        <meta name="description" content="Contact the folks at Junk Drawr." />
      </Head>
      <ContactSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default ContactPage;
