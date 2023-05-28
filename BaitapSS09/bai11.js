// let number1 = parseFloat(prompt("Nhập số thứ nhất:"));
// let number2 = parseFloat(prompt("Nhập số thứ hai:"));
// let number3 = parseFloat(prompt("Nhập số thứ ba:"));

// let maxNumber = (number1 > number2) ? ((number1 > number3) ? number1 : number3) : ((number2 > number3) ? number2 : number3);
// let minNumber = (number1 < number2) ? ((number1 < number3) ? number1 : number3) : ((number2 < number3) ? number2 : number3);

// console.log("Số lớn nhất: " + maxNumber);
// console.log("Số nhỏ nhất: " + minNumber);

let number1 = Number(prompt('Nhập vào giá trị thứ 1:'));
let number2 = Number(prompt('Nhập vào giá trị thứ 2:'));
let number3 = Number(prompt('Nhập vào giá trị thứ 3:'));
let max=number1;
max=(max<number2)?number2:max;
max=(max<number3)?number3:max;
let min=number1;
min=(min<number2)?min:number2;
min=(min<number3)?min:number3;
document.write('Min là: '+min+'<br>');
document.write('Max là: '+max);
