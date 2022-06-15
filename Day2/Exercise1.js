//Day 2 Exercises Level 1
//1
let challenge = '30 Days Of JavaScript'
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toLowerCase())
//6
console.log(challenge.substr(0,7))
//7
console.log(challenge.substr(3,22))
//8
console.log(challenge.includes('Script'))
//9
const arr=challenge.split(" ")
console.log(arr[0,3])
//10
console.log(arr)
//11
let s='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const arr2= s.split(",")
console.log(arr2)
//12
let result= challenge.replace("JavaScript", "Python")
console.log(result)
//13
let result2= challenge.charAt(15)
console.log(result2)
//14
console.log(challenge.charCodeAt("J"))
//15
console.log(s.indexOf("a"))
//16
console.log(s.lastIndexOf("a"))
//17
let result3= challenge.indexOf('because')
console.log(result3)
//18
let sentence= 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))
//19
console.log(sentence.search('because'))
//20
console.log(challenge.trim())
//21
console.log(challenge.startsWith('30'))
//22
console.log(challenge.endsWith('JavaScript'))
//23
console.log(challenge.match('a'))
//24
let str1="30 days of"
let str2= "JavaScript"
console.log(str1.concat(str2))
//25
console.log(challenge.repeat(2))