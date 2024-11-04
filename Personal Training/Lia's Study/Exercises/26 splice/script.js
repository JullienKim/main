const fruits = ["apple", "banana", "kiwi"];
// 1. ['blueberry', 'apple', 'banana', 'kiwi']
fruits.splice(0, 0, "blueberry");
console.log(fruits);
// 2. ['blueberry', 'mango', 'apple', 'banana', 'kiwi']
fruits.splice(1, 0, "mango");
console.log(fruits);
// 3. ['apple', 'blueberry', 'banana', 'kiwi']
fruits.splice(0, 3, "apple", "blueberry");
console.log(fruits);
// 4. ['blueberry', 'banana', 'kiwi']
fruits.splice(0, 1);
console.log(fruits);
// 5. ['blueberry', 'banana', 'kiwi', 'grape']
fruits.splice(3, 0, "grape");
console.log(fruits);
// 6. ['blueberry', 'banana', 'kiwi']
fruits.splice(3, 1);
console.log(fruits);
// 7. ['blueberry', 'banana', 'apple', 'kiwi']
fruits.splice(2, 0, "apple");
console.log(fruits);
// 8. []
fruits.splice(0, 4);
console.log(fruits);
