import React from "react"
import styled from "styled-components";

const Wraapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
font-size: 1.5rem;
`;
const MainScreen = () => {
  return (
    <Wraapper>
        <h1>Welcome to Your To-Do List App!</h1>
        <p>Start adding your tasks now.</p>
    </Wraapper>
  )
};

export default MainScreen;
