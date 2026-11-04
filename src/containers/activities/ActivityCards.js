import React, { useContext } from "react";
import "./ActivityCards.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { activities } from "../../portfolio";

// "What I spend my days on" — four cards, each one sentence.
//
// Borrowed structurally from a portfolio I was asked to take cues from: the shape (activity, not
// skill) and the register (a person talking, not a brochure). No markup, styles or copy were taken
// from it — these four sentences describe this person's actual week.
//
// Why cards instead of the old bullet list: a bullet list of tools answers "what do you know".
// These answer "what do you do", which is the question the reader actually has.
export default function ActivityCards() {
  const { isDark } = useContext(StyleContext);

  if (!activities || activities.display === false) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="activities">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {activities.title}
        </h1>
        <p className={isDark ? "dark-mode activity-subtitle" : "subTitle activity-subtitle"}>
          {activities.subtitle}
        </p>

        <div className="activity-grid">
          {activities.cards.map((card, i) => (
            <div className={isDark ? "dark-mode activity-card" : "activity-card"} key={i}>
              <h3 className={isDark ? "dark-mode activity-title" : "activity-title"}>
                {card.title}
              </h3>
              <p className={isDark ? "dark-mode activity-text" : "activity-text"}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
