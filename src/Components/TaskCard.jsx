import styled from "styled-components";
import React from "react";
const TaskCard = ({ task, toggleTaskStatus, deleteTask }) => {
    return (
      <Card>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <Tag>{task.tag}</Tag>
        <button onClick={() => toggleTaskStatus(task.id)}>
          {task.done ? "Undo" : "Done"}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </Card>
    );
  };
  
  const Card = styled.li`
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
  
  export default TaskCard;