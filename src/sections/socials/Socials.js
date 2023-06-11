import React, { useState } from "react";
import * as Styled from "./Socials.styled";
import SocialsCard from "./socials-card/SocialsCard";

function Socials({ theme, setTheme }) {
  const [socialList, setSocialList] = useState([
    {
      icon: "github",
      socialUri: "random",
      color: "#161B22",
      toHref: "https://github.com/1cez",
    },
    {
      icon: "linkedin",
      socialUri: "random",
      color: "#0B65C2",
      toHref: "https://www.linkedin.com/in/serhancetinx/",
    },
    {
      icon: "instagram",
      socialUri: "random",
      color: "red",
      toHref: "https://www.instagram.com/icezw1/",
    },
  ]);

  return (
    <Styled.MainContainer id="socials">
      <Styled.Container>
        {socialList.map((item) => (
          <SocialsCard
            socialUrl={item.socialUri}
            icon={item.icon}
            color={item.color}
            toHref={item.toHref}
          />
        ))}
      </Styled.Container>
    </Styled.MainContainer>
  );
}

export default Socials;
