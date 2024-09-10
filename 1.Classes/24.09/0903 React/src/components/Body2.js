import React from "react";

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = () => {};
  const onChangeGender = () => {};
  const onChangeBirth = () => {};
  const onChangeBio = () => {};

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
      </div>
      <div>
        <select onCHange={onChangeGender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <textarea onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Body;
