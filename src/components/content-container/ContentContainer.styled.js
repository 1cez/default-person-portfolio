import styled from "styled-components";

export const Container = styled.div`
  min-height: 400px;
  width: 70%;
  background-color: ${(props) => props.bg};
  display: flex;
  margin-top: 10vh;
`;
