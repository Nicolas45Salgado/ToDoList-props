import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import LeftSideBarComponent from "../components/LeftSideBar";
import RightSideBarComponent from "../components/RightSideBar";
import TodoListComponent from "../components/TodoList";
import { ITodo } from "../interfaces/Todo.interface";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

const Home: NextPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<ITodo | null>(null);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const handleTodoClick = (todo: ITodo) => {
    setSelectedTodo(todo);
  };

  const handleTodoEdit = (todo: ITodo) => {
    setTodos((prevTodo) =>
      prevTodo.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      })
    );
    setSelectedTodo(null);
  };

  const handleTodoDelete = (todo: ITodo) => {
    setTodos((prevTodo) => prevTodo.filter((t) => t.id !== todo.id));
    setSelectedTodo(null);
  };

  return (
    <ScreenWrapper>
      <LeftSideBarComponent addTodo={addTodo} />

      <TodoListComponent todos={todos} selectTodo={handleTodoClick} />

      {selectedTodo && (
        <RightSideBarComponent
          selectedTodo={selectedTodo}
          editTodo={handleTodoEdit}
          deleteTodo={handleTodoDelete}
        />
      )}
    </ScreenWrapper>
  );
};

export default Home;
