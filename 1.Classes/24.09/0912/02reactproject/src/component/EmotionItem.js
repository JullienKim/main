import React from "react";

const EmotionItem = ({ id, name, img, onClick, isSelected }) => {
  const handleOnClick = () => {};
  // console.log(props);
  return (
    <div onClick={handleOnClick}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  );
};

export default EmotionItem;
