import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
// import Button1 from "./Button1";
import { getFormattedDate, emotionList } from "../pages/util";
import EmotionItem from "./EmotionItem";

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 22px;
  }
`;

// const Title = styled.h4``;

const Textarea = styled.textarea`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  width: 100%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 10px 20px;
  font-size: 20px;
  font-family: "Nanum Pen Script", cursive;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });

  const handleChangeDate = (e) => {
    setState({ ...state, date: e.target.value });
  };

  const handleChangeContent = (e) => {
    setState({ ...state, content: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <Input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <EmotionGroup>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </EmotionGroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <Textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          ></Textarea>
        </div>
      </EditorSection>
      <EditorSection>
        <ButtonGroup>
          <Button text={"취소하기"} onClick={handleGoBack} />
          <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </ButtonGroup>
      </EditorSection>
    </div>
  );
};

export default Editor;
