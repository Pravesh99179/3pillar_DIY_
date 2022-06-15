//Day 2 Exercise Level 2
//1
var str= 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(str)
//2
var str2= "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(str2)
//3
let a="10"
let b= 10
console.log(typeof(a)==typeof(b))
//4
let c= parseFloat("9.8")
console.log(c)
//5
let str1="python"
let str3="jargon"
console.log(str1.includes("on"))
console.log(str3.includes("on"))
//6
let str4= "I hope this course is not full of jargon"
console.log(str4.includes("jargon"))
//7
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(1,100))
//8
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(50,100))
//9
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(0,255))
//10
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
let str5="JavaScript"
let gg= str5.length
let gg2=console.log(getRandomInt(0,gg))
console.log(str5.charAt(gg2))
//11
let str6="1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n"
console.log(str6)
//12
let gg3= 'You cannot end a sentence with because because because is a conjunction'
let start=gg3.indexOf("because")
let end= gg3.lastIndexOf("because")
console.log(gg3.substring(start,end))
