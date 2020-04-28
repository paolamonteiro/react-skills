import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  scroll-behavior: smooth;

    @media only screen and (max-width: 475px) {
      font-size: 15px;
    }
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 80%;
    }
  }
`
export default GlobalStyle