import React, { Component } from "react";

class Termly extends Component {
  componentDidMount() {
    (function () {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://app.termly.io/embed.min.js";
      s.id = "f7cf48a5-8efb-4e10-9f86-5bbc09aefc66";
      s.setAttribute("data-name", "termly-embed-banner");
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })();
  }
  render() {
    return <div></div>;
  }
}
export default Termly;
