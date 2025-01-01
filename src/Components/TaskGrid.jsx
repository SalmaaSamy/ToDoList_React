import React, { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../Context/TasksContext";
import TaskCard from "./TaskCard";

const TasksGrid = () => {
  const { tasks, deleteTask, toggleTaskStatus } = useContext(TasksContext);

  return (
    <TasksContainer>
      <h2>Stored Tasks</h2>
      {tasks.length === 0 ? (
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        <TaskList>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
            />
          ))}
        </TaskList>
      )}
    </TasksContainer>
  );
};

const TasksContainer = styled.div`
  padding: 20px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoTasksMessage = styled.p`
  color: #888;
  font-size: 1.2rem;
`;

export default TasksGrid;