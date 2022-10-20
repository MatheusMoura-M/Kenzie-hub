import styled from "styled-components";

interface iFormProps{
  isShowPass: boolean;
}

export const FormLogin = styled.form<iFormProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 30%;
  min-width: 300px;
  min-height: 350px;

  padding: 1rem 0;

  background: var(--grey-2);
  border-radius: 0.5rem;

  .boxLabel {
    position: relative;

    width: 85%;

    display: flex;
    flex-direction: column;

    padding-top: 13px;

    p {
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

    & > svg {
      position: absolute;
      right: 5px;
      top: 17px;
      cursor: pointer;
      color: var(--grey-5);
    }

    input {
      border: 0;
      border-radius: 0.3rem;
      border-bottom: 2px solid lightgrey;
      outline: none;
      color: var(--grey-5);

      padding: 10px;
      margin-top: 5px;

      width: 100%;
      height: 20px;

      font-size: 14px;
      font-family: var(--font-family);

      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -webkit-appearance: none;
    }

    input:focus {
      border-bottom: 2px solid var(--color-primary);
    }

    input::placeholder {
      color: transparent;
    }

    label {
      font-family: var(--font-family);
      font-size: 14px;
      font-weight: var(--fontWei-headline);
      color: var(--grey-4);

      pointer-events: none;

      position: absolute;

      top: 2px;
      left: 5px;
      margin-top: 13px;

      transition: all 0.3s ease-out;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      font-size: 13px;

      margin-top: 0;
      top: 0;
      left: 0;

      color: var(--color-primary);
    }
  }

  .boxRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 85%;

    a {
      border-radius: 0.35rem;
      background: var(--grey-4);
      border: 2px solid var(--grey-3);
      color: var(--grey-1);

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 30px;

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
    }
  }
`;
