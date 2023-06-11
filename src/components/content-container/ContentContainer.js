import React, { useEffect, useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import * as Styled from "./ContentContainer.styled";

function ContentContainer({ children, bg }) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default ContentContainer;
