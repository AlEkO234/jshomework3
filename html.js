
let numbers2 = [10, 50, 6, 7, 8, 11, 6, 3, 9]


function B(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];

    }

    return sum;
}

let result = B(numbers2);

console.log(result)



//2 

let numbers3 = [2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8];

function positiveNumbers(arr) {

    let positiveNumbersArray = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= 0) {
            positiveNumbersArray.push(arr[i])

        }
    }
    return positiveNumbersArray



}


let positiveresultnumbers = positiveNumbers(numbers3)

console.log(positiveresultnumbers)

//N3
let user = {
    firstname: "tom",
    lastname: "tobias",
    age: 32,
    isloggedin: true
}

function log() {
    if (user.isloggedin == true) {
        console.log(user.firstname, user.lastname)
    }
    else {
        console.log("false")
    }
}
log()

//N4

let array2 = [3, -2, 5, -7,]

function maximum(number) {
    for (i = 0; i < number.length; i++) {
        if (number[i] > number.length) {
            console.log(number[i]);
        }
    }
}
maximum(array2)


//N5

function luwkenta(sss) {
    sss = 33

    if (sss % 1 === 1) {
        console.log("this number is odd");
    }
    else {
        console.log("this number is even");
    }
}
luwkenta()

//N6\

let array33 = [1, 2, 3, 4, 5];

let reverse = [];

for (let i = array33.length - 1; i >= 0; i--) {
    reverse.push(array33[i]);
}

console.log(reverse);



//N7

function userAge() {
    age = 22;
    if (age >= 18) {
        console.log("სრულწლოვანი");
    }
    else {
        console.log("არასრულწლოვანი");
    }
}
age()


//N8

function bolo(num1, num2) {
    num1 = 9
    num2 = 23

    if (num1 > num2) {
        console.log("num1 is the largest")
    }
    else if (num1 < num2) {
        console.log("num2 is the largest")
    }
    else {
        console.log("error")
    }
}
bolo()