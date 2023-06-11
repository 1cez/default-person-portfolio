import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0%;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px -1px 1px, rgba(0, 0, 0, 0.09) 0px -2px 2px,
    rgba(0, 0, 0, 0.09) 0px -4px 4px, rgba(0, 0, 0, 0.09) 0px -8px 8px,
    rgba(0, 0, 0, 0.09) 0px -12px 16px;

  z-index: 99999;

  ul {
    list-style: none;
    display: flex;

    li {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      a {
        text-decoration: none;
        color: black;
        display: flex;
        gap: 0.4rem;
        transition: all 0.3s ease;

        &:hover {
          color: green;
          opacity: 0.8;
          cursor: pointer;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
            rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
          border-radius: 6px;
          transform: scale(1.1);
        }
      }

      &:hover {
        color: green;
        opacity: 0.8;
        cursor: pointer;
      }

      & a.active {
        transform: scale(1.1);
        transition: all 0.3s ease;
      }
    }
  }
`;
