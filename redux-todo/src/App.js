import React from "react";
import { Provider } from "react-redux";
import store from "./commons/store";
import * as S from "./App.styles";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <S.Container>
        <S.Wrapper>
          <h1>Redux로 배우는 Todo List</h1>
          <InputForm />
          <TodoList />
        </S.Wrapper>
      </S.Container>
    </Provider>
  );
}

export default App;
