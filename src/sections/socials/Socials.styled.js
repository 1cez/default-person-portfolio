import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 35%;
  right: 1%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainContainer = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  h2 {
    border-bottom: 1px solid black;
    font-weight: 500;
    font-size: 2rem;
  }
`;
