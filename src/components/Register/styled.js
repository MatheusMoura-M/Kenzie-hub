import styled from "styled-components"

export const Form = styled.form`
  display:flex; 
  flex-direction: column;
  align-items: center; 
  justify-content: space-around;

  width: 30%;
  min-height: 450px;

  background: var(--grey-2);
  border-radius: .5rem;

  input{
    background: var(--grey-3);
    height: 30px;
    border-radius: .3rem;
    padding-left: 10px 
  }
`

export const Box = styled.div`
  display:flex; 
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;

  ${({class}) => {
    switch (size) {
      case "boxLogo":
        return css`
            width: 30%;
            min-height: 40px;
        `;
      case "boxForm":
        return css`
         
        `;
      // case "large":
      //   return css`
          
      //   `;
      default:
        return false;
    }
  }}

  a{
    display: flex;
    align-items: center;

    font-family: var(--font-family);

    color: var(--white);
    background: var(--grey-2);
    border-radius: .2rem;
    
    padding: .3rem;
  
    min-height: 40px;
  }
`
