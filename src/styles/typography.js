import styled, { css } from "styled-components";

export const ThemeTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: var(--fontWei-title);
  line-height: var(--lineHei-title);
  font-size: var(--fontSize-title);
  color: var(--grey-5);

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 14px;
          line-height: 22px;
        `;
      default:
        return false;
    }
  }}
`;

export const ThemeParagraph = styled.p`
  font-family: var(--font-family);
  font-size: var(--fontSize-headline);
  font-weight: var(--fontWei-headline);
  line-height: var(--lineHei-headline);
  color: var(--grey-4);

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 10px;
        `;
      default:
        return false;
    }
  }}
`;

export const ThemeSpan = styled.span`
  font-family: var(--font-family);
  line-height: var(--lineHei-headlineBold);
  font-weight: var(--fontWei-headlineBold);
  font-size: var(--fontSize-headlineBold);
  color: var(--grey-3);

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          font-size: 10px;
        `;
      case "italic":
        return css`
          font-weight: var(--fontWei-headlineItalic);
        `;
      default:
        return false;
    }
  }}
`;
