import React from "react";
// import Header from "../component/Header";
// import Button from "../component/Button";
import Editor from "../component/Editor";
// import { useSearchParams } from "react-router-dom";

const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("sort"));
  return (
    <div>
      {/* <Button
        title="기본버튼"
        onClick={() => {
          alert("hi");
        }}
      />
      <Button
        title="긍정버튼"
        type="positive"
        onClick={() => {
          alert("hi");
        }}
      />
      <Button
        title="부정버튼"
        type="negative"
        onClick={() => {
          alert("hi");
        }}
      /> */}
      {/* <Header
        title="Home"
        leftChild={
          <Button
            text="긍정버튼"
            onClick={() => {
              alert("positive button");
            }}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            onClick={() => {
              alert("negative button");
            }}
          />
        }
      /> */}
      <Editor onSubmit={() => alert("작성완료!")} />
    </div>
  );
};

export default Home;
