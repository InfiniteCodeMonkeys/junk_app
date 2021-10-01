import React from "react";

class Crisp extends React.Component {
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "df98f6cd-c3f5-4b15-8bc5-7eecb52746b3";

    (function () {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }

  render() {
    return null;
  }
}

export default Crisp;
