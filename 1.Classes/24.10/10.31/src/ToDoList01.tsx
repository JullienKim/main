// import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Form {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  passWord1: string;
  passWord2: string;
}
// Object.keys(temp1).join()
// Object.values(temp1).map(v=> typeOf v).join
// shift+alt+i

const ToDoList = () => {
  // const [toDo, setToDo] = useState("");
  // const [toDoError, setToDoError] = useState("");
  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   // console.log(toDo);
  //   e.preventDefault();
  //   if (toDo.length < 10) {
  //     return setToDoError("TODO is too short...");
  //   }
  // };
  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   // console.log(e);
  //   const {
  //     currentTarget: { value },
  //   } = e;
  //   setToDoError("");
  //   setToDo(value);
  // };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<Form>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // console.log(register("toDo"));
  console.log(watch());
  const onValid = (data: Form) => {
    // console.log(data);
    if (data.passWord1 !== data.passWord2) {
      setError(
        "passWord2",
        { message: "Password is not the same." },
        { shouldFocus: true }
      );
    }
    setValue("userName");
    // setError("extraError",{message:nowLoading})
  };
  // console.log(formState.errors);
  // console.log(errors);
  return (
    // <Container>
    //   <form onSubmit={onSubmit}>
    //     <input
    //       onChange={onChange}
    //       type="text"
    //       value={toDo}
    //       placeholder="Write Todo"
    //     />
    //     <input type="submit" value={"ADD"} />
    //     {toDoError !== "" ? toDoError : null}
    //   </form>
    // </Container>
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9]+@naver.com/g,
              message: "Only @naver.com is allowed",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("firstName", {
            required: "Write Here",
            validate: (value) =>
              value.includes("test") ? "No test allowed" : true,
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message as string}</span>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message as string}</span>
        <input
          {...register("userName", { required: true, minLength: 10 })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.userName?.message as string}</span>
        <input
          {...register("passWord1", {
            required: "password is a must.",
            minLength: {
              value: 5,
              message: "Please create a password with more than 4 letters.",
            },
          })}
          type="text"
          placeholder="Password1"
        />
        <span>{errors?.passWord1?.message as string}</span>
        <input
          {...register("passWord2", { required: true, minLength: 5 })}
          type="text"
          placeholder="Password2"
        />
        <span>{errors?.passWord2?.message as string}</span>
        <input type="submit" value={"ADD"} />
        <span>{errors?.extraError?.message as string}</span>
      </Form>
    </Container>
  );
};

export default ToDoList;
