import styled, { css } from "styled-components";

export interface iSizeProps {
  size?: string;
  styleBox?: string;
}

export const ButtonPrimary = styled.button<iSizeProps>`
  border-radius: 0.35rem;
  background: var(--color-primary);
  border: 2px solid var(--color-primary-2);
  color: var(--grey-5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: var(--font-family);
  font-weight: var(--fontWei-button);
  font-size: var(--fontSize-button);
  line-height: var(--lineHei-button);

  transition: 0.5s;

  :hover {
    opacity: 1;
    transform: scale(1.02);
    filter: brightness(.9);
    background: var(--color-primary-2);
    border: 2px solid var(--color-primary);
    color: var(--grey-1);
  }

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          width: 150px;
          height: 35px;
        `;
      case "small":
        return css`
          width: 85%;
          height: 30px;
        `;
      case "btnModal":
        return css`
          width: 100%;
          height: 30px;
        `;
      default:
        return false;
    }
  }}
`;

export const ButtonSecondary = styled.button<iSizeProps>`
  border-radius: 0.35rem;
  background: var(--grey-4);
  border: 2px solid var(--grey-3);
  color: var(--grey-1);
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  font-family: var(--font-family);
  font-weight: var(--fontWei-button);
  font-size: var(--fontSize-button);
  line-height: var(--lineHei-button);
  
  transition: 0.5s;
  
  :hover {
    opacity: 1;
    background: var(--grey-3);
    filter: brightness(1.6);
    border: 1px solid var(--grey-4);
    color: var(--grey-4);
  }
  
  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          width: 100%;
          height: 30px;
          `;
      case "small":
        return css`
          width: 80px;
          height: 30px;
          `;
      case "add":
        return css`
          width: 35px;
          height: 25px;

          background: var(--grey-2);
          color: var(--grey-5);
          
          font-family: var(--font-family);
          font-size: 20px;
          font-weight: 500;
        `;
      default:
        return false;
    }
  }}
`;

export const ButtonNegative = styled.button<iSizeProps>`
  border-radius: 0.5rem;
  background: var(--color-primary-dark);
  border: 2px solid var(--grey-3);
  color: var(--grey-5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  font-family: var(--font-family);
  font-weight: var(--fontWei-button);
  font-size: var(--fontSize-button);
  line-height: var(--lineHei-button);

  transition: 0.5s;

  :hover {
    filter: brightness(1.2);
    transform: scale(1.02);
  }

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          width: 150px;
          height: 35px;
        `;
      case "small":
        return css`
          width: 100px;
          height: 30px;
        `;
      case "update":
        return css`
          width: 100%;
          height: 30px;
          border-radius: 0.3rem;
        `;
      default:
        return false;
    }
  }}
`;
