import React from "react";
import Head from "next/head";
import FaqSection from "components/marketing/FaqSection";

function FaqPage(props) {
  const items = [
    {
      question: "Are you serious?",
      answer:
        "Yes! Send us your junk. Especially your hard to recycle items like electronic waste.",
    },
    {
      question: "What can't I send?",
      answer:
        "Don't send us anything dangerous. Check with the USPS for more information.",
    },
    {
      question: "How can I send you?",
      answer:
        "Everything else. But keep in mind, we're here to sort items for recycling. So, send us mostly things you think can be recycled. If you send us something really weird we'll feature it on our twitter.",
    },
    {
      question: "What do you do with the junk I send?",
      answer:
        "It really depends on what you send. We have to sort all of it and then decide what is best for the material. Recyclable materials get bundled and sent to a domestic recycler. When it makes sense, other items might get donated, upcycled, or unfortunately, disposed of.",
    },
    {
      question: "What's in it for me?",
      answer:
        "We're working on that. We want to be able to send you discounts and coupons as a little reward for sending in your electronic waste and other junk. We'll email you when we get it together.",
    },
  ];
  return (
    <>
      <Head>
        <title>Junk Drawr | FAQ</title>
        <link rel="icon" href="/images/box.png" alt="Junk Drawr Logo" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. Let's answer some of your burning questions."
        />
      </Head>
      <FaqSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
        items={items}
      />
    </>
  );
}

export default FaqPage;
