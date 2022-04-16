import React from "react";
import { ReactComponent as Audiophile } from "../assets/client-audiophile.svg";
import { ReactComponent as Databiz } from "../assets/client-databiz.svg";
import { ReactComponent as Meet } from "../assets/client-meet.svg";
import { ReactComponent as Maker } from "../assets/client-maker.svg";

function Intro() {
  return (
    <div className="intro">
      <div>
        <img src="/assets/image-hero-mobile.png" alt="" className="hero-img"/>
      </div>
      <div>
        <h1 className="title">Make remote work</h1>
        <p className="description">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="btn">Learn more</button>
        <div className="client-list">
          <Audiophile />
          <Databiz />
          <Meet />
          <Maker />
        </div>
      </div>
    </div>
  );
}

export default Intro;
