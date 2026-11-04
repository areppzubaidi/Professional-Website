import React, { useContext } from "react";
import "./StartupProjects.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { bigProjects } from "../../portfolio";

// WHY THIS FILE EXISTS
//
// This component was a stub: it rendered a hardcoded "Projects" heading and the words "Currently no
// projects to display." That is why a portfolio advertising a homelab had no homelab on it.
//
// It now renders `bigProjects` from portfolio.js.
//
// Deliberately NO images. Two reasons: (1) a stock screenshot of "servers" beside a real platform is
// decoration that invites doubt, and (2) this design is typographic — the words do the work. Add an
// image later if you have a real architecture diagram to show.
export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects || bigProjects.display === false) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {bigProjects.title}
        </h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="project-list">
          {bigProjects.projects.map((project, index) => (
            <article
              key={index}
              className={isDark ? "dark-mode project-card" : "project-card"}
            >
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>

              <div className="project-body">
                <h2 className={isDark ? "dark-mode project-name" : "project-name"}>
                  {project.projectName}
                </h2>
                <p className={isDark ? "dark-mode project-desc" : "project-desc"}>
                  {project.projectDesc}
                </p>

                {project.footerLink && project.footerLink.length > 0 && (
                  <div className="project-links">
                    {project.footerLink.map((link, i) => (
                      <a
                        key={i}
                        className={isDark ? "dark-mode project-link" : "project-link"}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name} <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Fade>
  );
}
