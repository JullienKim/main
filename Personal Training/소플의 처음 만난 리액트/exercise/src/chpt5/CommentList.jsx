import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김지선",
    comment: "힝구. 할루할룽",
  },
  {
    name: "최문주",
    comment: "ㅎㅅㅎ...",
  },
  {
    name: "유재석",
    comment: "국민mc, 유느님",
  },
];

function CommentList() {
  return (
    <div>
      {/* <Comment name={"김지선"} comment={"힝구. 할루할룽"} />
      <Comment name={"유재석"} comment={"국민mc. 유느님"} /> */}
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
