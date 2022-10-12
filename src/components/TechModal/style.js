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

    background-color: var(--opaco);
  }

  .content {
    width: 100%;
    max-width: 300px;
    height: 40%;

    position: relative;
    
    background: var(--grey-2);
  
    border-radius: .3rem;
  }
  
  .boxTitle{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    height: 15%;
    
    padding: 10px 20px;
    
    background: var(--grey-3);
    border-radius: .3rem .3rem 0 0;
    
    button{
      position: absolute;
      top: 10px;
      right: 10px;
      
      color: var(--grey-4)
    }
  }
  
  .boxContent{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    height: 85%;
    
    padding: 10px 20px;

    & > div:nth-child(1){
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap:7px;
      
      input{
        background-color: var(--grey-3);
        color: var(--grey-5);

        font-size: 14px;

        padding: 10px;

        height: 30px;
      }
    }
    
    & > div:nth-child(2){
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap:7px;
      margin-bottom: 10px;
      
      select{
        background-color: var(--grey-3);
        color: var(--grey-5);

        height: 30px;
      }
    }

  }
`;
