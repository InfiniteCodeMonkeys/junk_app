import Head from "next/head";
import Hero from "../components/marketing/Hero";
import Wizard from "components/wizard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Junk-drawr | Put your junk in a box</title>
        <meta name="title" content="Junk Drawr" />
        <meta
          name="description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta
          property="og:title"
          content="Junk-drawr | Put your junk in a box"
        />
        <meta
          property="og:description"
          content="Junk Drawr is an electronic waste processing company. We aim to recycle the tons of electronic junk lurking in people's junk drawers."
        />
        <meta property="og:image" content="/images/box.png" />
        <link rel="icon" href="/images/box.png" />
      </Head>

      <main>
        <Hero
          title="Put your junk in a box"
          subTitle="Responsibly get rid of your junk drawer."
        />
        <div id="form" style={{ marginTop: 40 }} />
        <Wizard id="#form" />
      </main>
    </div>
  );
}
