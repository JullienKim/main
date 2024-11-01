import { atom, selector } from "recoil";

export enum Categories {
  "TODO",
  "DOING",
  "DONE",
}

// type categories = "TODO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TODO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    // if (category === "TODO") {
    //   return toDos.filter((toDo) => toDo.category === "TODO");
    // }
    // if (category === "DOING") {
    //   return toDos.filter((toDo) => toDo.category === "DOING");
    // }
    // if (category === "DONE") {
    //   return toDos.filter((toDo) => toDo.category === "DONE");
    // }
  },
});
