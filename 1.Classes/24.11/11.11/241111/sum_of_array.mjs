const arr = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  if (arr.length === 1 || arr.length === 0) {
    return 1;
  } else {
    return sumArray();
  }
};

console.log(sumArray);