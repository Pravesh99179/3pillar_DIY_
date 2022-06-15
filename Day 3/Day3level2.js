//Day3 Leve 2
//1
var base= prompt("Enter the base value:");
var height= prompt("Enter the height value:");
var area=0.5*base*height ;
console.log(area)
//2
var a= parseInt(prompt("Enter the value of a:"));
var b= parseInt(prompt("Enter the value of b:"));
var c= parseInt(prompt("Enter the value of c:"));
var parameter=parseInt((a+b)+c)
console.log(parameter)
//3
var length= parseInt(prompt("Enter the value of length:"));
var breadth= parseInt(prompt("Enter the value of breadth:"));
var parameter=parseInt(2*(length+breadth))
console.log(parameter)
//4
var r= parseInt(prompt("Enter the value of radius:"));
var pi= 3.14
var area2=parseInt(pi*r*r)
var circumference=parseInt(2*pi*r)
console.log(area2.toPrecision(2))
console.log(circumference.toPrecision(2))
//5
var str= "y=2x-2"
var arr = str.split(",");
console.log("Slope of given equation is:" + arr[2])
//6
var y1= parseInt(prompt("Enter the value of y1:"))
var y2= parseInt(prompt("Enter the value of y2:"))
var x1= parseInt(prompt("Enter the value of x1:"))
var x2= parseInt(prompt("Enter the value of x2:"))
var slope=parseInt((y2-y1)/(x2-x1))
console.log(slope)
//8
var x=0
var y = x*2 + 6*x + 9
console.log(y)
//9
var hrs=parseInt(prompt("Enter hours:"))
var rphr=parseInt(prompt("Enter rate per hour:"))
var we=parseInt(hrs*rphr)
console.log("Your weekly earning is " + we)
//10
var name=prompt("Enter your Name:")
if(name.length > 7){
    console.log("Your name is long")
}
else{
    console.log("Your name is short")
}
//11
var firstname= prompt("Enter Your First Name:")
var lastname=prompt("Enter Your Last Name:")
if(firstname.length== lastname.length){
    console.log("Your first name"+ firstname+ "is equal to your family name,"+ lastname)
}
else if(firstname.length > lastname.length)
{
    console.log("Your first name"+ firstname+ "is longer than your family name,"+ lastname)
}
else
{
    console.log("Your first name"+ firstname+ "is smaller than your family name,"+ lastname)
}
//12
var myAge=250
var yourAge=25
var sum1=parseInt(myAge-yourAge)
console.log("I am "+ sum1 + "years older than you.")
//13
var cy=2022
var by=parseInt(prompt(("Enter birth year:")))
var na=parseInt((cy-by))
if(na > 18 ){
console.log("You are " + na + "You are old enough to drive")
}
else{
    var diff=parseInt(18-na)
    console.log("You are " + na + "You will be allowed to drive after"+ diff+ "years")
} 
//14
var years=parseInt(prompt('Enter the years:'))
var ans=parseInt(years*31556952)
console.log(ans)
//15
const timestamp = 1301090400;
const date2 = new Date(timestamp * 1000);
const datevalues = [
   date2.getFullYear(),
   date2.getMonth()+1,
   date2.getDate(),
   date2.getHours(),
   date2.getMinutes(),
];
console.log(datevalues)
const datevalues2 = [
   date2.getDate(),
   date2.getMonth()+1,
   date2.getFullYear(),
   date2.getHours(),
   date2.getMinutes(),
];
console.log(datevalues2)