import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./InputForm.styles";
import { add_todo } from "../commons/actions";

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
};

export default InputForm;
