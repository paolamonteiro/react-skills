import styled, { keyframes } from "styled-components"
import { slideInUp, slideInDown } from "react-animations"

const slideInDownAnimation = keyframes`${slideInDown}`
const slideInUpAnimation = keyframes`${slideInUp}`

export const TodoFormBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    animation: 2s ${slideInDownAnimation};
  }
`
export const TodoForm = styled.form`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 60%;
    height: 30px;
    border-radius: 35px;
    padding: 10px;
    font-size: 20px;
  }

  .invalid-feedback {
    display: block;
    color: red;
  }

  @media only screen and (max-width: 475px) {
    height: 100px;

    input {
      width: 80%;
      height: 15px;
      font-size: 15px;
    }
  }
`
export const TodoButton = styled.button`
  animation: 2s ${slideInUpAnimation};
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
export const TodoList = styled.ul`
  width: 60%;
  list-style: none;
  padding: 20px;

  li {
    animation: 1s ${slideInUpAnimation};
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