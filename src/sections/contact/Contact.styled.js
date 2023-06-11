import styled from "styled-components";

export const MainContainer = styled.div`
  @media only screen and (max-width: 1260px) {
    margin-top: 5vh;
  }
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  h2 {
    border-bottom: 1px solid black;
    font-weight: 500;
    font-size: 2rem;
  }
  padding-bottom: 20vh;
  @media only screen and (max-width: 1060px) {
    padding-bottom: 40vh;
  }
`;

export const Container = styled.div`
  @media only screen and (max-width: 1060px) {
    flex-direction: column;
    margin-top: 20vh;
    .contact-input-container {
      width: 80% !important;
    }
    img {
      width: 50%;
    }
  }
  display: flex;
  justify-content: space-around;
  height: 360px;
  width: 100%;
  gap: 4rem;
  img {
    width: 100%;
    height: 100%;
  }

  h2 {
    border-bottom: 1px solid black;
    font-weight: 500;
    font-size: 2rem;
  }
  .contact-input-container {
    width: 50%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: ${(props) => (props.theme === "light" ? "white" : "")};
    box-shadow: ${(props) =>
      props.theme === "dark"
        ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
        : "0px 8px 10px -1px rgba(0, 0, 255, 0.2), 0px 4px 8px -1px rgba(0, 0, 255, 0.12)"};
  }

  .contacts {
    display: flex;
    flex-direction: column;

    label {
      color: ${(props) => (props.theme === "light" ? "black" : "")};
    }

    input {
      padding: 10px;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
    textarea {
      width: 80%;
      resize: none;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      text-align: center;

      &::placeholder {
        text-align: center;
        padding-top: 3vh;
      }
    }
  }
  .contacts-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 12px 0;
    button {
      padding: 4px 6px;
      outline: none;
      border: none;
      border-radius: 6px;
      background-color: blue;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: rgba(52, 168, 235);
      }
    }
  }
`;
