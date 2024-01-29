// console.log(a);


let a = Math.random() *100 
let num1 = parseFloat(prompt("enter a number"))
let sign = prompt("enter the sign")
let num2 = parseFloat(prompt("enter a number"))

// console.log(num1, num2 );

if ( sign === "+" && a < 50 ) {
    console.log(num1 - num2, "=====>",a);
}
else if(sign === "+"){
    console.log(num1 + num2, "=====>",a);
}
else if(sign === "-" && a < 50){
    console.log(num1 + num2, "=====>",a);
}
else if (sign === "-") {
    console.log(num1 - num2, "=====>", a);
}
else if (sign === "/" && a < 50) {
    console.log(num1 * num2, "=====>", a);
}
else if (sign === "/") {
    console.log(num1 / num2, "=====>", a);
}
else if (sign === "*" && a < 50) {
    console.log(num1 % num2, "=====>", a);
}
else if (sign === "*") {
    console.log(num1 * num2, "=====>", a);
}