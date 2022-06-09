import React, { useId, useState } from "react";
import styled from "styled-components";
import { ITodo } from "../interfaces/Todo.interface";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 500px;
  height: 100vh;
  background-color: #f5f5f5;
  border-right: 1px solid #e9e9e9;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const InputLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  padding: 10px;
  background-color: #015cf7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0040ff;
  }
  &:active {
    background-color: #0040ff;
  }
`;

const DeleteButton = styled.button`
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
  }
  &:active {
    background-color: #ff0000;
  }
`;

interface IRightSideBarComponent {
  selectedTodo: ITodo;
  editTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
}

export default function RightSideBarComponent(props: IRightSideBarComponent) {
  const { selectedTodo, deleteTodo, editTodo } = props;
  const [newText, setNexText] = useState<string>(selectedTodo.text);
  const inputId = useId();

  const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editTodo({
      id: selectedTodo.id,
      text: newText,
    });
  };

  const handleDeleteButtonClick = () => {
    deleteTodo(selectedTodo);
  };

  return (
    <SidebarContainer>
      <EditContainer>
        <InputLabel htmlFor={inputId}>Editar</InputLabel>
        <Input
          id={inputId}
          value={newText}
          onChange={(e) => setNexText(e.target.value)}
        />
        <EditButton onClick={handleEditButtonClick}>Editar</EditButton>
      </EditContainer>

      <DeleteButton onClick={handleDeleteButtonClick}>Deletar</DeleteButton>
    </SidebarContainer>
  );
}
