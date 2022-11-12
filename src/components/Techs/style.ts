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

  transition: 0.3s;
  
  &:hover {
    background: var(--grey-1);
    filter: brightness(1.4);
    border: 0.1px solid var(--grey-4);
    color: var(--grey-4);
    transition: 0.3s;
  }

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding-right: 45px;
    max-width: 120px;
    
    svg {
      position: absolute;

      color: var(--grey-5);

      opacity: .8;
      transition: 0.4s;
      
      color: black;
      
      &:hover {
        transition: 0.4s;
        transform: translateX(-1px) translateY(-1px);
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
