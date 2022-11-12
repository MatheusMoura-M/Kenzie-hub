import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100vh;

  z-index: 1;

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100% auto;
    height: 100vh;

    background-color: var(--opaco-2);
  }

  .content {
    width: 100%;
    max-width: 300px;
    height: 40%;

    position: relative;

    background: #2c0909;

    border-radius: 0.2rem;
  }

  .boxTitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    height: 15%;

    padding: 10px 20px;

    background: #912a2a;
    border-radius: 0.2rem 0.2rem 0 0;

    button {
      position: absolute;
      top: 10px;
      right: 10px;

      color: var(--grey-4);

      opacity: 0.8;

      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        opacity: 1;
        color: var(--black);
      }
    }
  }

  .boxContent {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: 85%;

    padding: 10px 20px;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 7px;

      input {
        background: #912a2a;
        color: var(--grey-5);
        border-radius: 0.2rem;

        font-size: 14px;

        padding: 10px;

        height: 30px;

        transition: 0.3s;

        &::placeholder{
          color: var(--grey-4);
        }

        &:hover {
          transition: 0.3s;
          filter: brightness(1.2);
          border: 1px solid var(--grey-4);
        }
      }

      .msg_error {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2px;

        color: var(--message-error);
        font-size: 13px;
        margin: 3px 0 0 6px;

        svg {
          position: static;
        }
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 7px;
      margin-bottom: 10px;

      select {
        background: #912a2a;
        color: var(--grey-4);
        border-radius: 0.2rem;

        padding-left: 5px;

        height: 30px;
        
        transition: 0.3s;

        &:hover {
          transition: 0.3s;
          filter: brightness(1.2);
          border: 1px solid var(--grey-4);
        }
      }
    }
  }
`;
