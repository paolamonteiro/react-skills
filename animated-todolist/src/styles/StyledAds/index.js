import styled from "styled-components"

export const AdsBox = styled.section`
  width: 60%;
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  border-top: solid thin ${({ theme }) => theme.text};

  h2{
    margin-top: 50px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 475px) {
    width: 80%;
    margin-top: 200px;
  }
`