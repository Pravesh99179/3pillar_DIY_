//2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
var newtxt=text.replace(/,/g," ")
var str=newtxt.toString()
console.log(str)
console.log(str.length)
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Meat')
console.log(shoppingCart)
//4
shoppingCart.push('Sugar')
console.log(shoppingCart)
//5
shoppingCart.pop()
shoppingCart.splice(3,4)
console.log(shoppingCart)
//6
let a=shoppingCart.indexOf("Tea")
shoppingCart[a]="Green Tea"
console.log(shoppingCart)
//7
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  if((countries.includes('Ethiopia'))== true)
  {
    console.log(countries)
  }
  else{
    countries.push('Ethiopia')
    console.log(countries)
  }
  //8
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if((webTechs.includes('Sass'))== true)
  {
    console.log("Sass is a CSS preprocess")
  }
  else{
    webTechs.push('Saas')
    console.log(webTechs)
  }
//9
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
var fullstack=frontEnd.concat(backEnd)
console.log(fullstack)