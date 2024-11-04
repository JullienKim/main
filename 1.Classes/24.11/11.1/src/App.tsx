import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import DraggableCard from "./components/DraggableCard";
import Board from "./components/Board";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    background: ${(props) => props.theme.bgColor};
    color:#000;
  }
`;

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid #ccc; */
  margin: 0 auto;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;

// const toDos = ["a", "b", "c"];

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if(!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // setToDos((oldToDos) => {
      //   const boardCopy = [...OldToDos[source.droppableId]];
      //   boardCopy.splice(source.index, 1);
      //   boardCopy.splice(destination.index, 1);
      // });
      setToDos((oldToDos) => {
         const sourceboard=[...oldToDos[source.droppableId]];
        const destinationBoard = [...oldToDos[destination?.droppableId]]
        sourceboard
        return {
          ...oldTodo,
          [source.droppableId]:,
          [destination?.droppableId]
        };
      });
    }
    // const onDragEnd = (info: DropResult) => {
    // console.log(info);
    // console.log(destination, source, draggableId);
    // if (!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   copyToDos.splice(source.index, 1);
    //   copyToDos.splice(destination.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} toDos={boardId} boardId={boardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
      {/* <div>App</div> */}
    </>
  );
};

export default App;
