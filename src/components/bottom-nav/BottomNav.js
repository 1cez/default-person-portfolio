import React, { useState } from "react";
import * as Styled from "./BottomNav.styled";

function BottomNav() {
  const [activeId, setActiveId] = useState("");

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <Styled.Container>
      <ul>
        <li>
          <a
            href="#about-me"
            onClick={() => handleClick("about-me")}
            className={activeId === "about-me" ? "active" : ""}
          >
            <span>
              <i className="fa-brands fa-readme" />
            </span>
            <span>About Me</span>
          </a>
        </li>
        <li>
          <a
            href="#socials"
            onClick={() => handleClick("socials")}
            className={activeId === "socials" ? "active" : ""}
          >
            <span>
              <i className="fa-solid fa-circle-nodes" />
            </span>
            <span>Socials</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleClick("contact")}
            className={activeId === "contact" ? "active" : ""}
          >
            <span>
              <i className="fa-solid fa-envelope" />
            </span>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </Styled.Container>
  );
}

export default BottomNav;
