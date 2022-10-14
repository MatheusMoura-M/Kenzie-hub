import styled from "styled-components";

export const Card = styled.li`
  position: relative;

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
    align-items: flex-start;
    justify-content: space-between;

    padding-right: 45px;
    max-width: 120px;
    
    svg {
      position: absolute;

      color: var(--grey-5);

      opacity: 0.5;
      transition: 0.3s;

      &:hover {
        opacity: 1;
      }
    }

    .btn-1 {
      svg {
        right: 30px;
      }
    }

    .btn-2 {
      svg {
        right: 10px;
      }
    }
  }
`;
