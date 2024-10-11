import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import useDiary from "../hooks/useDiary";
import { setPageTitle } from "../util";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);

  useEffect(() => {
    let idSetting;
    const lastDigit = id % 10;
    const secondLastDigit = Math.floor((id % 100) / 10);
    if (lastDigit == 1 && secondLastDigit !== 1) {
      idSetting = `${id}st`;
    } else if (lastDigit == 2 && secondLastDigit !== 1) {
      idSetting = `${id}nd`;
    } else if (lastDigit == 3 && secondLastDigit !== 1) {
      idSetting = `${id}rd`;
    } else {
      idSetting = `${id}th`;
    }
    setPageTitle(`Edit ${idSetting} Diary`);
  }, []);
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
