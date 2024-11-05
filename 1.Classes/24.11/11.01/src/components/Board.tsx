import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ToDo, toDoState } from "../atoms";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 10px;
`;

interface AreaProps {
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Area = styled.div`
  /* background: dodgerblue; */
  background: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "crimson"
      : "dodgerblue"};
  padding: 10px;
  border-radius: 8px;
  transition: background 0.3s;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

interface BoardProps {
  toDos: string[];
  boardId: string;
}

interface FormProps {
  toDo: string;
}

const Board = ({ toDos, boardId }: BoardProps) => {
  // const form = useForm();
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<FormProps>();
  // const onValid = (data: FormProps) => {
  const onValid = ({ toDo }: FormProps) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };

    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });

    // console.log(data);
    setValue("toDo", "");
  };
  // console.log(form);
  // const inputRef = useRef<HTMLInputElement>();
  // console.log(inputRef);
  // const onClick = () => {
  //   inputRef.current?.focus();
  //   setTimeout(() => {
  //     inputRef.current?.blur();
  //   }. 5000);
  // };
  return (
    <Wrapper>
      {/* <input ref={inputRef} type="text" placeholder="Please..." />
      <button onClick={onClick}>Click</button> */}
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add a Task In ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingfromThis={snapshot.draggingFromThisWith}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                toDoText={toDo.text}
                index={index}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
};

export default Board;
