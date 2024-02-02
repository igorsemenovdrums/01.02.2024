
// 1 -------------------------------------------------------

let num = +prompt("Enter integer from 1 to 50:");
let counter = 1;
let result = 1;

if (num >= 1 && num <= 50) {

    while (counter <= num) {
        result *= counter;
        counter++;
    }

   alert("The factorial of "+num+" is "+result);

}

else {
    alert("Incorrect input");
}

// 2 --------------------------------------------------------

let n = +prompt("Enter integer from 1 to 50:");
let r = 1;

if (n >= 1 && n <= 50) {

    for (let c = 1; c <= n; c++) {

         r *= c;

    }

    alert("The factorial of "+n+" is "+r);

}

else {
    alert("Incorrect input");
} 

// 3 ---------------------------------------------------------

let x = +prompt("Enter integer from 1 to 50:");
let y = 1;
let z = 1;

if (x >= 1 && x <= 50) {

    do {
        z *= y;
        y++;
    } while (y <= x);

    alert("The factorial of "+x+" is "+z);

}

else {
    alert("Incorrect input");
}