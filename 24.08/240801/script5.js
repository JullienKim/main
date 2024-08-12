// 1,3,5,7,9,11,13,14,17,19 중에서 10보다 큰 숫자만 콘솔창에 나타나도록 해주세요!

const numbers = [1,3,5,7,9,11,13,14,17,19]

function more10() {
  for(let i = 5; i < numbers.length; i++){
    console.log(numbers[i])
  }
}