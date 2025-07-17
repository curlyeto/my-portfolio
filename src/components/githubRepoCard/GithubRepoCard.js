import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import ButtonForProjects from "../buttonForProjects/ButtonForProjects";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: "#E4405F";
  }
  &:hover i {
    background-color: "#011C55";
    transition: 0.3s ease-in;
  }
`;

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          onClick={() =>
            repo.type === "Web" ? openRepoinNewTab(repo.url) : null
          }
        >
          <div className="repo-name-div">
            {repo.logo !== "" ? (
              <div className="logo-container">
                <img
                  className="experience-card-logo"
                  src={require(`../../assests/images/${repo.logo}`)}
                  alt={`${repo.name} logo`}
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <div className="logo-fallback" style={{ display: "none" }}>
                  <svg
                    aria-hidden="true"
                    className="octicon repo-svg"
                    height="16"
                    role="img"
                    viewBox="0 0 12 16"
                    width="12"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    ></path>
                  </svg>
                </div>
              </div>
            ) : (
              <svg
                aria-hidden="true"
                className="octicon repo-svg"
                height="16"
                role="img"
                viewBox="0 0 12 16"
                width="12"
              >
                <path
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
            )}

            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>

          {repo.webInfo !== "" ? (
            <div>
              <p
                className="repo-description"
                style={{ color: theme.text, marginTop: "20px" }}
              >
                {repo.webInfo}
              </p>
              <p
                className="repo-description"
                style={{ color: theme.text, marginTop: "20px" }}
              >
                <div className="repo-details">
                  {repo.webInfo.length > 0 ? (
                    <ButtonForProjects
                      href={repo.url}
                      src={"world-wide-web.png"}
                      theme={theme}
                    />
                  ) : (
                    <div></div>
                  )}
                  {repo.webInfo.length > 0 ? (
                    <ButtonForProjects
                      href={repo.adminUrl}
                      src={"world-wide-web.png"}
                      theme={theme}
                    />
                  ) : (
                    <div></div>
                  )}
                </div>
              </p>
            </div>
          ) : (
            <div></div>
          )}

          <p
            className="repo-description"
            style={{ color: theme.text, marginTop: "20px" }}
          >
            {repo.infoText}
          </p>

          {repo.type === "Mobile" && repo.aviableStore ? (
            <div className="repo-details">
              {repo.androidAviable ? (
                <ButtonForProjects
                  href={repo.androidUrl}
                  src={"googleplay.png"}
                  theme={theme}
                />
              ) : (
                <div></div>
              )}
              {repo.iosAviable ? (
                <ButtonForProjects
                  href={repo.iosURL}
                  src={"applestore.png"}
                  theme={theme}
                />
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Fade>
    </div>
  );
}
