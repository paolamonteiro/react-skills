import styled, { keyframes } from "styled-components"
import { fadeInDown } from "react-animations"

const fadeInDownAnimation = keyframes`${fadeInDown}`

export const DoneTodoBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    animation: 2s ${fadeInDownAnimation};
  }

  @media only screen and (max-width: 475px) {
    margin-top: 50px;
  }
`
export const TrashTodoList = styled.ul`
  width: 60%;
  padding: 20px;
  list-style: disc;

  li {
    animation: 2s ${fadeInDownAnimation};
    width: 100%;
    height: 50px;
    padding: 3px;
    border-bottom: solid thin ${({ theme }) => theme.text};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 475px) {
      height: 30px;
    }
  }

  @media only screen and (max-width: 475px) {
    width: 95%;
  }
`
export const TrashTodoButton = styled.button`
  animation: 2s ${fadeInDownAnimation};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  font-size: 20px;

  @media only screen and (max-width: 475px) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`