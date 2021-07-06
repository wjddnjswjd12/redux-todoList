import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputForm.styles";
import { add_todo } from "../commons/actions";

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    const todo = { title: text, isComplete: false };

    dispatch(add_todo(todo));
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <S.Container>
      <S.InputBox
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      ></S.InputBox>
      <S.Button>추가하기</S.Button>
    </S.Container>
  );
};

export default InputForm;
