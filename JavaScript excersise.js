// 1 :
/*
var a = 1,
b = 2,
tmp;
tmp = a;
a = b;
b = tmp;

console.log("a=", a);
console.log("b=", b);

*/

// 2 :
/*
---------------------------------------------------------

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0)
    console.log("even :", i);

    else
        console.log("odd :", i);
}

*/

// 3 :
/*
---------------------------------------------------------

function x(n) {
    let z = 1;
    while (n > 1) {
        z *= n;
        n--;
    }
    return z;
}
console.log(x(5));

*/

// 4 :
/*
---------------------------------------------------------


function check(word) {
    var l = word.length;
    for (var i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (check("12221")) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}
*/

// 5 :
/*
---------------------------------------------------------
let a = [22, 65, 1, 39];
let i;
let max = a[0];

for (i = 1; i < a.length; i++) {
    if (a[i] > max)
        max = a[i];
}

console.log(max);


*/

//6 :
/*
-------------------------------
function x(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return x(num - 1) + x(num - 2);
}
console.log("x(5): " + x(5));
console.log("x(8): " + x(8));


*/


// 7 :

// let n = 12345;
// let val = 0;

// while (n > 0) {
//     val += n % 10;
//     n = Math.floor(n / 10);
// }

// console.log(val);


// 9:

/*
let str = "my name abdulrhman";


console.log(str.split("").reverse().join());

// from string ---> array ---> reverse array ---> and then to string :)
*/


// 10 :
/*
---------------------------------------------------------

function x(n) {
    let z = 1;
    while (n > 1) {
        z *= n;
        n--;
    }
    return z;
}
console.log(x(5));

*/

// 11 :
/*
let a = 12, b = 8;
let gcd;

for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}
console.log("GCD of ", a, "and", b, "is", gcd);
*/


// 12 :
/*
let x = 28;
let total = 0;
for (let i = 1; i <= x; i++) {

if (x % i === 0 && total !== x) {
    total += i
    console.log(i);
}
}
console.log("the final number :", total);

*/


// 13 :

// function lcm(a, b) {
//     let x = Math.max(a, b);
//     while (true) {
//         if (x % a === 0 && x % b === 0)
//             return x
//         x++;
//     }
// }

// console.log(lcm(4, 6));


// 14 :

// let a = [10, 20, 20, 30, 40, 50, 50];

// let s = new Set(a);

// let a1 = [...s]

// console.log(a1);

// 15 :

// let array = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log("The sum is: " + sum);

// 16:

// const a = [22, 65, 1, 39];
// console.log(Math.max(...a));

// 17 :

// const a = [22, 65, 1, 39];
// console.log(Math.min(...a));

// 18 :

// let x = [1, 2, 4, 6, 7, 6];
// let z = [1, 2, 9, 0, 8];

// let a = x.filter((num) => z.includes(num));

// console.log(a);

// 19 :

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 90, 9, 3, 2];
// let x = {};

// for (let i = 0; i < array.length; i++) {
//     if (!x[array[i]]) {
//         x[array[i]] = 1
//     }
//     else {
//         x[array[i]] += 1
//     }
// }

// console.log(x);


// 20 :

// let arrays = [10, 20, 30];
// let num = 30;

// let index = arrays.indexOf(num)

// console.log("index element 30 is : ", index);


// 21 :

// let num = [3, 2, 1];

// num.sort();

// console.log(num)

// 22 :

// let x = "abdulrhman";

// let y = Array.from(x);

// console.log(y);

// 23 :


// let x = ['a', 'b', 'd', 'u', 'l', 'r', 'h', 'm', 'a', 'n'];

// let y = x.toString();
// y = x.join("");

// console.log(y);

// 24  :

// let name = "abdulrhman";

// console.log(name.length);


// 25 :

// let name = "abdulrhman";
// let upper = name.toUpperCase();

// console.log(upper)

// 26  :

// let name = "ABDULRHMAN";
// let lower = name.toLowerCase();

// console.log(lower)


// // 27 :

// let x = "hi im abdulrhman ";

// let z = x.includes("im");

// console.log(z);

// // the output print bool true or flase :)


// // 28 :

// let s = "  hi im  abdulrhman    ";
// let x = s.replaceAll(" ", "", "    ", "   ");
// console.log(x);

// 29 :

// let x = "Abdulrhman";

// console.log(x[0]);


// 30 :


// let s = 'hi im  abdulrhman';
// let x = 'im';
// if (s.indexOf(x) === 0) {
//     console.log("The string starts with", x);
// } else {
//     console.log("The string not start with ", x);
// }


// 31 :

// let name = "hi im  abdulrhman";
// let x = name.slice(1, 5);

// console.log(x);


// 34 :
// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let x = rand(1, 6); // random number form 1 to 6 :)
// console.log(x);



// 35 :

// let a = '' + 50;
// console.log(typeof(a));
// console.log(a);

// 36 :

// let x = "1234";
// let num = 0;

// for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);

// }

// console.log(typeof num);

// 37  :

// let now = new Date();
// let hours = now.getHours();
// let minutes = now.getMinutes();
// let seconds = now.getSeconds();

// console.log(`Current Time: ${hours}:${minutes}:${seconds}`);


// //38 :
// let now = new Date();

// let h = now.getHours();
// let m = now.getMinutes();
// let s = now.getSeconds();

// function checkTime(i) {
//     if (i < 10) {
//         return "0" + i;
//     } else {
//         return i;
//     }
// }

// h = checkTime(h);
// m = checkTime(m);
// s = checkTime(s);

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];

// let x = `Printed on ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} at ${h}:${m}:${s}`;

// console.log(x);


// 39 :

// function x(a, obj) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === obj) {
//             return true;
//         }
//     }
//     return false;
// }

// console.lox;;vs

// 40 :

// let arr = [10, 20, 30, 40];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         count++;
//     }
// }

// console.log(count);

