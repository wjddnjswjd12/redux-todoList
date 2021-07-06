import React from "react";
import { useDispatch } from "react-redux";

import * as S from "./TodoItem.styles";

import { delete_todo } from "../commons/actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, isComplete } = todo;

  const handleClick = () => {
    dispatch(delete_todo(id));
  };

  return (
    <S.Container>
      <S.TextColumn>
        <div>
          <S.Text>{title}</S.Text>
          <S.X onClick={handleClick}>{isComplete || "X"}</S.X>
        </div>
      </S.TextColumn>
    </S.Container>
  );
};

export default TodoItem;
