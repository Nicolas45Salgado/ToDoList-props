import React from "react";
import styled from "styled-components";
import { ITodo } from "../interfaces/Todo.interface";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 100px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: clamp(200px, 50%, 400px);
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 50px;
  padding: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: #f5f5f5;
  }
  &:not(:last-of-type) {
    border-bottom: 1px solid #e9e9e9;
  }
`;

interface ITodoListComponent {
  todos: ITodo[];
  selectTodo: (todo: ITodo) => void;
}

export default function TodoListComponent(props: ITodoListComponent) {
  const { todos, selectTodo } = props;

  const handleListItemClick = (todo: ITodo) => {
    selectTodo(todo);
  };

  return (
    <TodoListContainer>
      <CardContainer>
        {todos.length ? (
          todos.map((todo) => (
            <ListItem key={todo.id} onClick={() => handleListItemClick(todo)}>
              {todo.text}
            </ListItem>
          ))
        ) : (
          <ListItem>Sem a fazeres</ListItem>
        )}
      </CardContainer>
    </TodoListContainer>
  );
}
