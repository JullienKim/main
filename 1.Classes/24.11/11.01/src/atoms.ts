import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  // default: ["a", "b", "c", "d"],
  default: {
    todo: [
      { id: 1, text: "Hello" },
      { id: 2, text: "World" },
    ],
    doing: [],
    done: [],
  },
});
