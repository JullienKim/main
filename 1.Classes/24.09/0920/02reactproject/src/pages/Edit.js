import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  // console.log(params, data);
  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요..")) {
      onDelete(id);
      navigate("/");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    return (
      <div>
        <Header
          leftchild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onCLick={onClickDelete}
            />
          }
        />
      </div>
    );
  }
  // const goToDiary = (e) => {
  //   if (e.target === "value") navigate("/diary");
  //   else {
  //     alert("미가입 회원은 다이어리 리뷰 불가!");
  //     navigate("/home");
  //   }
  // };
  // return (
  //   <div>
  //     Edit Page
  //     {/* <Link to={"/diary"}>다이어리 페이지</Link> */}
  //     {/* <button onClick={goToDiary}>다이어리 페이지</button> */}
  //   </div>
  // );
};

export default Edit;
