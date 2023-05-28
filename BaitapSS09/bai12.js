let number = parseInt(prompt("Nhập số:"));
let remainder = (number % 4 === 0) ? 0 : (number % 4 === 1) ? 1 : (number % 4 === 2)? 2: 3;
console.log("Số dư khi chia cho 4 là: " + remainder);
