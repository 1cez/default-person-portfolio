import styled from "styled-components";

export const TimelineContainer = styled.div`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  .ant-timeline-item {
    height: 100px;
    color: ${(props) => (props.theme === "light" ? "white" : "black")};
  }
  .ant-timeline-item-tail {
    background-color: ${(props) => (props.theme === "light" ? "white" : "")};
  }
`;
