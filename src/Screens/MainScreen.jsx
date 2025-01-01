import React from "react"
import styled from "styled-components";
import Header from "../Components/Header";
import { TasksProvider } from "../Context/TasksContext";
import TasksBody from "../Components/TasksBody";

const Wraapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
font-size: 1.5rem;
`;
const MainScreen = () => {
  return (
    <TasksProvider>
      <Wraapper>
          <Header/>
          <TasksBody/>
      </Wraapper>
    </TasksProvider>
  )
};

export default MainScreen;
