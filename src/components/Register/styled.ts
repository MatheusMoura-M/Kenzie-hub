import styled, {css} from "styled-components"
import { iSizeProps } from "../../styles/buttons";

export const FormRegister = styled.form`
  display:flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: space-evenly;

  width: 30%;
  min-width: 300px;
  min-height: 550px;

  padding: 1rem 0;

  background:  #1e1a1a;
  border-radius: .5rem;

  .boxLabel{
    position: relative;
    
    width: 85%;
  
    display: flex;
    flex-direction: column;

    padding-top: 13px;

    p{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2px;
      
      color: var(--message-error);
      font-size: 13px;
      margin: 3px 0 0 6px;

      svg{
        position: static;
      }
    }

    & > svg{
      position: absolute;
      right: 5px;
      top: 17px;
      cursor: pointer;
      color: var(--grey-4);
    }
 
    input{
      border: 0;
      border-radius: .3rem;
      border-bottom: 2px solid var(--grey-4);
      outline: none;
      color: var(--grey-4);

      padding: 10px;
      margin-top: 5px;

      width: 100%;
      height: 20px;
    
      font-size: 14px;
      font-family: var(--font-family);
      
      transition: all .3s ease-out;
      -webkit-transition: all .3s ease-out;
      -moz-transition: all .3s ease-out;
      -webkit-appearance:none;
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

  .boxSelect{
    width: 85%;

    label{
      font-family: var(--font-family);
      font-size: 14px;
      font-weight: var(--fontWei-headline);
      color: var(--grey-4);
    }

    select{
      width: 100%;
      height: 30px;
      
      background: var(--grey-3);
      color: var(--grey-4);
      border-radius: .25rem;
      
      padding-left: 10px;
    }
  }

  button{
    width: 85%;
    height: 30px;

    margin-top: 15px;
    
    background: var(--grey-1);
    color: var(--grey-4);
    border-radius: 0.25rem;

    font-family: var(--font-family);
  }
`

export const Box = styled.div<iSizeProps>`
  display:flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  
  ${({styleBox}) => {
    switch (styleBox) {
      case "boxLogo":
        return css`
            flex-direction: row;
            justify-content: space-between;
            width: 300px;
            min-height: 40px;
        `;
      case "boxLogoLogin":
        return css`
            flex-direction: row;
            justify-content: center;
            width: 300px;
            min-height: 40px;
        `;
      case "boxForm":
        return css`
          gap: 10px;
        `;
      default:
        return false;
    }
  }}

  a{
    display: flex;
    align-items: center;

    font-family: var(--font-family);

    background: #e96773;
    border: 1px solid var(--grey-1);
    color: var(--grey-1);
    border-radius: .2rem;
    
    padding: .3rem .6rem;
  
    min-height: 40px;
    
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      background: var(--grey-1);
      filter: brightness(1.05);
      border: 0.5px solid var(--grey-4);
      color: var(--grey-4);
  }
  }
`
