import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  .title-bold {
    font-weight: 500;
    font-size: 3rem;
  }
  .title {
    font-weight: 500;
    font-size: 2.4rem;
  }
  .person-info-container {
    @media only screen and (max-width: 1400px) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
    display: flex;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }
  .person-image-container {
    @media only screen and (max-width: 1400px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media only screen and (max-width: 2880px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    width: 40%;
    border-radius: 50%;
  }
  .person-description-container {
    width: 100%;

    .person-description-first-letter {
      font-size: 1rem !important;
      font-weight: bold;
    }
    padding-left: 2vw;
    span {
      font-size: 0.85rem !important;

      @media only screen and (max-width: 2880px) {
        font-size: 1.2rem;
      }
    }
  }
`;
