import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import * as S from "./TodoList.styles";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <S.Container>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </S.Container>
  );
};

export default TodoList;
