const form = document.querySelector("form");
const todoItem = document.querySelector("#todoItem");
const todos = document.querySelector(".todos");
// console.log(form, todoItem, todos);
const getLocal = () => {
  let todosContainer;

  if (localStorage.getItem("todos") === null) todosContainer = [];
  else todosContainer = JSON.parse(localStorage.getItem("todos"));

  // console.log(todosContainer);

  todosContainer.forEach((todo) => {
    const newLi = document.createElement("li");
    newLi.classList.add("todo");

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent"; //classList.add보다 뒤에나온 문법
    newSpan.innerText = todo;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.appendChild(newSpan, completeBtn, deleteBtn);
    todos.appendChild(newLi);
    todoItem.value = "";
  });
};

document.addEventListener("DOMContentLoaded", getLocal);

const saveLocal = (todo) => {
  let todos;

  if (localStorage.getItem("todos") === null) todos = [];
  else todos = JSON.parse(localStorage.getItem("todos"));

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  // console.log("submit");
  if (todoItem !== "") {
    const newLi = document.createElement("li");
    newLi.classList.add("todo");

    const newSpan = document.createElement("span");
    newSpan.className = "todoContent"; //classList.add보다 뒤에나온 문법
    newSpan.innerText = todoItem.value;

    const completeBtn = document.createElement("button");
    completeBtn.className = "completeBtn";
    completeBtn.innerText = "완료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "삭제";

    newLi.appendChild(newSpan, completeBtn, deleteBtn);
    saveLocal(todoItem.value);
    todos.appendChild(newLi);
    todoItem.value = "";
  }
};

const removeLocal = (todo) => {
  let todosItem;
  if (localStorage.getItem("todos") === null) todosItem = [];
  else todosItem = JSON.parse(localStorage.getItem("todos"));
  // console.log(todo);
  const index = todosItem.indexOf(todo.children[0].innerText);
  todosItem.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todosItem));
  // console.log(index);
};

const manageTodo = (e) => {
  // console.log(e.target.classList);
  const whichButton = e.target.classList[0];
  if (whichButton === "completeBtn") {
    const todoItem = e.target.parentElement;
    todoItem.children[0].classList.toggle("completed");
  } else if (whichButton === "deleteBtn") {
    const todoItem = e.target.parentElement;
    removeLocal(todoItem);
    todoItem.remove();
  }
};

todos.addEventListener("click", manageTodo);
//standard way
// form.addEventListener("submit", (e) => {
//   addTodo(e);
// });
// simplified way
form.addEventListener("submit", addTodo);
