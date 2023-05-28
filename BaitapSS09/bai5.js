let rate = +prompt("Nhập vào hệ số lương của bạn");
let basicSalary = +prompt("Nhập lương cơ bản của bạn");
let commission = +prompt("Nhập tỷ lệ hoa hồng");
let basic = (rate+commission)*basicSalary;
document.write("Lương của bạn là ", basic);

