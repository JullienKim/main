import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { categoryState, toDoSelector, Categories } from "../atoms";
import React from "react";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ToDoList = () => {
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);\
  // const [value, modFn] = useRecoilState(toDoState);
  // const toDos = useRecoilValue(toDoState);
  // console.log(selectorOutput);
  // console.log(toDos);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
    // console.log(category);
  };
  return (
    <Container>
      <Title>ToDo List</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TODO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDoItem) => (
        <ToDo key={toDoItem.id} {...toDoItem} />
      ))}

      {/* <CreateToDo />
      <h3>TODO</h3>
      <ul>

        {toDos.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h3>DOING</h3>
      <ul>

        {toDos.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <h3>DONE</h3>
      <ul>
        //<li>리액트 복습하기</li>
        //<li>스타벅스 가서 커피한잔</li>
        {toDos.map((toDo) => (
          // <li key={toDo.id}>{toDo.text}</li>
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul> */}
    </Container>
  );
};

export default ToDoList;
