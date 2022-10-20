import styled, { css } from "styled-components";
import { iSizeProps } from "./buttons";
import { BaseTag } from "./components/BaseTag";

export const Container = styled(BaseTag)<iSizeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          max-width: 400px;
        `;
      case "default":
        return css`
          justify-content: flex-start;
          max-height: 70%;
          min-height: 470px;
        `;
      case "large":
        return css`
          min-height: 100vh;
        `;
      case "section":
        return css`
          min-height: 100vh;
          gap: 12px;
          margin: 10px;
          width: 95%;
        `;
      case "loading":
        return css`
          min-height: 100vh;

          div {
            width: 50px;
            height: 50px;

            border-radius: 50%;
            border: 6px solid;
            border-top-color: #f857a6;

            animation: loading 30s cubic-bezier(0.32, 0.27, 1, 1) infinite;
          }

          @keyframes loading {
            to {
              transform: rotate(50turn);
            }
          }
        `;
      default:
        return false;
    }
  }}

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(-25px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
