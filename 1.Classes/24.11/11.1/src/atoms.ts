import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  // default: ["a", "b", "c", "d"],
  default: {
    todo: ["a", "b", "c"],
    doing: ["d"],
    done: ["e", "f"],
  },
});
