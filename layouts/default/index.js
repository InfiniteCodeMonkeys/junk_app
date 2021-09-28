import React from "react";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Logo = "/images/junk_logo.png";

const DefaultLayout = ({ children }) => {
  return (
    <div className="main-container">
      <TopNav bg="white" variant="light" expand="lg" logo={Logo}></TopNav>

      <div className="content-wrapper">{children}</div>

      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="If it doesn't give you joy, give it to me."
        copyright="© 2021 JUNK DRAWR LLC"
        logo={Logo}
      ></Footer>
    </div>
  );
};

export default DefaultLayout;
