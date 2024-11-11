import { LinkedList } from "./LinkedList.mjs";

console.log("==LinkedList 생성==");

let list = new LinkedList();

console.log("==insertAt() 호출==");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
console.log("==printAll() 호출==");
list.printAll();

console.log("==clear() 호출==");
list.clear();
list.printAll();

console.log("==insertLast() 호출==");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("==deleteAt() 호출==");
list.deleteAt(1);
list.printAll();

console.log("==deleteLast() 호출==");
list.deleteLast();
list.printAll();
