import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    button{
      cursor: pointer;
      border: none;
      background: transparent;
    }

    ul, ol, li{
      list-style: none;
    }

    img{
      max-width: 100%;
      max-height: 100%;
    }

    input, select{
      background: transparent;
      border: none;
    } 

    :root{
      --color-primary: #FF577F;
      --color-primary-2: #FF427F;
      --color-primary-dark: #59323F;
      --message-error: #e12525;
      --black: #000000;
      --grey-1: #121214;
      --grey-2: #212529;
      --grey-3: #343B41;
      --grey-4: #868E96;
      --grey-5: #F8F9FA;
      --opaco: rgb(0 0 0 / 93%);
      --opaco-2: rgb(0 0 0 / 80%);
      --white: #ffffff;
      --color-success: #3FE864;
      --color-fail: #E83F5B;

      --font-family: "Inter", sans-serif;

      --fontWei-title: bold;
      --fontSize-title: 18px;
      --lineHei-title: 28px;
  
      --fontWei-title-2: bold;
      --fontSize-title-2: 16px;
      --lineHei-title-2: 24px;
  
      --fontWei-title-3: bold;
      --fontSize-title-3: 14px;
      --lineHei-title-3: 20px;

      --fontWei-headline: normal;
      --fontSize-headline: 12px;
      --lineHei-headline: 18px;

      --fontWei-headlineBold: bold;
      --fontSize-headlineBold: 12px;
      --lineHei-headlineBold: 18px;
      
      --fontWei-headlineItalic: italic;

      --fontWei-button: 500;
      --fontSize-button: 13px;
      --lineHei-button: 17px;
    }

    body{
      background: var(--opaco);
      min-width: 100%;
    }

    main{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      gap: 15px;
    }

    h1, h2, h3, h4, h5, h6, p, span, li{
      font-family: 'Inter', sans-serif;
      color: var(--color-white);
    }

    a{
      text-decoration: none;
    }
`;
