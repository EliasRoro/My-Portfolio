import React from "react";
import {marqueeItems} from "../portfolio";

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="fx-marquee" aria-hidden="true">
      <div className="fx-marquee-track">
        {row.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
