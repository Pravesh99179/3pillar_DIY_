//1
var firstname= "Pravesh"
var lastName= 'Agrawal'
var country= "India"
var city= "Greater Noida"
var age= "19"
var isMarried="No"
var year="2001"
console.log(typeof(firstname))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))
//2
let num1="10"
let num2= 10
console.log(typeof(num1)==typeof(num2))
//3
let a="9.8"
let b=parseInt(a)
console.log(b)
//4
let challenge= "30 days of JavaScript"
console.log(challenge.includes('Script'))
console.log(challenge.includes('30'))
console.log(challenge.includes('Java'))
let int1="10"
let int2="10"
console.log(typeof(int1)==typeof(int2))
console.log(challenge.includes('Python'))
let int3="10"
let int4="10"
console.log(typeof(int3)==typeof(int4))
console.log(challenge.includes('gg'))
//5
console.log(4>3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
let var1="python 12"
let var2="jargon 1234"
console.log(var1.length == var2.length)
//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let var3="python"
let var4="jargon"
console.log(var3.includes("on"))
console.log(var4.includes("on"))
//7
var date=new Date()
console.log("Today's day: "+date.getDate());  
console.log("Month: "+date.getMonth()); 
console.log("Time: "+date.getTime()); 
console.log("Year: "+date.getFullYear()); 
console.log("Seconds: "+date.getSeconds());
console.log("Minutes: "+date.getMinutes());
console.log("Hours: "+date.getHours());   
