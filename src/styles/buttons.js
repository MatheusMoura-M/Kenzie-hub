import styled, { css } from "styled-components";

export const ButtonPrimary = styled.button`
  border-radius: 0.5rem;
  background: var(--color-primary);
  border: 2px solid var(--color-primary-2);
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
    opacity: 1;
    transform: scale(1.1);
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
          width: 100px;
          height: 30px;
        `;
      default:
        return false;
    }
  }}
`;

export const ButtonSecondary = styled.button`
  border-radius: 0.5rem;
  background: var(--grey-4);
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
      default:
        return false;
    }
  }}
`;

export const ButtonNegative = styled.button`
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
      default:
        return false;
    }
  }}
`;
