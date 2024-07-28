import React from "react";
import "./ButtonForProjects.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

export default function ButtonForProjects({
  text,
  className,
  href,
  newTab,
  theme,
  src,
}) {
  return (
    // <div className={className}>
    //     <span
    //                   className="iconify"
    //                   data-icon="logos-instagram"
    //                   data-inline="false"
    //                 ></span>
    //   <a
    //     className="main-button"
    //     href={href}
    //     target={newTab && "_blank"}
    //     style={{
    //       color: theme.body,
    //       backgroundColor: theme.text,
    //       border: `solid 1px ${theme.text}`,
    //     }}
    //     onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
    //     onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
    //   >
    //     {text}
    //   </a>
    // </div>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginTop: "20px" }}
    >
      <img
        style={{
          maxWidth: "83%",
          maxHeight: "83%",
          transform: "scale(0.9)",
        }}
        src={require(`../../assests/images/${src}`)}
      />
    </a>
  );
}
