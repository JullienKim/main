import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate, setPageTitle } from "../util";

const Diary = () => {
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
    setPageTitle(`${idSetting} Diary`);
  }, []);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const goBack = () => {
      navigate(-1);
    };

    const goEdit = () => {
      navigate(`/edit/${id}`);
    };
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
