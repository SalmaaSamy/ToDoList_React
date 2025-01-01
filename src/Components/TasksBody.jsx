import React, { useContext } from "react";
import styled from "styled-components";
import { TasksContext } from "../Context/TasksContext"; // Import the context

const TasksBody = () => {
  const { tasks,deleteTask, toggleTaskStatus } = useContext(TasksContext); // Use context to access state and actions

  return (
    <TasksContainer>
      <h2>Stored Tasks</h2>
      {tasks.length === 0 ? (
        <NoTasksMessage>No tasks available</NoTasksMessage>
      ) : (
        <TaskList>
          {tasks.map((task) => (
            <TaskItem key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <Tag>{task.tag}</Tag>
              <button onClick={() => toggleTaskStatus(task.id)}>
                {task.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </TaskItem>
          ))}
        </TaskList>
      )}
    </TasksContainer>
  );
};

// Styled components
const TasksContainer = styled.div`
  padding: 20px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  background-color: ${({ theme }) => theme.cardBg};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-top: 10px;
`;

const NoTasksMessage = styled.p`
  color: #888;
  font-size: 1.2rem;
`;

export default TasksBody;