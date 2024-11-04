import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrappper = styled.div`
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

interface BowardProps {
  toDos: string;
  boardId: string;
}

const Board = () => {
  return (
    <>
      <Title>{boardId}</Title>
      <Droppable droppableId="one">
        {(magic) => (
          <Board ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Board>
        )}
      </Droppable>
    </>
  );
};

export default Board;
