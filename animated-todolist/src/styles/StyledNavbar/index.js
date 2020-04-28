import styled, { keyframes } from "styled-components"
import { rubberBand } from "react-animations"

const rubberBandAnimation = keyframes`${rubberBand}`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.body};
  position: sticky;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  .large-menu {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media only screen and (max-width: 475px) {
      display: none;
    }
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 12px;
    z-index: 5;

    @media only screen and (min-width: 475px) {
      display: none;
    }
  }
`
export const Logo = styled.h1`
  margin-left: 20px;
  animation: 2s ${rubberBandAnimation};
  color: ${({ theme }) => theme.text};
  text-align: center;
`
export const Menu = styled.ul`
  width: 50%;
  margin-right: 20px;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  
  a {
    text-decoration: none;
  }

  li {
    animation: 2s ${rubberBandAnimation};
    color: ${({ theme }) => theme.text};
    margin: 20px;

    @media only screen and (max-width: 475px) {
      margin: 10px;
    }
  }

  @media only screen and (max-width: 475px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
export const MenuMobileOpenBtn = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.body};

  img {
    width: 100%;
  }
`
export const MenuMobileCloseBtn = styled.button`
  animation: 2s ${rubberBandAnimation};
  width: 40px;
  height: 40px;
  margin-top: 105px;
  margin-right: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.body};

  img {
    width: 100%;
  }
`