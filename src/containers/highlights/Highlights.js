import React, { useContext } from "react";
import "./Highlights.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { highlights } from "../../portfolio";

// A thin strip of numbers under the greeting.
//
// Every number here is checkable against the platform itself. That is the entire point: four
// verifiable counts say more than a paragraph of adjectives, and a reader who does not believe one
// can go and count.
export default function Highlights() {
  const { isDark } = useContext(StyleContext);

  if (!highlights || highlights.display === false) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode highlights-strip" : "highlights-strip"}>
        {highlights.stats.map((stat, i) => (
          <div className="highlight" key={i}>
            <div className="highlight-value">{stat.value}</div>
            <div className="highlight-label">{stat.label}</div>
            <div className="highlight-caption">{stat.caption}</div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
