import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 1170px) {
    min-height: 60px;
    width: 100%;
  }
  cursor: pointer;

  min-height: 55px;
  min-width: 55px;
  background: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  i {
    font-size: 2rem;
  }
  a {
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  &:hover {
    transform: scale(1.15);
    transition: 0.3s ease-in;
    border: 1px solid lime;
  }
`;
