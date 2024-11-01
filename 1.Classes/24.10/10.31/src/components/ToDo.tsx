import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  gap: 5px;
`;

const ButtonGroup = styled.span`
  display: flex;
  gap: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
`;

// [
//   { id: 1730427234683, text: "jjj", category: "TODO" },
//   { id: 1730427231291, text: "iii", category: "TODO" },
//   { id: 1730427218325, text: "hhh'", category: "TODO" },
// ];

const food = ["pizza", "mango", "kimchi", "kimbab"];

const target = 1;
// const front = food.slice(0, 1);
// const back = food.slice(target + 1);
// const final = [...food.slice(0, target), "gam", ...food.slice(target + 1)];

const ToDo = ({ id, text, category }: IToDo) => {
  // const onClick = (newCategory: IToDo["category"]) => {
  //   console.log("Moving to", newCategory);
  // };
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("Moving to", ev.currentTarget.name);
    const {
      currentTarget: { name },
    } = ev;
    // console.log(name);
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // const oldToDo = oldToDos[targetIndex];
      const newToDo = { id, text, category: name as any };
      // console.log(targetIndex);
      // console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Container>
      <span>{text}</span>
      <ButtonGroup>
        {category !== Categories.TODO && (
          <Button name={Categories.TODO} onClick={onClick}>
            ToDo
          </Button>
        )}
        {category !== Categories.DOING && (
          <Button name={Categories.DOING} onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== Categories.DONE && (
          <Button name={Categories.DONE} onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </Container>
  );
};

export default ToDo;
