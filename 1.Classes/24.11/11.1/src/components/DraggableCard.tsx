import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  /* width: 480px; */
  background: ${(props) => props.theme.cardColor};
  border-radius: 8px;
  padding: 10px;
`;

interface DraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: DraggableCardProps) => {
  console.log(toDo);
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          one
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
