//1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while-loop
let a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
//2
let i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)
//3
for (let i = 10; i <= 10; i--) {
    console.log(i);
}
//4
let b = 10;
do {
    b--;
    console.log(b)
} while (b > 0)

let n = Number(prompt("enter number"));
for (let c = 0; c <= n; c++) {
    console.log(c);
}
//5
let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}
//6
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}
//7
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}
//8
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//9
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}
//10
for (let i = 0; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0 && i > 1) {
            console.log(i)
        }
    }
}
//11
let SUM = 0;
for (let i = 0; i <= 100; i++) {
    SUM =SUM + i;
}
console.log(SUM)
//12
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
    {
        even += i;
    } 
    else if (i % 2 > 0) 
    {
        odd = odd + i;
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)
//13
let sumEvenOdd = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEvenOdd[0] += i;
    } else if (i % 2 > 0) {
        sumEvenOdd[1] += i;
    }
}
console.log(sumEvenOdd)
//14
let Arr = [];
for (let i = 0; i < 5; i++) {
    Arr.push(Math.floor(Math.random() * 10));
}
console.log(Arr)
//15
let UniqueArr = [];
for (let i = 5; UniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (UniqueArr.indexOf(random) === -1) {
        UniqueArr.push(random);
    }
}
console.log(UniqueArr)

