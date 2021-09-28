import React from "react";

class Crisp extends React.Component {
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "b3ee728d-16d4-4056-a9ab-424957dce3dc";

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
