import React from "react";
import * as Styled from "./SocialsCard.styled";

function SocialsCard({ icon, socialUrl, color, toHref }) {
  return (
    <Styled.Container color={color}>
      <a href={toHref}>
        <span>
          <i className={`fa-brands fa-${icon}`} />
        </span>
      </a>
    </Styled.Container>
  );
}

export default SocialsCard;
