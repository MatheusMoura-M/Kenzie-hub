import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--grey-1);
  border-radius: 0.15rem;

  padding: 10px;

  width: 100%;
  height: 35px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 28%;
    max-width: 100px;

    svg {
      color: var(--grey-5);

      opacity: 0.5;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
