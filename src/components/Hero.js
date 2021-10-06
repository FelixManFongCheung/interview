import React from "react";

function Hero() {
  return (
    <div className="hero">
      <img
        className="sub-image"
        src={require("../assets/mobile/mobileVer1.png").default}
        alt="packet"
      />
    </div>
  );
}

export default Hero;
