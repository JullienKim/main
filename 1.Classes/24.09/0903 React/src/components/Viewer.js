import React, { useState } from "react";

const Viewer = ({number}) => {
  return <div>{number %2 === 0 ? <div>짝수</div> : <div>홀수</div>}</div>
}