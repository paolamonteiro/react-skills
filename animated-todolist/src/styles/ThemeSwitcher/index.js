import styled, { keyframes } from "styled-components"
import { swing } from "react-animations"

const swingBandAnimation = keyframes`${swing}`

export const ThemeSwitcherBox = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 50px;
  margin-bottom: 20px;

  @media only screen and (max-width: 475px) {
    margin-top: 30px;
    margin-bottom: 10px;
    justify-content: flex-start;
  }
`
export const ThemeSwitcherButton = styled.button`
  position: relative;
  animation: 2s ${swingBandAnimation};
  width: 90px;
  height: 40px;
  margin: 20px;
  border-radius: 50px;
  cursor: pointer;
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};

  img {
    position: absolute;
    top: 0;
    left: ${({ theme }) => (theme.switcherPosition === "left" ? 0 : "50px")};
    height: 35px;
    width: 35px;
    transition: all 0.5s ease-in-out;
  }

  @media only screen and (max-width: 475px) {
    width: 50px;
    height: 30px;
    margin: 0;
    margin-left: 20px;

    img {
      width: 25px;
      height: 25px;
      left: ${({ theme }) => (theme.switcherPosition === "left" ? 0 : "20px")};
    }
  }
`