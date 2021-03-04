import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .card {
    background: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  .navbar {
    background: ${({ theme }) => theme.navColor};
    transition: all 0.50s linear;
  }

  .form-control {
    background-color: ${({ theme }) => theme.formInputColor};
    transition: all 0.50s linear;
  }
  `
  